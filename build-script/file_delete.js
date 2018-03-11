const fs = require('fs');
const del = require('del');
const files = require('./files');
require('colors');

module.exports = () => {
    Object.keys(files.file).forEach(keys => {
        try{
            fs.statSync(files.release_directory + files.app_dir[keys]);
            del(files.file[keys]).then(paths => {
                console.log(('Unnecessary file of ' + keys + ' release build was successfully deleted.').blue);
            });
        }catch(e){
            console.log((keys + " release build isn't exists.").red);
        }
    });
};
