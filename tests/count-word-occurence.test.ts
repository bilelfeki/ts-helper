import { countWordOccurrence } from "../helpers/strings/count-word-occurence";

describe("countWordOccurrence", () => {
  const inputString3 = "hello 1 hello bilel from scratch 122 tyu";
  const inputString = "1122";
  const inputString2 = "1122 1122";
  test("it should return a valid number of occurrence", () => {
    expect(countWordOccurrence(inputString, "1122")).toBe(1);
    expect(countWordOccurrence(inputString2, "1122")).toBe(2);
    expect(countWordOccurrence(inputString3, "1")).toBe(1);
    expect(countWordOccurrence(inputString3, "hello")).toBe(2);
  });
  test("it should be case sensitive ", () => {
    const inputString3 = "hello 1 hello bilel hello";
    expect(countWordOccurrence(inputString3, "Hello")).toBe(0);
  });
});
