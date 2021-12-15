import { ButtonVariant } from "../../../components/button/Button";

describe('Button Variant', () => {
    it('primary should be "primary"', () => {
        expect(ButtonVariant.primary).toBe("primary");
    })
    it('secondary should be "secondary"', () => {
        expect(ButtonVariant.secondary).toBe("secondary");
    })
});