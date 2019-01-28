import about from "./sections/about";
import github from "./sections/github";

document.addEventListener("readystatechange", function() {
  switch (document.readyState) {
    case "interactive":
      github();
      break;

    case "complete":
      about();
      break;
  }
});
