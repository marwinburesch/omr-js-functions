export default function filterNumbers(numbers) {
    // declare a variable with filtered numbers above 10
    const numbersAboveTen = numbers.filter(number => number > 10)
    // return result
    return numbersAboveTen
}

// This is the same function without an extra variable
// export default function filterNumbers(numbers) {
//     return numbers.filter(number => number > 10)
// }