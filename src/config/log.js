const config = require('./config');

const moment = require('moment');
const winston = require('winston');
require('winston-daily-rotate-file');

const tsFormat = () => moment().format('YYYY-MM-DD HH:mm:ss');

const logger = winston.createLogger({
    transports: [
        // colorize the output to the console
        new winston.transports.DailyRotateFile({
            filename: `${config.LOG_FOLDER}info-%DATE%.log`,
            datePattern: 'YYYY-MM-DD',
            prepend: true,
            level: 'info',
            timestamp: tsFormat
        }),
        new winston.transports.DailyRotateFile({
            filename: `${config.LOG_FOLDER}error-%DATE%.log`,
            datePattern: 'YYYY-MM-DD',
            prepend: true,
            level: 'error',
            timestamp: tsFormat
        }),
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )

        })

    ]
});

export const log = {
    logApi: request => {
        const message = [];
        if (request && request.url && request.url.path) {
            message.push(`${JSON.stringify(request.url.path)}`);
        }
        if (request && request.params && Object.keys(request.params).length) {
            message.push(`params: ${JSON.stringify(request.params)}`);
        }
        if (request && request.payload && Object.keys(request.payload).length) {
            message.push(`payload: ${JSON.stringify(request.payload)}`);
        }

        if (message.length) {
            logger.info(message.join(', '));
        }
    },

    info: (request, msg, ...others) => {
        logMessage('info', request, msg, others);
    },

    notice: (request, msg, ...others) => {
        logMessage('notice', request, msg, others);
    },

    error: (request, msg, ...others) => {
        logMessage('error', request, msg, others);
    }
};

function logMessage(type, request, msg, others) {
    const message = [];
    if (request && request.url && request.url.path) {
        message.push(`${JSON.stringify(request.route.method.toUpperCase())}`);
        message.push(`${JSON.stringify(request.url.path)}`);
        message.push(`${JSON.stringify(request.payload)}`);
    }
    message.push(msg);

    others.forEach(item => {
        if (item) {
            message.push(JSON.stringify(item));
        }
    });

    // retrieve other objects that are sent
    if (message.length) {
        switch (type) {
            case 'error':
                logger.error(message.join(', '));
                break;
            default:
                logger.info(message.join(', '));
                break;
        }
    }
}

export default logger;