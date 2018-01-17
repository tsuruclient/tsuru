// @flow
const {remote} = require('electron');
const fs = remote.require('fs');
const Log = remote.require('log');

const logger = fs.createWriteStream('tsuru.log', 'utf8');

const log = new Log('common', logger);

export default log;
