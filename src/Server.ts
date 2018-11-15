const HapiJS = require('hapi');

export function Server(config: { port: number, host: string }) {
    return function (target: any) {
        let server = HapiJS.server({
            port: config.port,
            host: config.host
        })

        server.start();
    }
}