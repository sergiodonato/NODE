(async () => {
  const db = require("./db");
  console.log('Get all clients')
  const clients = await db.allClients()
  console.log(clients)
})();
