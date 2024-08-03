import { Module } from '@nestjs/common';
import { TradingGateway } from './geteway/trading.gateway';

@Module({
  providers: [TradingGateway],
})
export class SocketModule {}