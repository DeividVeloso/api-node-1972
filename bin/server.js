"use strict";

const app = require('../src/app')
const http = require("http");
const debug = require("debug")("node-api:server");
const { normalize, onError } = require("../utils/helpers");

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'pipe ' + addr.port;
    debug('Listening on '  + bind);
}

const port = normalize(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
//Subindo servidor
server.listen(port);
//Adicionando mais um listener para verificar cando der error
server.on("error", onError);
server.on('listening', onListening);
console.log("API rodando na porta " + port);


