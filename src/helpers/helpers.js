export const shortenDecimal = (num) => num % 1 === 0 ? num : num.toFixed(2);