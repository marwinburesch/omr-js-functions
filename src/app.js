import "./global.css";
import { createButton } from "./components/button.js";
import add from "./exercises/add";

const severalNumbers = [3, 4, 45, 7, 23, 7, 87, 3];
const fruit = ["🍌", "🥝", "🍍", "🐒"];
const fishSchool = [
  { name: "Arthur", species: "Swordfish", hobby: "Swordfishing" },
  { name: "Wal Russ", species: "Bluewhale", hobby: "Roaming" },
  { name: "Kai", species: "Koi", hobby: "Swimming in circles" },
  { name: "Marwin", species: "Human", hobby: "Coding in circles? whot??" },
];

// EXERCISE 1
// log 4 + 5 to the console
const addButton = createButton("Add two numbers", () => console.log(add(4, 5)));

// EXERCISE 2
// log the sum of "severalNumbers" to the console
const sumSeveralNumbersButton = createButton("Sum up array", () =>
  console.log(sum(severalNumbers))
);

// EXERCISE 3
// log an array that contains only numbers from
// "severalNumbers" that are greater than 10
const filterArrayButton = createButton("Filter array", () =>
  console.log(filterNumbers(severalNumbers))
);

// EXERCISE 4
// remove the monkey from "fruit" and
// log both the result and the monkey
const removeMonkeyButton = createButton("Separate monkey from fruit", () =>
  console.log(removeMonkey(fruit))
);

// EXERCISE 5
// log all the hobbies
const fishHobbiesButton = createButton("Show fish-hobbies", () =>
  console.log(fishHobbies(fishSchool))
);

// EXERCISE 6
// log all names in the school of fish, sorted alphabetically
const fishNamesButton = createButton("Sort fish-names", () =>
  console.log(fishNamesSorted(fishSchool))
);

document.body.append(addButton);
document.body.append(sumSeveralNumbersButton);
document.body.append(filterArrayButton);
document.body.append(removeMonkeyButton);
document.body.append(fishHobbiesButton);
document.body.append(fishNamesButton);
