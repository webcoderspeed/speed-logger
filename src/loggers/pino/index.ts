import pino from 'pino'
import { ILogger, ILoggerOptions, LogLevel } from '../../types/logger'
import { format } from 'date-fns'
import LogMessage from '../../message'

class PinoLogger implements ILogger {
  private readonly logger: pino.Logger<LogLevel>

  constructor(loggerOptions?: ILoggerOptions['options']) {
    this.logger = pino<LogLevel>({
      transport: {
        target: 'pino-pretty',
      },
      base: {
        pid: false,
      },
      timestamp: () =>
        `,"time":" ${format(new Date(), "yyyy-MM-dd'T'HH:mm:ss")}"`,
      ...loggerOptions,
    })
  }

  info(message: string, data?: unknown) {
    const logMessage = new LogMessage(message, data)
    this.logger.info(logMessage.toString())
  }

  warn(message: string, data?: unknown) {
    const logMessage = new LogMessage(message, data)
    this.logger.warn(logMessage.toString())
  }

  error(message: string, data?: unknown) {
    const logMessage = new LogMessage(message, data)
    this.logger.error(logMessage.toString())
  }

  fatal(message: string, data?: unknown) {
    const logMessage = new LogMessage(message, data)
    this.logger.fatal(logMessage.toString())
  }
}

export default PinoLogger
