"use strict";(self.webpackChunklaniewski_me=self.webpackChunklaniewski_me||[]).push([[507],{298:function(e,t,n){n.d(t,{K:function(){return h}});const r=/([\p{Ll}\d])(\p{Lu})/gu,i=/(\p{Lu})([\p{Lu}][\p{Ll}])/gu,a=/(\d)(\p{Ll})/gu,s=/(\p{L})(\d)/gu,l=/[^\p{L}\d]+/giu,o="$1\0$2",d="";function c(e,t){let n=e.trim();n=n.replace(r,o).replace(i,o),t?.separateNumbers&&(n=n.replace(a,o).replace(s,o)),n=n.replace(l,"\0");let d=0,c=n.length;for(;"\0"===n.charAt(d);)d++;if(d===c)return[];for(;"\0"===n.charAt(c-1);)c--;return n.slice(d,c).split(/\0/g)}function u(e,t){return m(e,t?.prefixCharacters)+c(e,t).map(p(t?.locale)).join(t?.delimiter??" ")}function p(e){return!1===e?e=>e.toLowerCase():t=>t.toLocaleLowerCase(e)}function m(e,t=d){let n="";for(let r=0;r<e.length;r++){const i=e.charAt(r);if(!t.includes(i))break;n+=i}return n}function h(e){return u(e.trim().toLowerCase(),{delimiter:"-",...t});var t}},4361:function(e,t,n){function r(e){return e.replace("/blog/","").replace(/\/$/,"").replace("/","-")}n.d(t,{H:function(){return r}})},9678:function(e,t,n){n.d(t,{Z:function(){return l}});var r="index-module--keyword--3eada",i="index-module--keyword__outlined--b6086",a="index-module--keyword__wide--cd44d",s=n(5893);function l(e){let{children:t,outlined:n,wide:l,...o}=e;return(0,s.jsx)("strong",{className:`${r} ${n?i:""} ${l?a:""}`,title:`Topic: ${t}`,...o,children:t})}},7005:function(e,t,n){n.d(t,{T:function(){return m}});var r="index-module--post-excerpt__content--78477",i="index-module--post-excerpt__info--f519a",a="index-module--post-excerpt__keyword--a0c11",s="index-module--post-excerpt__title--fd1d0",l="index-module--post-excerpt__wrapper--e5c60",o=n(7294),d=n(1883),c=n(298),u=n(4361),p=n(5893);function m(e){let{as:t="h2",link:n,title:m,datePublished:h,datePublishedMeta:f,dateModifiedMeta:x,authors:g,content:j,language:k,keywords:y,timeToRead:w}=e;const $=`${(0,d.useStaticQuery)("1271460761").site.siteMetadata.siteUrl}/thumbnails/${(0,u.H)(n)}.png`,b=e=>o.createElement(t,e);return(0,p.jsxs)("article",{itemScope:!0,itemType:"http://schema.org/Article",className:l,lang:k,children:[(0,p.jsx)("meta",{itemProp:"image",content:$}),(0,p.jsx)("meta",{itemProp:"dateModified",content:x}),g.map((e=>(0,p.jsx)("meta",{itemProp:"author",content:e},e))),(0,p.jsxs)("header",{children:[(0,p.jsxs)("p",{className:i,children:[(0,p.jsx)("time",{dateTime:f,itemProp:"datePublished",children:h}),w?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{"aria-hidden":!0,children:" • "}),(0,p.jsxs)("span",{itemProp:"timeRequired",children:[Math.ceil(w)," min"]})," read "]}):null,(null==y?void 0:y.length)>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{"aria-hidden":!0,children:" • "}),y.map(((e,t)=>(0,p.jsxs)(o.Fragment,{children:[(0,p.jsx)(d.Link,{to:`/posts/${(0,c.K)(e)}/`,title:`Category: ${e}`,className:a,children:e}),t!==y.length-1?", ":null]},e)))]}):null]}),(0,p.jsx)(b,{className:s,children:(0,p.jsx)(d.Link,{to:n,itemProp:"url",rel:"bookmark",children:(0,p.jsx)("span",{itemProp:"headline",children:m})})})]}),(0,p.jsx)("p",{dangerouslySetInnerHTML:{__html:j},itemProp:"description",className:r})]})}},5163:function(e,t,n){n.r(t),n.d(t,{Head:function(){return x},default:function(){return f}});var r=n(1883),i=n(298),a=n(8875),s=n(9678),l=n(5551),o=n(7005),d=n(2349),c=n(7294);function u(e){return e.toLowerCase()}const p=[u("Blockchain"),u("Cryptocurrency")],m={[u("JavaScript")]:0,[u("TypeScript")]:1,[u("React")]:2,[u("React Native")]:3};var h=n(5893);function f(e){let{pageContext:t}=e;const n=function(){const e=(0,r.useStaticQuery)("991007626");return c.useMemo((()=>{const t=Object.entries(m).length;return e.allMdx.nodes.flatMap((e=>e.frontmatter.keywords)).reduce(((e,t)=>{const n=e.findIndex((e=>e.name===t));return-1===n?e.push({quantity:1,name:t}):e[n].quantity++,e}),[]).filter((e=>!p.includes(u(e.name)))).sort(((e,t)=>t.quantity-e.quantity)).sort(((e,n)=>{var r,i;return(null!==(r=m[u(e.name)])&&void 0!==r?r:t)-(null!==(i=m[u(n.name)])&&void 0!==i?i:t)}))}),[e.allMdx.nodes])}(),d=t.data,f=t.keyword;return(0,h.jsx)(l.A,{children:(0,h.jsxs)(a.V,{children:[(0,h.jsx)("h1",{className:"heading",children:"Blog"}),(0,h.jsxs)("ul",{className:"keywords",children:[(0,h.jsx)("li",{children:(0,h.jsx)(r.Link,{to:"/posts/",children:(0,h.jsx)(s.Z,{wide:!0,outlined:!!f,children:"All"})})}),n.map((e=>(0,h.jsx)("li",{children:(0,h.jsx)(r.Link,{to:`/posts/${(0,i.K)(e.name)}/`,children:(0,h.jsx)(s.Z,{wide:!0,outlined:e.name!==f,title:`${e.name} category contains ${1===e.quantity?"1 post":`${e.quantity} posts`}`,children:e.name})})},e.name)))]}),(0,h.jsx)("ol",{className:"list",children:d.map((e=>{var t;return(0,h.jsx)("li",{children:(0,h.jsx)(o.T,{link:e.fields.slug,timeToRead:null===(t=e.fields.timeToRead)||void 0===t?void 0:t.minutes,title:e.frontmatter.title||e.fields.slug,datePublished:e.frontmatter.datePublished,datePublishedMeta:e.frontmatter.datePublishedMeta,dateModifiedMeta:e.frontmatter.dateUpdatedMeta,authors:e.frontmatter.authors,content:e.frontmatter.description||e.excerpt,language:e.frontmatter.language,keywords:e.frontmatter.keywords})},e.fields.slug)}))})]})})}function x(e){let{data:t,pageContext:n,location:r}=e;const i=n.keyword,a=t.site.siteMetadata.siteUrl,s=r.pathname;return(0,h.jsx)(d.H,{url:`${a}${s}`,title:i?`${i} posts by Bartosz Łaniewski`:"Blog by Bartosz Łaniewski",description:i?`My latest posts, updates, and stories about ${i} for developers`:"My latest posts, updates, and stories about software engineering for developers",children:(0,h.jsx)("link",{rel:"canonical",href:`${a}${s}`})})}}}]);
//# sourceMappingURL=component---src-templates-blog-posts-tsx-5d52cbc9d45d2d439327.js.map