(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{11:function(e,t,n){e.exports={link:"Navigation_link__12o2K",activeLink:"Navigation_activeLink__2rUFB Navigation_link__12o2K"}},16:function(e,t,n){e.exports={wrapperMovie:"MovieDetailsPage_wrapperMovie__2jltC",imageMovie:"MovieDetailsPage_imageMovie__26Mo_"}},19:function(e,t,n){e.exports={container:"Container_container__3RIox"}},22:function(e,t,n){e.exports={header:"AppBar_header__1Yk8v"}},29:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(18),r=n.n(i),o=n(8),s=(n(29),n(2)),j=n(19),l=n.n(j),u=n(0);function b(e){var t=e.children;return Object(u.jsx)("div",{className:l.a.container,children:t})}var h=n(11),d=n.n(h);function v(){return Object(u.jsxs)("nav",{children:[Object(u.jsx)(o.c,{exact:!0,to:"/",className:d.a.link,activeClassName:d.a.activeLink,children:"Home"}),Object(u.jsx)(o.c,{to:"/movies",className:d.a.link,activeClassName:d.a.activeLink,children:"Movies"})]})}var O=n(22),x=n.n(O);function p(){return Object(u.jsx)("header",{className:x.a.header,children:Object(u.jsx)(v,{})})}var f=n(7),m=n(15),g=n.n(m),_=n(23),k="4e286c2ceeb7113ef3a7d57d0bdb7157",y="https://api.themoviedb.org/3";function w(){return N.apply(this,arguments)}function N(){return(N=Object(_.a)(g.a.mark((function e(){var t,n,c,a=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(t,n);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=n(24);function S(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){w("".concat(y,"/trending/movie/day?api_key=").concat(k)).then((function(e){a(e.results)})).catch((function(e){return M.Notify.failure(e)}))}),[]),console.log(n),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Trending today"}),Object(u.jsx)("ul",{children:n.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}function C(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(f.a)(i,2),o=r[0],s=r[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){return w("".concat(y,"/search/movie?api_key=").concat(k,"&language=en-US&page=1&query=").concat(e))}(o).then((function(e){a(e.results)})),console.dir(n)},children:[Object(u.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",value:o,onChange:function(e){s(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"\u041f\u043e\u0438\u0441\u043a"})]}),Object(u.jsx)("ul",{children:n.map((function(e){return Object(u.jsx)("li",{children:e.title},e.id)}))})]})}var F=n(16),E=n.n(F);function I(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),r=Object(f.a)(i,2),o=r[0],j=r[1],l=Object(s.f)().movieId;return Object(c.useEffect)((function(){var e;(e=l,w("".concat(y,"/movie/").concat(e,"?api_key=").concat(k,"&language=en-US"))).then((function(e){a(e),j(e.genres)}))}),[l]),console.log(n),console.log(o),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:E.a.wrapperMovie,children:[Object(u.jsx)("div",{className:E.a.imageMovie,children:Object(u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:n.title})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:n.title}),Object(u.jsxs)("p",{children:["User Popularity: ",Math.round(n.popularity)]}),Object(u.jsx)("h2",{children:"Overview"}),Object(u.jsx)("p",{children:n.overview}),Object(u.jsx)("h3",{children:"Genres"}),Object(u.jsx)("p",{children:o.map((function(e){return"".concat(e.name," ")}))})]})]}),Object(u.jsx)("div",{})]})}n(39);var L=function(){return Object(u.jsxs)(b,{children:[Object(u.jsx)(p,{}),Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"/",exact:!0,children:Object(u.jsx)(S,{})}),Object(u.jsx)(s.a,{path:"/movies",exact:!0,children:Object(u.jsx)(C,{})}),Object(u.jsx)(s.a,{path:"/movies/:movieId",children:Object(u.jsx)(I,{})})]})]})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(L,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a86ad2d3.chunk.js.map