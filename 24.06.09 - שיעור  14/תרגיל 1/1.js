const express = require(`./npm/node_modules/express/lib/express`);
const fs = require("fs");
const app = express();
const port = 3000;

app.get(`/`, (req, res) => {
  res.send(`Hi you! welcome to our server!`);
});

app.get(`/home`, (req, res) => {
  getPage(res, "home")
});

app.get(`/about`, (req, res) => {
  getPage(res, "about")
});

app.listen(port, () => {
  console.log("Server started!");
});


function getPage(res, page){
  fs.readFile(`${page}.html`, "utf-8", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (err) {
      console.error(err);
    } else {
      res.write(data);
      res.end();
    }
  });
}