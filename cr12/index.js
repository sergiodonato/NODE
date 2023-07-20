const http = require("http");
const door = process.env.PORT || 3000;
const formidavel = require("formidable");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/envioDeArquivo") {
    const form = new formidavel.IncomingForm();
    form.parse(req, (erro, campos, arquivos) => {
      const urlantiga = arquivos.filetoupload.filepath;
      const urlnova =
        "/home/sergio/Downloads" + arquivos.filetoupload.originalFilename;
      fs.rename(urlantiga, urlnova, (erro) => {
        if (erro) throw erro;
        res.write("Arquivo movido!");
        res.end();
      });
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<form action="envioDeArquivo" method="POST" enctype="multipart/form-data">'
    );
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit" value="Enviar">');
    res.write("</form>");
    return res.end();
  }
});

server.listen(door);
