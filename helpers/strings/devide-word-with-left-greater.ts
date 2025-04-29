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
