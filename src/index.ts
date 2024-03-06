import { Logger } from './loggers'
import { LoggerType } from './types/logger'

const logger = new Logger({
  type: LoggerType.PINO,
})

logger.info('Hello', { a: 1 })
logger.warn('Hello', { a: 1 })
logger.error('Hello', { a: 1 })
logger.fatal('Hello', { a: 1 })
