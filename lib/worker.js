var kue = require("kue");
var queue = kue.createQueue();

function counter(limit, done) {
  console.log("Starting counting to "+ limit +"...");
  if ( limit < 0 ) {
    console.error("Invalid limit", limit);
    throw new Error("Limit was a negative value");
  }
  for (var i = 0; i < limit; i++);
  console.log("Count finished");
  done();
}

queue.process("counter", (job, done) => counter(job.data.limit, done));
