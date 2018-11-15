const HapiJS = require('hapi');
import * as HapiTypes from 'hapi';

export class ServerBase {
    public static server: any;
    constructor() {
        console.log(ServerBase.server);
    }
    public static start () {
        if (ServerBase.server == undefined) {
            throw new Error(`Class ${this.name} must be decorated with @Server!`);
        }
    }
}

function checkBaseTypes(target: any) {
    let temp = target.prototype;
        let hasServerBaseType = false;
        while (temp.constructor.name != 'Object') {
            if(temp.constructor.name == 'ServerBase') {
                hasServerBaseType = true;
                break;
            }
            temp = temp.__proto__;
        }
        if (hasServerBaseType == false) throw new Error(`Class ${target.name} must extends from ServerBase!`);
}

export function Server(config: { port: number, host: string, controllers?: object[] }) {
    return function <T extends {new(...arg: any[]): ServerBase}>(target: T) {
        checkBaseTypes(target);

        let newClass = class C extends target {
            public static server: HapiTypes.Server;
            public static start() {
                C.server.start();
            }
        };
        newClass.server = HapiJS.server({
            port: config.port,
            host: config.host
        })
        return newClass;
    }
}