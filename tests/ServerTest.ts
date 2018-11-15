import * as assert from 'assert';
import * as request from 'request';
import { Server } from '../src';

@Server({
    port: 3000,
    host: 'localhost'
})
class TestServer { }

describe('@Server', () => {
    it('should start a HapiJS server on localhost:3000', (done) => {
        request.get('http://localhost:3000/', (err, res, body) => {
            assert.equal(err, undefined);
            assert.equal(res.statusCode, 404);
            done();
        })
    })
})