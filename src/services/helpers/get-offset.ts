export const getOffSet = (next: string | null, total: number): number => {
  if (!next) {
    return total;
  }
  const regex = /\d{2,}/g;
  const match = next.match(regex) as string[];

  return parseInt(match[0]) || 0;
};
