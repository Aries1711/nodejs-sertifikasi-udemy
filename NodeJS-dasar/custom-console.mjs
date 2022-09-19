import {Console} from "console";
import fs from "fs";

const logFile = fs.createWriteStream("test-log.log");


const log = new Console({
    stdout: logFile,
    stderr: logFile
});

const person = {
    fullname: "Arisqi Setyawan",
    address: "Jember"
}

log.info("hello world");
log.error("Ups");
log.table(person)