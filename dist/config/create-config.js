"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = void 0;
var puppeteer_config_1 = require("./puppeteer.config");
exports.defaultOptions = {
    folderNameToken: 'tokens',
    mkdirFolderToken: '',
    headless: true,
    devtools: false,
    useChrome: true,
    debug: false,
    logQR: true,
    browserWS: '',
    browserArgs: puppeteer_config_1.puppeteerConfig.chromiumArgs,
    puppeteerOptions: {},
    disableSpins: false,
    disableWelcome: false,
    updatesLog: true,
    autoClose: 120000,
    createPathFileToken: true,
    waitForLogin: true,
};
//# sourceMappingURL=create-config.js.map