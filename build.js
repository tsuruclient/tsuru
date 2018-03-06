const promisify = require("es6-promisify");
const exec = promisify(require('child_process').exec);
require('colors');

const file_delete = require('./build-script/file_delete');

exec('npm run build').then((stats) => {
    console.log(stats);
    console.log('"build" succeeded.\n\n now executed "package"'.blue);
    return exec('npm run package');
}).then((stats) => {
    console.log(stats);
    console.log('"package" succeeeded.\n'.blue);
}).catch((err) => {
    console.error("error occurred.".red);
    console.error(err);
});

