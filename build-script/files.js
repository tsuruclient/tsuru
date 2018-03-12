const platform = require('./platform');

const data = {
    release_directory: './release/',
    app_dir: {
        [platform.win32]: 'Tsuru-'+ platform.win32 +'-x64/resources/app',
        [platform.darwin]: 'Tsuru-' + platform.darwin+ '-x64/Tsuru.app/Contents/Resources/app',
        [platform.mas]: 'Tsuru-' + platform.mas + '-x64/Tsuru.app/Contents/Resources/app',
        [platform.linux]: 'Tsuru-' + platform.linux + '-x64/resources/app',
    },
    files: [
        '.idea',
        '.vscode',
        'images',
        '.editorconfig',
        '.env',
        '.flowconfig',
        '.gitignore',
        'create-react-app-readme.md',
        'Procfile',
        'build-script',
        'public',
        'package-lock.json',
        'yarn.lock',
        '.travis.yaml',
        'src/component',
        'src/container',
        'src/core',
        'src/helper',
        'src/redux',
        'src/index.js',
        'build/static/css/*.css.map',
        'build/static/js/*.js.map',
        '*.log',
    ],
    file: {
        [platform.win32]: undefined,
        [platform.darwin]: undefined,
        [platform.mas]: undefined,
        [platform.linux]: undefined,
    }
};

Object.keys(data.app_dir).forEach(directory =>{
    data.file[directory] = data.files.map(file => data.release_directory + data.app_dir[directory] + '/' + file);
});

module.exports = data;
