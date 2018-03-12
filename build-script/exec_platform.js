const fs = require('fs');
const platforms = require('./platform');
const files = require('./files');
const file_delete = require('./file_delete');
const asar_packing = require('./asar_packing');

module.exports = () => {
    Object.keys(platforms).forEach((platform) => {
        try {
            fs.statSync(files.release_directory + files.app_dir[platform]);
            file_delete(platform);
            asar_packing(platform);
        } catch (e) {
            console.log((platform + " release build isn't exists.").red);
        }
    })
};
