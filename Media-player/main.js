const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron')
const path = require('path')
const url = require('url')

// Start the program when app is ready
app.on('ready', function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
      minWidth: 243,
      minHeight: 242,
      width:671,
      height:449,
      frame:false,
        show: false, // Show and maximize later
        icon: path.join(__dirname, 'assets', 'icons', 'main_icon.ico'),
        resizable: true,
    })


    // Load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src', 'index.html'),
        protocol: 'file:',
        slashes: true,
    }))

    // Perform actions after window is loaded
    win.webContents.on('did-finish-load', () => {

        // Handle loading of file when opened with electron
        let path_arg = process.argv[1]
        if (path_arg !== '.' && path_arg !== undefined) {
            win.webContents.send("open", path_arg)
        }

        // Show and maximize
        win.show()
    })

    // Handle window min size
    ipcMain.on('init_size', (e, width, height) => {
        width = 550
        height = 352
    })

    // Handle window resize
    ipcMain.on('resize_window', (e, width, height) => {
        if (win.isMaximized() || win.isFullScreen()) {
            return
        }
        width = Math.round(width)
        height = Math.round(height)
        win.setContentSize(width, height)
    })
})


// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
