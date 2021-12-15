import RenderableComponent from "../../lib/base/RenderableComponent";

interface ListItemProps {
    children?: RenderableComponent[],
    text?: string
}

export class ListItem extends RenderableComponent {
    constructor(props?: ListItemProps | string) {
        if(typeof props === "string") {
            props = {
                text: props
            };
        }
        
        super(props);
        this.defaultProps = {
            children: []
        }
    }
}

export enum ListType {
    ORDERED = "ol",
    UNORDERED = "ul"
}

interface ListProps {
    type?: ListType,
    children?: RenderableComponent[]
}

class List extends RenderableComponent {
    constructor(props?: ListProps) {
        super(props);
        this.defaultProps = {
            type: ListType.UNORDERED,
            children: []
        }
    }
}

export default List;