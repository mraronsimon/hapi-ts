"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HapiJS = require('hapi');
function Server(config) {
    return function (target) {
        let server = HapiJS.server({
            port: config.port,
            host: config.host
        });
        server.start();
    };
}
exports.Server = Server;
