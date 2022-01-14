
import Link from "../../../components/link/Link";

describe('Link', () => {
    it('href prop should return # by default', () => {
        const link = new Link({});
        expect(link.props['href']).toEqual('#');
    })
    it('href prop should return the value of the href prop', () => {
        const link = new Link({ href: 'test' });
        expect(link.props['href']).toEqual('test');
    })
    it('type prop should return undefined by default', () => {
        const link = new Link({});
        expect(link.props['type']).toBeUndefined();
    })
    
})