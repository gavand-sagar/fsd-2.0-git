export function sum(numbers){
    let sum = 0;
    for (let item of numbers) {
      sum = sum + item;
    }
    return sum;
}