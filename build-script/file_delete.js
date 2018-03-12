const fs = require('fs');
const del = require('del');
const files = require('./files');
require('colors');

module.exports = (platform) => {
    fs.statSync(files.release_directory + files.app_dir[platform]);
    del(files.file[platform]);
    console.log(('Unnecessary file of ' + platform + ' release build was successfully deleted.').blue);
};
