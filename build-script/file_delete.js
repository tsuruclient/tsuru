const fs = require('fs');
const release_directory = require('./release_directory');

module.exports = () => {
    fs.readdir(release_directory, (err, files) => {
        console.log(files.forEach((file) => {console.log(file)}));
    });
};
