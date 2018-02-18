(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _about = require("./sections/about");

var _about2 = _interopRequireDefault(_about);

var _github = require("./sections/github");

var _github2 = _interopRequireDefault(_github);

var _gallery = require("./sections/gallery");

var _gallery2 = _interopRequireDefault(_gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("readystatechange", function () {
  switch (document.readyState) {
    case "interactive":
      (0, _github2.default)();
      // jump();
      break;

    case "complete":
      (0, _about2.default)();
      (0, _gallery2.default)();
      break;
  }
});

},{"./sections/about":2,"./sections/gallery":3,"./sections/github":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if ((0, _isMobile2.default)() || (0, _isTablet2.default)()) {
    console.log("Mobile, don't render shapes");
    return;
  }

  createShapes(amount).then(renderShapes).then(updateShapes);
};

var _toArray = require("../utils/toArray");

var _toArray2 = _interopRequireDefault(_toArray);

var _isMobile = require("../utils/isMobile");

var _isMobile2 = _interopRequireDefault(_isMobile);

var _isTablet = require("../utils/isTablet");

var _isTablet2 = _interopRequireDefault(_isTablet);

var _random = require("../utils/math/random");

var _random2 = _interopRequireDefault(_random);

var _Point = require("../utils/math/Point");

var _Point2 = _interopRequireDefault(_Point);

var _Rectangle = require("../utils/math/Rectangle");

var _Rectangle2 = _interopRequireDefault(_Rectangle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var margin = parseInt(window.innerHeight / 1.5, 0);
var amount = 13;
var height = 90;

function createShapes(amount) {
  return new Promise(function (resolve, reject) {
    var random = Math.random;
    var shapes = [];

    function loop(i) {
      var count = 0;
      var inside = null;
      var shape = null;

      do {
        var x = parseInt(random() * (window.innerWidth - margin), 0);
        var y = parseInt(random() * (window.innerHeight - margin), 0);

        shape = new _Rectangle2.default(new _Point2.default(x, y), new _Point2.default(height, height));
        shape.friction = (random() > .5 ? 40 : 90) + (0, _random2.default)(-10, 10);

        inside = shapes.some(function (a) {
          return a.collides(shape);
        });
        count += 1;
      } while (inside && count < 200);

      if (count < 200) {
        shapes.push(shape);
      }
    };

    for (var i = 0; i < amount; ++i) {
      loop(i);
    }

    resolve(shapes);
  });
};

function renderShapes(shapes) {
  return new Promise(function (resolve, reject) {
    var container = document.getElementById("shapes-container");

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = shapes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var shape = _step.value;

        var elem = document.createElement("div");

        elem.className = "hero-shape";
        elem.style.top = shape.y + margin / 2 + "px";
        elem.style.left = shape.x + margin / 2 + "px";

        elem.dataset.index = shape.friction > 60 ? 0 : 1;
        elem.dataset.parallax = true;
        elem.dataset.friction = shape.friction;

        container.appendChild(elem);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    setTimeout(resolve, 0);
  });
};

function updateShapes() {
  var elements = (0, _toArray2.default)("[data-parallax]");

  document.body.addEventListener("mousemove", function (event) {
    elements.forEach(function (elem) {
      var f = parseInt(elem.getAttribute("data-friction")) || 1;
      var x = event.pageX * -1 / 10 * (f / 100);
      var y = event.pageY * -1 / 10 * (f / 100);

      elem.style.transform = "translate(" + x + "px, " + y + "px)";
    });
  });
};

;

},{"../utils/isMobile":5,"../utils/isTablet":6,"../utils/math/Point":7,"../utils/math/Rectangle":8,"../utils/math/random":9,"../utils/toArray":10}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var stuff = new Flickity("#gallery", {
    setGallerySize: false,
    cellSelector: ".gallery-cell",
    pageDots: false,
    lazyLoad: true,
    contain: true
  });
};

