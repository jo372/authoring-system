import Button, { ButtonVariant } from "../../../components/button/Button";

describe('Button', () => {
    it('the default variant should be primary', () => {
        const button = new Button();
        expect(button.props['variant']).toBe(ButtonVariant.primary);        
    })
    it('the default text should be "Button"', () => {
        const button = new Button();
        expect(button.props['text']).toBe("Button");
    })
    it('the default onClick should be an empty function', () => {
        const button = new Button();
        expect(button.props['onClick']).toBeInstanceOf(Function);
    })
    it('when props are provided the values should be set', () => {
        const button = new Button({
            variant: ButtonVariant.secondary,
            text: "Test",
            onClick: () => {}
        });
        expect(button.props['variant']).toBe(ButtonVariant.secondary);
        expect(button.props['text']).toBe("Test");
        expect(button.props['onClick']).toBeInstanceOf(Function);
    })
})