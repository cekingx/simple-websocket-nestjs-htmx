# Simple Websocket with Nestjs, HTMX

Simple websocket application based on [Specification](https://github.com/cekingx/free-time-project-spec/blob/main/5-websocket.md)

## General

Because Nestjs use Socket.io by default, websocket request need to follow socket.io format

```json
{
  "event": "event_name",
  "data": "message"
}
```

in the gateway, the method that intended to interact with the websocket in the gateway need to subscribe `event_name`

```javascript
@SubscribeMessage('event_name')
```