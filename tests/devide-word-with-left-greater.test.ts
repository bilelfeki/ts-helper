import { divideWordWithLeftGreater } from "../helpers/strings/devide-word-with-left-greater";

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
