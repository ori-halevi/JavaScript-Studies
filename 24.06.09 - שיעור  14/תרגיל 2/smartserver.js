const { stringify } = require("querystring");
const express = require("./npm/node_modules/express/lib/express");
const fs = require("fs");
const app = express();
const port = 5230;

app.get("/", (req, res) => {
  getPage(res, "smartserver");
});

app.get("/primes/:id", (req, res) => {
  let arr = [];
  const id = req.params.id;
  for (let i = 0; i < id; i++) {
    if (is_div2(i)) {
      arr.push(i);
    }
  }
  let stra = String(arr);
  let arrAsStr = String(arr);
  res.send(arrAsStr)
});

function is_div(num, div) {
  if (div === 1) {
    return true;
  } else if (num % div === 0) {
    return false;
  }
  return is_div(num, div - 1);
}
function is_div2(num) {
  return is_div(num, num - 1);
}

function getPage(res, page) {
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

app.listen(port, () => {
  console.log("Server started!");
});
