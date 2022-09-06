console.info("=====================START INTRO===================");
const bufferIntro = Buffer.from("Arisqi Setyawan");

console.info(bufferIntro);
console.info(bufferIntro.toString());

console.info("=====================END INTRO===================");

// ENCODING AND DECODING
const buffer = Buffer.from("Arisqi Setyawan", "utf8");

console.info("=====================START ENCODE DECODE===================");
console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const buffer2 = Buffer.from("QXJpc3FpIFNldHlhd2Fu", "base64url");
console.info(buffer2.toString("utf8"));

console.info("=====================END ENCODE DECODE===================");
