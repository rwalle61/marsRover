const DECIMAL_RADIX = 10;

export const parseInteger = (string: string): number =>
  Number.parseInt(string, DECIMAL_RADIX);
