import Button, { ButtonVariant } from "../../../components/button/Button";

describe('Button', () => {
    it('shoud', () => {
        const button = new Button({
            variant: ButtonVariant.secondary,
            text: "Hello World",
            onClick: () => {
                alert("asdasd")
            }
        });
        console.log(button.toJSON());
    })
})