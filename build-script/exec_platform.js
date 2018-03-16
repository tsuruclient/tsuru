const fs = require('fs');
const del = require('del');
const platforms = require('./platform');
const files = require('./files');
const asar_packing = require('./asar_packing');
const compressor = require('./compressor');

module.exports = () => {
    return new Promise((resolve, reject) => {
        Object.keys(platforms).forEach((platform, index, array) => {
            try {
                fs.statSync(files.release_directory + files.app_dir[platform]);
                del(files.file[platform]).then(paths => {
                    return asar_packing(platform);
                }).then(paths => {
                    return compressor(platform);
                }).then(() => {
                    console.log((platform + ' build succeeded!').blue);
                    if(array.length === index) resolve();
                }).catch(e => {
                    if(array.length === index) resolve();
                });
            } catch (e) {
                console.log((platform + " release build does't exists.").red);
            }
        });
    })
};
