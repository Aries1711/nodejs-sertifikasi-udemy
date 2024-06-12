import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

beforeEach(() => console.info("-------start--------"));
afterEach(() => console.info("-------end-------"));

test("create new logger", () => {
  const logger = winston.createLogger({
    level: "silly",
    // format: winston.format.json(), default format logger
    // format: winston.format.logstash(),
    format: winston.format.simple(),
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "Hello Error" });
});

test("logging with shortcut function", () => {
  const logger = winston.createLogger({
    level: "silly",
    // format: winston.format.json(), default format logger
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "warn", message: "Hello Warn" });
  logger.silly("Hello Silly");
});

test("logging with shortcut function and self format printf", () => {
  const logger = winston.createLogger({
    level: "silly",
    format: winston.format.printf((info) => {
      return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
    }),
    transports: [new winston.transports.Console({})],
  });

  logger.warn("Hello Warn");
  logger.log({ level: "warn", message: "Hello Warn" });
});

test("logging with shortcut function and combine logger", () => {
  const logger = winston.createLogger({
    level: "silly",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console({})],
  });

  logger.error("Hello Error");
  logger.log({ level: "warn", message: "Hello Warn" });
  logger.silly("Hello Silly");
});

test("logger with file and console", () => {
  const logger = winston.createLogger({
    level: "silly",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "application.log",
      }),
    ],
  });

  logger.error("Hello Error");
  logger.log({ level: "warn", message: "Hello Warn" });
  logger.silly("Hello Silly");
});

test("logger with file level", () => {
  const logger = winston.createLogger({
    level: "silly",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        level: "warn",
        filename: "application.log",
      }),
    ],
  });

  logger.warn("Hello Warn");
  logger.log({ level: "warn", message: "Hello Warn" });
  logger.silly("Hello Silly");
});

test("logger with file level", () => {
  const logger = winston.createLogger({
    level: "silly",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [
      new DailyRotateFile({
        filename: "app-%DATE%.log",
        zippedArchive: true,
        maxSize: "1m",
        maxFiles: "14d",
      }),
    ],
  });
  for (let index = 0; index < 10; index++) {
    logger.error("Hello Error file");
  }
});
