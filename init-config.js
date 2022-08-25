const fs = require("fs");
const defaultConfig = require("./default-config.json");

function getOptionValue(name, processArgs) {
    const OPTION_PREFIX = '--';

    const optionIndex = processArgs.indexOf(OPTION_PREFIX + name);
    if (optionIndex === -1) {
        return null;
    }


    const optionValue = processArgs[optionIndex + 1];
    if (!optionValue) {
        return null;
    }

    if (optionValue.startsWith(OPTION_PREFIX)) {
        return null;
    }

    return optionValue;
}

module.exports = function (processArgs) {
    let confJSON = null;
    const configFilePath = getOptionValue('config', processArgs);
    if (configFilePath) {
        const confFile = fs.readFileSync(configFilePath);
        confJSON = JSON.parse(confFile);
    }

    if (confJSON === null) {
        console.log("=================================================");
        console.log("No config passed. Will take the default config.");

        confJSON = defaultConfig;

        const specificBaseUrl = getOptionValue('connectionConfig:baseUrl', processArgs);
        if (specificBaseUrl !== null) {
            console.log(`You specified a baseUrl: ${specificBaseUrl}.`);
            confJSON.connectionConfig.baseUrl = specificBaseUrl;
        }

        console.log("=================================================");
    }

    return confJSON;
}