function minimumPlanesNeeded(airportFuel) {
  const N = airportFuel.length; // Total number of airports

  // Create an array to store the minimum number of planes needed to reach each airport
  const minPlanes = new Array(N).fill(Infinity);

  // Base case: We can reach the first airport with 0 planes
  minPlanes[0] = 0;

  // Traverse through each airport
  for (let i = 0; i < N; i++) {
    // Check if we can reach the current airport with the available planes
    if (minPlanes[i] !== Infinity) {
      const fuel = airportFuel[i]; // Units of fuel available at the current airport

      // Try to fly to the next airports with the available fuel
      for (let j = i + 1; j <= i + fuel && j < N; j++) {
        // Update the minimum planes needed to reach the next airport
        minPlanes[j] = Math.min(minPlanes[j], minPlanes[i] + 1);
      }
    }
  }

  // Check if it is possible to reach the last airport
  if (minPlanes[N - 1] === Infinity) {
    return -1; // Not possible to reach the last airport
  } else {
    return minPlanes[N - 1]; // Return the minimum planes needed to reach the last airport
  }
}

// Example usage:
// const fuelArray = [1,6,3,4,5,0,0,0,6];
const fuelArray = [2,1,2,3,1];
const result = minimumPlanesNeeded(fuelArray);
console.log(result); // Output: 3 & 2 resp.