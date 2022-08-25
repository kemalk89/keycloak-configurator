const assert = require('assert');
const path = require('path');

const initConfig = require('../init-config');

describe('Init config', () => {
    it('should use a default config file', () => {
        const conf = initConfig([]);
        assert.equal(conf.realmName, 'my-app');
    });

    it('should overwrite the connectionConfig:baseUrl config', () => {
        const BASE_URL = 'http://localhost:8084/';

        const conf = initConfig(['--connectionConfig:baseUrl', BASE_URL]);

        assert.equal(conf.realmName, 'my-app');
        assert.equal(conf.connectionConfig.baseUrl, BASE_URL);
    });

    it('should use the passed config file', () => {
        const filePath = path.join(__dirname, './test-config.json');
        const conf = initConfig(['--config', filePath]);

        assert.equal(conf.realmName, 'my-test-app');
    });
});