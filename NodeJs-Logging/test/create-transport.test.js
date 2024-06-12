import TransportStream from "winston-transport";
import winston from "winston";

test("create new transport, logger with my transport", () => {
  class MyTransport extends TransportStream {
    constructor(option) {
      super(option);
    }
    log(info, next) {
      console.log(
        `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
      );
      next();
    }
  }

  const logger = winston.createLogger({
    level: "silly",
    format: winston.format.simple(),
    transports: [new MyTransport({})],
  });

  for (let index = 0; index < 100; index++) {
    logger.error(`Hello Error file ${index}`);
  }
});
