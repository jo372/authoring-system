
export enum TextType {
    HEADING = "heading",
    PARAGRAPH = "paragraph",
}

interface TextProps {
    text?: string, 
    type?: TextType
}

class Text {
    public text : string;
    public type : TextType;
    constructor({text = "", type = TextType.PARAGRAPH} : TextProps) {
        this.type = type;
        this.text = text;
    }
} 

export default Text;