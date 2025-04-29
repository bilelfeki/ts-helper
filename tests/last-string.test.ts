import {
  divideWordWithLeftGreater,
  divideWordWithRightGreater,
  getLastWord,
  getWordAtIndex,
} from "../get-last-word";

describe("getLastWord function ", () => {
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

describe("divideWordWithLeftGreater", () => {
  test("it should divide the word at the middle", () => {
    const inputString = "1122";
    expect(divideWordWithLeftGreater(inputString)[0]).toBe("11");
    expect(divideWordWithLeftGreater(inputString)[1]).toBe("22");
  });
  test("it should divide the word but keep the left side greater ", () => {
    const inputString = "11233";
    expect(divideWordWithLeftGreater(inputString)[0]).toBe("112");
    expect(divideWordWithLeftGreater(inputString)[1]).toBe("33");
  });

  test("it should divide the word but keep the left side greater ", () => {
    const inputString = " ";
    expect(divideWordWithLeftGreater(inputString)[0]).toBe("");
    expect(divideWordWithLeftGreater(inputString)[1]).toBe("");
  });
});

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

describe("divideWordWithRightGreater", () => {
  test("it should divide the word at the middle", () => {
    const inputString = "1122";
    expect(divideWordWithRightGreater(inputString)[0]).toBe("11");
    expect(divideWordWithRightGreater(inputString)[1]).toBe("22");
  });
  test("it should divide the word but keep the right side greater ", () => {
    const inputString = "11233";
    expect(divideWordWithRightGreater(inputString)[0]).toBe("11");
    expect(divideWordWithRightGreater(inputString)[1]).toBe("233");
  });

  test("it should return empty strings ", () => {
    const inputString = " ";
    expect(divideWordWithRightGreater(inputString)[0]).toBe("");
    expect(divideWordWithRightGreater(inputString)[1]).toBe("");
  });
});
