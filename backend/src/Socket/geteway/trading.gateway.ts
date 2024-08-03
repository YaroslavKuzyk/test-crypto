import { SubscribeMessage, WebSocketGateway, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true
  }
})
export class TradingGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('TradingGateway');
  private intervals: Map<string, NodeJS.Timeout> = new Map();

  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: string): void {
    this.server.emit('message', payload);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);

    const sendInfo = () => {
      const info = {
        time: new Date().getTime(),
        open: Math.random() * 1000,
        high: Math.random() * 1000,
        low: Math.random() * 1000,
        close: Math.random() * 1000,
      };
      this.logger.log(`Sending message: ${JSON.stringify(info)}`);
      this.server.emit('message', info);
    };

    // Відправляти повідомлення кожну секунду
    const interval = setInterval(sendInfo, 1000);
    this.intervals.set(client.id, interval);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);

    // Очистити інтервал для цього клієнта
    const interval = this.intervals.get(client.id);
    if (interval) {
      clearInterval(interval);
      this.intervals.delete(client.id);
    }
  }
}
