(self.webpackChunklaniewski_me=self.webpackChunklaniewski_me||[]).push([[7],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function s(t,r,a){return o()?(e.exports=s=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=s=function(e,t,r){var o=[null];o.push.apply(o,t);var s=new(Function.bind.apply(e,o));return r&&n(s,r.prototype),s},e.exports.default=e.exports,e.exports.__esModule=!0),s.apply(null,arguments)}e.exports=s,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),s=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||s(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},8125:function(e,t,r){var n=r(6899);e.exports={MDXRenderer:n}},6899:function(e,t,r){var n=r(9100),o=r(319),s=r(9713),a=r(7316),i=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r(7294),p=r(3497).mdx,d=r(5862).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,s=a(e,i),c=d(t),f=l.useMemo((function(){if(!r)return null;var e=u({React:l,mdx:p},c),t=Object.keys(e),s=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(s)))}),[r,t]);return l.createElement(f,u({},s))}},8969:function(e,t,r){"use strict";r.r(t),r.d(t,{BlogPostTemplate:function(){return p},default:function(){return d}});var n=r(8125),o=r(8567),s=r(7294),a=r(3886),i=r(5893);function c(e){var t=e.lang,r=void 0===t?"en":t,n=s.useRef(),o=(0,a.F)()[0],c=null!==o;return s.useLayoutEffect((function(){var e=n.current;if(e&&c){var t=function(e){var t=e.theme,r=e.lang,n="undefined"!=typeof window?window.location.origin:"";return'\n    <script src="https://giscus.app/client.js"\n      data-repo="Bartozzz/bartozzz.github.io"\n      data-repo-id="MDEwOlJlcG9zaXRvcnkyNDk1MjY5MQ=="\n      data-category="Discussion"\n      data-category-id="DIC_kwDOAXy_c84CAHzq"\n      data-mapping="pathname"\n      data-reactions-enabled="1"\n      data-emit-metadata="0"\n      data-theme='+("dark"===t?n+"/discussion-dark.css":n+"/discussion-light.css")+"\n      data-lang="+r+'\n      crossorigin="anonymous"\n      async>\n    <\/script>\n  '}({theme:o,lang:r}),s=document.createRange().createContextualFragment(t);return null==e||e.appendChild(s),function(){e.innerHTML=""}}}),[c]),s.useEffect((function(){var e,t,n="undefined"!=typeof window?window.location.origin:"";e={setConfig:{theme:"dark"===o?n+"/discussion-dark.css":n+"/discussion-light.css",lang:r}},(t=document.querySelector("iframe.giscus-frame"))&&t.contentWindow.postMessage({giscus:e},"https://giscus.app")}),[o,r]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"comments--"+o,ref:n})})}var u=r(6447),l=r(3836);function p(e){var t=e.data.mdx,r=t.frontmatter,s=t.excerpt,a=t.body,p=r.title,d=r.date,f=r.language,x=r.description,m=r.authors;return(0,i.jsxs)(u.A,{children:[(0,i.jsx)(l.H,{title:p,description:x||s}),(0,i.jsxs)(o.V,{children:[(0,i.jsxs)("article",{className:"post",itemScope:!0,itemType:"http://schema.org/Article",lang:f,children:[(0,i.jsxs)("header",{className:"post__header",children:[(0,i.jsx)("h1",{itemProp:"headline",children:p}),(0,i.jsx)("time",{dateTime:d,itemProp:"datePublished",children:d}),null!=m&&m.length?(0,i.jsx)("ul",{className:"visually-hidden",children:m.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)("p",{itemProp:"author",children:e})},e)}))}):null]}),(0,i.jsx)("section",{itemProp:"articleBody",className:"post__content",children:(0,i.jsx)(n.MDXRenderer,{children:a})})]}),(0,i.jsx)(c,{lang:f})]})]})}var d=p}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-79a520fb3fde42c0e777.js.map