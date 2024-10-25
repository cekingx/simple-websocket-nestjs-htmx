import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';

@WebSocketGateway({ path: '/ws' })
export class DefaultGateway {
  @SubscribeMessage('events')
  onEvent(@MessageBody() data: any, @ConnectedSocket() socket: any){
    console.log('data', data);

    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        console.log('sending', i);
        socket.send('Hello world! ' + i);
      }, 1000 * i);
    }
  }
}
