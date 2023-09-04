
const {app, BrowserWindow, ipcMain} = require('electron');

    const url = require("url");
    const path = require("path");
   // const server = require('./Api/server');

    let mainWindow

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 1500,
        height: 1200,
        frame: false,
        minWidth: 1200, 
        minHeight: 750,
        webPreferences: {
          nodeIntegration: true,
          enableRemoteModule: true,
          contextIsolation: false
        },
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `./dist/fazalmart/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      mainWindow.maximize();
      mainWindow.show();
      
      // mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
      ipcMain.on('messageFromRenderer', (event, arg) => {
        // Handle the message from the renderer process
      });

    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })

    ipcMain.on('messageFromBackend', (event, arg) => {
        // Handle the message from the backend code
    });

    ipcMain.on('app-quit', (evt, arg) => {
        app.quit()
      })
      
      
      ipcMain.on('app-reload', (event, arg) => {
        mainWindow.reload();
      });