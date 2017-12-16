const application = require('./Application');

global.application = new application();
global.application.run();