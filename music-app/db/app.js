const express = require("express");
const app = express();
// const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path");
const db = require("./knex");
const { default: knex } = require("knex");

app.use(express.static(path.resolve(__dirname,"..", "dist")));

app.use(express.json())
//expressに含まれている。
// app.use(bodyParser.json())

app.use(cors())


app.get("/api", (req, res) => {
    res.send("hello world")
});

app.get("/api/music", (req, res) => {
    db.select().from("emotions").then((result) => res.send(result));
})

app.get("/api/type/:name", (req, res) => {
    const name = req.params.name;
    console.log(name)
    db('emotions').whereRaw('emotion = ?',[name]).then((result) => {
        console.log(result[0].URL)
        res.json(result)
    })
    // db('emotions').where('emotion', 'chill').then((result) => res.send(result))
})
const port = process.env.PORT || 4001

app.listen(port, () => {
    console.log("App listening on port" + port);
});
