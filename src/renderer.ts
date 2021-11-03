/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import Button from './components/button/Button';
import "bootstrap/dist/css/bootstrap";

import './index.css';

const app : HTMLDivElement | null = document.getElementById('app') as HTMLDivElement;

if(app) {

    for(let i=0; i < 4; i++) {
        const b = new Button({
            variant: Button.variant.primary,
            text: "Hello World!",
            onClick: (e: Event) => {
                const target = e.target as HTMLElement;
                alert(target.innerText);
            }
        });
        app.appendChild(b.getElement());

    }
}
console.log('👋 This message is being logged by "renderer.js", included via webpack');
