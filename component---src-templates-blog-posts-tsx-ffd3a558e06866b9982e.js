"use strict";(self.webpackChunklaniewski_me=self.webpackChunklaniewski_me||[]).push([[507],{298:function(e,t,n){n.d(t,{K:function(){return h}});const r=/([\p{Ll}\d])(\p{Lu})/gu,i=/(\p{Lu})([\p{Lu}][\p{Ll}])/gu,l=/(\d)(\p{Ll})/gu,s=/(\p{L})(\d)/gu,o=/[^\p{L}\d]+/giu,a="$1\0$2",d="";function u(e,t){let n=e.trim();n=n.replace(r,a).replace(i,a),t?.separateNumbers&&(n=n.replace(l,a).replace(s,a)),n=n.replace(o,"\0");let d=0,u=n.length;for(;"\0"===n.charAt(d);)d++;if(d===u)return[];for(;"\0"===n.charAt(u-1);)u--;return n.slice(d,u).split(/\0/g)}function c(e,t){return m(e,t?.prefixCharacters)+u(e,t).map(p(t?.locale)).join(t?.delimiter??" ")}function p(e){return!1===e?e=>e.toLowerCase():t=>t.toLocaleLowerCase(e)}function m(e,t=d){let n="";for(let r=0;r<e.length;r++){const i=e.charAt(r);if(!t.includes(i))break;n+=i}return n}function h(e){return c(e.trim().toLowerCase(),{delimiter:"-",...t});var t}},9678:function(e,t,n){n.d(t,{Z:function(){return o}});var r="index-module--keyword--3eada",i="index-module--keyword__outlined--b6086",l="index-module--keyword__wide--cd44d",s=n(5893);function o(e){let{children:t,outlined:n,wide:o}=e;return(0,s.jsx)("strong",{className:`${r} ${n?i:""} ${o?l:""}`,title:`Topic: ${t}`,children:t})}},7005:function(e,t,n){n.d(t,{T:function(){return p}});var r="index-module--post-excerpt__content--78477",i="index-module--post-excerpt__info--f519a",l="index-module--post-excerpt__keyword--a0c11",s="index-module--post-excerpt__title--fd1d0",o="index-module--post-excerpt__wrapper--e5c60",a=n(7294),d=n(1883),u=n(298),c=n(5893);function p(e){let{link:t,title:n,date:p,authors:m,content:h,language:x,keywords:f,timeToRead:g}=e;return(0,c.jsxs)("article",{itemScope:!0,itemType:"http://schema.org/Article",className:o,lang:x,children:[(0,c.jsxs)("header",{children:[(0,c.jsxs)("p",{className:i,children:[(0,c.jsx)("time",{dateTime:p,itemProp:"datePublished",children:p}),g?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{"aria-hidden":!0,children:" • "}),(0,c.jsxs)("span",{itemProp:"timeRequired",children:[Math.ceil(g)," min"]})," read "]}):null,(null==f?void 0:f.length)>0?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{"aria-hidden":!0,children:" • "}),f.map(((e,t)=>(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)(d.Link,{to:`/posts/${(0,u.K)(e)}`,title:`Category: ${e}`,className:l,children:e}),t!==f.length-1?", ":null]},e)))]}):null]}),(0,c.jsx)("h2",{className:s,children:(0,c.jsx)(d.Link,{to:t,itemProp:"url",rel:"bookmark",children:(0,c.jsx)("span",{itemProp:"headline",children:n})})}),null!=m&&m.length?(0,c.jsx)("ul",{className:"visually-hidden",children:m.map((e=>(0,c.jsx)("li",{children:(0,c.jsx)("p",{itemProp:"author",children:e})},e)))}):null]}),(0,c.jsx)("p",{dangerouslySetInnerHTML:{__html:h},itemProp:"description",className:r})]})}},5163:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return c}});var r=n(1883),i=n(298),l=n(8875),s=n(9678),o=n(5551),a=n(7005),d=n(2349);var u=n(5893);function c(e){let{pageContext:t}=e;const n=(0,r.useStaticQuery)("991007626").allMdx.nodes.flatMap((e=>e.frontmatter.keywords)).reduce(((e,t)=>{const n=e.findIndex((e=>e.keyword===t));return-1===n?e.push({quantity:1,keyword:t}):e[n].quantity++,e}),[]).sort(((e,t)=>t.quantity-e.quantity)).map((e=>{let{keyword:t}=e;return t})),d=t.data,c=t.keyword;return(0,u.jsx)(o.A,{children:(0,u.jsxs)(l.V,{children:[(0,u.jsxs)("ul",{className:"keywords",children:[(0,u.jsx)(r.Link,{to:"/posts",children:(0,u.jsx)(s.Z,{wide:!0,outlined:!!c,children:"All"})}),n.map((e=>(0,u.jsx)(r.Link,{to:`/posts/${(0,i.K)(e)}`,children:(0,u.jsx)(s.Z,{wide:!0,outlined:e!==c,children:e})},e)))]}),(0,u.jsx)("ol",{className:"list",children:d.map((e=>{var t;return(0,u.jsx)("li",{children:(0,u.jsx)(a.T,{link:e.fields.slug,timeToRead:null===(t=e.fields.timeToRead)||void 0===t?void 0:t.minutes,title:e.frontmatter.title||e.fields.slug,date:e.frontmatter.datePublished,authors:e.frontmatter.authors,content:e.frontmatter.description||e.excerpt,language:e.frontmatter.language,keywords:e.frontmatter.keywords})},e.fields.slug)}))})]})})}function p(e){let{pageContext:t}=e;const n=t.keyword;return(0,u.jsx)(d.H,{title:n?`${n} posts`:"All posts",description:n?`My latest posts, updates, and stories about ${n} for developers`:"My latest posts, updates, and stories about software engineering for developers"})}}}]);
//# sourceMappingURL=component---src-templates-blog-posts-tsx-ffd3a558e06866b9982e.js.map