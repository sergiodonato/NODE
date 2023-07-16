const toConnect = async () => {
  if (global.conection && global.conection.state != "disconected")
    return global.conection;
  const mysql = require("mysql2/promise");
  const con = mysql.createConnection(
    "mysql:"
  );
  console.log("DB conected");
  global.conection = con;
  return con;
};

const allClients = async()=> {
    const con = await toConnect()
    const [lines] = await con.query('SELECT * FROM usuarios')
    return await lines
}

module.exports = {allClients};
