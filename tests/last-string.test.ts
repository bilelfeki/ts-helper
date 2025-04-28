import { getLastWord } from "../get-last-word";

describe("", () => {
  test("it should return a valid string when there are many words", () => {
    const inputString = "hello this a s first test case";
    expect(getLastWord(inputString)).toBe("case");
  });

  test("it should return the last word without any extra spaces", () => {
    const inputString1 = "this includes only one extra empty string ";
    const inputString2 = "this includes many extra empty string         ";
    expect(getLastWord(inputString1)).toBe("string");
    expect(getLastWord(inputString2)).toBe("string");
  });

  test("it should return itself when single word provided ", () => {
    expect(getLastWord("")).toBe("");
    expect(getLastWord("hi")).toBe("hi");
  });
});
