import { ListType } from "../../../components/list/List";
describe('List Type', () => {
    it('should return "ol" when ListType.ORDERED is called', () => {
        expect(ListType.ORDERED).toBe("ol");
    })
    it('should return "ul" when ListType.UNORDERED is called', () => {
        expect(ListType.UNORDERED).toBe("ul");
    })
})