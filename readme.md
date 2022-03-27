## Description

This is a mock websocket server that continously increments and broadcasts a counter value to all open/registered socket connections.

**Tech specs:**

- Built with socket.io
- The counter is incremented & broadcasted in 1s intervals
- Supports multiple conenctions
- Client terminals must register with a unique client Id to start receiving the counter value
- Counter values are persisted when the socket is disconnected without an explicit uregister event
- After an unexpected disconnection, client terminals can always resume the counter by registering with the same client Id
- Client terminals must unregister to stop receiving the counter value & reset the counter

**Socket endpoint:** <a href="https://mobile-technical-test.herokuapp.com">https://mobile-technical-test.herokuapp.com</a>

## Lifecycle events

### register

After a socket connection is established you must emit a `register` event with a unique client id in order to start recieving the counter value.

Example:

```
socket.emit(
    "register", // event name
    "76JI8HU" // client ID
);
```

### message

Listen to the `message` socket event to receive the counter value

### unregister

Emit an `unregister` event to reset the counter & stop receiving the `message` event

```
socket.emit(
    "unregister", // event name
);
```
