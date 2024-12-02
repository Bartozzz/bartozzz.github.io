"use strict";(self.webpackChunklaniewski_me=self.webpackChunklaniewski_me||[]).push([[657],{7848:function(e,n,s){s.r(n),s.d(n,{Head:function(){return g},default:function(){return f}});var a=s(7294),t=s(5893),l=s(1151);function o(e){const n=Object.assign({p:"p",a:"a",h2:"h2",svg:"svg",path:"path",em:"em",blockquote:"blockquote",code:"code",h3:"h3",pre:"pre",span:"span"},(0,l.a)(),e.components),{Newsletter:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Newsletter",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["More than ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/flow/network/dependents",rel:"nofollow noopener noreferrer",target:"_blank",children:"240 000 repositories on GitHub"})," use Flow, but only a few export Flow definitions. In this article, I’ll show you how to export Flow definitions for a module. Before starting, I encourage you to read my previous article about ",(0,t.jsx)(n.a,{href:"/blog/2018-04-29-publishing-packages-to-npm/",children:"publishing Tree Shaking-friendly packages to npm"}),"."]}),"\n",(0,t.jsxs)(n.h2,{id:"what-is-flow",children:["What is Flow?",(0,t.jsx)(n.a,{className:"heading-link","aria-label":'Permalink to "What is Flow?"',href:"#what-is-flow",children:(0,t.jsx)(n.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)(n.path,{d:"m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["You’ve probably already seen ",(0,t.jsx)(n.a,{href:"https://www.destroyallsoftware.com/talks/wat",rel:"nofollow noopener noreferrer",target:"_blank",children:"Gary’s talk from CodeMash 2012"})," about JavaScript. With Flow in your hands, there should be no more „",(0,t.jsx)(n.em,{children:"wat’s"}),"”."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Flow is a static type checker for your JavaScript code. It does a lot of work to make you more productive. Making you code faster, smarter, more confidently, and to a bigger scale. – ",(0,t.jsx)(n.a,{href:"https://flow.org/en/docs/getting-started/",rel:"nofollow noopener noreferrer",target:"_blank",children:"Introduction to type checking with Flow"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Flow was first presented at the ",(0,t.jsx)(n.a,{href:"https://atscaleconference.com/",rel:"nofollow noopener noreferrer",target:"_blank",children:"Scale Conference"})," in 2014 by Facebook. Its main goal was to add additional syntax to JavaScript language to prevent type errors and give developers a more concise idea about bugs that can occur in their code. It also offers a way for IDEs to provide a better environment for spotting errors in real-time."]}),"\n",(0,t.jsxs)(n.h2,{id:"how-to-export-flow-definitions",children:["How to export Flow definitions?",(0,t.jsx)(n.a,{className:"heading-link","aria-label":'Permalink to "How to export Flow definitions?"',href:"#how-to-export-flow-definitions",children:(0,t.jsx)(n.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)(n.path,{d:"m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["There are currently two ways to export Flow definitions. The easiest one is to include the source files within your package. All you have to do is change their extension to ",(0,t.jsx)(n.code,{children:".js.flow"})," and include them with the bundle."]}),"\n",(0,t.jsxs)(n.h3,{id:"exporting-flow-files",children:["Exporting Flow files",(0,t.jsx)(n.a,{className:"heading-link","aria-label":'Permalink to "Exporting Flow files"',href:"#exporting-flow-files",children:(0,t.jsx)(n.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)(n.path,{d:"m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Let’s start by installing the required npm dependencies using the following command:"}),"\n",(0,t.jsx)(n.pre,{className:"language-bash",children:(0,t.jsx)(n.code,{className:"language-bash code-highlight",children:(0,t.jsxs)(n.span,{className:"code-line",children:["$ ",(0,t.jsx)(n.span,{className:"token function",children:"npm"})," ",(0,t.jsx)(n.span,{className:"token function",children:"install"})," --save-dev glob fs-extra\n"]})})}),"\n",(0,t.jsxs)(n.p,{children:["Once installed, we can write a script that will copy all source files to the ",(0,t.jsx)(n.code,{children:"/dest"})," directory and change their extension to ",(0,t.jsx)(n.code,{children:".js.flow"}),":"]}),"\n",(0,t.jsx)(n.pre,{className:"language-javascript",children:(0,t.jsxs)(n.code,{className:"language-javascript code-highlight",children:[(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token comment",children:"// ./scripts/copy-flow-definitions.js"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,t.jsxs)(n.span,{className:"token imports",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"{"})," basename",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," resolve ",(0,t.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,t.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"path"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,t.jsxs)(n.span,{className:"token imports",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"{"})," copy ",(0,t.jsx)(n.span,{className:"token punctuation",children:"}"})]})," ",(0,t.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"fs-extra"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token keyword module",children:"import"})," ",(0,t.jsx)(n.span,{className:"token imports",children:"glob"})," ",(0,t.jsx)(n.span,{className:"token keyword module",children:"from"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"glob"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsx)(n.span,{className:"code-line",children:"\n"}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token keyword",children:"async"})," ",(0,t.jsx)(n.span,{className:"token keyword",children:"function"})," ",(0,t.jsx)(n.span,{className:"token function",children:"copyFile"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsx)(n.span,{className:"token parameter",children:"file"}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token keyword",children:"const"})," srcDir  ",(0,t.jsx)(n.span,{className:"token operator",children:"="})," ",(0,t.jsx)(n.span,{className:"token function",children:"resolve"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"__dirname",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(n.span,{className:"token string",children:'"../src"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token keyword",children:"const"})," destDir ",(0,t.jsx)(n.span,{className:"token operator",children:"="})," ",(0,t.jsx)(n.span,{className:"token function",children:"resolve"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"__dirname",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(n.span,{className:"token string",children:'"../dest"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token keyword",children:"const"})," fileDef ",(0,t.jsx)(n.span,{className:"token operator",children:"="})," ",(0,t.jsxs)(n.span,{className:"token template-string",children:[(0,t.jsx)(n.span,{className:"token template-punctuation string",children:"`"}),(0,t.jsxs)(n.span,{className:"token interpolation",children:[(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"file",(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),(0,t.jsx)(n.span,{className:"token string",children:".flow"}),(0,t.jsx)(n.span,{className:"token template-punctuation string",children:"`"})]}),(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token method function property-access",children:"replace"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"srcDir",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," destDir",(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsx)(n.span,{className:"code-line",children:"\n"}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token keyword control-flow",children:"await"})," ",(0,t.jsx)(n.span,{className:"token function",children:"copy"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"file",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," fileDef",(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsx)(n.span,{className:"code-line",children:"\n"}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token console class-name",children:"console"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token method function property-access",children:"log"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsxs)(n.span,{className:"token template-string",children:[(0,t.jsx)(n.span,{className:"token template-punctuation string",children:"`"}),(0,t.jsx)(n.span,{className:"token string",children:"Copied "}),(0,t.jsxs)(n.span,{className:"token interpolation",children:[(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"file",(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),(0,t.jsx)(n.span,{className:"token string",children:" to "}),(0,t.jsxs)(n.span,{className:"token interpolation",children:[(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"${"}),"fileDef",(0,t.jsx)(n.span,{className:"token interpolation-punctuation punctuation",children:"}"})]}),(0,t.jsx)(n.span,{className:"token template-punctuation string",children:"`"})]}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,t.jsx)(n.span,{className:"code-line",children:"\n"}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token function",children:"glob"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsx)(n.span,{className:"token function",children:"resolve"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"__dirname",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(n.span,{className:"token string",children:'"../src/**/*.js"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:","})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsxs)(n.span,{className:"token parameter",children:["err",(0,t.jsx)(n.span,{className:"token punctuation",children:","})," files"]}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(n.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  files",(0,t.jsx)(n.span,{className:"token punctuation",children:"."}),(0,t.jsx)(n.span,{className:"token method function property-access",children:"forEach"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),(0,t.jsx)(n.span,{className:"token parameter",children:"file"})," ",(0,t.jsx)(n.span,{className:"token arrow operator",children:"=>"})," ",(0,t.jsx)(n.span,{className:"token function",children:"copyFile"}),(0,t.jsx)(n.span,{className:"token punctuation",children:"("}),"file",(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(n.span,{className:"token punctuation",children:")"}),(0,t.jsx)(n.span,{className:"token punctuation",children:";"}),"\n"]})]})}),"\n",(0,t.jsx)(n.p,{children:"Then, you can execute this script at the end of your build pipeline as follows:"}),"\n",(0,t.jsx)(n.pre,{className:"language-json",children:(0,t.jsxs)(n.code,{className:"language-json code-highlight",children:[(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token property",children:'"scripts"'}),(0,t.jsx)(n.span,{className:"token operator",children:":"})," ",(0,t.jsx)(n.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["    ",(0,t.jsx)(n.span,{className:"token property",children:'"build"'}),(0,t.jsx)(n.span,{className:"token operator",children:":"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"npx babel ./src -d ./dest"'}),(0,t.jsx)(n.span,{className:"token punctuation",children:","}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["    ",(0,t.jsx)(n.span,{className:"token property",children:'"postbuild"'}),(0,t.jsx)(n.span,{className:"token operator",children:":"})," ",(0,t.jsx)(n.span,{className:"token string",children:'"node ./scripts/copy-flow-definitions.js"'}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:["  ",(0,t.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,t.jsxs)(n.span,{className:"code-line",children:[(0,t.jsx)(n.span,{className:"token punctuation",children:"}"}),"\n"]})]})}),"\n",(0,t.jsx)(s,{}),"\n",(0,t.jsxs)(n.h3,{id:"adding-definitions-to-flow-typed",children:["Adding definitions to flow-typed",(0,t.jsx)(n.a,{className:"heading-link","aria-label":'Permalink to "Adding definitions to flow-typed"',href:"#adding-definitions-to-flow-typed",children:(0,t.jsx)(n.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)(n.path,{d:"m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["If you plan to version your definitions, you should contribute to the ",(0,t.jsx)(n.code,{children:"flow-typed"})," repository instead. Flow supports library definitions, which allow you to describe the interface of a module or library separately from the implementation of that module/library."]}),"\n",(0,t.jsxs)(n.p,{children:["You can add your definitions by ",(0,t.jsx)(n.a,{href:"https://flow-typed.github.io/flow-typed/#/?id=how-do-i-contribute-library-definitions",rel:"nofollow noopener noreferrer",target:"_blank",children:"contributing library definitions"})," to the ",(0,t.jsx)(n.code,{children:"flow-typed"})," repository. It will allow people who use your library to fetch definitions by using the following command:"]}),"\n",(0,t.jsx)(n.pre,{className:"language-bash",children:(0,t.jsx)(n.code,{className:"language-bash code-highlight",children:(0,t.jsxs)(n.span,{className:"code-line",children:["$ flow-typed ",(0,t.jsx)(n.span,{className:"token function",children:"install"})," library@x.x.x\n"]})})}),"\n",(0,t.jsxs)(n.h2,{id:"conclusion",children:["Conclusion",(0,t.jsx)(n.a,{className:"heading-link","aria-label":'Permalink to "Conclusion"',href:"#conclusion",children:(0,t.jsx)(n.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)(n.path,{d:"m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"})})})]}),"\n",(0,t.jsx)(n.p,{children:"It is important to export Flow definitions so Flow can give errors if someone accidentally misuses your library. Additionally, it integrates well with most IDEs, giving developers a better experience by providing real-time documentation, auto-complete, and pointing mistakes."})]})}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(o,e)})):o(e)};var c=s(4361),r=s(8029),d=s(8875),p=s(180),h=s(5551),m=s(9213),u=s(3120),x=s(6026),j=s(2349),k=s(7123);function N(e){let{data:n,pageContext:s,children:a}=e;const o=s.data,{frontmatter:i,tableOfContents:j}=o,{slug:N,timeToRead:f}=o.fields,{title:g,language:w,authors:y,datePublished:b,datePublishedMeta:v,dateUpdated:_,dateUpdatedMeta:F}=i,C=`${n.site.siteMetadata.siteUrl}/thumbnails/${(0,c.H)(N)}.png`;return(0,t.jsx)(h.A,{children:(0,t.jsx)(d.V,{children:(0,t.jsxs)("article",{className:"post",itemScope:!0,itemType:"http://schema.org/Article",lang:w,children:[(0,t.jsx)("meta",{itemProp:"image",content:C}),(0,t.jsx)("meta",{itemProp:"dateModified",content:F}),(0,t.jsx)("meta",{itemProp:"wordCount",content:`${f.words}`}),(0,t.jsxs)("header",{className:"post__header",children:[(0,t.jsx)("h1",{itemProp:"headline",children:g}),(0,t.jsxs)("p",{className:"post__header--metadata",children:[(0,t.jsx)(u.X,{data:y})," on ",(0,t.jsx)("time",{dateTime:v,itemProp:"datePublished",title:`Last modified on ${_}`,className:"post__header--date",children:b})," • ",(0,t.jsx)(x.t,{value:f.minutes})]})]}),(0,t.jsxs)("div",{className:"post__wrapper",children:[j.items?(0,t.jsx)("div",{className:"post__toc",children:(0,t.jsx)(k.o,{data:j})}):null,(0,t.jsxs)("div",{className:"post__content",children:[(0,t.jsx)("div",{itemProp:"articleBody",children:(0,t.jsx)(l.Z,{components:{Alert:r.b,Newsletter:m.m},children:a})}),(0,t.jsx)(p.$,{lang:w})]})]})]})})})}function f(e){return a.createElement(N,e,a.createElement(i,e))}function g(e){let{data:n,pageContext:s}=e;const a=s.data,l=a.fields.slug,{excerpt:o}=a,{title:i,description:r}=a.frontmatter,d=n.site.siteMetadata.siteUrl,p=`${d}/thumbnails/${(0,c.H)(l)}.png`;return(0,t.jsx)(j.H,{url:`${d}${l}`,title:i,image:p,description:r||o,children:(0,t.jsx)("html",{className:"smooth-scroll"})})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-content-blog-2018-05-13-exporting-flow-definitions-to-npm-index-md-eaedf63e0d758bade24e.js.map