export const formatNumber = (num: number): string => {
  if (num < 0.01) return '0';
  return num.toFixed(2);
};