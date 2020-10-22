export default function removeMonkey(fruit) {
    // First find the index of the monkey in the array
    const monkeyIndex = fruit.indexOf("🐒")
    // Save the monkey in a seperate variable, log the variable
    const monkey = fruit[monkeyIndex]
    console.log(monkey)
    // Create a new array, using the slice method to delete
    // the monkey from the array
    const newFruitArray = [
         ...fruit.slice(0, monkeyIndex),
         ...fruit.slice(monkeyIndex + 1)
       ];
    // return the new array
    return newFruitArray
   }

// This is an alternative function using splice
// export default function removeMonkey(fruit) {
//     const monkeyIndex = fruit.indexOf("🐒")
//     const monkey = fruit[monkeyIndex]
//     console.log(monkey)
//     fruit.splice(monkeyIndex, 1)
//     return fruit
//    }