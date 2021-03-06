const moment = require("moment");

let log = (message, color, print = true) => {
  var colors = {
    error: "\033[91m",
    success: "\033[92m",
    info: "\033[96m",
    debug: "\033[95m",
    yellow: "\033[93m",
    lightpurple: "\033[94m",
    lightgray: "\033[97m",
    reset: "\033[00m"
  };

  var msg = "";

  if (color) {
    msg += colors[color] + message + colors["reset"];
  } else {
    msg = message;
  }

  if (print) {
    console.log(`[${moment().format("hh:mm:ss:SSS")}] ${msg}\r`);
  }
};

module.exports = log;
