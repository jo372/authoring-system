import RenderableComponent from "../../lib/base/RenderableComponent";

export enum ButtonVariant {
    primary = "primary",
    secondary = "secondary"
}

export interface ButtonProps {
    variant?: ButtonVariant,
    text?: string,
    onClick?: (e: Event) => void;
}

class Button extends RenderableComponent {
    constructor(props ?: ButtonProps) {
        super(props);
        this.defaultProps = {
            variant: ButtonVariant.primary,
            text: "Button",
            onClick: () => {}
        }
    }
}

export default Button;