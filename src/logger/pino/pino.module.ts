import { Module } from '@nestjs/common'
import { PinoService } from './pino.service'
import { MessageModule } from '../../message/message.module'

@Module({
  imports: [MessageModule],
  providers: [PinoService],
})
export class PinoModule {}
