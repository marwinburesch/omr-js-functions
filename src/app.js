import "./global.css";
import { createButton } from "./components/button.js";

const addButton = createButton("Add two numbers");

document.body.append(addButton);
