(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{13:function(e,t,c){e.exports={link:"Navigation_link__2M60J",activeLink:"Navigation_activeLink__1Kx0- Navigation_link__2M60J"}},18:function(e,t,c){e.exports={wrapperMovie:"MovieDetailsPage_wrapperMovie__2fXkH",imageMovie:"MovieDetailsPage_imageMovie__3AN29"}},21:function(e,t,c){e.exports={container:"Container_container__3sh3I"}},24:function(e,t,c){e.exports={header:"AppBar_header__3Ovz1"}},31:function(e,t,c){},59:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(20),a=c.n(r),o=c(9),s=(c(31),c(2)),j=c(21),l=c.n(j),u=c(0);function d(e){var t=e.children;return Object(u.jsx)("div",{className:l.a.container,children:t})}var h=c(13),b=c.n(h);function O(){return Object(u.jsxs)("nav",{children:[Object(u.jsx)(o.c,{exact:!0,to:"/",className:b.a.link,activeClassName:b.a.activeLink,children:"Home"}),Object(u.jsx)(o.c,{to:"/movies",className:b.a.link,activeClassName:b.a.activeLink,children:"Movies"})]})}var p=c(24),v=c.n(p);function x(){return Object(u.jsx)("header",{className:v.a.header,children:Object(u.jsx)(O,{})})}var f=c(5),g=c(17),m=c.n(g),_=c(25),w="4e286c2ceeb7113ef3a7d57d0bdb7157",k="https://api.themoviedb.org/3";function y(){return N.apply(this,arguments)}function N(){return(N=Object(_.a)(m.a.mark((function e(){var t,c,n,i=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",c=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(t,c);case 4:if(!(n=e.sent).ok){e.next=11;break}return e.next=8,n.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=c(26);function M(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){y("".concat(k,"/trending/movie/day?api_key=").concat(w)).then((function(e){i(e.results)})).catch((function(e){return S.Notify.failure(e)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Trending today"}),Object(u.jsx)("ul",{children:c.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}var I=c(10),C=c.n(I);function P(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(""),a=Object(f.a)(r,2),j=a[0],l=a[1],d=Object(n.useState)("idle"),h=Object(f.a)(d,2),b=h[0],O=h[1],p=Object(s.g)().url;console.log(p);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O("pending"),function(e){return y("".concat(k,"/search/movie?api_key=").concat(w,"&language=en-US&page=1&query=").concat(e))}(j).then((function(e){i(e.results)})).catch((function(e){return console.log(e)})).finally((function(){return O("resolved")}))},children:[Object(u.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search films",value:j,onChange:function(e){l(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"\u041f\u043e\u0438\u0441\u043a"})]}),"pending"===b&&Object(u.jsx)(C.a,{type:"Circles",color:"rgb(56, 56, 56)",height:100,width:100,timeout:1e3}),"resolved"===b&&Object(u.jsx)("ul",{children:c.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"".concat(p,"/").concat(e.id),children:e.title})},e.id)}))})]})}var F=c(63),E=c(64);function U(e){var t=e.movieId,c=Object(n.useState)([]),i=Object(f.a)(c,2),r=i[0],a=i[1],o=Object(n.useState)("idle"),s=Object(f.a)(o,2),j=s[0],l=s[1];return console.log(r),Object(n.useEffect)((function(){l("pending"),function(e){return y("".concat(k,"/movie/").concat(e,"/reviews?api_key=").concat(w,"&language=en-US&page=1"))}(t).then((function(e){return a(e.results)})).catch((function(e){return console.log(e)})).finally((function(){return l("resolved")}))}),[t]),Object(u.jsxs)(u.Fragment,{children:["pending"===j&&Object(u.jsx)(C.a,{type:"Circles",color:"rgb(56, 56, 56)",height:100,width:100,timeout:1e3}),"resolved"===j&&0===r.length?Object(u.jsx)("p",{children:"We don't have any rewiews for this movie"}):Object(u.jsx)("ul",{children:r.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("h5",{children:e.author}),Object(u.jsx)("p",{children:e.content})]},e.id)}))})]})}function J(e){var t=e.movieId,c=Object(n.useState)([]),i=Object(f.a)(c,2),r=i[0],a=i[1],o=Object(n.useState)("idle"),s=Object(f.a)(o,2),j=s[0],l=s[1];console.log(r),Object(n.useEffect)((function(){l("pending"),function(e){return y("".concat(k,"/movie/").concat(e,"/credits?api_key=").concat(w,"&language=en-US"))}(t).then((function(e){return a(e.cast)})).catch((function(e){return console.log(e)})).finally((function(){return l("resolved")}))}),[t]);var d=function(e){return e.profile_path?"https://image.tmdb.org/t/p/w500/".concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png"};return Object(u.jsxs)(u.Fragment,{children:["pending"===j&&Object(u.jsx)(C.a,{type:"Circles",color:"rgb(56, 56, 56)",height:100,width:100,timeout:1e3}),"resolved"===j&&Object(u.jsx)("ul",{children:r.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)("img",{src:d(e),alt:e.name,width:"200",height:"250"}),Object(u.jsx)("p",{children:e.name}),Object(u.jsxs)("p",{children:["Character: ",e.character]})]},e.id)}))})]})}var L=c(18),A=c.n(L);function D(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),a=Object(f.a)(r,2),j=a[0],l=a[1],d=Object(n.useState)("idle"),h=Object(f.a)(d,2),b=h[0],O=h[1],p=Object(s.f)().movieId,v=Object(s.g)().url;Object(n.useEffect)((function(){O("pending"),function(e){return y("".concat(k,"/movie/").concat(e,"?api_key=").concat(w,"&language=en-US"))}(p).then((function(e){i(e),l(e.genres)})).catch((function(e){return console.log(e)})).finally((function(){return O("resolved")}))}),[p]);return Object(u.jsxs)(u.Fragment,{children:["pending"===b&&Object(u.jsx)(C.a,{type:"Circles",color:"rgb(56, 56, 56)",height:100,width:100,timeout:1e3}),"resolved"===b&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:A.a.wrapperMovie,children:[Object(u.jsx)("div",{className:A.a.imageMovie,children:Object(u.jsx)("img",{src:c.poster_path?"https://image.tmdb.org/t/p/w500/".concat(c.poster_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png",alt:c.title})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:[c.title,c.release_date&&"(".concat(Object(F.a)(Object(E.a)(c.release_date)),")")]}),Object(u.jsxs)("p",{children:["User Popularity: ",Math.round(c.popularity)]}),Object(u.jsx)("h2",{children:"Overview"}),Object(u.jsx)("p",{children:c.overview}),Object(u.jsx)("h3",{children:"Genres"}),Object(u.jsx)("p",{children:j.map((function(e){return"".concat(e.name," ")}))})]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Additional information"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"".concat(v,"/cast"),children:"Cast"})}),Object(u.jsx)("li",{children:Object(u.jsx)(o.b,{to:"".concat(v,"/reviews"),children:"Reviews"})})]}),Object(u.jsx)("div",{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"".concat(v,"/cast"),children:Object(u.jsx)(J,{movieId:p})}),Object(u.jsx)(s.a,{path:"".concat(v,"/reviews"),children:Object(u.jsx)(U,{movieId:p})})]})})]})]})]})}c(59),c(60);var B=function(){return Object(u.jsxs)(d,{children:[Object(u.jsx)(x,{}),Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"/",exact:!0,children:Object(u.jsx)(M,{})}),Object(u.jsx)(s.a,{path:"/movies",exact:!0,children:Object(u.jsx)(P,{})}),Object(u.jsx)(s.a,{path:"/movies/:movieId",children:Object(u.jsx)(D,{})})]})]})};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(B,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.c5f75a50.chunk.js.map