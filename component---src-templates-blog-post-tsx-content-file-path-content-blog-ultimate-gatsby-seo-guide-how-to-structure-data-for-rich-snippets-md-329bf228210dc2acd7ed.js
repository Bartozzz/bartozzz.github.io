"use strict";(self.webpackChunklaniewski_me=self.webpackChunklaniewski_me||[]).push([[989],{9291:function(e,s,n){n.r(s),n.d(s,{Head:function(){return b},default:function(){return f}});var a=n(7294),t=n(5893),c=n(1151);function l(e){const s=Object.assign({p:"p",h2:"h2",a:"a",span:"span",strong:"strong",h3:"h3",blockquote:"blockquote",ul:"ul",li:"li",h4:"h4",pre:"pre",code:"code"},(0,c.a)(),e.components),{Newsletter:n,Alert:a}=s;return a||r("Alert",!0),n||r("Newsletter",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Adding structured data can help search engines understand more about your web pages and show better, richer results. Rich snippets enhance the appearance of search results by providing additional information beyond the standard meta description. In this article, we’ll dive into structuring content for rich snippets and explore best practices for optimizing your website’s presence in search engine results."}),"\n",(0,t.jsxs)(s.h2,{id:"what-are-rich-snippets",children:[(0,t.jsx)(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#what-are-rich-snippets",children:(0,t.jsx)(s.span,{className:"icon icon-link"})}),"What are rich snippets?"]}),"\n",(0,t.jsx)(s.p,{children:"Rich snippets are the extra pieces of information that appear in search results, providing users with a snapshot of what to expect on a webpage. These snippets can include various elements such as reviews, ratings, pricing, event details, and more. By presenting this additional information, rich snippets not only make search results more informative but also make your content stand out, potentially attracting more clicks."}),"\n",(0,t.jsxs)(s.h2,{id:"how-to-structure-data-for-rich-snippets",children:[(0,t.jsx)(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-structure-data-for-rich-snippets",children:(0,t.jsx)(s.span,{className:"icon icon-link"})}),"How to structure data for rich snippets?"]}),"\n",(0,t.jsxs)(s.p,{children:["To enable search engines to understand and display rich snippets, you need to utilize specific markup languages. The two primary markup languages for this purpose are ",(0,t.jsx)(s.strong,{children:"Microdata"})," and ",(0,t.jsx)("abbr",{title:"JavaScript Object Notation for Linked Data",children:(0,t.jsx)(s.strong,{children:"JSON-LD"})}),"."]}),"\n",(0,t.jsxs)(s.h3,{id:"step-1-identify-content-types",children:[(0,t.jsx)(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-1-identify-content-types",children:(0,t.jsx)(s.span,{className:"icon icon-link"})}),"Step 1: Identify Content Types"]}),"\n",(0,t.jsxs)(s.p,{children:["Start by identifying the specific content types that could benefit from rich snippets. Common types include ",(0,t.jsx)(s.a,{href:"https://schema.org/AggregateRating",rel:"nofollow noopener noreferrer",target:"_blank",children:"reviews"}),", ",(0,t.jsx)(s.a,{href:"https://schema.org/Recipe",rel:"nofollow noopener noreferrer",target:"_blank",children:"recipes"}),", ",(0,t.jsx)(s.a,{href:"https://schema.org/Event",rel:"nofollow noopener noreferrer",target:"_blank",children:"events"}),", ",(0,t.jsx)(s.a,{href:"https://schema.org/FAQPage",rel:"nofollow noopener noreferrer",target:"_blank",children:"FAQs"}),", and more."]}),"\n",(0,t.jsxs)(s.h3,{id:"step-2-decide-which-format-to-use",children:[(0,t.jsx)(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-2-decide-which-format-to-use",children:(0,t.jsx)(s.span,{className:"icon icon-link"})}),"Step 2: Decide which format to use"]}),"\n",(0,t.jsxs)(s.p,{children:["Google recommends using ",(0,t.jsx)(s.a,{href:"https://json-ld.org/",rel:"nofollow noopener noreferrer",target:"_blank",children:"JSON-LD"})," due to its simplicity and ease of implementation. I prefer to use Microdata, because I can put it directly into the reusable components (and layouts) I use to build a webpage. Remember that you can mix both syntaxes (Microdata and JSON-LD):"]}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"I can have on the same page both syntaxes (microdata and json-ld); for instance I might use microdata to render WebPage and use json-ld for Organization;"}),"\n",(0,t.jsx)(s.li,{children:"I can also merge attributes related to the same entity when all the data is available in json-ld but…"}),"\n",(0,t.jsx)(s.li,{children:"I cannot combine information related to the same entity by item ID when this information is written in microdata and json-ld."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["– ",(0,t.jsx)(s.a,{href:"https://wordlift.io/blog/en/mixing-json-ld-and-microdata/",rel:"nofollow noopener noreferrer",target:"_blank",children:"„Mixing JSON-LD and Microdata: All You Need to Know” by Andrea Volpini"})]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"step-3-use-structured-data-markup",children:[(0,t.jsx)(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#step-3-use-structured-data-markup",children:(0,t.jsx)(s.span,{className:"icon icon-link"})}),"Step 3: Use Structured Data Markup"]}),"\n",(0,t.jsx)(s.p,{children:"Once you’ve identified content types and chosen the preferred format, you need to implement structured data. This involves embedding code within your HTML that provides explicit information about the content on the page."}),"\n",(0,t.jsx)(n,{}),"\n",(0,t.jsxs)(s.p,{children:["When implementing structured data, you should follow ",(0,t.jsx)(s.a,{href:"https://schema.org/",rel:"nofollow noopener noreferrer",target:"_blank",children:"Schema.org Guidelines"}),". Schema.org is a collaborative project between major search engines, including Google, Bing, and Yahoo. It provides a standardized vocabulary for structured data markup."]}),"\n",(0,t.jsxs)(s.h4,{id:"json-ld-example",children:[(0,t.jsx)(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#json-ld-example",children:(0,t.jsx)(s.span,{className:"icon icon-link"})}),"JSON-LD example"]}),"\n",(0,t.jsxs)(s.p,{children:["If you followed my last article ",(0,t.jsx)(s.a,{href:"/blog/ultimate-gatsby-seo-guide/how-to-create-an-seo-component/",children:"about creating an SEO component for Gatsby"}),", you can paste JSON-LD snippets directly there. Here’s an example of an article with JSON-LD structured data:"]}),"\n",(0,t.jsx)(s.pre,{className:"language-tsx",children:(0,t.jsxs)(s.code,{className:"language-tsx code-highlight",children:[(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token keyword",children:"export"})," ",(0,t.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,t.jsx)(s.span,{className:"token function",children:"Head"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,t.jsxs)(s.span,{className:"code-line",children:["  ",(0,t.jsx)(s.span,{className:"token keyword",children:"return"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"\n"]}),(0,t.jsxs)(s.span,{className:"code-line",children:["    ",(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),(0,t.jsx)(s.span,{className:"token class-name",children:"SEO"})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"      "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"script"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"type"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"application/ld+json",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:"        {JSON.stringify({\n"})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:'          "@context": "https://schema.org",\n'})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:'          "@type": "BlogPosting",\n'})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:'          "headline": "Title of the article",\n'})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:'          "datePublished": "2023-12-20T12:00:00+01:00",\n'})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:'          "dateModified": "2023-12-26T14:20:00+01:00",\n'})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:'          "image": ["https://example.com/thumbnail.png"],\n'})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:'          "author": [\n'})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:"            {\n"})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:'              "@type": "Person",\n'})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:'              "name": "Jan Kowalski",\n'})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:'              "url": "https://example.com/profile/j.kowalski"\n'})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:"            }\n"})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:"          ]\n"})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:"        })}\n"})}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"      "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"script"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"    "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),(0,t.jsx)(s.span,{className:"token class-name",children:"SEO"})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n"]}),(0,t.jsxs)(s.span,{className:"code-line",children:["  ",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})]})}),"\n",(0,t.jsx)(a,{type:"info",children:(0,t.jsxs)(s.p,{children:["There are some free tools you can use to generate structured data markup for your website, for example, ",(0,t.jsx)(s.a,{href:"https://technicalseo.com/tools/schema-markup-generator/",rel:"nofollow noopener noreferrer",target:"_blank",children:"Merkle’s Schema Markup Generator"})," which generates JSON-LD for most common types."]})}),"\n",(0,t.jsxs)(s.h4,{id:"microdata-example",children:[(0,t.jsx)(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#microdata-example",children:(0,t.jsx)(s.span,{className:"icon icon-link"})}),"Microdata example"]}),"\n",(0,t.jsx)(s.p,{children:"Here’s an example of an article using Microdata:"}),"\n",(0,t.jsx)(s.pre,{className:"language-tsx",children:(0,t.jsxs)(s.code,{className:"language-tsx code-highlight",children:[(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token keyword",children:"function"})," ",(0,t.jsx)(s.span,{className:"token function",children:"BlogPostTemplate"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"})," post ",(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token punctuation",children:")"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,t.jsxs)(s.span,{className:"code-line",children:["  ",(0,t.jsx)(s.span,{className:"token keyword",children:"return"})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"("}),"\n"]}),(0,t.jsxs)(s.span,{className:"code-line",children:["    ",(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"article"]}),"\n"]})]}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsxs)(s.span,{className:"token tag",children:["      ",(0,t.jsx)(s.span,{className:"token attr-name",children:"itemScope"}),"\n"]})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsxs)(s.span,{className:"token tag",children:["      ",(0,t.jsx)(s.span,{className:"token attr-name",children:"itemType"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"http://schema.org/Article",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),"\n"]})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsxs)(s.span,{className:"token tag",children:["      ",(0,t.jsx)(s.span,{className:"token attr-name",children:"lang"}),(0,t.jsxs)(s.span,{className:"token script language-javascript",children:[(0,t.jsx)(s.span,{className:"token script-punctuation punctuation",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"post",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"language"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"}"})]}),"\n"]})}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsxs)(s.span,{className:"token tag",children:["    ",(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"      "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"meta"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"itemProp"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"image",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"content"}),(0,t.jsxs)(s.span,{className:"token script language-javascript",children:[(0,t.jsx)(s.span,{className:"token script-punctuation punctuation",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"post",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"thumbnailUrl"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"/>"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"      "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"meta"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"itemProp"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"dateModified",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"content"}),(0,t.jsxs)(s.span,{className:"token script language-javascript",children:[(0,t.jsx)(s.span,{className:"token script-punctuation punctuation",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"post",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"dateUpdatedISO"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"}"})]})," ",(0,t.jsx)(s.span,{className:"token punctuation",children:"/>"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"      "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"header"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"        "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"h1"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"itemProp"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"headline",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"post",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"title"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"h1"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"        "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"span"]}),"\n"]})]}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsxs)(s.span,{className:"token tag",children:["          ",(0,t.jsx)(s.span,{className:"token attr-name",children:"itemScope"}),"\n"]})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsxs)(s.span,{className:"token tag",children:["          ",(0,t.jsx)(s.span,{className:"token attr-name",children:"itemProp"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"author",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),"\n"]})}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsxs)(s.span,{className:"token tag",children:["          ",(0,t.jsx)(s.span,{className:"token attr-name",children:"itemType"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"https://schema.org/Person",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),"\n"]})}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsxs)(s.span,{className:"token tag",children:["        ",(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"          By "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"span"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"itemProp"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"name",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"post",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"author"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"span"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"        "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"span"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"        "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"time"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"itemProp"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"datePublished",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"dateTime"}),(0,t.jsxs)(s.span,{className:"token script language-javascript",children:[(0,t.jsx)(s.span,{className:"token script-punctuation punctuation",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"post",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"datePublishedISO"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"}"})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"          Published on "}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"post",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"datePublished"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"        "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"time"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"      "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"header"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsx)(s.span,{className:"code-line",children:(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"      "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"<"}),"div"]})," ",(0,t.jsx)(s.span,{className:"token attr-name",children:"itemProp"}),(0,t.jsxs)(s.span,{className:"token attr-value",children:[(0,t.jsx)(s.span,{className:"token punctuation attr-equals",children:"="}),(0,t.jsx)(s.span,{className:"token punctuation",children:'"'}),"articleBody",(0,t.jsx)(s.span,{className:"token punctuation",children:'"'})]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"        "}),(0,t.jsx)(s.span,{className:"token punctuation",children:"{"}),"post",(0,t.jsx)(s.span,{className:"token punctuation",children:"."}),(0,t.jsx)(s.span,{className:"token property-access",children:"body"}),(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"      "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"div"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),(0,t.jsx)(s.span,{className:"token plain-text",children:"\n"})]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token plain-text",children:"    "}),(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsxs)(s.span,{className:"token tag",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"</"}),"article"]}),(0,t.jsx)(s.span,{className:"token punctuation",children:">"})]}),"\n"]}),(0,t.jsxs)(s.span,{className:"code-line",children:["  ",(0,t.jsx)(s.span,{className:"token punctuation",children:")"}),(0,t.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,t.jsxs)(s.span,{className:"code-line",children:[(0,t.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})]})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"itemScope"})," defines the scope of associated metadata (",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemscope",rel:"nofollow noopener noreferrer",target:"_blank",children:"docs"}),");"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"itemType"})," specifies the vocabulary that will be used to define item properties (",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemtype",rel:"nofollow noopener noreferrer",target:"_blank",children:"docs"}),");"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"itemProp"})," is used to add properties to an item (",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop",rel:"nofollow noopener noreferrer",target:"_blank",children:"docs"}),");"]}),"\n"]}),"\n",(0,t.jsx)(a,{type:"info",children:(0,t.jsxs)(s.p,{children:["If you want to create markup by hand, I recommend checking out the ",(0,t.jsx)(s.a,{href:"https://developers.google.com/search/docs/appearance/structured-data/search-gallery",rel:"nofollow noopener noreferrer",target:"_blank",children:"Google Developers Structured Data Search Gallery"})," for examples."]})}),"\n",(0,t.jsxs)(s.h2,{id:"how-to-test-structured-data",children:[(0,t.jsx)(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-test-structured-data",children:(0,t.jsx)(s.span,{className:"icon icon-link"})}),"How to test Structured Data?"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://search.google.com/test/rich-results",rel:"nofollow noopener noreferrer",target:"_blank",children:"Rich Result Test"})," is the official Google tool for testing your structured data to see which Google-rich results can be generated by the structured data on your page."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://validator.schema.org/",rel:"nofollow noopener noreferrer",target:"_blank",children:"Schema Markup Validator"})," validates all ",(0,t.jsx)(s.a,{href:"https://schema.org/",rel:"nofollow noopener noreferrer",target:"_blank",children:"Schema.org"}),"-based structured data that is embedded in web pages, without Google feature-specific warnings."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"http://linter.structured-data.org/",rel:"nofollow noopener noreferrer",target:"_blank",children:"Structured data linter"})," previews an example of what a search engine might display. Remember, it is at the discretion of each search engine provider to decide whether your page will be displayed as an enhanced search result or not in their search results pages."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.h2,{id:"conclusion",children:[(0,t.jsx)(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#conclusion",children:(0,t.jsx)(s.span,{className:"icon icon-link"})}),"Conclusion"]}),"\n",(0,t.jsx)(s.p,{children:"Structuring content for rich snippets is a powerful SEO strategy that can significantly enhance your online visibility. By implementing structured data markup using best practices, you can increase the chances of your content being featured in search results, attracting more clicks and driving organic traffic to your website."})]})}var i=function(e){void 0===e&&(e={});const{wrapper:s}=Object.assign({},(0,c.a)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)};function r(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}var o=n(4361),p=n(8029),d=n(8875),h=n(180),m=n(5551),x=n(9213),u=n(3120),j=n(6026),N=n(2349),k=n(7123);function g(e){let{data:s,pageContext:n,children:a}=e;const l=n.data,{frontmatter:i,tableOfContents:r}=l,{slug:N,timeToRead:g}=l.fields,{title:f,language:b,authors:y,datePublished:w,datePublishedMeta:v,dateUpdated:S,dateUpdatedMeta:_}=i,P=`${s.site.siteMetadata.siteUrl}/thumbnails/${(0,o.H)(N)}.png`;return(0,t.jsx)(m.A,{children:(0,t.jsx)(d.V,{children:(0,t.jsxs)("article",{className:"post",itemScope:!0,itemType:"http://schema.org/Article",lang:b,children:[(0,t.jsx)("meta",{itemProp:"image",content:P}),(0,t.jsx)("meta",{itemProp:"dateModified",content:_}),(0,t.jsx)("meta",{itemProp:"wordCount",content:`${g.words}`}),(0,t.jsxs)("header",{className:"post__header",children:[(0,t.jsx)("h1",{itemProp:"headline",children:f}),(0,t.jsxs)("p",{className:"post__header--metadata",children:[(0,t.jsx)(u.X,{data:y})," on ",(0,t.jsx)("time",{dateTime:v,itemProp:"datePublished",title:`Last modified on ${S}`,className:"post__header--date",children:w})," • ",(0,t.jsx)(j.t,{value:g.minutes})]})]}),(0,t.jsxs)("div",{className:"post__wrapper",children:[r.items?(0,t.jsx)("div",{className:"post__toc",children:(0,t.jsx)(k.o,{data:r})}):null,(0,t.jsxs)("div",{className:"post__content",children:[(0,t.jsx)("div",{itemProp:"articleBody",children:(0,t.jsx)(c.Z,{components:{Alert:p.b,Newsletter:x.m},children:a})}),(0,t.jsx)(h.$,{lang:b})]})]})]})})})}function f(e){return a.createElement(g,e,a.createElement(i,e))}function b(e){let{data:s,pageContext:n}=e;const a=n.data,c=a.fields.slug,{excerpt:l}=a,{title:i,description:r}=a.frontmatter,p=s.site.siteMetadata.siteUrl,d=`${p}/thumbnails/${(0,o.H)(c)}.png`;return(0,t.jsx)(N.H,{url:`${p}${c}`,title:i,image:d,description:r||l,children:(0,t.jsx)("html",{className:"smooth-scroll"})})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-content-blog-ultimate-gatsby-seo-guide-how-to-structure-data-for-rich-snippets-md-329bf228210dc2acd7ed.js.map