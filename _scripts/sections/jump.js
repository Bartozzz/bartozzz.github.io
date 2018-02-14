import jump from "jump.js"
import toArray from "../utils/toArray";

export default function () {
  toArray("[data-jump]").forEach(jumper => {
    jumper.addEventListener("click", event => {
      event.preventDefault();

      const attr = jumper.getAttribute("data-jump");
      const elem = document.querySelector(attr);

      jump(elem, {
        duration: 1000
      });
    });
  });
};
