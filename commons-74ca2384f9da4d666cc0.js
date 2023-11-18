/*! For license information please see commons-74ca2384f9da4d666cc0.js.LICENSE.txt */
(self.webpackChunklaniewski_me=self.webpackChunklaniewski_me||[]).push([[351],{4184:function(e,t){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var c=r.apply(null,n);c&&e.push(c)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},8875:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var a="index-module--content--362fb",r=n(5893);function i(e){let{children:t,...n}=e;return(0,r.jsx)("main",{...n,id:"content",className:a,itemProp:"mainContentOfPage",children:t})}},5551:function(e,t,n){"use strict";n.d(t,{A:function(){return F}});var a="index-module--skip--87c78",r="index-module--footer--71e3c",i="index-module--footer__item--e89b0",c="index-module--footer__item-icon--edd87",o="index-module--footer__item-icon--youtube--895ec",l="index-module--footer__item--right--e7629",s="index-module--footer__item-text--34952",u="index-module--footer__menu--915b7",d="index-module--footer__source--2867f",h=n(1883),f=n(5443),p=n.n(f),m=n(7541),v=n.n(m),k=n(1172),g=n.n(k),x=n(9456),b=n.n(x),y=n(5893);function j(e){switch(e){case"GitHub":return(0,y.jsx)(v(),{className:`${c}`});case"Dribbble":return(0,y.jsx)(p(),{className:`${c}`});case"LinkedIn":return(0,y.jsx)(g(),{className:`${c} `});case"YouTube":return(0,y.jsx)(b(),{className:`${c} ${o}`});default:return null}}function _(){const{site:e}=(0,h.useStaticQuery)("3216310583");return(0,y.jsxs)("footer",{className:r,itemType:"http://schema.org/WPFooter",itemScope:!0,children:[(0,y.jsx)("nav",{itemType:"http://schema.org/ContactPoint",itemScope:!0,children:(0,y.jsxs)("ul",{className:`${u} list`,children:[Object.entries(e.siteMetadata.social).map((e=>{let[t,n]=e;return(0,y.jsx)("li",{className:i,children:(0,y.jsxs)("a",{target:"_blank",itemProp:"url",rel:"noopener noreferrer",href:n,children:[j(t),(0,y.jsx)("span",{className:s,children:t})]})},t)})),(0,y.jsx)("li",{className:`${i} ${l}`,children:(0,y.jsx)("a",{target:"_blank",itemProp:"email",rel:"author noopener noreferrer",href:`mailto:${e.siteMetadata.contact}`,children:"Get in touch"})})]})}),(0,y.jsxs)("p",{className:d,itemProp:"description",children:["Hand-coded using Gatsby, TypeScript and more."," ",(0,y.jsx)("a",{target:"_blank",itemProp:"url",rel:"noopener noreferrer",href:e.siteMetadata.siteRepo,children:"See the source."})]})]})}var C="index-module--header--b915a",E="index-module--header__content--ba80b",N="index-module--header__item--7d32e",S="index-module--header__item--logo--c2ac3",T="index-module--header__item--toggle-placeholder--e3afb",M=n(7294),P=n(1711);const w=n(888).Z;function O(){const[e,t]=(0,P.F)(),n=M.useCallback((e=>{t(e.target.checked?"dark":"light")}),[t]);return(0,y.jsx)("nav",{className:C,itemType:"http://schema.org/SiteNavigationElement",itemScope:!0,children:(0,y.jsxs)("ul",{className:E,children:[(0,y.jsx)("li",{className:`${N} ${S}`,children:(0,y.jsx)(h.Link,{to:"/",title:"Go to main page",children:"Bart"})}),(0,y.jsx)("li",{className:N,children:(0,y.jsx)(h.Link,{to:"/posts/",children:"Devblog"})}),(0,y.jsx)("li",{className:N,children:(0,y.jsx)("a",{target:"_blank",rel:"author noopener noreferrer",href:"https://drive.google.com/file/d/1Zh3NaFogEkufa25H7qxqj0QdqHPzyfZX/view",title:"Get my résumé from Google Drive",children:"Résumé"})}),null!==e?(0,y.jsx)("li",{className:N,children:(0,y.jsx)(w,{"aria-label":"Toggle theme",checked:"dark"===e,onChange:n,icons:!1})}):(0,y.jsx)("li",{className:N,children:(0,y.jsx)("div",{className:T})})]})})}function F(e){let{children:t}=e;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("a",{className:`${a} visually-hidden`,href:"#content",children:"Skip to main content"}),(0,y.jsx)(O,{}),t,(0,y.jsx)(_,{})]})}},2349:function(e,t,n){"use strict";n.d(t,{H:function(){return c}});var a=n(1883),r=n(1711),i=n(5893);function c(e){let{title:t,description:n}=e;const[c]=(0,r.F)(),{site:o}=(0,a.useStaticQuery)("3000541721"),l=n||o.siteMetadata.description,s=t?`${t} • ${o.siteMetadata.title}`:`${o.siteMetadata.title}`;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("title",{children:s}),(0,i.jsx)("meta",{name:"description",content:l}),null!==c?(0,i.jsx)("meta",{name:"theme-color",content:"light"===c?"#ffffff":"#121212"}):null]})}},5224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(7294),i=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return i.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},888:function(e,t,n){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(7294),c=h(i),o=h(n(4184)),l=h(n(5697)),s=h(n(5224)),u=h(n(6963)),d=n(1520);function h(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),i=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:i,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(i.PureComponent);t.Z=f,f.displayName="Toggle",f.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},f.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},1520:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},6963:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(7294),i=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return i.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},5443:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"Dribbble icon"),a.createElement("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r},7541:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"GitHub icon"),a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r},1172:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"LinkedIn icon"),a.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r},9456:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,[a.createElement("title",{key:0},"YouTube icon"),a.createElement("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",key:1})])}r.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=commons-74ca2384f9da4d666cc0.js.map