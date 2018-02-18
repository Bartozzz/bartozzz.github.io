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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfc2NyaXB0cy9pbmRleC5qcyIsIl9zY3JpcHRzL3NlY3Rpb25zL2Fib3V0LmpzIiwiX3NjcmlwdHMvc2VjdGlvbnMvZ2FsbGVyeS5qcyIsIl9zY3JpcHRzL3NlY3Rpb25zL2dpdGh1Yi5qcyIsIl9zY3JpcHRzL3V0aWxzL2lzTW9iaWxlLmpzIiwiX3NjcmlwdHMvdXRpbHMvaXNUYWJsZXQuanMiLCJfc2NyaXB0cy91dGlscy9tYXRoL1BvaW50LmpzIiwiX3NjcmlwdHMvdXRpbHMvbWF0aC9SZWN0YW5nbGUuanMiLCJfc2NyaXB0cy91dGlscy9tYXRoL3JhbmRvbS5qcyIsIl9zY3JpcHRzL3V0aWxzL3RvQXJyYXkuanMiLCJub2RlX21vZHVsZXMvamF4LmpzL2Rpc3QvamF4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDeEQsVUFBUSxTQUFTLFVBQWpCO0FBQ0UsU0FBSyxhQUFMO0FBQ0U7QUFDQTtBQUNBOztBQUVGLFNBQUssVUFBTDtBQUNFO0FBQ0E7QUFDQTtBQVRKO0FBV0QsQ0FaRDs7Ozs7Ozs7O2tCQzZFZSxZQUFZO0FBQ3pCLE1BQUksNkJBQWMseUJBQWxCLEVBQThCO0FBQzVCLFlBQVEsR0FBUixDQUFZLDZCQUFaO0FBQ0E7QUFDRDs7QUFFRCxlQUFhLE1BQWIsRUFDRyxJQURILENBQ1EsWUFEUixFQUVHLElBRkgsQ0FFUSxZQUZSO0FBR0QsQzs7QUExRkQ7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBUyxPQUFPLFdBQVAsR0FBcUIsR0FBOUIsRUFBbUMsQ0FBbkMsQ0FBZjtBQUNBLElBQU0sU0FBUyxFQUFmO0FBQ0EsSUFBTSxTQUFTLEVBQWY7O0FBRUEsU0FBUyxZ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IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgYWJvdXQgZnJvbSBcIi4vc2VjdGlvbnMvYWJvdXRcIjtcbmltcG9ydCBnaXRodWIgZnJvbSBcIi4vc2VjdGlvbnMvZ2l0aHViXCI7XG5pbXBvcnQgZ2FsbGVyeSBmcm9tIFwiLi9zZWN0aW9ucy9nYWxsZXJ5XCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgc3dpdGNoIChkb2N1bWVudC5yZWFkeVN0YXRlKSB7XG4gICAgY2FzZSBcImludGVyYWN0aXZlXCI6XG4gICAgICBnaXRodWIoKTtcbiAgICAgIC8vIGp1bXAoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImNvbXBsZXRlXCI6XG4gICAgICBhYm91dCgpO1xuICAgICAgZ2FsbGVyeSgpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuIiwiaW1wb3J0IHRvQXJyYXkgZnJvbSBcIi4uL3V0aWxzL3RvQXJyYXlcIjtcbmltcG9ydCBpc01vYmlsZSBmcm9tIFwiLi4vdXRpbHMvaXNNb2JpbGVcIjtcbmltcG9ydCBpc1RhYmxldCBmcm9tIFwiLi4vdXRpbHMvaXNUYWJsZXRcIjtcbmltcG9ydCBnZXRSYW5kIGZyb20gXCIuLi91dGlscy9tYXRoL3JhbmRvbVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuLi91dGlscy9tYXRoL1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi91dGlscy9tYXRoL1JlY3RhbmdsZVwiO1xuXG5jb25zdCBtYXJnaW4gPSBwYXJzZUludCh3aW5kb3cuaW5uZXJIZWlnaHQgLyAxLjUsIDApO1xuY29uc3QgYW1vdW50ID0gMTM7XG5jb25zdCBoZWlnaHQgPSA5MDtcblxuZnVuY3Rpb24gY3JlYXRlU2hhcGVzKGFtb3VudCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGgucmFuZG9tO1xuICAgIGNvbnN0IHNoYXBlcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gbG9vcChpKSB7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgbGV0IGluc2lkZSA9IG51bGw7XG4gICAgICBsZXQgc2hhcGUgPSBudWxsO1xuXG4gICAgICBkbyB7XG4gICAgICAgIGNvbnN0IHggPSBwYXJzZUludChyYW5kb20oKSAqICh3aW5kb3cuaW5uZXJXaWR0aCAtIG1hcmdpbiksIDApO1xuICAgICAgICBjb25zdCB5ID0gcGFyc2VJbnQocmFuZG9tKCkgKiAod2luZG93LmlubmVySGVpZ2h0IC0gbWFyZ2luKSwgMCk7XG5cbiAgICAgICAgc2hhcGUgPSBuZXcgUmVjdGFuZ2xlKG5ldyBQb2ludCh4LCB5KSwgbmV3IFBvaW50KGhlaWdodCwgaGVpZ2h0KSk7XG4gICAgICAgIHNoYXBlLmZyaWN0aW9uID0gKHJhbmRvbSgpID4gLjUgPyA0MCA6IDkwKSArIGdldFJhbmQoLTEwLCAxMCk7XG5cbiAgICAgICAgaW5zaWRlID0gc2hhcGVzLnNvbWUoKGEpID0+IGEuY29sbGlkZXMoc2hhcGUpKTtcbiAgICAgICAgY291bnQgKz0gMTtcbiAgICAgIH0gd2hpbGUgKGluc2lkZSAmJiBjb3VudCA8IDIwMCk7XG5cbiAgICAgIGlmIChjb3VudCA8IDIwMCkge1xuICAgICAgICBzaGFwZXMucHVzaChzaGFwZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYW1vdW50OyArK2kpIHtcbiAgICAgIGxvb3AoaSk7XG4gICAgfVxuXG4gICAgcmVzb2x2ZShzaGFwZXMpO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHJlbmRlclNoYXBlcyhzaGFwZXMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNoYXBlcy1jb250YWluZXJcIik7XG5cbiAgICBmb3IgKGNvbnN0IHNoYXBlIG9mIHNoYXBlcykge1xuICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IFwiaGVyby1zaGFwZVwiO1xuICAgICAgZWxlbS5zdHlsZS50b3AgPSBzaGFwZS55ICsgbWFyZ2luIC8gMiArIFwicHhcIjtcbiAgICAgIGVsZW0uc3R5bGUubGVmdCA9IHNoYXBlLnggKyBtYXJnaW4gLyAyICsgXCJweFwiO1xuXG4gICAgICBlbGVtLmRhdGFzZXQuaW5kZXggPSBzaGFwZS5mcmljdGlvbiA+IDYwID8gMCA6IDE7XG4gICAgICBlbGVtLmRhdGFzZXQucGFyYWxsYXggPSB0cnVlO1xuICAgICAgZWxlbS5kYXRhc2V0LmZyaWN0aW9uID0gc2hhcGUuZnJpY3Rpb247XG5cbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIDApO1xuICB9KTtcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZVNoYXBlcygpIHtcbiAgdmFyIGVsZW1lbnRzID0gdG9BcnJheShcIltkYXRhLXBhcmFsbGF4XVwiKTtcblxuICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgdmFyIGYgPSBwYXJzZUludChlbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtZnJpY3Rpb25cIikpIHx8IDE7XG4gICAgICB2YXIgeCA9IGV2ZW50LnBhZ2VYICogLTEgLyAxMCAqIChmIC8gMTAwKTtcbiAgICAgIHZhciB5ID0gZXZlbnQucGFnZVkgKiAtMSAvIDEwICogKGYgLyAxMDApO1xuXG4gICAgICBlbGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpXCI7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBpZiAoaXNNb2JpbGUoKSB8fCBpc1RhYmxldCgpKSB7XG4gICAgY29uc29sZS5sb2coXCJNb2JpbGUsIGRvbid0IHJlbmRlciBzaGFwZXNcIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3JlYXRlU2hhcGVzKGFtb3VudClcbiAgICAudGhlbihyZW5kZXJTaGFwZXMpXG4gICAgLnRoZW4odXBkYXRlU2hhcGVzKTtcbn07XG4iLCIvLyBpbXBvcnQgRmxpY2tpdHkgZnJvbSBcImZsaWNraXR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3R1ZmYgPSBuZXcgRmxpY2tpdHkoXCIjZ2FsbGVyeVwiLCB7XG4gICAgc2V0R2FsbGVyeVNpemU6IGZhbHNlLFxuICAgIGNlbGxTZWxlY3RvcjogXCIuZ2FsbGVyeS1jZWxsXCIsXG4gICAgcGFnZURvdHM6IGZhbHNlLFxuICAgIGNvbnRhaW46IHRydWVcbiAgfSk7XG59O1xuIiwiaW1wb3J0IGpheCBmcm9tIFwiamF4LmpzXCI7XG5cbi8qXG5jb25zdCB0ZW1wbGF0ZSA9IGRhdGEgPT4gYFxuICA8ZGl2IGNsYXNzPVwiZ2l0aHViLXJlcG8tY29udGFpbmVyXCI+XG4gICAgPGEgY2xhc3M9XCJnaXRodWItcmVwby1uYW1lXCIgaHJlZj1cIiR7ZGF0YS5odG1sX3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke2RhdGEubmFtZX08L2E+XG4gICAgPHAgY2xhc3M9XCJnaXRodWItcmVwby1kZXNjXCI+JHtkYXRhLmRlc2NyaXB0aW9ufTwvcD5cblxuICAgIDxkaXYgY2xhc3M9XCJnaXRodWItcmVwby1tZXRhXCI+XG4gICAgICA8cCBjbGFzcz1cImdpdGh1Yi1yZXBvLWluZm9cIj48aW1nIGNsYXNzPVwiZ2l0aHViLXJlcG8taWNvblwiIHNyYz1cImltYWdlcy9pY29ucy9zdGFyLnN2Z1wiPiR7ZGF0YS5zdGFyZ2F6ZXJzX2NvdW50fTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiZ2l0aHViLXJlcG8taW5mb1wiPjxpbWcgY2xhc3M9XCJnaXRodWItcmVwby1pY29uXCIgc3JjPVwiaW1hZ2VzL2ljb25zL2Zvcmsuc3ZnXCI+JHtkYXRhLmZvcmtzX2NvdW50fTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgamF4KFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9CYXJ0b3p6ei9yZXBvc1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcblxuICAgICAgZGF0YS5mb3JFYWNoKGRhdHVtID0+IHtcbiAgICAgICAgY29uc3QgcmVwbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJlcG8tbmFtZT1cIiR7ZGF0dW0ubmFtZX1cIl1gKTtcblxuICAgICAgICBpZiAocmVwbykge1xuICAgICAgICAgIGNvbnN0IHN0YXJzID0gcmVwby5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yZXBvLXN0YXJzXWApO1xuICAgICAgICAgIGNvbnN0IGZvcmtzID0gcmVwby5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yZXBvLWZvcmtzXWApO1xuXG4gICAgICAgICAgc3RhcnMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGltZyBjbGFzcz1cImljb25cIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9zdGFyLnN2Z1wiIGFyaWEtbGFiZWw9XCJzdGFyXCI+XG4gICAgICAgICAgICAke2RhdHVtLnN0YXJnYXplcnNfY291bnR9XG4gICAgICAgICAgYDtcblxuICAgICAgICAgIGZvcmtzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpY29uIGlzLWJhbGFuY2VkXCIgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZm9yay5zdmdcIiBhcmlhLWxhYmVsPVwiZm9ya1wiPlxuICAgICAgICAgICAgJHtkYXR1bS5mb3Jrc19jb3VudH1cbiAgICAgICAgICBgO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLypcbiAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgIGRhdGEuZm9yRWFjaChkYXR1bSA9PiB7XG4gICAgICAgIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHdyYXAuY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1yZXBvXCIpO1xuICAgICAgICB3cmFwLmlubmVySFRNTCA9IHRlbXBsYXRlKGRhdHVtKTtcblxuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKHdyYXApO1xuICAgICAgfSk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVwb3NcIikuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAqL1xuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgbG9hZCBHaXRIdWIgcmVwb3NcIiwgZXJyb3IpO1xuICAgIH0pO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTW9iaWxlKCkge1xuICBsZXQgY2hlY2sgPSBmYWxzZTtcblxuICAoZnVuY3Rpb24gKGEpIHtcbiAgICAvLyBBIGxvbmcgcmVnZXggaGVyZS4uLlxuICAgIGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkge1xuICAgICAgY2hlY2sgPSB0cnVlO1xuICAgIH1cbiAgfSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSk7XG5cbiAgcmV0dXJuIGNoZWNrO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGFibGV0KCkge1xuICByZXR1cm4gL1RhYmxldHxpUGFkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBhZGQocG9pbnQpIHtcbiAgICB0aGlzLnggKz0gcG9pbnQueDtcbiAgICB0aGlzLnkgKz0gcG9pbnQueTtcbiAgfVxuXG4gIHN1YnRyYWN0KHBvaW50KSB7XG4gICAgdGhpcy54IC09IHBvaW50Lng7XG4gICAgdGhpcy55IC09IHBvaW50Lnk7XG4gIH1cblxuICBkaXN0YW5jZShwb2ludCkge1xuICAgIGNvbnN0IHggPSB0aGlzLnggLSBwb2ludC54O1xuICAgIGNvbnN0IHkgPSB0aGlzLnkgLSBwb2ludC55O1xuXG4gICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xuICB9XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgY29uc3RydWN0b3IoY29vcmRzLCBzaXplKSB7XG4gICAgdGhpcy54ID0gY29vcmRzLng7XG4gICAgdGhpcy55ID0gY29vcmRzLnk7XG5cbiAgICB0aGlzLndpZHRoICA9IHNpemUueDtcbiAgICB0aGlzLmhlaWdodCA9IHNpemUueTtcbiAgfVxuXG4gIGNvbGxpZGVzKHJlY3QpIHtcbiAgICByZXR1cm4gcmVjdC54IDwgdGhpcy54ICsgdGhpcy53aWR0aFxuICAgICAgICAmJiByZWN0LnkgPCB0aGlzLnkgKyB0aGlzLmhlaWdodFxuICAgICAgICAmJiByZWN0LnggKyByZWN0LndpZHRoICA+IHRoaXMueFxuICAgICAgICAmJiByZWN0LnkgKyByZWN0LmhlaWdodCA+IHRoaXMueTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgKG1pbiwgbWF4KSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9BcnJheShzZWxlY3Rvcikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufTtcbiIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbC5KYXggPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBqYXggPSBmdW5jdGlvbiBqYXgodXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgY2hhbmdlLmJpbmQodW5kZWZpbmVkLCByZXF1ZXN0LCByZXNvbHZlLCByZWplY3QpKTtcbiAgICByZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgcmVxdWVzdC5zZW5kKCk7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2UocmVxdWVzdCwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAocmVxdWVzdC5yZWFkeVN0YXRlID09PSByZXF1ZXN0LkRPTkUpIHtcbiAgICAgICAgcmVxdWVzdC5zdGF0dXMgPT09IDIwMCA/IHJlc29sdmUocmVxdWVzdC5yZXNwb25zZVRleHQpIDogcmVqZWN0KHJlcXVlc3Quc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxucmV0dXJuIGpheDtcblxufSkpKTtcbiJdfQ==
