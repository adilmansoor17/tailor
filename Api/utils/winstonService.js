const Winston = require('winston');

const consoleOptions = {
    format: Winston.format.combine(
        Winston.format.timestamp(),
        Winston.format.colorize(),
        Winston.format.printf(info => {
            return `${info.timestamp} - ${info.level}: ${info.message}`
        })
    )
};
const fileOptions = {
    filename: 'logs.log',
    format: Winston.format.combine(
        Winston.format.timestamp(),
        Winston.format.printf(info => {
            return `${info.timestamp} - ${info.level}: ${info.message}`
        })
    )
};
const winstonLogger = Winston.createLogger({
    transports: [
        new Winston.transports.Console(consoleOptions),
        new Winston.transports.File(fileOptions)
    ]
});

const logger = (level = 1, message = 'hello') => {
    switch (level) {
        case 0:
            winstonLogger.error(message);
            break;
        case 1:
            winstonLogger.warn(message);
            break;
        case 2:
            winstonLogger.info(message);
            break;
        case 3:
            winstonLogger.verbose(message);
            break;
        case 4:
            winstonLogger.debug(message);
            break;
        case 5:
            winstonLogger.silly(message);
            break;
    }
};

module.exports = logger;

