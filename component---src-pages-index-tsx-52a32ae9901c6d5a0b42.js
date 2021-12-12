"use strict";(self.webpackChunklaniewski_me=self.webpackChunklaniewski_me||[]).push([[691],{8567:function(e,r,n){n.d(r,{V:function(){return i}});n(7294);var t=n(5893);function i(e){var r=e.children;return(0,t.jsx)("main",{id:"content",className:"index-module--content--Ni+7M",itemProp:"mainContentOfPage",children:r})}},4729:function(e,r,n){n.d(r,{T:function(){return s}});var t=n(5444),i=n(5893);function s(e){var r=e.link,n=e.title,s=e.date,l=e.authors,a=e.content;return(0,i.jsxs)("article",{itemScope:!0,itemType:"http://schema.org/Article",className:"index-module--post-excerpt__wrapper--5cYKe",children:[(0,i.jsxs)("header",{children:[(0,i.jsx)("time",{className:"index-module--post-excerpt__date--7Ztjd",dateTime:s,itemProp:"datePublished",children:s}),(0,i.jsx)("h2",{className:"index-module--post-excerpt__title---R0AJ",children:(0,i.jsx)(t.rU,{to:r,itemProp:"url",children:(0,i.jsx)("span",{itemProp:"headline",children:n})})}),null!=l&&l.length?(0,i.jsx)("ul",{className:"visually-hidden",children:l.map((function(e){return(0,i.jsx)("li",{children:(0,i.jsx)("p",{itemProp:"author",children:e})},e)}))}):null]}),(0,i.jsx)("p",{dangerouslySetInnerHTML:{__html:a},itemProp:"description",className:"index-module--post-excerpt__content--eEd-L"})]})}},8966:function(e,r,n){n.r(r),n.d(r,{default:function(){return N}});var t=n(6447),i=n(3836),s=n(4729),l=n(5893);function a(){var e,r,n,t=(e=new Date("01/01/1998"),r=Date.now()-e.getTime(),n=new Date(r),Math.abs(n.getUTCFullYear()-1970));return(0,l.jsx)("article",{className:"index-module--hero--XvzmV",children:(0,l.jsx)("div",{className:"index-module--hero__wrapper--GiSG-",children:(0,l.jsxs)("header",{children:[(0,l.jsxs)("h1",{className:"index-module--hero__title--3Ox0E",children:["Bartosz",(0,l.jsx)("br",{})," Łaniewski"]}),(0,l.jsxs)("h2",{className:"index-module--hero__subtitle--zaaas",children:["Developer & Designer",(0,l.jsxs)("span",{children:[", ",t," years old,"]})," from Poland"]})]})})})}var c=n(8567),o=n(7294);function d(e){var r=e.children;return(0,l.jsx)("strong",{className:"index-module--keyword--Pq2tX",title:"Topic: "+r,children:r})}function h(e){var r=e.link,n=e.name,t=e.description,i=e.keywords,s=e.as,a=void 0===s?"article":s,c=function(e){return o.createElement(a,e)};return(0,l.jsxs)(c,{"data-repo-name":n,itemType:"http://schema.org/SoftwareSourceCode",itemScope:!0,children:[(0,l.jsx)("link",{itemProp:"codeRepository",href:r}),(0,l.jsx)("link",{itemProp:"downloadUrl",href:r+"/releases"}),(0,l.jsxs)("a",{className:"index-module--repository__link--gk8Z7",target:"_blank",rel:"noopener noreferrer",href:r,"aria-label":t,children:[(0,l.jsx)("h4",{className:"index-module--repository__name--0XZOg",itemProp:"name",children:n}),(0,l.jsx)("p",{className:"index-module--repository__description--GacGk",itemProp:"about",children:t}),(0,l.jsx)("aside",{itemProp:"keywords",children:i.map((function(e){return(0,l.jsx)(d,{children:e},e)}))})]})]})}var u=n(4942);function m(e,r){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}var p="index-module--heading__text--7fYiM",x=["children"],j=["children"],f=["children"],w=["children"],_=["children"],v=["children"],y=["children"];function b(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?b(Object(n),!0).forEach((function(r){(0,u.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function k(e){var r=e.children,n=m(e,x);return(0,l.jsx)("header",g(g({className:"index-module--heading__wrapper--MoMom"},n),{},{children:r}))}function N(e){var r=e.data,n=r.allMdx.nodes,o=r.allRepositoriesYaml.nodes;return(0,l.jsxs)(t.A,{children:[(0,l.jsx)(i.H,{}),(0,l.jsx)(a,{}),(0,l.jsxs)(c.V,{children:[(0,l.jsxs)("article",{children:[(0,l.jsxs)(k,{children:[(0,l.jsx)(k.H2,{children:"Open-source projects"}),(0,l.jsx)(k.H3,{children:"Community is essential to me. I want to become the kind of developer that I would want to work with. That is why I share my knowledge, code, and time with others."})]}),(0,l.jsx)("ol",{className:"repositories list",children:o.map((function(e){return(0,l.jsx)(h,{as:"li",link:e.path,name:e.name,description:e.desc,keywords:e.keywords},e.id)}))})]}),(0,l.jsxs)("article",{children:[(0,l.jsxs)(k,{children:[(0,l.jsx)(k.H2,{children:"Newest articles"}),(0,l.jsx)(k.H3,{children:"I write articles about web development, mostly React, Vue, best practices, accessibility and JS related stuff."})]}),(0,l.jsx)("ol",{className:"list",children:n.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(s.T,{link:e.fields.slug,title:e.frontmatter.title||e.fields.slug,date:e.frontmatter.date,authors:e.frontmatter.authors,content:e.frontmatter.description||e.excerpt})},e.fields.slug)}))})]})]})]})}k.H1=function(e){var r=e.children,n=m(e,j);return(0,l.jsx)("h1",g(g({className:""+p},n),{},{children:r}))},k.H2=function(e){var r=e.children,n=m(e,f);return(0,l.jsx)("h2",g(g({className:p+" index-module--heading__text--h2--37Rxf"},n),{},{children:r}))},k.H3=function(e){var r=e.children,n=m(e,w);return(0,l.jsx)("h3",g(g({className:p+" index-module--heading__text--h3--soBei"},n),{},{children:r}))},k.H4=function(e){var r=e.children,n=m(e,_);return(0,l.jsx)("h4",g(g({className:""+p},n),{},{children:r}))},k.H5=function(e){var r=e.children,n=m(e,v);return(0,l.jsx)("h5",g(g({className:""+p},n),{},{children:r}))},k.H6=function(e){var r=e.children,n=m(e,y);return(0,l.jsx)("h6",g(g({className:""+p},n),{},{children:r}))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-52a32ae9901c6d5a0b42.js.map