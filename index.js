const { Server } = require("socket.io");

const io = new Server();

const connections = new Map();
var intervalRef = null;

io.on("connection", onConnection);
const PORT = process.env.PORT || 3000;
io.listen(PORT);
console.log(`🚀 ~ listening on port ${PORT}`);
init();

function init() {
  intervalRef = setInterval(brodcast, 1000);
}

function brodcast() {
  for (const [clientId, { socket, count }] of connections) {
    if (!socket) return;
    console.log(`🚀 ~ brodcast ${count} to ${clientId}`);
    socket.emit("message", `${count}`);
    connections.set(clientId, { socket, count: count + 1 });
  }
}

function onConnection(socket) {
  socket.on("register", (clientId) => {
    registerClient(clientId, socket);
    socket.on("unregister", () => {
      unregisterClient(clientId);
    });
    socket.on("disconnect", () => {
      suspendClient(clientId);
    });
  });
}

function registerClient(clientId, socket) {
  console.log("🚀 ~ registerClient", clientId);
  const count = getClientCount(clientId);
  connections.set(clientId, { socket, count });
}

function suspendClient(clientId) {
  console.log("🚀 ~ suspendClient", clientId);
  connections.set(clientId, {
    socket: null,
    count: getClientCount(clientId),
  });
}

function unregisterClient(clientId) {
  console.log("🚀 ~ unregisterClient", clientId);
  connections.delete(clientId);
}

function getClientCount(clientId) {
  const clientData = connections.get(clientId);
  return clientData ? clientData.count : 0;
}
