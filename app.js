const express = require('express');
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.json(
        {
            message: "Hello World!"
        }
    );
})

app.get("/client", (req, res) => {
    res.json(
        {
            message: "Hello Client!"
        }
    );
})

const server = app.listen(port, () => {
    console.log("Sono in ascolto")
})

const close = () => {
    server.close();
}

module.exports = { app, close }