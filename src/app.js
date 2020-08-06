import "./global.css";
import { createButton } from "./components/button.js";

const addButton = createButton("Add two numbers", () => console.log("added"));

document.body.append(addButton);
