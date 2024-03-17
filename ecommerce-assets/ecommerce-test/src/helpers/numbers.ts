export function moneyFormat(number?: number | string, separator?: string) {
  if (!number) return 0;

  number = typeof number == "string" ? parseInt(number) : number;
  number = number.toFixed(2);

  number = number.replace(".", separator ?? ",");

  return number;
}
