"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s}});var a=n(3117),o=(n(7294),n(3905));const r={sidebar_position:1},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"We believe that creating animation should be easy for any skill level; that's why we created Anima.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/ceceppa/anima/docs/docs/intro.md",tags:[],version:"current",lastUpdatedAt:1725277312,formattedLastUpdatedAt:"Sep 2, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Anima",permalink:"/docs/anima/"}},d={},s=[{value:"Installation",id:"installation",level:2},{value:"Manual Download",id:"manual-download",level:3},{value:"Custom nodes",id:"custom-nodes",level:2},{value:"Animation Declaration",id:"animation-declaration",level:2},{value:"Example",id:"example",level:2},{value:"Live demo",id:"live-demo",level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"We believe that creating animation should be easy for any skill level; that's why we created Anima."),(0,o.kt)("p",null,"It allows you to run sequential and parallel animations with few lines of code and simple syntax.\nYou can pick any of the 89 animations and 33 easings or add your own."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Anima 3D Boxes demo",src:n(261).Z})),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The plugin is available on the ",(0,o.kt)("a",{parentName:"p",href:"https://godotengine.org/asset-library/asset/852"},"Asset Library"),"."),(0,o.kt)("h3",{id:"manual-download"},"Manual Download"),(0,o.kt)("p",null,"The latest version can be manually downloaded by cloning ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ceceppa/anima"},"this repo")," and copying the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"addons/anima")," into the same folder in your project."),(0,o.kt)("h2",{id:"custom-nodes"},"Custom nodes"),(0,o.kt)("p",null,"Anima provides those two additional nodes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/animate-node"},"AnimaNode"),", used to handle the setup of all the animations supported by the addon"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/anima-tween"},"AnimaTween"),", is the custom Tween used that allows the magic to happen :)")),(0,o.kt)("h2",{id:"animation-declaration"},"Animation Declaration"),(0,o.kt)("p",null,"Animation declarations are used to tell anima how to animate a single node, group or grid:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/anima-declaration"},"AnimaDeclarationNode"))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gdscript"},'Anima.begin(self) \\\n  .then(\n    Anima.Node($node) \\\n      .anima_animation("tada", 0.7)\n  ).play()\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE")," in Godot 4.0 you'll be able to wrap everything in parenthesis to avoid repeating \"","[variable]",'.":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gdscript"},'# Works on Godot 4.0 only:\n\nvar anima = (\n  Anima.begin(self)\n  .then(Anima.Node($node).anima_animation("tada", 0.7))\n).play()\n')),(0,o.kt)("h2",{id:"live-demo"},"Live demo"),(0,o.kt)("p",null,"Do you want to give it a try? Here is a live demo with some examples: ",(0,o.kt)("a",{parentName:"p",href:"https://anima.ceceppa.me/demo"},"https://anima.ceceppa.me/demo")))}u.isMDXComponent=!0},261:function(e,t){t.Z="data:image/gif;base64,dmVyc2lvbiBodHRwczovL2dpdC1sZnMuZ2l0aHViLmNvbS9zcGVjL3YxCm9pZCBzaGEyNTY6ZmRhNGUzZTI2YWUwNmE4M2UzMTZkZjY0M2Y4NmRiNjIxNWM5MDBhMDdjZTY3ZjMzNDU2NzdlYzUyOTIwMjE3NwpzaXplIDMzNjY2MDIK"}}]);