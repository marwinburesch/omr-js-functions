export default function fishHobbies(fishSchool) {
    // declare a variable and use the .map() method to get all hobbies
    const hobbiesOfAllFish = fishSchool.map(fish => fish.hobby)
    return hobbiesOfAllFish
   }

// This is the same result in just on line of code
// export default function fishHobbies(fishSchool) {
//     return fishSchool.map(fish => fish.hobby)
//    }

