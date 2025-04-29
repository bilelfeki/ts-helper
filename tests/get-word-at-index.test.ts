import { getWordAtIndex } from "../helpers/strings/get-word-at-index";

describe("getWordAtIndex", () => {
  test("it should return word at index 2", () => {
    const inputString = "hello my name is bilel ";
    expect(getWordAtIndex(inputString, 2)).toBe("name");
  });
  test("it should return empty string", () => {
    const inputString = "  ";
    expect(getWordAtIndex(inputString, 2)).toBe("");
  });
});

