const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
    },
  });

  win.loadURL("http://localhost:3000");
};

app.on("ready", createWindow);

/**
 * Quit when all windows are closed
 *
 * On OS-X it is common for applications and their menu bar
 * to stay active until the user quits explicitly with CMD + Q.
 */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

/**
 * On OS-X it is common to re-create a window in the app when the
 * dock icon is clicked and there are no other windows open.
 */
app.on("activate", () => {
  if (!BrowserWindow.getAllWindows().length) createWindow();
});
