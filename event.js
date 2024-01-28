const fs = require("fs");
const events = require("events");

// var rs = fs.createReadStream("./append.txt");

// rs.on("open", () => {
//     console.log("file open..");
// });

var eventEmitter = new events.EventEmitter();

function myEventHandeller() {
    console.log("I heare a sceram");
}

eventEmitter.on("scream", myEventHandeller);

eventEmitter.emit("scream");
