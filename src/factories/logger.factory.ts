import PinoLogger from '../loggers/pino'
import { ILogger, ILoggerOptions, LoggerType } from '../types/logger'

class LoggerFactory {
  getLogger(
    loggerType: LoggerType,
    options: ILoggerOptions['options']
  ): ILogger {
    switch (loggerType) {
      case LoggerType.PINO:
        return new PinoLogger(options)
      default:
        throw new Error(`Unsupported logger type: ${loggerType}`)
    }
  }
}

export { LoggerFactory }