; // import Flickity from "flickity";

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  (0, _jax2.default)("https://api.github.com/users/Bartozzz/repos").then(function (response) {
    var data = JSON.parse(response);

    data.forEach(function (datum) {
      var repo = document.querySelector("[data-repo-name=\"" + datum.name + "\"]");

      if (repo) {
        var stars = repo.querySelector("[data-repo-stars]");
        var forks = repo.querySelector("[data-repo-forks]");

        stars.innerHTML = "\n            <img class=\"icon\" src=\"/assets/images/icons/star.svg\" aria-label=\"star\">\n            " + datum.stargazers_count + "\n          ";

        forks.innerHTML = "\n            <img class=\"icon is-balanced\" src=\"/assets/images/icons/fork.svg\" aria-label=\"fork\">\n            " + datum.forks_count + "\n          ";
      }
    });

    /*
    const elem = document.createDocumentFragment();
     data.forEach(datum => {
      const wrap = document.createElement("div");
       wrap.classList.add("github-repo");
      wrap.innerHTML = template(datum);
       elem.appendChild(wrap);
    });
     document.querySelector("#repos").appendChild(elem);
    */
  }).catch(function (error) {
    console.error("Could not load GitHub repos", error);
  });
};

var _jax = require("jax.js");

var _jax2 = _interopRequireDefault(_jax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

/*
const template = data => `
  <div class="github-repo-container">
    <a class="github-repo-name" href="${data.html_url}" target="_blank">${data.name}</a>
    <p class="github-repo-desc">${data.description}</p>

    <div class="github-repo-meta">
      <p class="github-repo-info"><img class="github-repo-icon" src="images/icons/star.svg">${data.stargazers_count}</p>
      <p class="github-repo-info"><img class="github-repo-icon" src="images/icons/fork.svg">${data.forks_count}</p>
    </div>
  </div>
`;
 */

},{"jax.js":11}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isMobile;
function isMobile() {
  var check = false;

  (function (a) {
    // A long regex here...
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
      check = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
};

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTablet;
function isTablet() {
  return (/Tablet|iPad/i.test(navigator.userAgent || navigator.vendor || window.opera)
  );
};

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "add",
    value: function add(point) {
      this.x += point.x;
      this.y += point.y;
    }
  }, {
    key: "subtract",
    value: function subtract(point) {
      this.x -= point.x;
      this.y -= point.y;
    }
  }, {
    key: "distance",
    value: function distance(point) {
      var x = this.x - point.x;
      var y = this.y - point.y;

      return Math.sqrt(x * x + y * y);
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Point(this.x, this.y);
    }
  }]);

  return Point;
}();

exports.default = Point;
;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function () {
  function Rectangle(coords, size) {
    _classCallCheck(this, Rectangle);

    this.x = coords.x;
    this.y = coords.y;

    this.width = size.x;
    this.height = size.y;
  }

  _createClass(Rectangle, [{
    key: "collides",
    value: function collides(rect) {
      return rect.x < this.x + this.width && rect.y < this.y + this.height && rect.x + rect.width > this.x && rect.y + rect.height > this.y;
    }
  }]);

  return Rectangle;
}();

