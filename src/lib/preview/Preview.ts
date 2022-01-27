import './preview.css';

type ScreenSizeName = 'mobile' | 'tablet' | 'desktop';

export const PreviewScreenSize : Record<ScreenSizeName, string> = {
    mobile: '375px',
    tablet: '768px',
    desktop: '100%'
};
        
export class Preview {
    private static _instance : Preview;
    
    private static getPreviewWindow() : HTMLDivElement {
        return document.getElementById('app') as HTMLDivElement;
    }
    
    private element : HTMLDivElement | undefined;

    private constructor() {}

    public static setWindowSize(size: string) {

        if(!Preview._instance) {
            Preview.getInstance();
        }

        const element = Preview._instance.element as HTMLDivElement;

        if(element) {
            element.style.maxWidth = size;
        }
    }

    public static getInstance() : Preview {
        if(!Preview._instance) {
            const instance = new Preview();
            instance.element = Preview.getPreviewWindow();
            Preview._instance = instance;
        }
        return Preview._instance;
    }

}

export default Preview;