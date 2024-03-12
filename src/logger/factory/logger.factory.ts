import { PinoService } from '../pino/pino.service';
import { ILogger, ILoggerOptions, LoggerType } from '../../types/logger.types';

export class LoggerFactory {
  getLogger(
    loggerType: LoggerType,
    options: ILoggerOptions['options']
  ): ILogger {
    switch (loggerType) {
      case LoggerType.PINO:
        return new PinoService(options);
      default:
        throw new Error(`Unsupported logger type: ${loggerType}`);
    }
  }
}
