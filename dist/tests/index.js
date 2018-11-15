"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const request = require("request");
const src_1 = require("../src");
let TestServer = class TestServer {
};
TestServer = __decorate([
    src_1.Server({
        port: 3000,
        host: 'localhost'
    })
], TestServer);
describe('@Server', () => {
    it('should start a HapiJS server on localhost:3000', (done) => {
        request.get('http://localhost:3000/', (err, res, body) => {
            assert.equal(err, undefined);
            assert.equal(res.statusCode, 404);
            done();
        });
    });
});
