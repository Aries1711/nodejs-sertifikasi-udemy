import process from "process";
import readline from "readline";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("siapa nama saya apakah yntkts ?", (name) => {
  console.info("halo bukanlah kamu Arisqi" + name);
  input.close();
});
