"use strict";(self.webpackChunklaniewski_me=self.webpackChunklaniewski_me||[]).push([[657],{7848:function(e,n,s){s.r(n),s.d(n,{Head:function(){return f},default:function(){return j}});var a=s(7294),t=s(5893),i=s(1151);function c(e){const n=Object.assign({p:"p",a:"a",em:"em",h2:"h2",span:"span",blockquote:"blockquote",code:"code",h3:"h3",pre:"pre"},(0,i.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["There are more than ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/flow/network/dependents",children:"31000 repositories on GitHub"})," using Flow but only a few ones export Flow definitions. In this article, we will see how to export Flow definitions for a module. Before getting started, I encourage you to read my previous article about „",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"/javascript/2018/04/29/publishing-packages-to-npm.html",children:"Publishing tree shaking friendly packages to npm"})}),"”."]}),"\n",(0,t.jsxs)(n.h2,{id:"what-is-flow",children:[(0,t.jsx)(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-is-flow",children:(0,t.jsx)(n.span,{className:"icon icon-link"})}),"What is Flow?"]}),"\n",(0,t.jsxs)(n.p,{children:["You’ve probably already seen ",(0,t.jsx)(n.a,{href:"https://www.destroyallsoftware.com/talks/wat",children:"Gary’s talk from CodeMash 2012"})," about JavaScript. With Flow in your hands, there should be no more „",(0,t.jsx)(n.em,{children:"wat’s"}),"”."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Flow is a static type checker for your JavaScript code. It does a lot of work to make you more productive. Making you code faster, smarter, more confidently, and to a bigger scale. – ",(0,t.jsx)(n.a,{href:"https://flow.org/en/docs/getting-started/",children:"Introduction to type checking with Flow"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Flow was first presented at the ",(0,t.jsx)(n.a,{href:"https://atscaleconference.com/",children:"Scale Conference"})," in 2014 by Facebook. Its main goal was to add additional syntax to JavaScript language to prevent type errors and give developers a more concise idea about bugs that can occur in their code. It also gives a way for IDEs to provide a better environment for spotting errors in real-time."]}),"\n",(0,t.jsxs)(n.h2,{id:"how-to-export-flow-definitions",children:[(0,t.jsx)(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-export-flow-definitions",children:(0,t.jsx)(n.span,{className:"icon icon-link"})}),"How to export Flow definitions?"]}),"\n",(0,t.jsxs)(n.p,{children:["There are currently two ways of exporting Flow definitions. The easiest one is by exporting ",(0,t.jsx)(n.code,{children:".js.flow"})," files within your package. However, if you are planning on versioning your definitions, you should contribute to ",(0,t.jsx)(n.code,{children:"flow-typed"})," repository instead."]}),"\n",(0,t.jsxs)(n.h3,{id:"exporting-flow-files",children:[(0,t.jsx)(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#exporting-flow-files",children:(0,t.jsx)(n.span,{className:"icon icon-link"})}),"Exporting Flow files"]}),"\n",(0,t.jsxs)(n.p,{children:["All you have to do is copy source files (i.e. not transpiled by ",(0,t.jsx)(n.em,{children:"Flow"})," and ",(0,t.jsx)(n.em,{children:"Babel"}),") to ",(0,t.jsx)(n.code,{children:".js.flow"})," format and include them with the library. Let’s start by installing required npm dependencies using the following command:"]}),"\n",(0,t.jsx)(n.pre,{className:"language-bash",children:(0,t.jsx)(n.code,{className:"language-bash code-highlight",children:(0,t.jsxs)(n.span,{className:"code-line",children:["$ ",(0,t.jsx)(n.span,{className:"token function",children:"npm"})," ",(0,t.jsx)(n.span,{className:"token function",children:"install"})," --save-dev glob fs-extra\n"]})})}),"\n",(0,t.jsxs)(n.p,{children:["Once installed, we can write a script which will copy all source files to the ",(0,t.jsx)(n.code,{children:"/dest"})," directory and change their extension to ",(0,t.jsx)(n.code,{children:".js.flow"}),":"]}),"\n",(0,t.jsx)(n.pre,{className:"language-javascript",children:(0,t.jsxs)(n.code,{className:"language-javascript code-highlight",children:[(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token comment",children:"// File: ./bin/defs.js"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,t.jsxs)(n.span,{className:"token imports",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"{"})," basename",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," resolve ",(0,t.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,t.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"path"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,t.jsxs)(n.span,{className:"token imports",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"{"})," copy ",(0,t.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,t.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"fs-extra"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,t.jsx)(n.span,{className:"token imports",children:"glob"})," ",(0,t.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"glob"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsx)(n.span,{className:"code-line",children:"\n"}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token keyword",children:"async"})," ",(0,t.jsx)(n.span,{className:"token keyword",children:"function"})," ",(0,t.jsx)(n.span,{className:"token function",children:"copyFile"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsx)(n.span,{className:"token parameter",children:"file"}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token keyword",children:"const"})," srcDir  ",(0,t.jsx)(n.span,{className:"token operator",children:"="})," ",(0,t.jsx)(n.span,{className:"token function",children:"resolve"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"__dirname",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(n.span,{className:"token string",children:'"../src"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token keyword",children:"const"})," destDir ",(0,t.jsx)(n.span,{className:"token operator",children:"="})," ",(0,t.jsx)(n.span,{className:"token function",children:"resolve"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"__dirname",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(n.span,{className:"token string",children:'"../dest"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token keyword",children:"const"})," fileDef ",(0,t.jsx)(n.span,{className:"token operator",children:"="})," ",(0,t.jsxs)(n.span,{className:"token template-string",children:[(0,t.jsx)(n.span,{className:"token template-punctuation string",children:"`"}),(0,t.jsxs)(n.span,{className:"token interpolation",children:[(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"file",(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),(0,t.jsx)(n.span,{className:"token string",children:".flow"}),(0,t.jsx)(n.span,{className:"token template-punctuation string",children:"`"})]}),(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token method function property-access",children:"replace"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"srcDir",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," destDir",(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsx)(n.span,{className:"code-line",children:"\n"}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token keyword control-flow",children:"await"})," ",(0,t.jsx)(n.span,{className:"token function",children:"copy"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"file",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," fileDef",(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsx)(n.span,{className:"code-line",children:"\n"}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token console class-name",children:"console"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token method function property-access",children:"log"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsxs)(n.span,{className:"token template-string",children:[(0,t.jsx)(n.span,{className:"token template-punctuation string",children:"`"}),(0,t.jsx)(n.span,{className:"token string",children:"Copied "}),(0,t.jsxs)(n.span,{className:"token interpolation",children:[(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"file",(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),(0,t.jsx)(n.span,{className:"token string",children:" to "}),(0,t.jsxs)(n.span,{className:"token interpolation",children:[(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"fileDef",(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),(0,t.jsx)(n.span,{className:"token template-punctuation string",children:"`"})]}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,t.jsx)(n.span,{className:"code-line",children:"\n"}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token function",children:"glob"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsx)(n.span,{className:"token function",children:"resolve"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"__dirname",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(n.span,{className:"token string",children:'"../src/**/*.js"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsxs)(n.span,{className:"token parameter",children:["err",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," files"]}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(n.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  files",(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token method function property-access",children:"forEach"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsx)(n.span,{className:"token parameter",children:"file"})," ",(0,t.jsx)(n.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(n.span,{className:"token function",children:"copyFile"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"file",(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]})]})}),"\n",(0,t.jsx)(n.p,{children:"Then, you can execute this script at the end of your build pipeline, as follows:"}),"\n",(0,t.jsx)(n.pre,{className:"language-json",children:(0,t.jsxs)(n.code,{className:"language-json code-highlight",children:[(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token property",children:'"scripts"'}),(0,t.jsx)(n.span,{className:"token operator",children:":"})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["    ",(0,t.jsx)(n.span,{className:"token property",children:'"build"'}),(0,t.jsx)(n.span,{className:"token operator",children:":"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"npx babel ./src -d ./dest && npm run defs"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:","}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["    ",(0,t.jsx)(n.span,{className:"token property",children:'"watch"'}),(0,t.jsx)(n.span,{className:"token operator",children:":"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"npx babel ./src -d ./dest --watch"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:","}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["    ",(0,t.jsx)(n.span,{className:"token property",children:'"defs"'}),(0,t.jsx)(n.span,{className:"token operator",children:":"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"npx babel-node ./bin/defs.js"'}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(n.span,{className:"token punctuation",children:","}),"\n"]}),(0,t.jsx)(n.span,{className:"code-line",children:"\n"}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token property",children:'"devDependencies"'}),(0,t.jsx)(n.span,{className:"token operator",children:":"})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["    ",(0,t.jsx)(n.span,{className:"token property",children:'"babel-cli"'}),(0,t.jsx)(n.span,{className:"token operator",children:":"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"^6.26.0"'}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n"]})]})}),"\n",(0,t.jsxs)(n.h3,{id:"adding-definitions-to-flow-typed",children:[(0,t.jsx)(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#adding-definitions-to-flow-typed",children:(0,t.jsx)(n.span,{className:"icon icon-link"})}),"Adding definitions to flow-typed"]}),"\n",(0,t.jsxs)(n.p,{children:["Flow supports library definitions which allow you to describe the interface of a module or library separate from the implementation of that module/library. You can add your own definitions by ",(0,t.jsx)(n.a,{href:"https://github.com/flowtype/flow-typed/wiki/Contributing-Library-Definitions",children:"contributing library definitions"})," which reside in ",(0,t.jsx)(n.code,{children:"flow-typed"})," repository. It will allow people who use your library to fetch definitions by using the following command:"]}),"\n",(0,t.jsx)(n.pre,{className:"language-bash",children:(0,t.jsx)(n.code,{className:"language-bash code-highlight",children:(0,t.jsxs)(n.span,{className:"code-line",children:["$ flow-typed ",(0,t.jsx)(n.span,{className:"token function",children:"install"})," library@x.x.x\n"]})})}),"\n",(0,t.jsxs)(n.h2,{id:"conclusion",children:[(0,t.jsx)(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusion",children:(0,t.jsx)(n.span,{className:"icon icon-link"})}),"Conclusion"]}),"\n",(0,t.jsx)(n.p,{children:"It is important to export Flow definitions so Flow can give errors if someone accidentally miss-use your library. Additionally, it integrates well with most IDEs, as it gives developers a better experience by providing documentation, auto-complete and errors in real-time."})]})}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)},l=s(8029),r=s(8875),d=s(180),p=s(317),u=s(5551),h=s(2349),m=s(7123);function x(e){let{pageContext:n,children:s}=e;const a=n.data,{frontmatter:c,tableOfContents:o}=a,{title:h,datePublished:x,language:j,authors:f}=c;return(0,t.jsx)(u.A,{children:(0,t.jsx)(r.V,{children:(0,t.jsxs)("article",{className:"post",itemScope:!0,itemType:"http://schema.org/Article",lang:j,children:[(0,t.jsxs)("header",{className:"post__header",children:[(0,t.jsx)("h1",{itemProp:"headline",children:h}),(0,t.jsx)("time",{dateTime:x,itemProp:"datePublished",children:x}),null!=f&&f.length?(0,t.jsx)("ul",{className:"visually-hidden",children:f.map((e=>(0,t.jsx)("li",{children:(0,t.jsx)("p",{itemProp:"author",children:e})},e)))}):null]}),(0,t.jsxs)("div",{className:"post__wrapper",children:[(0,t.jsx)("div",{className:"post__toc",children:(0,t.jsx)(m.o,{data:o})}),(0,t.jsxs)("div",{className:"post__content",children:[(0,t.jsx)("div",{itemProp:"articleBody",children:(0,t.jsx)(i.Z,{components:{Alert:l.b,Formula:p.S},children:s})}),(0,t.jsx)(d.$,{lang:j})]})]})]})})})}function j(e){return a.createElement(x,e,a.createElement(o,e))}function f(e){let{pageContext:n}=e;const s=n.data,{excerpt:a}=s,{title:i,description:c}=s.frontmatter;return(0,t.jsx)(h.H,{title:i,description:c||a})}},8029:function(e,n,s){s.d(n,{b:function(){return p}});var a={};s.r(a),s.d(a,{alert:function(){return t},alert__failure:function(){return i},alert__info:function(){return c},alert__success:function(){return o},alert__warning:function(){return l}});var t="index-module--alert--af406",i="index-module--alert__failure--c7bcc",c="index-module--alert__info--cfa0f",o="index-module--alert__success--14443",l="index-module--alert__warning--5ba8e",r=s(7294),d=s(5893);function p(e){let{children:n,as:s="aside",type:i="info",...c}=e;const o=e=>r.createElement(s,e);return(0,d.jsx)(o,{...c,className:`${t} ${a[`alert__${i}`]}`,children:n})}},180:function(e,n,s){s.d(n,{$:function(){return c}});var a=s(7294),t=s(1711),i=s(5893);function c(e){let{lang:n="en"}=e;const s=a.useRef(),[c]=(0,t.F)(),o=null!==c;return a.useLayoutEffect((()=>{const e=s.current;if(!e||!o)return;const a=function(e){let{theme:n,lang:s}=e;const a="undefined"!=typeof window?window.location.origin:"";return`\n    <script src="https://giscus.app/client.js"\n      data-repo="Bartozzz/bartozzz.github.io"\n      data-repo-id="MDEwOlJlcG9zaXRvcnkyNDk1MjY5MQ=="\n      data-category="Discussion"\n      data-category-id="DIC_kwDOAXy_c84CAHzq"\n      data-mapping="pathname"\n      data-reactions-enabled="1"\n      data-emit-metadata="0"\n      data-theme="${"dark"===n?`${a}/discussion-dark.css`:`${a}/discussion-light.css`}"\n      data-lang="${s}"\n      crossorigin="anonymous"\n      async>\n    <\/script>\n  `}({theme:c,lang:n}),t=document.createRange().createContextualFragment(a);return null==e||e.appendChild(t),()=>{e.innerHTML=""}}),[o]),a.useEffect((()=>{const e="undefined"!=typeof window?window.location.origin:"";!function(e){const n=document.querySelector("iframe.giscus-frame");n&&n.contentWindow.postMessage({giscus:e},"https://giscus.app")}({setConfig:{theme:"dark"===c?`${e}/discussion-dark.css`:`${e}/discussion-light.css`,lang:n}})}),[c,n]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:`comments--${c}`,ref:s})})}},317:function(e,n,s){s.d(n,{S:function(){return c}});var a=s(7294),t=s(1008);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}const c=(0,a.memo)((function(e){var n=e.children,s=e.math,c=e.block,o=e.errorColor,l=e.renderError,r=e.settings,d=e.as,p=function(e,n){if(null==e)return{};var s,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n.indexOf(s=i[a])>=0||(t[s]=e[s]);return t}(e,["children","math","block","errorColor","renderError","settings","as"]),u=d||(c?"div":"span"),h=null!=n?n:s,m=(0,a.useState)({innerHtml:""}),x=m[0],j=m[1];return(0,a.useEffect)((function(){try{var e=t.Z.renderToString(h,i({displayMode:!!c,errorColor:o,throwOnError:!!l},r));j({innerHtml:e})}catch(e){if(!(e instanceof t.Z.ParseError||e instanceof TypeError))throw e;j(l?{errorElement:l(e)}:{innerHtml:e.message})}}),[c,h,o,l,r]),"errorElement"in x?x.errorElement:a.createElement(u,Object.assign({},p,{dangerouslySetInnerHTML:{__html:x.innerHtml}}))}))},7123:function(e,n,s){s.d(n,{o:function(){return m}});var a=s(5785),t="index-module--toc--16eb9",i="index-module--toc__ellipsis--2a1a1",c="index-module--toc__link--1571c",o="index-module--toc__link--active--2b793",l="index-module--toc__list--19652",r="index-module--toc__title--91e5c",d=s(7294),p=s(1883),u=s(5893);function h(e){return e.flatMap((e=>{let{url:n,title:s,items:t}=e;return[{url:n,title:s}].concat((0,a.Z)(t?h(t):[]))}))}function m(e){let{data:n}=e;const[s,a]=d.useState(),i=h(n.items);return console.log({data:n,activeHeadingId:s}),d.useEffect((()=>{const e=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&a(`#${e.target.id}`)}))}),{rootMargin:"0% 0% -80% 0%"});return i.forEach((n=>{const s=document.querySelector(n.url);s&&e.observe(s)})),()=>{i.forEach((n=>{const s=document.querySelector(n.url);s&&e.unobserve(s)}))}}),[i]),(0,u.jsxs)("nav",{"aria-label":"On this page",className:t,children:[(0,u.jsx)("p",{className:r,children:"Contents"}),(0,u.jsx)(x,{tree:n,activeSlug:s})]})}function x(e){let{tree:n,activeSlug:s}=e;return(0,u.jsx)("ol",{className:l,children:n.items.map((e=>{var n;return(0,u.jsxs)("li",{children:[(0,u.jsx)(p.Link,{to:e.url,title:e.title,className:`${c} ${s===e.url?o:""}`,children:(0,u.jsx)("span",{className:i,children:e.title})}),(null===(n=e.items)||void 0===n?void 0:n.length)>0&&(0,u.jsx)(x,{tree:e,activeSlug:s})]},e.url)}))})}},1151:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var a=s(7294);const t={},i=a.createContext(t);function c(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-content-blog-2018-05-13-exporting-flow-definitions-to-npm-index-md-24ecaf098091ca432a3e.js.map