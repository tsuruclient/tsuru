const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');

if(process.env.ELECTRON_DEBUG_BUILD){
    var loadDevtool = require('electron-load-devtool');
}

module.exports = class Application {
    createWindow() {
        this.mainWindow = new BrowserWindow({
            width: 1366,
            height: 768,
        });
        this.startUrl = process.env.ELECTRON_START_URL || url.format({
            pathname: path.join(__dirname, '/../../build/index.html'),
            protocol: 'file:',
            slashes: true,
        });

        this.mainWindow.loadURL(this.startUrl);
        this.mainWindow.on('closed', function () {
            this.mainWindow = null;
        });

        if(process.env.ELECTRON_DEBUG_BUILD) {
            loadDevtool(loadDevtool.REDUX_DEVTOOLS);
            loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS);
        }

        this.mainWindow.webContents.openDevTools();
        const template = [{
            label: 'Application',
            submenu: [
                { label: 'About Application', selector: 'orderFrontStandardAboutPanel:' },
                { type: 'separator' },
                { label: 'Quit', accelerator: 'Command+Q', click: () => { app.quit(); } }
            ]}, {
            label: 'Edit',
            submenu: [
                { label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:' },
                { label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:' },
                { type: 'separator' },
                { label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:' },
                { label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:' },
                { label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:' },
                { label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:' }
            ]},
        ];
        Menu.setApplicationMenu(Menu.buildFromTemplate(template));
    }

    ready() {
        app.on('ready', this.createWindow);
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
                app.quit();
            }
        });
        app.on('activate', () => {
            if (this.mainWindow === null) {
                this.createWindow();
            }
        });
    }

    run() {
        this.ready();
    }
};
