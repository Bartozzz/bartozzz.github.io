"use strict";(self.webpackChunklaniewski_me=self.webpackChunklaniewski_me||[]).push([[640],{9302:function(e,s,n){n.r(s),n.d(s,{Head:function(){return f},default:function(){return g}});var a=n(7294),l=n(5893),c=n(1151);function t(e){const s=Object.assign({p:"p",h2:"h2",a:"a",svg:"svg",path:"path",blockquote:"blockquote",code:"code",pre:"pre",span:"span"},(0,c.a)(),e.components),{Newsletter:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Newsletter",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"Most of the designs are rarely built with user preferences in mind, it is the appearance that matters after all! Few people realize the way you respect and adapt the design to users’ preferences can have an impact on how accessible your product is. In this article, I’ll list out few things to keep in mind when developing inclusive designs."}),"\n",(0,l.jsxs)(s.h2,{id:"prevent-animations-if-a-user-prefers-reduced-motion",children:["Prevent animations if a user prefers reduced motion",(0,l.jsx)(s.a,{className:"heading-link","aria-label":'Permalink to "Prevent animations if a user prefers reduced motion"',href:"#prevent-animations-if-a-user-prefers-reduced-motion",children:(0,l.jsx)(s.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:(0,l.jsx)(s.path,{d:"m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"})})})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsxs)(s.p,{children:["Some users experience distraction or nausea from animated content. For example, if scrolling a page causes elements to move (other than the essential movement associated with scrolling) it can trigger vestibular disorders. ~ ",(0,l.jsx)(s.a,{href:"https://www.w3.org/WAI/WCAG21/Techniques/css/C39",rel:"nofollow noopener noreferrer",target:"_blank",children:"W3 WCAG"})]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsxs)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",rel:"nofollow noopener noreferrer",target:"_blank",children:["The ",(0,l.jsx)(s.code,{children:"prefers-reduced-motion"})," media query"]})," can be used to detect if the user prefers to limit the amount of non-essential motions. The user can indicate this preference in their operating system. The following CSS code can be applied to disable that motion for users who request it:"]}),"\n",(0,l.jsx)(s.pre,{className:"language-css",children:(0,l.jsxs)(s.code,{className:"language-css code-highlight",children:[(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsxs)(s.span,{className:"token atrule",children:[(0,l.jsx)(s.span,{className:"token rule",children:"@media"})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"("}),(0,l.jsx)(s.span,{className:"token property",children:"prefers-reduced-motion"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," reduced",(0,l.jsx)(s.span,{className:"token punctuation",children:")"})]})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token selector",children:(0,l.jsx)(s.span,{className:"token class",children:".element"})})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token comment",children:"/* CSS to disable motion goes here */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token property",children:"animation"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," none",(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})]})}),"\n",(0,l.jsx)(s.p,{children:"I prefer to go the other way around and enable animations for users who have made no preference known to the system."}),"\n",(0,l.jsx)(s.pre,{className:"language-css",children:(0,l.jsxs)(s.code,{className:"language-css code-highlight",children:[(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsxs)(s.span,{className:"token atrule",children:[(0,l.jsx)(s.span,{className:"token rule",children:"@media"})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"("}),(0,l.jsx)(s.span,{className:"token property",children:"prefers-reduced-motion"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," no-preference",(0,l.jsx)(s.span,{className:"token punctuation",children:")"})]})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token selector",children:(0,l.jsx)(s.span,{className:"token class",children:".element"})})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token comment",children:"/* CSS to enable motion goes here */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token property",children:"transition"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," all ",(0,l.jsx)(s.span,{className:"token number",children:"0.2"}),(0,l.jsx)(s.span,{className:"token unit",children:"s"})," ease",(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})]})}),"\n",(0,l.jsxs)(s.p,{children:["Keep in mind that reduced motion preference does not only apply to animations – it can apply to transitions but also to GIFs or videos with auto-play. ",(0,l.jsx)(s.a,{href:"https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/#section3",rel:"nofollow noopener noreferrer",target:"_blank",children:"Val Head created a great article"})," in which he points out how to identify potentially triggering animations."]}),"\n",(0,l.jsxs)(s.h2,{id:"size-content-based-on-the-users-preferred-font-size",children:["Size content based on the user’s preferred font size",(0,l.jsx)(s.a,{className:"heading-link","aria-label":'Permalink to "Size content based on the user’s preferred font size"',href:"#size-content-based-on-the-users-preferred-font-size",children:(0,l.jsx)(s.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:(0,l.jsx)(s.path,{d:"m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"})})})]}),"\n",(0,l.jsxs)(s.p,{children:["Users can adjust the preferred font size in the browser setting. The browser font size can be read by using percentage units – setting ",(0,l.jsx)(s.code,{children:"font-size: 100%"})," will make your text 100% of the base font size set in the browser by the user:"]}),"\n",(0,l.jsx)(s.pre,{className:"language-css",children:(0,l.jsxs)(s.code,{className:"language-css code-highlight",children:[(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token selector",children:"html"})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token comment",children:"/* Depending on the user settings, this can be 9px, 12px, 16px, 20px, 24px */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token property",children:"font-size"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," ",(0,l.jsx)(s.span,{className:"token number",children:"100"}),(0,l.jsx)(s.span,{className:"token unit",children:"%"}),(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})]})}),"\n",(0,l.jsxs)(s.p,{children:["Setting the root font size to a percentage value will respect user choices and allow you to scale the other parts of your application accordingly by using ",(0,l.jsxs)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#relative_length_units",rel:"nofollow noopener noreferrer",target:"_blank",children:["relative length units such as ",(0,l.jsx)(s.code,{children:"em"})," or ",(0,l.jsx)(s.code,{children:"rem"})]}),". A trick used to facilitate rem calculations is to set the root font size to 62.5%, which defaults to ",(0,l.jsx)(s.code,{children:"10px"})," on default settings:"]}),"\n",(0,l.jsx)(s.pre,{className:"language-css",children:(0,l.jsxs)(s.code,{className:"language-css code-highlight",children:[(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token selector",children:"html"})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token comment",children:"/* 1rem = 10px */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token property",children:"font-size"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," ",(0,l.jsx)(s.span,{className:"token number",children:"62.5"}),(0,l.jsx)(s.span,{className:"token unit",children:"%"}),(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsx)(s.span,{className:"code-line",children:"\n"}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token selector",children:(0,l.jsx)(s.span,{className:"token class",children:".container"})})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token comment",children:"/* When very small font-size is set : 70rem = ~395px */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token comment",children:"/* When small font-size is set      : 70rem = ~525px */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token comment",children:"/* When normal font-size is set     : 70rem = ~700px */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token comment",children:"/* When large font-size is set      : 70rem = ~875px */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token comment",children:"/* When very large font-size is set : 70rem = ~1050px */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token property",children:"max-width"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," ",(0,l.jsx)(s.span,{className:"token number",children:"70"}),(0,l.jsx)(s.span,{className:"token unit",children:"rem"}),(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})]})}),"\n",(0,l.jsxs)(s.p,{children:["…with that, you should be able to size everything using relative length units without a headache. Keep in mind that you don’t have to limit yourself to font sizes. You can use ",(0,l.jsx)(s.code,{children:"rem"})," unit on breakpoints, widths, heights, and any other CSS property."]}),"\n",(0,l.jsx)(n,{}),"\n",(0,l.jsxs)(s.h2,{id:"use-a-color-scheme-based-on-the-users-preferred-theme",children:["Use a color scheme based on the user’s preferred theme",(0,l.jsx)(s.a,{className:"heading-link","aria-label":'Permalink to "Use a color scheme based on the user’s preferred theme"',href:"#use-a-color-scheme-based-on-the-users-preferred-theme",children:(0,l.jsx)(s.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:(0,l.jsx)(s.path,{d:"m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"})})})]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsxs)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme",rel:"nofollow noopener noreferrer",target:"_blank",children:["The ",(0,l.jsx)(s.code,{children:"prefers-color-scheme"})," media query"]})," can be used to make your website adapt to the user’s preferred color scheme. The user might indicate this preference by changing the color scheme in their operating system."]}),"\n",(0,l.jsx)(s.pre,{className:"language-css",children:(0,l.jsxs)(s.code,{className:"language-css code-highlight",children:[(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsxs)(s.span,{className:"token atrule",children:[(0,l.jsx)(s.span,{className:"token rule",children:"@media"})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"("}),(0,l.jsx)(s.span,{className:"token property",children:"prefers-color-scheme"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," dark",(0,l.jsx)(s.span,{className:"token punctuation",children:")"})]})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token selector",children:(0,l.jsx)(s.span,{className:"token pseudo-class",children:":root"})})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token variable",children:"--text-primary"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," ",(0,l.jsx)(s.span,{className:"token hexcode color",children:"#fff"}),(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token variable",children:"--background"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," ",(0,l.jsx)(s.span,{className:"token hexcode color",children:"#000"}),(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsx)(s.span,{className:"code-line",children:"\n"}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsxs)(s.span,{className:"token atrule",children:[(0,l.jsx)(s.span,{className:"token rule",children:"@media"})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"("}),(0,l.jsx)(s.span,{className:"token property",children:"prefers-color-scheme"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," light",(0,l.jsx)(s.span,{className:"token punctuation",children:")"})]})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token selector",children:(0,l.jsx)(s.span,{className:"token pseudo-class",children:":root"})})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token variable",children:"--text-primary"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," ",(0,l.jsx)(s.span,{className:"token hexcode color",children:"#000"}),(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token variable",children:"--background"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," ",(0,l.jsx)(s.span,{className:"token hexcode color",children:"#fff"}),(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})]})}),"\n",(0,l.jsxs)(s.p,{children:["Light and dark modes have different use cases but both contribute to the ",(0,l.jsx)(s.a,{href:"https://www.health.harvard.edu/staying-healthy/blue-light-has-a-dark-side",rel:"nofollow noopener noreferrer",target:"_blank",children:"health & well-being"})," of the audience. A light mode will be preferred in a well-lit room or direct sunlight, whereas dark mode is preferred during the night or when saving the battery life."]}),"\n",(0,l.jsxs)(s.h2,{id:"adapt-to-the-users-preferred-contrast-level",children:["Adapt to the user’s preferred contrast level",(0,l.jsx)(s.a,{className:"heading-link","aria-label":'Permalink to "Adapt to the user’s preferred contrast level"',href:"#adapt-to-the-users-preferred-contrast-level",children:(0,l.jsx)(s.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:(0,l.jsx)(s.path,{d:"m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"})})})]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsxs)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast",rel:"nofollow noopener noreferrer",target:"_blank",children:["The ",(0,l.jsx)(s.code,{children:"prefers-contrast"})," media query"]})," can be used to make your website adapt to the user’s preferred contrast level. The user might indicate this preference by changing the contrast level in their operating system."]}),"\n",(0,l.jsx)(s.pre,{className:"language-css",children:(0,l.jsxs)(s.code,{className:"language-css code-highlight",children:[(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token comment",children:"/* When users have no contrast preferences */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token selector",children:(0,l.jsx)(s.span,{className:"token class",children:".element"})})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token property",children:"outline"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," ",(0,l.jsx)(s.span,{className:"token number",children:"2"}),(0,l.jsx)(s.span,{className:"token unit",children:"px"})," dashed ",(0,l.jsx)(s.span,{className:"token color",children:"black"}),(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsx)(s.span,{className:"code-line",children:"\n"}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token comment",children:"/* When users prefer a higher level of contrast */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsxs)(s.span,{className:"token atrule",children:[(0,l.jsx)(s.span,{className:"token rule",children:"@media"})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"("}),(0,l.jsx)(s.span,{className:"token property",children:"prefers-contrast"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," more",(0,l.jsx)(s.span,{className:"token punctuation",children:")"})]})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token selector",children:(0,l.jsx)(s.span,{className:"token class",children:".element"})})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token property",children:"outline"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," ",(0,l.jsx)(s.span,{className:"token number",children:"2"}),(0,l.jsx)(s.span,{className:"token unit",children:"px"})," solid ",(0,l.jsx)(s.span,{className:"token color",children:"black"}),(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsx)(s.span,{className:"code-line",children:"\n"}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token comment",children:"/* When users prefer a lower level of contrast */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsxs)(s.span,{className:"token atrule",children:[(0,l.jsx)(s.span,{className:"token rule",children:"@media"})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"("}),(0,l.jsx)(s.span,{className:"token property",children:"prefers-contrast"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," less",(0,l.jsx)(s.span,{className:"token punctuation",children:")"})]})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token selector",children:(0,l.jsx)(s.span,{className:"token class",children:".element"})})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token property",children:"outline"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," ",(0,l.jsx)(s.span,{className:"token number",children:"2"}),(0,l.jsx)(s.span,{className:"token unit",children:"px"})," dashed ",(0,l.jsx)(s.span,{className:"token color",children:"gray"}),(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})]})}),"\n",(0,l.jsxs)(s.h2,{id:"use-a-range-of-colors-supported-by-the-users-device",children:["Use a range of colors supported by the user’s device",(0,l.jsx)(s.a,{className:"heading-link","aria-label":'Permalink to "Use a range of colors supported by the user’s device"',href:"#use-a-range-of-colors-supported-by-the-users-device",children:(0,l.jsx)(s.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:"16",height:"16",fill:"currentColor","aria-hidden":"true",children:(0,l.jsx)(s.path,{d:"m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"})})})]}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsxs)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut",rel:"nofollow noopener noreferrer",target:"_blank",children:["The ",(0,l.jsx)(s.code,{children:"color-gamut"})," media query"]})," can be used to detect the approximate range of colors that are supported by the user monitor. You can use it to adapt your color palette adaptively to the user’s display."]}),"\n",(0,l.jsx)(s.pre,{className:"language-css",children:(0,l.jsxs)(s.code,{className:"language-css code-highlight",children:[(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token comment",children:"/* Assume the output device can support approximately the sRGB gamut or more */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token selector",children:(0,l.jsx)(s.span,{className:"token pseudo-class",children:":root"})})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token variable",children:"--primary"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," …",(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsx)(s.span,{className:"code-line",children:"\n"}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token comment",children:"/* The device supports the p3 gamut: larger than and includes the sRGB gamut */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsxs)(s.span,{className:"token atrule",children:[(0,l.jsx)(s.span,{className:"token rule",children:"@media"})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"("}),(0,l.jsx)(s.span,{className:"token property",children:"color-gamut"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," p3",(0,l.jsx)(s.span,{className:"token punctuation",children:")"})]})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token selector",children:(0,l.jsx)(s.span,{className:"token pseudo-class",children:":root"})})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token variable",children:"--primary"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," …",(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsx)(s.span,{className:"code-line",children:"\n"}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token comment",children:"/* The device supports rec2020 gamut: larger than and includes the p3 gamut */"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsxs)(s.span,{className:"token atrule",children:[(0,l.jsx)(s.span,{className:"token rule",children:"@media"})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"("}),(0,l.jsx)(s.span,{className:"token property",children:"color-gamut"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," rec2020",(0,l.jsx)(s.span,{className:"token punctuation",children:")"})]})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token selector",children:(0,l.jsx)(s.span,{className:"token pseudo-class",children:":root"})})," ",(0,l.jsx)(s.span,{className:"token punctuation",children:"{"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["    ",(0,l.jsx)(s.span,{className:"token variable",children:"--primary"}),(0,l.jsx)(s.span,{className:"token punctuation",children:":"})," …",(0,l.jsx)(s.span,{className:"token punctuation",children:";"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:["  ",(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]}),(0,l.jsxs)(s.span,{className:"code-line",children:[(0,l.jsx)(s.span,{className:"token punctuation",children:"}"}),"\n"]})]})}),"\n",(0,l.jsxs)(s.p,{children:["If you want to make full use of larger gamuts, you need to use new CSS colors formats (",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab",rel:"nofollow noopener noreferrer",target:"_blank",children:(0,l.jsx)(s.code,{children:"lab"})}),", ",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch",rel:"nofollow noopener noreferrer",target:"_blank",children:(0,l.jsx)(s.code,{children:"lch"})}),", ",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color",rel:"nofollow noopener noreferrer",target:"_blank",children:(0,l.jsx)(s.code,{children:"display-p3"})}),") or ",(0,l.jsx)(s.a,{href:"https://twitter.com/panic/status/1106633444157607936",rel:"nofollow noopener noreferrer",target:"_blank",children:"fall back to images, as they support color profiles"}),". Keep in mind that ultra-bright colors available on the ",(0,l.jsx)(s.code,{children:"p3"})," and ",(0,l.jsx)(s.code,{children:"rec2020"})," gamuts can be uncomfortable and damage the screen if used on static content."]}),"\n"]})}var r=function(e){void 0===e&&(e={});const{wrapper:s}=Object.assign({},(0,c.a)(),e.components);return s?(0,l.jsx)(s,Object.assign({},e,{children:(0,l.jsx)(t,e)})):t(e)};var o=n(4361),i=n(8029),d=n(8875),p=n(180),h=n(5551),m=n(9213),u=n(3120),x=n(6026),j=n(2349),N=n(7123);function k(e){let{data:s,pageContext:n,children:a}=e;const t=n.data,{frontmatter:r,tableOfContents:j}=t,{slug:k,timeToRead:g}=t.fields,{title:f,language:b,authors:w,datePublished:v,datePublishedMeta:y,dateUpdated:S,dateUpdatedMeta:_}=r,z=`${s.site.siteMetadata.siteUrl}/thumbnails/${(0,o.H)(k)}.png`;return(0,l.jsx)(h.A,{children:(0,l.jsx)(d.V,{children:(0,l.jsxs)("article",{className:"post",itemScope:!0,itemType:"http://schema.org/Article",lang:b,children:[(0,l.jsx)("meta",{itemProp:"image",content:z}),(0,l.jsx)("meta",{itemProp:"dateModified",content:_}),(0,l.jsx)("meta",{itemProp:"wordCount",content:`${g.words}`}),(0,l.jsxs)("header",{className:"post__header",children:[(0,l.jsx)("h1",{itemProp:"headline",children:f}),(0,l.jsxs)("p",{className:"post__header--metadata",children:[(0,l.jsx)(u.X,{data:w})," on ",(0,l.jsx)("time",{dateTime:y,itemProp:"datePublished",title:`Last modified on ${S}`,className:"post__header--date",children:v})," • ",(0,l.jsx)(x.t,{value:g.minutes})]})]}),(0,l.jsxs)("div",{className:"post__wrapper",children:[j.items?(0,l.jsx)("div",{className:"post__toc",children:(0,l.jsx)(N.o,{data:j})}):null,(0,l.jsxs)("div",{className:"post__content",children:[(0,l.jsx)("div",{itemProp:"articleBody",children:(0,l.jsx)(c.Z,{components:{Alert:i.b,Newsletter:m.m},children:a})}),(0,l.jsx)(p.$,{lang:b})]})]})]})})})}function g(e){return a.createElement(k,e,a.createElement(r,e))}function f(e){let{data:s,pageContext:n}=e;const a=n.data,c=a.fields.slug,{excerpt:t}=a,{title:r,description:i}=a.frontmatter,d=s.site.siteMetadata.siteUrl,p=`${d}/thumbnails/${(0,o.H)(c)}.png`;return(0,l.jsx)(j.H,{url:`${d}${c}`,title:r,image:p,description:i||t,children:(0,l.jsx)("html",{className:"smooth-scroll"})})}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-content-blog-2021-12-13-accessible-css-that-respects-user-choices-index-md-96d6816a09e14adddc5f.js.map