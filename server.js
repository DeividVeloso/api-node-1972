"use strict";

const http = require("http");
const debug = require("debug")("node-api:server");
const express = require("express");

const { normalize, onError, onListening } = require("./utils/helpers");

const app = express();
const port = normalize(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
const router = express.Router();

//Criando a rota
const route = router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "NOde Store API",
    version: "0.0.1"
  });
});
app.use("/", route);

//Subindo servidor
server.listen(port);

//Adicionando mais um listener para verificar cando der error
server.on("error", onError);
server.on('listening', onListening);
console.log("API rodando na porta " + port);
