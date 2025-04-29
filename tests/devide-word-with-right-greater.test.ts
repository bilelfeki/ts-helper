export function divideWordWithRightGreater(s: string): string[] {
  const cleanString = s.trim();
  if (cleanString.length == 0) {
    return ["", ""];
  }
  return [
    cleanString.slice(0, cleanString.length / 2),
    cleanString.slice(cleanString.length / 2),
  ];
}

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
