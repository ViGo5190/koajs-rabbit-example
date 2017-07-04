import winston from 'winston';
import moment from 'moment';

const logger = new winston.Logger({
    level: 'debug',
    transports: [
        new (winston.transports.Console)({
            timestamp: function () {
                return moment().format();
            },
        }),
    ]
});


export default logger;