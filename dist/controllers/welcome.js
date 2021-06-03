"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUpdates = exports.welcomeScreen = void 0;
var boxen = require("boxen");
var chalk = require("chalk");
var latest_version_1 = require("latest-version");
var yoo_hoo_1 = require("yoo-hoo");
var semver_1 = require("../utils/semver");
var version = require('../../package.json').version;
// Global
var welcomeShown = false;
var updatesChecked = false;
function welcomeScreen() {
    if (welcomeShown) {
        return;
    }
    welcomeShown = true;
    yoo_hoo_1.yo('VENOM', { color: 'cyan' });
    console.log('\n\n');
}
exports.welcomeScreen = welcomeScreen;
function checkUpdates(spinnies) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!updatesChecked) return [3 /*break*/, 2];
                    updatesChecked = true;
                    spinnies.add('venom-version-spinner', {
                        text: 'Checking for updates',
                    });
                    return [4 /*yield*/, checkVenomVersion(spinnies)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2: return [2 /*return*/];
            }
        });
    });
}
exports.checkUpdates = checkUpdates;
/**
 * Checs for a new versoin of venom and logs
 */
function checkVenomVersion(spinnies) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    spinnies.update('venom-version-spinner', { text: 'Checking for updates...' });
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, latest_version_1.default('venom-bot').then(function (latest) {
                            if (semver_1.upToDate(version, latest)) {
                                spinnies.succeed('venom-version-spinner', {
                                    text: "You're up to date",
                                });
                            }
                            else {
                                spinnies.succeed('venom-version-spinner', {
                                    text: 'There is a new version available',
                                });
                                logUpdateAvailable(version, latest);
                            }
                        })];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    _a = _b.sent();
                    spinnies.fail('venom-version-spinner', {
                        text: 'Unable to access: "https://www.npmjs.com", check your internet',
                    });
                    return [2 /*return*/, false];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 * Logs a boxen of instructions to update
 * @param current
 * @param latest
 */
function logUpdateAvailable(current, latest) {
    // prettier-ignore
    var newVersionLog = "There is a new version of " + chalk.bold("Venom") + " " + chalk.gray(current) + " \u279C  " + chalk.bold.green(latest) + "\n" +
        "Update your package by running:\n\n" +
        (chalk.bold('\>') + " " + chalk.blueBright('npm update venom-bot'));
    console.log(boxen(newVersionLog, { padding: 1 }));
    console.log("For more info visit: " + chalk.underline('https://github.com/orkestral/venom/blob/master/Update.md') + "\n");
}
//# sourceMappingURL=welcome.js.map