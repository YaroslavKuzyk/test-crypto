import { Module } from '@nestjs/common';
import { SocketModule } from './Socket/socket.module';

@Module({
  imports: [SocketModule],
})
export class AppModule {}