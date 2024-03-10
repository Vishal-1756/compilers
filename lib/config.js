"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Configure Your own bot free bot source code for helping students 
let ownerId = 6312693124;
let config = { ttl: 60 };
function configure(cnf) {
    config = cnf;
}
config.version = "4.1.0";
config.versionNo = 30;
config.ttl = 60;
if (!config.startSymbol)
    config.startSymbol = "/";
if (!config.group)
    config.group = "@Not_Coding_Support";
if (!config.channel)
    config.channel = "@Not_Coding";
config.configure = configure;
exports.default = config;
