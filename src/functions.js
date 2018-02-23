const data = require("./data.js");

module.exports = {
  sportsFormat: () => {
    console.log("data", data);
    let sportsArr = data.map(sports => {
      sports;
    });
    return sportsArr;
  },
  confirmLength: () => {
    let length = data.length;
    return length;
  }
};
