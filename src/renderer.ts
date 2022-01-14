import "bootstrap/dist/css/bootstrap";
import './index.css';
import RenderableComponent from './lib/base/RenderableComponent/RenderableComponent';


class Renderer {
    private static _instance : Renderer;
    private static elements = Array();
    private constructor() {}
    public static getInstance() : Renderer {
        if(!Renderer._instance) {
            Renderer._instance = new Renderer();
        }
        return Renderer._instance;
    }
    public static addComponent<C extends RenderableComponent>(component: C) : void {
        this.elements.push(component);
    }
    public static removeComponent<C extends RenderableComponent>(component: C) : void {
        this.elements.find((obj, idx) => {
            if(obj === component) this.elements.splice(idx, 1); // if the component is the current object, remove it from the array. 
        });
    }
    private render() {
        
    }
}

const app : HTMLDivElement | null = document.getElementById('app') as HTMLDivElement;

if(app) {
    
}
