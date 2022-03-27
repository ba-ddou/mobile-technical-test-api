# **API Documentation**

## **Description**

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

# **Technical test requirements**

## **Topic**

Building an android app with a web socket based real-time communications module that runs in the background.

> You can build the app using either react-native or a fully native android platform (Java or Kotlin).

## **Requirements**

- Users must be able to turn the socket connection ON or OFF from a switch in the UI.
- Display the counter value (received through the socket ) in the app's UI while the socket connection is open.
- Display the counter value (received through the socket ) in a sticky notification at all times while the socket connection is open.
- The socket connection must run in the background i.e persist and keep the counter value up to date even while the app is closed.

### **Evaluation criteria**

**Your implementation will be evaluated based on:**

- The correct implementation of all requirements
- Handling edge and corner cases
- Error handling & UI feedback
- Code quality & best practices

**You can get bonus points for:**

- Good UI design
- Using react-native
- Streamlining the applicatin hand-off / installation process

## **Notes**

- The API requires a client Id to identify and keep to track of socket connections, but you're not required to implement any kind of user authentication. You can just mock the client Id any way you see fit.
- You have access to the API's code for context. But please use the live API deployment, and do not modify the API's behavior and use it locally.
