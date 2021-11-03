enum ButtonVariant {
    primary = "primary",
    secondard = "secondary"
}

interface ButtonConfig {
    variant?: ButtonVariant,
    text?: string,
    onClick : (e: Event) => void;
}
class Button {
    private element: HTMLButtonElement;
    static variant = ButtonVariant;
    constructor({variant = Button.variant.primary, text = "", onClick = (e => {})}: ButtonConfig) {
        const el : HTMLButtonElement = document.createElement('button');
        el.classList.add('btn', `btn-${variant}`);
        el.innerText = text;
        el.addEventListener('click', onClick);
        this.element = el;
    }

    getElement() {
        return this.element;
    }
}

export default Button;