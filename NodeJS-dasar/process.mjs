import process from "process";

process.addListener("exit", (exitCode) => {
  console.info("NodeJs done running with exitCode:" + exitCode);
});
