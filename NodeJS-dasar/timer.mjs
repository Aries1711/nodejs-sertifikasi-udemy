import timers from "timers/promises";

// TIMER CALLBACK DEFAULT
setInterval(() => {
  console.info("timer at " + new Date());
}, 1000);

//TIMER PROMISES DEFAULT
console.info(new Date());
const name = await timers.setTimeout(5000, "Aris Setyawan");
console.info("My name is " + name);

//TIMER PROMISES FOR
for await (const startTime of timers.setInterval(1000, new Date())) {
  console.info("then it can't changes to " + startTime);
}
