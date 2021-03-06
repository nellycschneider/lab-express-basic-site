const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/views/about.html", (request, response) => {
  response.sendFile(`${__dirname}/views/about.html`);
});

app.get("/views/gallery.html", (request, response) => {
  response.sendFile(`${__dirname}/views/gallery.html`);
});

app.listen(3000, () => {
  console.log("server listening on port: 3000");
});
