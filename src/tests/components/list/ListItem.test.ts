import { ListItem } from "../../../components/list/List";

describe('List Item', () => {
    it('when a string is provided, it should modify the props to have text: text_content', () => {
        const component = new ListItem('test');
        expect(component.props['text']).toEqual('test');
    })
})