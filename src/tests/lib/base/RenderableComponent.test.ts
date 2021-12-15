import List from "../../../components/list/List";
import { ListItem } from "../../../components/list/List";
import Button, { ButtonVariant } from "../../../components/button/Button";
import Gallery from "../../../components/gallery/Gallery";
import RenderableComponent from "../../../lib/base/RenderableComponent";

describe('Renderable Component', () => {
    it('when children are passed as props, they should be added to the children array.', () => {
        const testableChildren = [
            new ListItem("Hello World")
        ]
        const props = {
            children: testableChildren
        }
        const component = new List(props);
        expect(component.children.length).toBe(1);
        expect(component.children[0]).toBe(testableChildren[0]);
    })
    it('when a child is pushed is should be added to the component', () => {
        const component = new Gallery();
        const child = new Gallery()
        component.addChild(child);
        expect(component.children.length).toEqual(1);
        expect(component.children[0]).toEqual(child);
    });
    it('when properties provided in the constructor, expect props to be equal', () => {
        const component = new Gallery({ images: ['image1.jpg', 'image2.jpg'] });
        expect(component.props['images']).not.toBe(null);
        expect(component.props['images']).toEqual(['image1.jpg', 'image2.jpg']);
    })
    it('should add a children when addChild is called', () => {
        const component = new Gallery();
        const child = new Gallery()
        component.addChild(child);
        expect(component.children.length).toEqual(1);
        expect(component.children[0]).toEqual(child);
    })
    it('should remove a child when removeChild is called', () => {
        const component = new Gallery();
        const child = new Gallery()
        component.addChild(child);
        expect(component.children.length).toEqual(1);
        expect(component.children[0]).toEqual(child);
        component.removeChild(child);
        expect(component.children.length).toEqual(0);
        expect(component.children).toEqual([]);
    })
    it('should remove a child at index when removeChildAtIndex is called', () => {
        const component = new Gallery();
        const child = new Gallery()
        component.addChild(child);
        expect(component.children.length).toEqual(1);
        expect(component.children[0]).toEqual(child);
        component.removeChildAtIndex(0);
        expect(component.children.length).toEqual(0);
        expect(component.children).toEqual([]);
    })
    it('should return defaultProps and props merged when .props is called', () => {
        const _defaultProps = { text: 'test' }
        const _props = { text: 'test2' }

        interface testProps {
            text: string,
        }
        class test extends RenderableComponent {
            public testableDefaultProps;
            public testableProps;
            constructor(props: testProps) {
                super(props);
                this.defaultProps = _defaultProps;
                this.testableDefaultProps = this.defaultProps;
                this.testableProps = this.props;
            }
        }
        const component = new test(_props);
        expect(component.testableProps).toEqual({..._defaultProps, ..._props});
    });
    it('should return a JSON object when .toJSON is called of all the properties', () => {
        const props = { text: 'test', variant: ButtonVariant.primary }
        const button = new Button(props);
        const json = button.toJSON();
        expect(json).toMatchObject(props);
    });
})