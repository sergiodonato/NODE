const dotenv = require("dotenv");
dotenv.config();

const toConnect = async () => {
  if (global.conection && global.conection.state != "disconected")
    return global.conection;
  const mysql = require("mysql2/promise");
  const con = mysql.createConnection(process.env.DB_CONNECTION);
  console.log("DB conected");
  global.conection = con;
  return con;
};

const allClients = async () => {
  const con = await toConnect();
  const [lines] = await con.query("SELECT * FROM cliente_node");
  return await lines;
};

const insertedClient = async (client) => {
  const con = await toConnect();
  const sql = "INSERT INTO cliente_node (nome, idade) VALUES (?,?)";
  const values = [client.nome, client.idade];
  await con.query(sql, values);
};

const updatedClient = async (id, client) => {
  const con = await toConnect();
  const sql = "UPDATE cliente_node SET nome=?, idade=? WHERE id=?";
  const values = [client.nome, client.idade, id];
  await con.query(sql, values);
};

const deleteClient = async (id) => {
  const con = await toConnect();
  const sql = "DELETE FROM cliente_node WHERE id=?";
  const values = [id];
  await con.query(sql, values);
};

module.exports = { allClients, insertedClient, updatedClient, deleteClient };
