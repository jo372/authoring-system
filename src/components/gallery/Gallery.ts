import RenderableComponent from "../../lib/base/RenderableComponent";

interface GalleryProps {
    images?: string[];
}

class Gallery extends RenderableComponent {
    private _images : string[];
    constructor(props ?: GalleryProps) {
        super(props ?? {});
        this.defaultProps = {
            images: []
        }
        this._images = this.props['images'];
    }

    public addImageSource(imageSrc: string) {
        this._images.push(imageSrc);
    }

    public removeImageSource(imageSrc: string) {
        this._images = this._images.filter(image => image !== imageSrc);
    }

    public get images() {
        return this._images;
    }
}

export default Gallery;