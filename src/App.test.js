
// THIS CONSTANT IS TO TEST THE DATA //
const functions = require("./functions.js");



// DATA TESTING //
describe(`Sports information`, () => {
  test(`expect data format to be an array`, () => {
    let result = functions.sportsFormat();
    expect(Array.isArray(result));
  });
  test(`Length of data array should be 8`, () => {
    let result = functions.confirmLength();
    expect(result).toEqual(8);
  });
});


