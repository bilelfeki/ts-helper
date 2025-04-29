export function getWordAtIndex(s: string, index: number): string {
  const sAsArray = s.trim().split(" ");
  return sAsArray[index] ? sAsArray[index] : "";
}
