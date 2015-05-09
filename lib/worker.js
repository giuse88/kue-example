var kue = require("kue");
var queue = kue.createQueue();
var globalValue = 1;

function counter(limit, done) {
  console.log("This is a global value: " + globalValue);
  console.log("Starting counting to " + limit + "...");
  if ( limit < 0 ) {
    console.error("Invalid limit", limit);
    throw new Error("Limit was a negative value");
  }
  for (var i = 0; i < limit; i++);
  console.log("Count finished");
  globalValue++;
  done();
}

queue.process("counter", (job, done) => counter(job.data.limit, done));
