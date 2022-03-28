# **API Documentation**

## **Description**

This is a mock websocket server that continously increments and broadcasts a counter value to all open/registered socket connections.

**Tech specs:**

- The API uses socket.io to handle web sockets
- The API supports multiple conenctions
- After a socket connection is established, client terminals must register with a unique client Id to start receiving data
- The data received through the socket is a simple counter value that starts at 0 when a client registers with and Id and is automatically incremented every second and sent via the `message` socket event
- Client terminals must unregister (send and `unregister` event) to stop receiving the counter value & reset the counter
- Counter values are persisted when the socket is disconnected without an explicit uregister event
- After an unexpected disconnection (socket disconnection without sending an explicit `unregister` event), client terminals can always re-establish the socket connection and resume the counter right where they left off by registering with the same client Id
  s

**Socket endpoint:** <a href="https://mobile-technical-test.herokuapp.com">https://mobile-technical-test.herokuapp.com</a>

## **Lifecycle events**

### **register**

After a socket connection is established you must emit a `register` event with a unique client id in order to start recieving the counter value.

Example:

```
socket.emit(
    "register", // event name
    "76JI8HU" // client ID
);
```

### **message**

Listen to the `message` socket event to receive the counter value

### **unregister**

Emit an `unregister` event to reset the counter & stop receiving the `message` event

```
socket.emit(
    "unregister", // event name
);
```

# **Technical test**

## **Topic**

Building an android app with a robust web socket based real-time communications module.

> You can build the app using either react-native or a fully native android platform (Java or Kotlin).

## **Context**

In a real world on demand food delivery platform, one of the important features is the real-time driver GPS coordinate tracking. This is acheived by continuously streaming the driver's coordinates from the driver app to the server and then streaming them to the customer app using web sockets. For optimal UX, the socket connection must stay open and the driver's coordinates must be kept up to date at all times even when the app is running in the background.

The Mock API documented above is a dumbed down version of the real-time driver coordinates stream functionality. And it will allow you to emulate a simplified version of the customer app's driver tracking feature.

## **Requirements**

- Users must be able to turn the socket connection ON or OFF from a switch in the UI.
- Data received throught the socket connection must be displayed in the app's UI.
- Data received throught the socket connection must be displayed to the user at all times, even when the app is closed or in the background.

### **Evaluation criteria**

**Your implementation will be evaluated based on:**

- The correct implementation of all requirements
- Handling edge and corner cases
- Error handling & UI feedback
- Code quality & best practices

**You can get bonus points for:**

- Good UI design
- Using react-native
- Streamlining the application hand-off / installation process

## **Notes**

- The API requires a client Id to identify and keep to track of socket connections, but you're not required to implement any kind of user authentication. You can just mock the client Id any way you see fit.
- You have access to the API's code for context. But please use the live API deployment, and do not modify the API's behavior and use it locally.
