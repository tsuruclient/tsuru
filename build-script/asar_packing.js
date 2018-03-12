const files = require('./files');
const execSync = require('child_process').execSync;
require('colors');

module.exports = (platform) => {
    console.log('Compressing to asar...');
    const filepath = files.release_directory + files.app_dir[platform];
    execSync('asar pack ' + filepath + ' ' + filepath + '.asar');
    del(files.release_directory + files.app_dir[platform]);
    console.log('successfully comporessing asar!'.blue);
};
