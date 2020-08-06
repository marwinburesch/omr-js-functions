// export default function sumAlternative(numbers) {
//   let result = 0;
//   for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     result = element + result;
//   }
//   return result;
// }

// export default function sumReducer(numbers) {
//   const reducer = (accumulator, currentValue) => accumulator + currentValue;
//   return numbers.reduce(reducer);
// }

export default function sum(numbers) {
  let result = 0;
  numbers.forEach((number) => {
    result = number + result;
  });
  return result;
}
