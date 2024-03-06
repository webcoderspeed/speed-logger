import { LoggerFactory } from '../factories/logger.factory'
import { ILogger, ILoggerOptions } from '../types/logger'

export class Logger implements ILogger {
  private logger: ILogger

  constructor({ type, options }: ILoggerOptions) {
    const loggerFactory = new LoggerFactory()
    this.logger = loggerFactory.getLogger(type, options)
  }

  info(message: string, data?: unknown): void {
    this.logger.info(message, data)
  }
  warn(message: string, data?: unknown): void {
    this.logger.warn(message, data)
  }
  error(message: string, data?: unknown): void {
    this.logger.error(message, data)
  }
  fatal(message: string, data?: unknown): void {
    this.logger.fatal(message, data)
  }
}
