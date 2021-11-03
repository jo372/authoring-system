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
import Text, { TextType } from './components/text/Text';
import Image, { ImageProps } from './components/image/Image';

const app : HTMLDivElement | null = document.getElementById('app') as HTMLDivElement;

if(app) {

    for(let i=0; i < 4; i++) {
        const b = new Button({
            variant: Button.variant.primary,
            text: "Hello World!",
            onClick: (e: Event) => {
                const target = e.target as HTMLElement;
                alert(i+1);
            }
        });
        app.appendChild(b.getElement());

    }

    const t = new Text({
        text: "hello",
        type: TextType.PARAGRAPH
    });


    const i = new Image({
        src: "./assets/images/shiba.png",
        alt: "",
        width: 500,
        height: 500,
        isRounded: true
    })

    console.log(i);

    const elements = [t, i];

    const createImage = ({ src, alt, width, height, isRounded} : ImageProps) => {
        const el = document.createElement('img');
        el.src = src;
        el.alt = alt;
        el.width = width;
        el.height = height;
        el.classList.add('img');

        if(isRounded) {         
            el.classList.add('rounded');
        }
        return el;
    }

    elements.forEach(e => {
        if(e instanceof Image) {
            app.append(createImage(e));
        }
    })
    // const TextHandler = {
    //     get: function(target: any, prop: any, receiver: any) {
    //         console.log(prop );
    //     }
    // }
    // const p = new Proxy(t, TextHandler);
    // console.log('proxy', p);

    // console.log(t);

    // t.text = "Hello World";

    
    console.log(t);
    
}
console.log('👋 This message is being logged by "renderer.js", included via webpack');
