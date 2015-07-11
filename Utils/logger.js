/**
 * This file creates a logger instance that will be used by all other files
 */

/*var winstonLogger = require('winston');
var logger = new (winstonLogger.Logger)({

    transports: [
      new (winstonLogger.transports.Console)(),
      new (winstonLogger.transports.File)({ filename: 'MbaasLog.log' })
    ]
  });

logger.log('info', 'Logger Initialised');

module.exports ={

	MbaasLog: function(type,logMsg){
	console.log(type);
	console.log(logMsg);
	switch(type){
	case 'log': console.log(type);logger.log('info',logMsg);break;
	}
}
}*/

var winston = require('winston');

var winston = new (winston.Logger)({
    transports: [
        // for product change level to 'info' instead of debug
        new (winston.transports.Console)({ level: 'info' }),
        new (winston.transports.File)({ filename: __dirname + '/../logs/MbaasLogs.log', level: 'debug' })
    ]
});

winston.info('Logger Initialised')

module.exports = winston;