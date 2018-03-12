const fs = require('fs');
const del = require('del');
const platforms = require('./platform');
const files = require('./files');
const asar_packing = require('./asar_packing');
const compressor = require('./compressor');

module.exports = () => {
    return new Promise((resolve, reject) => {
        Object.keys(platforms).forEach((platform) => {
            try {
                fs.statSync(files.release_directory + files.app_dir[platform]);
                del(files.file[platform]).then(paths => {
                    console.log(('Unnecessary file of ' + platform + ' release build was successfully deleted.').blue);
                    return asar_packing(platform);
                }).then(paths => {
                    console.log(('successfully '+ platform +' asar!').blue);
                    return compressor(platform);
                }).then(() => {
                    console.log(('successfully ' + platform + ' compressed application!').blue);
                    resolve();
                }).catch(e => {
                    throw e;
                });
            } catch (e) {
                console.log((platform + " release build isn't exists.").red);
            }
        })
    })
};
