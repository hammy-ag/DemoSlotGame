import * as PIXI from 'pixi.js';
import preLoader from './preLoader';
// Create the application
const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x000000, 
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    autoStart: true
});
document.body.appendChild(app.view);
globalThis.__PIXI_APP__ = app;
new preLoader(app);

