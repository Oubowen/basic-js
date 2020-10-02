const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample() {
  if (typeof sampleActivity === 'string' && parseFloat(sampleActivity) < 15 && parseFloat(sampleActivity) > 0) {
    let numberActivity = parseFloat(sampleActivity);
    let age = Math.ceil(Math.log(MODERN_ACTIVITY / numberActivity) / (0.693 / HALF_LIFE_PERIOD))
    return age;
  } else {
    return false;
  }
};