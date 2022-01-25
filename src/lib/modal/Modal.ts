import './modal.css';

class Modal {
    private static _instance : Modal;
    public static cssSelectors = {
        hidden: 'hidden',
        fadeIn: 'fade-in',
        fadeOut: 'fade-out',
    }

    public element: HTMLDivElement = Modal.create();

    private constructor() {}

    public static create() : HTMLDivElement {
        const html = `
                <div class="modal hidden">
                    <div class="modal__overlay"></div>
                    <div class="modal__wrapper">
                        <div class="modal__header">
                            <div class="modal__header-buttons">
            
                            </div>
                            <p class="modal__title"></p>
                            <button class="modal__close">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <div class="modal__body">
                        </div>
                        <div class="modal__footer">
                            <div class="modal__footer__buttons">
                                <button class="modal__footer__button secondary">
                                    Close
                                </button>
                                <button class="modal__footer__button primary">
                                    Okay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`.trim();

        const template = document.createElement('template');
        template.innerHTML = html;

        return template.content.firstElementChild as HTMLDivElement;
    }

    private removeSelector(selector: string) {
        const modal = this.element;
        if(modal.classList.contains(selector)) {
            modal.classList.remove(selector);
        }
    }

    private addSelector(selector: string) {
        const modal = this.element;
        if(!modal.classList.contains(selector)) {
            modal.classList.add(selector);
        }
    }

    private addEventListeners() {
        const _this = this;
        const modal = this.element;
        const clickableElementSelectors = [
            '.modal__footer__button',
            '.modal__overlay',
            '.modal__close'
        ]
        for(const selector of clickableElementSelectors) {
            const clickableElements = Array.from(modal.querySelectorAll(selector) as NodeListOf<HTMLElement>);
            for(const element of clickableElements) {
                element.addEventListener('click', () => {
                    _this.hide();
                });
            }
        }
    }
    
    public static getInstance() : Modal {
        if(!Modal._instance) {
            const newInstance = new Modal();
            newInstance.element = Modal.create();
            newInstance.addEventListeners();
            Modal._instance = newInstance;

            if(!document.querySelector('.modal')) {
                document.body.prepend(Modal._instance.element);
            }
        }
        return Modal._instance;
    }

    show() {
        const modal = this.element; 
        const { hidden, fadeIn } = Modal.cssSelectors;

        if(modal.classList.contains(hidden)) {
            modal.classList.remove(hidden);
        }
        modal.classList.add(fadeIn);
    }

    hide() {
        const { fadeOut, hidden, fadeIn } = Modal.cssSelectors;
        this.addSelector(fadeOut);
        
        setTimeout(() => {
            this.removeSelector(fadeOut);
            this.addSelector(hidden);
        }, 200);
        
        this.removeSelector(fadeIn);
    }

    setTitle(title: string) {
        const modal = this.element;
        const titleElement = modal.querySelector('.modal__title') as HTMLHeadingElement;
        titleElement.innerText = title;
    }
    
    getTitle() : string {
        return (this.element.querySelector('.modal__title') as HTMLHeadingElement).innerText;
    }

    setMessage(message: string) {
        const modal = this.element;
        const messageElement = modal.querySelector('.modal__body') as HTMLDivElement;
        messageElement.innerText = message;
    }

    getMessage() : string {
        return (this.element.querySelector('.modal__body') as HTMLDivElement).innerText;
    }
}

export default Modal;
