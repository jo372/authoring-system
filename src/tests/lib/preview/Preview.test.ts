import Preview from "../../../lib/preview/Preview";

describe('Preview', () => {
    beforeEach(() => {
        const div = document.createElement('div');
        div.id = 'app';
        document.body.appendChild(div);
    })

    it('setWindowSize should not set #app width if instance doesnt exist', () => {
        Preview.setWindowSize('100%');
        const element = document.getElementById('app') as HTMLDivElement;
        expect(element.style.width).toBe('');
    })

    it('instances of Preview should be the same', () => {
        const preview1 = Preview.getInstance();
        const preview2 = Preview.getInstance();
        expect(preview1).toBe(preview2);
    })
    
    it('setWindowSize should set the width of #app if getInstance() has been called', () => {
        Preview.getInstance();
        Preview.setWindowSize('100%');
        const element = document.getElementById('app') as HTMLDivElement;
        expect(element.style.maxWidth).toBe('100%');
    })
})