const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.use(express.static(__dirname + "/dist"));
//app.use(express.json())でok.
//expressに含まれている。
app.use(bodyParser.json())

app.get("/api", (req, res) => {
    res.send("hello world")
});

const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log("App listening on port" + port);
});
