import {getFilenameExtension} from "../app/getFilenameExtension";

describe("getFilenameExtension", () => {
    it("returns extension from filename", () => {
        const filename = "photo.jpg";
        expect(getFilenameExtension(filename)).toBe("jpg")
    })
})