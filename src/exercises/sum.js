export default function sum(numbers) {
  // declare a variable that can be reassigned within this scope
  let result = 0;
  // forEach runs over the incoming array (numbers)
  numbers.forEach((number) => {
    result = number + result;
  });
  return result;
}

// This is the same function but written differently
// export default function sum(numbers) {
//   let result = 0;
//   const add = (number) => (result = number + result);
//   numbers.forEach(add);
//   return result;
// }

// ALTERNATIVES
// export default function sum(numbers) {
//   return numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
// }
