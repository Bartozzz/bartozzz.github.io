import toArray from "../utils/toArray";
import isMobile from "../utils/isMobile";
import isTablet from "../utils/isTablet";
import getRand from "../utils/math/random";
import Point from "../utils/math/Point";
import Rectangle from "../utils/math/Rectangle";

const margin = parseInt(window.innerHeight / 1.5, 0);
const height = 90;

/**
 * Creates shapes.
 *
 * @param   {number}  amount  How much shapes should be generated
 * @return  {Promise<Array>}  Array of shapes
 */
function createShapes(amount) {
  return new Promise((resolve, reject) => {
    const shapes = [];
    const xScale = window.innerWidth - margin;
    const yScale = window.innerHeight - margin;

    while (--amount) {
      let collides, rectangle;
      let retries = 200;

      do {
        const x = Math.random() * xScale;
        const y = Math.random() * yScale;

        rectangle = new Rectangle(x, y, height, height);
        collides = shapes.some(shape => shape.collides(rectangle));
      } while (collides && --retries > 0);

      if (retries > 0) {
        shapes.push(rectangle);
      }
    }

    resolve(shapes);
  });
}

/**
 * Renders shapes in a container.
 *
 * @param   {Array}   shapes  Shapes to render
 * @return  {void}
 */
function renderShapes(shapes) {
  const container = document.getElementById("shapes-container");

  for (const shape of shapes) {
    const element = document.createElement("div");
    const friction = (Math.random() > 0.5 ? 40 : 90) + getRand(-10, 10);

    element.className = "hero-shape";
    element.style.top = shape.y + margin / 2 + "px";
    element.style.left = shape.x + margin / 2 + "px";

    element.dataset.index = friction > 60 ? 0 : 1;
    element.dataset.friction = friction;

    container.appendChild(element);
  }

  container.classList.add("is-rendered");
}

/**
 * Updates shape position on mouse move.
 *
 * @return  {void}
 */
function updateShapes() {
  const elements = toArray("[data-friction]");
  const friction = elements.map(e => parseInt(e.getAttribute("data-friction")));

  document.body.addEventListener("mousemove", function(event) {
    elements.forEach(function(elem, key) {
      const f = friction[key] || 1;
      const x = -(event.pageX * f) / 1000;
      const y = -(event.pageY * f) / 1000;

      elem.style.transform = "translate(" + x + "px, " + y + "px)";
    });
  });
}

export default function() {
  if (isMobile() || isTablet()) {
    return;
  }

  createShapes(12)
    .then(renderShapes)
    .then(updateShapes);
}
