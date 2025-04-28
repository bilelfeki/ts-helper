export function getLastWord(s: string): string {
  return s.trim().split(" ").pop() as string;
}
