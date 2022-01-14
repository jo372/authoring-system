import RenderableComponent from "../../lib/base/RenderableComponent";


enum LinkType {
    TELEPHONE = "tel",
    EMAIL = "mailto"
}

interface LinkProps {
    href?: string | undefined;
    type?: LinkType | undefined;
    text?: string | undefined; 
}

class Link extends RenderableComponent<LinkProps> {
    constructor(props ?: LinkProps) {
        super(props);
        this.defaultProps = {
            href: "#",
            text: ""
        }
    }
}

export default Link;