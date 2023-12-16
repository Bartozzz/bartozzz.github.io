"use strict";(self.webpackChunklaniewski_me=self.webpackChunklaniewski_me||[]).push([[507],{298:function(e,t,n){n.d(t,{K:function(){return h}});const r=/([\p{Ll}\d])(\p{Lu})/gu,i=/(\p{Lu})([\p{Lu}][\p{Ll}])/gu,a=/(\d)(\p{Ll})/gu,s=/(\p{L})(\d)/gu,o=/[^\p{L}\d]+/giu,l="$1\0$2",d="";function c(e,t){let n=e.trim();n=n.replace(r,l).replace(i,l),t?.separateNumbers&&(n=n.replace(a,l).replace(s,l)),n=n.replace(o,"\0");let d=0,c=n.length;for(;"\0"===n.charAt(d);)d++;if(d===c)return[];for(;"\0"===n.charAt(c-1);)c--;return n.slice(d,c).split(/\0/g)}function u(e,t){const[n,r,i]=m(e,t);return n+c(r,t).map(p(t?.locale)).join(t?.delimiter??" ")+i}function p(e){return!1===e?e=>e.toLowerCase():t=>t.toLocaleLowerCase(e)}function m(e,t){const n=t?.prefixCharacters??d,r=t?.suffixCharacters??d;let i=0,a=e.length;for(;i<e.length;){const t=e.charAt(i);if(!n.includes(t))break;i++}for(;a>i;){const t=a-1,n=e.charAt(t);if(!r.includes(n))break;a=t}return[e.slice(0,i),e.slice(i,a),e.slice(a)]}function h(e){return u(e.trim().toLowerCase(),{delimiter:"-",...t});var t}},4361:function(e,t,n){function r(e){return e.replace("/blog/","").replace(/\/$/,"").replace("/","-")}n.d(t,{H:function(){return r}})},9678:function(e,t,n){n.d(t,{Z:function(){return o}});var r="index-module--keyword--3eada",i="index-module--keyword__outlined--b6086",a="index-module--keyword__wide--cd44d",s=n(5893);function o(e){let{children:t,outlined:n,wide:o,...l}=e;return(0,s.jsx)("strong",{className:`${r} ${n?i:""} ${o?a:""}`,title:`Topic: ${t}`,...l,children:t})}},3120:function(e,t,n){n.d(t,{X:function(){return a}});var r=n(7294),i=n(5893);function a(e){let{data:t,...n}=e;return(0,i.jsxs)("span",{...n,children:["By ",t.map(((e,n)=>(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)("span",{itemScope:!0,itemProp:"author",itemType:"https://schema.org/Person",children:(0,i.jsx)("span",{itemProp:"name",children:e})}),n<t.length-1?" and ":""]},e)))]})}},6026:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(5893);function i(e){let{value:t,...n}=e;const i=Math.ceil(t),a=`PT${i}M`;return(0,r.jsxs)("time",{...n,itemProp:"timeRequired",dateTime:a,children:[i," min read"]})}},5774:function(e,t,n){n.d(t,{T:function(){return x}});var r="index-module--post-excerpt__content--78477",i="index-module--post-excerpt__info--f519a",a="index-module--post-excerpt__keyword--a0c11",s="index-module--post-excerpt__title--fd1d0",o="index-module--post-excerpt__wrapper--e5c60",l=n(7294),d=n(1883),c=n(3120),u=n(298),p=n(5893);function m(e){let{data:t,...n}=e;return t.map(((e,r)=>(0,p.jsxs)(l.Fragment,{children:[(0,p.jsx)(d.Link,{...n,to:`/posts/${(0,u.K)(e)}/`,title:`Category: ${e}`,children:e}),r!==t.length-1?", ":null]},e)))}var h=n(6026),f=n(4361);function x(e){let{as:t="h2",link:n,title:u,datePublished:x,datePublishedMeta:j,dateModifiedMeta:g,authors:y,content:w,language:k,keywords:b,wordCount:$,timeToRead:v}=e;const M=`${(0,d.useStaticQuery)("1271460761").site.siteMetadata.siteUrl}/thumbnails/${(0,f.H)(n)}.png`,P=e=>l.createElement(t,e);return(0,p.jsxs)("article",{itemScope:!0,itemType:"http://schema.org/Article",className:o,lang:k,children:[(0,p.jsx)("meta",{itemProp:"image",content:M}),(0,p.jsx)("meta",{itemProp:"dateModified",content:g}),(0,p.jsx)("meta",{itemProp:"wordCount",content:`${$}`}),(0,p.jsxs)("header",{children:[(0,p.jsxs)("p",{className:i,children:[(0,p.jsx)(c.X,{data:y,className:"visually-hidden"}),(0,p.jsx)("time",{dateTime:j,itemProp:"datePublished",children:x}),(0,p.jsx)("span",{"aria-hidden":!0,children:" • "}),(0,p.jsx)(h.t,{value:v}),(0,p.jsx)("span",{"aria-hidden":!0,children:" • "}),(0,p.jsx)(m,{data:b,className:a})]}),(0,p.jsx)(P,{className:s,children:(0,p.jsx)(d.Link,{to:n,itemProp:"url",rel:"bookmark",children:(0,p.jsx)("span",{itemProp:"headline",children:u})})})]}),(0,p.jsx)("p",{dangerouslySetInnerHTML:{__html:w},itemProp:"description",className:r})]})}},5163:function(e,t,n){n.r(t),n.d(t,{Head:function(){return x},default:function(){return f}});var r=n(1883),i=n(298),a=n(8875),s=n(9678),o=n(5551),l=n(5774),d=n(2349),c=n(7294);function u(e){return e.toLowerCase()}const p=[u("Blockchain"),u("Cryptocurrency")],m={[u("JavaScript")]:0,[u("TypeScript")]:1,[u("React")]:2,[u("React Native")]:3};var h=n(5893);function f(e){let{pageContext:t}=e;const n=function(){const e=(0,r.useStaticQuery)("991007626");return c.useMemo((()=>{const t=Object.entries(m).length;return e.allMdx.nodes.flatMap((e=>e.frontmatter.keywords)).reduce(((e,t)=>{const n=e.findIndex((e=>e.name===t));return-1===n?e.push({quantity:1,name:t}):e[n].quantity++,e}),[]).filter((e=>!p.includes(u(e.name)))).sort(((e,t)=>t.quantity-e.quantity)).sort(((e,n)=>{var r,i;return(null!==(r=m[u(e.name)])&&void 0!==r?r:t)-(null!==(i=m[u(n.name)])&&void 0!==i?i:t)}))}),[e.allMdx.nodes])}(),d=t.data,f=t.keyword;return(0,h.jsx)(o.A,{children:(0,h.jsxs)(a.V,{children:[(0,h.jsx)("h1",{className:"heading",children:f?`Articles about ${f}`:"Most Recent Articles"}),(0,h.jsxs)("ul",{className:"keywords",children:[(0,h.jsx)("li",{children:(0,h.jsx)(r.Link,{to:"/posts/",children:(0,h.jsx)(s.Z,{wide:!0,outlined:!!f,children:"All"})})}),n.map((e=>(0,h.jsx)("li",{children:(0,h.jsx)(r.Link,{to:`/posts/${(0,i.K)(e.name)}/`,children:(0,h.jsx)(s.Z,{wide:!0,outlined:e.name!==f,title:`${e.name} category contains ${1===e.quantity?"1 post":`${e.quantity} posts`}`,children:e.name})})},e.name)))]}),(0,h.jsx)("ol",{className:"list",children:d.map((e=>{var t;return(0,h.jsx)("li",{children:(0,h.jsx)(l.T,{link:e.fields.slug,wordCount:e.fields.timeToRead.words,timeToRead:null===(t=e.fields.timeToRead)||void 0===t?void 0:t.minutes,title:e.frontmatter.title||e.fields.slug,datePublished:e.frontmatter.datePublished,datePublishedMeta:e.frontmatter.datePublishedMeta,dateModifiedMeta:e.frontmatter.dateUpdatedMeta,authors:e.frontmatter.authors,content:e.frontmatter.description||e.excerpt,language:e.frontmatter.language,keywords:e.frontmatter.keywords})},e.fields.slug)}))})]})})}function x(e){let{data:t,pageContext:n,location:r}=e;const i=n.keyword,a=t.site.siteMetadata.siteUrl,s=r.pathname;return(0,h.jsx)(d.H,{url:`${a}${s}`,title:i?`${i} posts by Bartosz Łaniewski`:"Blog by Bartosz Łaniewski",description:i?`My latest posts, updates, and stories about ${i} for developers`:"My latest posts, updates, and stories about software engineering for developers"})}}}]);
//# sourceMappingURL=component---src-templates-blog-posts-tsx-4aae57b241480c3b3f36.js.map