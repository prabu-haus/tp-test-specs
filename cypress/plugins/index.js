const allureWriter = require('@shelex/cypress-allure-plugin/writer');

const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);
    return fs.readJson(pathToConfigFile);
}

module.exports = (on, config) => {
    allureWriter(on, config);

    // accept a configFile value or use development by default
    const file = config.env.configFile || 'staging';
    return getConfigurationByFile(file);
};
