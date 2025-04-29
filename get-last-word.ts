export function getLastWord(s: string): string {
  return s.trim().split(" ").pop() as string;
}

export function getWordAtIndex(s: string, index: number): string {
  const sAsArray = s.trim().split(" ");
  return sAsArray[index] ? sAsArray[index] : "";
}

export function divideWordWithLeftGreater(s: string): string[] {
  const cleanString = s.trim();
  if (cleanString.length == 0) {
    return ["", ""];
  }
  return s.length % 2 == 0
    ? [
        cleanString.slice(0, cleanString.length / 2),
        cleanString.slice(cleanString.length / 2),
      ]
    : [
        cleanString.slice(0, cleanString.length / 2 + 1),
        cleanString.slice((cleanString.length + 1) / 2),
      ];
}

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
