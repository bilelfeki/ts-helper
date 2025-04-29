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
  