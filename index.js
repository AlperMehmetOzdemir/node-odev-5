const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  console.log("Bir istek gönderildi");

  const url = req.url;

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  if (url === "/") {
    res.write("<h2>Index sayfasına hoşgeldiniz</h2>");
  } else if (url === "/hakkimda") {
    res.write("<h2>Hakkımda sayfasına hoşgeldiniz</h2>");
  } else if (url === "/iletisim") {
    res.write("<h2>İletişim sayfasına hoşgeldiniz</h2>");
  }
});

server.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
