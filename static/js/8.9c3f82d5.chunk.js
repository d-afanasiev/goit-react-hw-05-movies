(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[8],{65:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return o}));var n=c(56),i=c(0),r=c(55),a=c(1);function o(t){var e=t.movieId,c=Object(i.useState)([]),o=Object(n.a)(c,2),s=o[0],h=o[1];Object(i.useEffect)((function(){Object(r.a)(e).then((function(t){return h(t.cast)})).catch((function(t){return console.log(t)}))}),[e]);var u=function(t){return t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png"};return Object(a.jsx)("ul",{children:s.map((function(t){return Object(a.jsxs)("li",{children:[Object(a.jsx)("img",{src:u(t),alt:t.name,width:"200",height:"250"}),Object(a.jsx)("p",{children:t.name}),Object(a.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))})}}}]);
//# sourceMappingURL=8.9c3f82d5.chunk.js.map