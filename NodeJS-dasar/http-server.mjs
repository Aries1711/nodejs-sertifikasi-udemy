import http from "http";

const server = http.createServer((request, response) => {
  if (request.url == "/") {
    response.write("hello world");
  } else {
    if (request.method == "POST") {
      request.addListener(data, function (data) {
        response.setHeader("Content-type", "application/json");
        response.write(data);
        response.end();
      });
    }
  }
  response.end();
});

server.listen(3000);
