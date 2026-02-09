import {app, BrowserWindow} from "electron";
import path from 'path';

app.on("ready",()=>{
    const mainWindow = new BrowserWindow({});
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));// path deals with the slash on diff devices ie windows \ on mac/linux /
})