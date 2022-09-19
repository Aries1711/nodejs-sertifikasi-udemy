import util from "util";

const person = {
    fullname: "Arisqi Setyawan",
    address: "Jember"
}

console.info(util.format("Hello: %j", person.fullname));