exports.default = Rectangle;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArray;
function toArray(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector));
};

},{}],11:[function(require,module,exports){
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Jax = factory());
}(this, (function () { 'use strict';

var jax = function jax(url) {
  return new Promise(function (resolve, reject) {
    var request = new window.XMLHttpRequest();
    request.addEventListener('readystatechange', change.bind(undefined, request, resolve, reject));
    request.open('GET', url);
    request.send();

    function change(request, resolve, reject) {
      if (request.readyState === request.DONE) {
        request.status === 200 ? resolve(request.responseText) : reject(request.status);
      }
    }
  });
};

return jax;

})));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc2NyaXB0cy9pbmRleC5qcyIsIl9zY3JpcHRzL3NlY3Rpb25zL2Fib3V0LmpzIiwiX3NjcmlwdHMvc2VjdGlvbnMvZ2FsbGVyeS5qcyIsIl9zY3JpcHRzL3NlY3Rpb25zL2dpdGh1Yi5qcyIsIl9zY3JpcHRzL3V0aWxzL2lzTW9iaWxlLmpzIiwiX3NjcmlwdHMvdXRpbHMvaXNUYWJsZXQuanMiLCJfc2NyaXB0cy91dGlscy9tYXRoL1BvaW50LmpzIiwiX3NjcmlwdHMvdXRpbHMvbWF0aC9SZWN0YW5nbGUuanMiLCJfc2NyaXB0cy91dGlscy9tYXRoL3JhbmRvbS5qcyIsIl9zY3JpcHRzL3V0aWxzL3RvQXJyYXkuanMiLCJub2RlX21vZHVsZXMvamF4LmpzL2Rpc3QvamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQsVUFBUSxTQUFTLFVBQWpCO0FBQ0UsU0FBSyxhQUFMO0FBQ0U7QUFDQTtBQUNBOztBQUVGLFNBQUssVUFBTDtBQUNFO0FBQ0E7QUFDQTtBQVRKO0FBV0QsQ0FaRDs7Ozs7Ozs7O2tCQzZFZSxZQUFZO0FBQ3pCLE1BQUksNkJBQWMseUJBQWxCLEVBQThCO0FBQzVCLFlBQVEsR0FBUixDQUFZLDZCQUFaO0FBQ0E7QUFDRDs7QUFFRCxlQUFhLE1BQWIsRUFDRyxJQURILENBQ1EsWUFEUixFQUVHLElBRkgsQ0FFUSxZQUZSO0FBR0QsQzs7QUExRkQ7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBUyxPQUFPLFdBQVAsR0FBcUIsR0FBOUIsRUFBbUMsQ0FBbkMsQ0FBZjtBQUNBLElBQU0sU0FBUyxFQUFmO0FBQ0EsSUFBTSxTQUFTLEVBQWY7O0FBRUEsU0FBUyxZ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ZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBhYm91dCBmcm9tIFwiLi9zZWN0aW9ucy9hYm91dFwiO1xuaW1wb3J0IGdpdGh1YiBmcm9tIFwiLi9zZWN0aW9ucy9naXRodWJcIjtcbmltcG9ydCBnYWxsZXJ5IGZyb20gXCIuL3NlY3Rpb25zL2dhbGxlcnlcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICBzd2l0Y2ggKGRvY3VtZW50LnJlYWR5U3RhdGUpIHtcbiAgICBjYXNlIFwiaW50ZXJhY3RpdmVcIjpcbiAgICAgIGdpdGh1YigpO1xuICAgICAgLy8ganVtcCgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiY29tcGxldGVcIjpcbiAgICAgIGFib3V0KCk7XG4gICAgICBnYWxsZXJ5KCk7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG4iLCJpbXBvcnQgdG9BcnJheSBmcm9tIFwiLi4vdXRpbHMvdG9BcnJheVwiO1xuaW1wb3J0IGlzTW9iaWxlIGZyb20gXCIuLi91dGlscy9pc01vYmlsZVwiO1xuaW1wb3J0IGlzVGFibGV0IGZyb20gXCIuLi91dGlscy9pc1RhYmxldFwiO1xuaW1wb3J0IGdldFJhbmQgZnJvbSBcIi4uL3V0aWxzL21hdGgvcmFuZG9tXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4uL3V0aWxzL21hdGgvUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL3V0aWxzL21hdGgvUmVjdGFuZ2xlXCI7XG5cbmNvbnN0IG1hcmdpbiA9IHBhcnNlSW50KHdpbmRvdy5pbm5lckhlaWdodCAvIDEuNSwgMCk7XG5jb25zdCBhbW91bnQgPSAxMztcbmNvbnN0IGhlaWdodCA9IDkwO1xuXG5mdW5jdGlvbiBjcmVhdGVTaGFwZXMoYW1vdW50KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5yYW5kb207XG4gICAgY29uc3Qgc2hhcGVzID0gW107XG5cbiAgICBmdW5jdGlvbiBsb29wKGkpIHtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBsZXQgaW5zaWRlID0gbnVsbDtcbiAgICAgIGxldCBzaGFwZSA9IG51bGw7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgY29uc3QgeCA9IHBhcnNlSW50KHJhbmRvbSgpICogKHdpbmRvdy5pbm5lcldpZHRoIC0gbWFyZ2luKSwgMCk7XG4gICAgICAgIGNvbnN0IHkgPSBwYXJzZUludChyYW5kb20oKSAqICh3aW5kb3cuaW5uZXJIZWlnaHQgLSBtYXJnaW4pLCAwKTtcblxuICAgICAgICBzaGFwZSA9IG5ldyBSZWN0YW5nbGUobmV3IFBvaW50KHgsIHkpLCBuZXcgUG9pbnQoaGVpZ2h0LCBoZWlnaHQpKTtcbiAgICAgICAgc2hhcGUuZnJpY3Rpb24gPSAocmFuZG9tKCkgPiAuNSA/IDQwIDogOTApICsgZ2V0UmFuZCgtMTAsIDEwKTtcblxuICAgICAgICBpbnNpZGUgPSBzaGFwZXMuc29tZSgoYSkgPT4gYS5jb2xsaWRlcyhzaGFwZSkpO1xuICAgICAgICBjb3VudCArPSAxO1xuICAgICAgfSB3aGlsZSAoaW5zaWRlICYmIGNvdW50IDwgMjAwKTtcblxuICAgICAgaWYgKGNvdW50IDwgMjAwKSB7XG4gICAgICAgIHNoYXBlcy5wdXNoKHNoYXBlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbW91bnQ7ICsraSkge1xuICAgICAgbG9vcChpKTtcbiAgICB9XG5cbiAgICByZXNvbHZlKHNoYXBlcyk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyU2hhcGVzKHNoYXBlcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hhcGVzLWNvbnRhaW5lclwiKTtcblxuICAgIGZvciAoY29uc3Qgc2hhcGUgb2Ygc2hhcGVzKSB7XG4gICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGVsZW0uY2xhc3NOYW1lID0gXCJoZXJvLXNoYXBlXCI7XG4gICAgICBlbGVtLnN0eWxlLnRvcCA9IHNoYXBlLnkgKyBtYXJnaW4gLyAyICsgXCJweFwiO1xuICAgICAgZWxlbS5zdHlsZS5sZWZ0ID0gc2hhcGUueCArIG1hcmdpbiAvIDIgKyBcInB4XCI7XG5cbiAgICAgIGVsZW0uZGF0YXNldC5pbmRleCA9IHNoYXBlLmZyaWN0aW9uID4gNjAgPyAwIDogMTtcbiAgICAgIGVsZW0uZGF0YXNldC5wYXJhbGxheCA9IHRydWU7XG4gICAgICBlbGVtLmRhdGFzZXQuZnJpY3Rpb24gPSBzaGFwZS5mcmljdGlvbjtcblxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgMCk7XG4gIH0pO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlU2hhcGVzKCkge1xuICB2YXIgZWxlbWVudHMgPSB0b0FycmF5KFwiW2RhdGEtcGFyYWxsYXhdXCIpO1xuXG4gIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICB2YXIgZiA9IHBhcnNlSW50KGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1mcmljdGlvblwiKSkgfHwgMTtcbiAgICAgIHZhciB4ID0gZXZlbnQucGFnZVggKiAtMSAvIDEwICogKGYgLyAxMDApO1xuICAgICAgdmFyIHkgPSBldmVudC5wYWdlWSAqIC0xIC8gMTAgKiAoZiAvIDEwMCk7XG5cbiAgICAgIGVsZW0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIjtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGlmIChpc01vYmlsZSgpIHx8IGlzVGFibGV0KCkpIHtcbiAgICBjb25zb2xlLmxvZyhcIk1vYmlsZSwgZG9uJ3QgcmVuZGVyIHNoYXBlc1wiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjcmVhdGVTaGFwZXMoYW1vdW50KVxuICAgIC50aGVuKHJlbmRlclNoYXBlcylcbiAgICAudGhlbih1cGRhdGVTaGFwZXMpO1xufTtcbiIsIi8vIGltcG9ydCBGbGlja2l0eSBmcm9tIFwiZmxpY2tpdHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBzdHVmZiA9IG5ldyBGbGlja2l0eShcIiNnYWxsZXJ5XCIsIHtcbiAgICBzZXRHYWxsZXJ5U2l6ZTogZmFsc2UsXG4gICAgY2VsbFNlbGVjdG9yOiBcIi5nYWxsZXJ5LWNlbGxcIixcbiAgICBwYWdlRG90czogZmFsc2UsXG4gICAgbGF6eUxvYWQ6IHRydWUsXG4gICAgY29udGFpbjogdHJ1ZVxuICB9KTtcbn07XG4iLCJpbXBvcnQgamF4IGZyb20gXCJqYXguanNcIjtcblxuLypcbmNvbnN0IHRlbXBsYXRlID0gZGF0YSA9PiBgXG4gIDxkaXYgY2xhc3M9XCJnaXRodWItcmVwby1jb250YWluZXJcIj5cbiAgICA8YSBjbGFzcz1cImdpdGh1Yi1yZXBvLW5hbWVcIiBocmVmPVwiJHtkYXRhLmh0bWxfdXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7ZGF0YS5uYW1lfTwvYT5cbiAgICA8cCBjbGFzcz1cImdpdGh1Yi1yZXBvLWRlc2NcIj4ke2RhdGEuZGVzY3JpcHRpb259PC9wPlxuXG4gICAgPGRpdiBjbGFzcz1cImdpdGh1Yi1yZXBvLW1ldGFcIj5cbiAgICAgIDxwIGNsYXNzPVwiZ2l0aHViLXJlcG8taW5mb1wiPjxpbWcgY2xhc3M9XCJnaXRodWItcmVwby1pY29uXCIgc3JjPVwiaW1hZ2VzL2ljb25zL3N0YXIuc3ZnXCI+JHtkYXRhLnN0YXJnYXplcnNfY291bnR9PC9wPlxuICAgICAgPHAgY2xhc3M9XCJnaXRodWItcmVwby1pbmZvXCI+PGltZyBjbGFzcz1cImdpdGh1Yi1yZXBvLWljb25cIiBzcmM9XCJpbWFnZXMvaWNvbnMvZm9yay5zdmdcIj4ke2RhdGEuZm9ya3NfY291bnR9PC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBqYXgoXCJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0JhcnRvenp6L3JlcG9zXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xuXG4gICAgICBkYXRhLmZvckVhY2goZGF0dW0gPT4ge1xuICAgICAgICBjb25zdCByZXBvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcmVwby1uYW1lPVwiJHtkYXR1bS5uYW1lfVwiXWApO1xuXG4gICAgICAgIGlmIChyZXBvKSB7XG4gICAgICAgICAgY29uc3Qgc3RhcnMgPSByZXBvLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJlcG8tc3RhcnNdYCk7XG4gICAgICAgICAgY29uc3QgZm9ya3MgPSByZXBvLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJlcG8tZm9ya3NdYCk7XG5cbiAgICAgICAgICBzdGFycy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwiaWNvblwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3N0YXIuc3ZnXCIgYXJpYS1sYWJlbD1cInN0YXJcIj5cbiAgICAgICAgICAgICR7ZGF0dW0uc3RhcmdhemVyc19jb3VudH1cbiAgICAgICAgICBgO1xuXG4gICAgICAgICAgZm9ya3MuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImljb24gaXMtYmFsYW5jZWRcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9mb3JrLnN2Z1wiIGFyaWEtbGFiZWw9XCJmb3JrXCI+XG4gICAgICAgICAgICAke2RhdHVtLmZvcmtzX2NvdW50fVxuICAgICAgICAgIGA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvKlxuICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgZGF0YS5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgd3JhcC5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViLXJlcG9cIik7XG4gICAgICAgIHdyYXAuaW5uZXJIVE1MID0gdGVtcGxhdGUoZGF0dW0pO1xuXG4gICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQod3JhcCk7XG4gICAgICB9KTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXBvc1wiKS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICovXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBsb2FkIEdpdEh1YiByZXBvc1wiLCBlcnJvcik7XG4gICAgfSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNb2JpbGUoKSB7XG4gIGxldCBjaGVjayA9IGZhbHNlO1xuXG4gIChmdW5jdGlvbiAoYSkge1xuICAgIC8vIEEgbG9uZyByZWdleCBoZXJlLi4uXG4gICAgaWYgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KGEpIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCwgNCkpKSB7XG4gICAgICBjaGVjayA9IHRydWU7XG4gICAgfVxuICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcblxuICByZXR1cm4gY2hlY2s7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUYWJsZXQoKSB7XG4gIHJldHVybiAvVGFibGV0fGlQYWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEpO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIGFkZChwb2ludCkge1xuICAgIHRoaXMueCArPSBwb2ludC54O1xuICAgIHRoaXMueSArPSBwb2ludC55O1xuICB9XG5cbiAgc3VidHJhY3QocG9pbnQpIHtcbiAgICB0aGlzLnggLT0gcG9pbnQueDtcbiAgICB0aGlzLnkgLT0gcG9pbnQueTtcbiAgfVxuXG4gIGRpc3RhbmNlKHBvaW50KSB7XG4gICAgY29uc3QgeCA9IHRoaXMueCAtIHBvaW50Lng7XG4gICAgY29uc3QgeSA9IHRoaXMueSAtIHBvaW50Lnk7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcihjb29yZHMsIHNpemUpIHtcbiAgICB0aGlzLnggPSBjb29yZHMueDtcbiAgICB0aGlzLnkgPSBjb29yZHMueTtcblxuICAgIHRoaXMud2lkdGggID0gc2l6ZS54O1xuICAgIHRoaXMuaGVpZ2h0ID0gc2l6ZS55O1xuICB9XG5cbiAgY29sbGlkZXMocmVjdCkge1xuICAgIHJldHVybiByZWN0LnggPCB0aGlzLnggKyB0aGlzLndpZHRoXG4gICAgICAgICYmIHJlY3QueSA8IHRoaXMueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgICYmIHJlY3QueCArIHJlY3Qud2lkdGggID4gdGhpcy54XG4gICAgICAgICYmIHJlY3QueSArIHJlY3QuaGVpZ2h0ID4gdGhpcy55O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCAobWluLCBtYXgpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0FycmF5KHNlbGVjdG9yKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59O1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsLkpheCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIGpheCA9IGZ1bmN0aW9uIGpheCh1cmwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBjaGFuZ2UuYmluZCh1bmRlZmluZWQsIHJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCkpO1xuICAgIHJlcXVlc3Qub3BlbignR0VUJywgdXJsKTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZShyZXF1ZXN0LCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgPT09IHJlcXVlc3QuRE9ORSkge1xuICAgICAgICByZXF1ZXN0LnN0YXR1cyA9PT0gMjAwID8gcmVzb2x2ZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCkgOiByZWplY3QocmVxdWVzdC5zdGF0dXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5yZXR1cm4gamF4O1xuXG59KSkpO1xuIl19
