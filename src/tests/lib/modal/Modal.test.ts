import Modal from '../../../lib/modal/Modal';
describe('Modal', () => {
    it('should only create one modal', () => {
        const modal1 = Modal.getInstance();
        const modal2 = Modal.getInstance();
        expect(modal1).toBe(modal2);
    })
    it('when show() is called it should remove the the hidden css selector if it has been added', () => {
        const modal = Modal.getInstance();
        const { hidden } = Modal.cssSelectors;
        modal.element.classList.add(hidden);
        modal.show();
        expect(modal.element.classList.contains(hidden)).toBe(false);
    })
    it('when show() is called it should add the fade-in css selector', () => {
        const modal = Modal.getInstance();
        const { fadeIn } = Modal.cssSelectors;
        modal.show();
        expect(modal.element.classList.contains(fadeIn)).toBe(true);
    })
    it('when hide() is called it should add the fade-out selector', () => {
        const modal = Modal.getInstance();
        const { fadeOut } = Modal.cssSelectors;
        modal.hide();
        expect(modal.element.classList.contains(fadeOut)).toBe(true);
    })
    it('when hide() is called after 200 ms it should remove the fadeIn selector', () => {
        const modal = Modal.getInstance();
        const { fadeIn } = Modal.cssSelectors;
        modal.show();
        modal.hide();
        setTimeout(() => {
            expect(modal.element.classList.contains(fadeIn)).toBe(false);
        }, 200);
    })
    it('when hide() is called after 200ms it should add the selector hidden', () => {
        const modal = Modal.getInstance();
        const { hidden } = Modal.cssSelectors;
        modal.show();
        modal.hide();
        setTimeout(() => {
            expect(modal.element.classList.contains(hidden)).toBe(true);
        }, 200);
    })
    it('when setTitle() is called it should set the .modal__title to the value', () => {
        const modal = Modal.getInstance();
        const title = 'title';
        modal.setTitle(title);
        expect(modal.getTitle()).toBe(title);
    })
    it('when setMessage() is called it should set the .modal__body to the value', () => {
        const modal = Modal.getInstance();
        const message = 'message';
        modal.setMessage(message);
        expect(modal.getMessage()).toBe(message);
    })
    it('when the .modal__overlay is clicked it should add the fade-out css selector', () => {
        const modal = Modal.getInstance();
        const { fadeOut } = Modal.cssSelectors;
        modal.show();
        const element = modal.element.querySelector('.modal__overlay') as HTMLDivElement;
        element.click();
        expect(modal.element.classList.contains(fadeOut)).toBe(true);
    })
});