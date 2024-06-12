import winston from "winston";

async function callAsync() {
  return Promise.reject("Ups");
}

const logger = winston.createLogger({
  level: "info",
  //   handleExceptions: true,
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      handleExceptions: true,
      handleRejections: true,
      filename: "exception.log",
    }),
  ],
});

logger.error(callAsync());
