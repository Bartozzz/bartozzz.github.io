import about from "./sections/about";
import github from "./sections/github";
import gallery from "./sections/gallery";

document.addEventListener("readystatechange", function () {
  switch (document.readyState) {
    case "interactive":
      github();
      // jump();
      break;

    case "complete":
      about();
      gallery();
      break;
  }
});
