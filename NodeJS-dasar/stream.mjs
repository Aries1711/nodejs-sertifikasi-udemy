import fs from "fs";

const writer = fs.createWriteStream("target-stream.log");
writer.write("Arisqi \n");
writer.write("Setyawan ");
writer.close();

const reader = fs.createReadStream("target-stream.log");

reader.on("data", function (data) {
  console.info(data.toString());
  reader.close();
});
