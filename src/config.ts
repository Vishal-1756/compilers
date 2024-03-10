import * as tp from "./interfaces";

// Configure Your own bot free bot source code for helping students 
let ownerId = 6312693124

let config: tp.Config = { ttl: 60};

function configure(cnf: tp.Config) {
  config = cnf;
}
config.version = "34.1.0"
config.versionNo = 30
config.ttl = 60;

if(!config.startSymbol)
config.startSymbol = "/"
if(!config.group)
config.group = "@Not_Coding_Suport";
if(!config.channel)
config.channel = "@Not_Coding";
config.configure = configure;
export default config;





