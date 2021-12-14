import Gallery from "../../../components/gallery/Gallery";

describe('Gallery', () => {
    it('should contain no image links when constructed', () => {
        const gallery = new Gallery();
        expect(gallery.images).toEqual([]);
        expect(gallery.images.length).toEqual(0);
    })
    it('when images are provided through the constructor they should be added to the images array', () => {
        const gallery = new Gallery({ images: ['image1.jpg', 'image2.jpg'] });
        expect(gallery.images).toEqual(['image1.jpg', 'image2.jpg']);
        expect(gallery.images.length).toEqual(2);
    })
    it('should add an image source when addImageSource is called', () => {
        const gallery = new Gallery();
        gallery.addImageSource('image.jpg');
        expect(gallery.images[0]).toEqual('image.jpg');
        expect(gallery.images.length).toEqual(1);
    })
    it('should remove an image source when removeImageSource is called', () => {
        const gallery = new Gallery();
        gallery.addImageSource('image.jpg');
        expect(gallery.images.length).toEqual(1);
        expect(gallery.images[0]).toEqual('image.jpg');
        gallery.removeImageSource('image.jpg');
        expect(gallery.images.length).toEqual(0);
        expect(gallery.images).toEqual([]);
    })
})