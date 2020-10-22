export default function fishNamesSorted(fishSchool) {
    // declare a variable and use the .map() method to get all names
    const namesOfAllFish = fishSchool.map(fish => fish.name)
    // Use .sort() method to sort names alphabetically
    namesOfAllFish.sort()
    return namesOfAllFish
   }

// Same function, one line of code
// export default function fishNamesSorted(fishSchool) {
//     return fishSchool.map(fish => fish.name).sort()
//    }
