import fs from "fs";
import zlib from "zlib";

const sourceRead = fs.readFileSync("url.mjs");
console.info(sourceRead.toString());
const result = zlib.gzipSync(sourceRead);

fs.writeFileSync("result-compress(url.mjs).txt", result);