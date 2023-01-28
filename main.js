const { app, BrowserWindow } = require('electron');

const path = require('path');
 
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1800,
        height: 1200,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
	win.setMenu(null);
	win.loadFile('index.html');
    
	// We set an intercept on incoming requests to disable x-frame-options
	// headers.
	win.webContents.session.webRequest.onHeadersReceived({ urls: [ "*://*/*" ] },
	(d, c)=>{
			if(d.responseHeaders['X-Frame-Options']){
				delete d.responseHeaders['X-Frame-Options'];
			} else if(d.responseHeaders['x-frame-options']) {
				delete d.responseHeaders['x-frame-options'];
			}

			c({cancel: false, responseHeaders: d.responseHeaders});
		}
	);
};
 
app.whenReady().then(() => {
    createWindow();
 
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
 
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';