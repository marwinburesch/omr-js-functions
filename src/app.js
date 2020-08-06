import "./global.css";
import { createButton } from "./components/button.js";
import { add } from "./exercises/add";

const addButton = createButton("Add two numbers", () => console.log(add(4, 5)));

document.body.append(addButton);
