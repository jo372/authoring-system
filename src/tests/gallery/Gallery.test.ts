import Gallery from "../../components/gallery/Gallery";

describe('Gallery', () => {
    it('should contain no image links', () => {
        const gallery = new Gallery();
        expect(gallery.images).toEqual([]);
    })
})