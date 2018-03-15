const promisify = require("es6-promisify");
const child_process = require('child_process');
const exec = promisify(child_process.exec);
const execSync = child_process.execSync;

const exec_platform = require('./exec_platform');
require('colors');

console.log('Start build...'.green);
exec('npm run build').then((status)=>{
    console.log(status);
    console.log('"build" succeeded.'.blue);
    console.log('now executed "package"'.green);
    try{
        execSync('npm run package');
        console.log('successfully packing'.blue);
    }catch (e){
        console.log('skipped something build'.red);
    }
    console.log('"package" succeeeded.\n'.blue);
    return exec_platform();
}).then(() => {
    console.log("build succeeded!".blue);
    process.exit(0);
}).catch((err) => {
    console.error(err);
    console.error('build failed.'.red);
    process.exit(1);
});
