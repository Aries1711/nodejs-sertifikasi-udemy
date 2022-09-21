import https from "https";

const url = "https://hookb.in/zr6BOVlpLKUonGpoKyZQ";
const request = https.request(
  url,
  {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  },
  function (response) {
    response.addListener("data", function (data) {
      console.info("receive: " + data.toString());
    });
  }
);

const body = JSON.stringify({
  fullname: "Arisqi Setyawan",
  address: "Kertonegoro",
});

request.write(body);
request.end();
