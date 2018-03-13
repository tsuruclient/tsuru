const AdmZip = require('adm-zip');
const targz = require('targz');
const platforms = require('./platform');

module.exports = (platform) => {
    new Promise((resolve, reject) => {
        if(platform === platforms.linux){
            // tar.gz
        }else{
            // zip
        }
        resolve();
    });
};
