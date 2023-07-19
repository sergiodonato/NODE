// uncomment code to use the functions

(async () => {
  const db = require("./db");

  /*
  console.log("Insert new client");
  const nom = "Kai"
  const ida = "6"
  await db.insertedClient({ nome: nom, idade: ida });
  */
  
  /*
  const id = 2;
  const nom = "Te";
  const ida = "4";
  await db.updatedClient(id, { nome: nom, idade: ida });
  console.log(`Updated client ${id}`);
  */
  
  /*
  const id = 1;
  await db.deleteClient(id);
  console.log(`Client ${id} deleted`);
  */

  console.log("Get all clients");
  const clients = await db.allClients();
  console.log(clients);
})();
