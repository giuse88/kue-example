var kue = require("kue");
var queue = kue.createQueue();

const QUEUE_NAME = "counter";

var limit = process.argv[2] || 1000000;

var options = {
  title: "Counter job",
  limit: limit
};

var job = queue
  .create(QUEUE_NAME, options)
  .save(onSave);

function onSave (err) {
  if (!err) {
    console.log("Added job " + job.id);
    process.exit(0);
  } else {
    console.log("Failed adding job " + job.id);
    process.exit(-1);
  }
}

