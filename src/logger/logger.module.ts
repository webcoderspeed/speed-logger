import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { MessageModule } from '../message/message.module';

@Module({
  imports: [MessageModule],
  providers: [LoggerService],
})
export class LoggerModule {}
