import "./button.css";
import { createElement } from "../utils/manipulateDom.js";

export function createButton(text) {
  const button = createElement("button", {
    className: "button_primary",
    innerHTML: text,
  });
  return button;
}
