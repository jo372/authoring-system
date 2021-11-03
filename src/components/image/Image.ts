export interface ImageProps {
    src: string,
    alt: string,
    width: number,
    height: number,
    isRounded: boolean
}

class Image {
    public src : string;
    public alt : string;
    public width : number;
    public height : number;
    public isRounded : boolean;
    constructor({ src = "", alt = "", width = 0, height = 0, isRounded = false}: Partial<ImageProps>) {
        this.src = src;
        this.alt = alt;
        this.width = width;
        this.height = height;
        this.isRounded = isRounded;
    }

}

export default Image;