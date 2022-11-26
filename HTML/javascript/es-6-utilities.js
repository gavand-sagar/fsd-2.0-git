import { sum as calculateSum } from "./es-6-utilities-sum.js";

export function average(...numbers) {
  let sum = calculateSum(numbers);
  let avg = sum / numbers.length;
  return avg;
}


