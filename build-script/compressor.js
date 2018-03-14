const AdmZip = require('adm-zip');
const targz = require('targz');
const platforms = require('./platform');
const files = require('./files');

const compress_targz = (platform) => {
    return new Promise((resolve, reject) => {
        targz.compress({
            src: files.release_directory + files.release_dir[platform],
            dest: files.release_directory + files.release_dir[platform] + '.tar.gz'
        }, function(err){
            if(err) {
                reject(err);
            } else {
                resolve();
            }
        });
    })
};

const compress_zip = (platform) => {
    return new Promise((resolve, reject) => {
        let zip = new AdmZip();
        zip.addLocalFolder(files.release_directory + files.release_dir[platform]);
        zip.writeZip(files.release_directory + files.release_dir[platform] + '.zip');
        resolve();
    })
};

module.exports = (platform) => {
    if(platform === platforms.linux){
        return compress_targz(platform);
    }else{
        return compress_zip(platform);
    }
};
