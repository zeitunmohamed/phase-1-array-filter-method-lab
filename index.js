// 1. findMatching: Returns all drivers that match the passed-in name (case-insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// 2. fuzzyMatch: Returns drivers whose names start with the provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

// 3. matchName: Returns drivers whose `name` property matches the provided name
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

// Export all functions
module.exports = { findMatching, fuzzyMatch, matchName };