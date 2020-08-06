import "./button.css";
import { createElement } from "../utils/manipulateDom.js";

export function createButton(text, onClick) {
  const button = createElement("button", {
    className: "button_primary",
    innerHTML: text,
  });

  button.addEventListener("click", onClick);

  return button;
}
