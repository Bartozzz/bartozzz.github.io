import toArray from "../utils/toArray";
import isMobile from "../utils/isMobile";
import isTablet from "../utils/isTablet";
import getRand from "../utils/math/random";
import Point from "../utils/math/Point";
import Rectangle from "../utils/math/Rectangle";

const margin = parseInt(window.innerHeight / 1.5, 0);
const amount = 13;
const height = 90;

function createShapes(amount) {
  return new Promise((resolve, reject) => {
    const random = Math.random;
    const shapes = [];

    function loop(i) {
      let count = 0;
      let inside = null;
      let shape = null;

      do {
        const x = parseInt(random() * (window.innerWidth - margin), 0);
        const y = parseInt(random() * (window.innerHeight - margin), 0);

        shape = new Rectangle(new Point(x, y), new Point(height, height));
        shape.friction = (random() > .5 ? 40 : 90) + getRand(-10, 10);

        inside = shapes.some((a) => a.collides(shape));
        count += 1;
      } while (inside && count < 200);

      if (count < 200) {
        shapes.push(shape);
      }
    };

    for (let i = 0; i < amount; ++i) {
      loop(i);
    }

    resolve(shapes);
  });
};

function renderShapes(shapes) {
  return new Promise((resolve, reject) => {
    const container = document.getElementById("shapes-container");

    for (const shape of shapes) {
      var elem = document.createElement("div");

      elem.className = "hero-shape";
      elem.style.top = shape.y + margin / 2 + "px";
      elem.style.left = shape.x + margin / 2 + "px";

      elem.dataset.index = shape.friction > 60 ? 0 : 1;
      elem.dataset.parallax = true;
      elem.dataset.friction = shape.friction;

      container.appendChild(elem);
    }

    setTimeout(resolve, 0);
  });
};

function updateShapes() {
  var elements = toArray("[data-parallax]");

  document.body.addEventListener("mousemove", function (event) {
    elements.forEach(function (elem) {
      var f = parseInt(elem.getAttribute("data-friction")) || 1;
      var x = event.pageX * -1 / 10 * (f / 100);
      var y = event.pageY * -1 / 10 * (f / 100);

      elem.style.transform = "translate(" + x + "px, " + y + "px)";
    });
  });
};

export default function () {
  if (isMobile() || isTablet()) {
    console.log("Mobile, don't render shapes");
    return;
  }

  createShapes(amount)
    .then(renderShapes)
    .then(updateShapes);
};
