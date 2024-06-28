
// Define the HQ location
const hq =   42;

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(street) {
  return Math.abs(street - hq);
}



// Function to calculate distance travelled in feet
   function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
  }

// Exporting the functions for testing
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};
