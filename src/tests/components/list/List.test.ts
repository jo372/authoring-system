import List, { ListType } from "../../../components/list/List";
describe('List', () => {
    it('the default list type should be UNORDERED', () => {
        const list = new List();
        expect(list.props['type']).toBe(ListType.UNORDERED);   
    })
    it('it should contain no children by default', () => {
        const list = new List();
        expect(list.children.length).toBe(0);
    })
})