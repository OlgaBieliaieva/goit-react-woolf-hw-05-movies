"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[802],{802:function(e,i,t){t.r(i),t.d(i,{default:function(){return k}});var s=t(439),n=t(689),a=t(87),c=t(791),o=t(402),r="Info_infoContainer__HdlvP",l="Info_wrapper__5nV8Q",_="Info_title__BFu7L",d="Info_contentWrapper__1ce3A",u="Info_subTitle__1T9+h",v=t(184);var m=function(e){var i=e.movieInfo,t=i.poster_path,s=i.title,n=i.release_date,a=i.vote_average,c=i.overview,o=i.genres;return(0,v.jsxs)("div",{className:r,children:[(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t),alt:s}),(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("h2",{className:_,children:" ".concat(s," (").concat(n.slice(0,4),")")}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("p",{children:["User score: ",a.toFixed(1)]}),(0,v.jsx)("h3",{className:u,children:"Genres"}),(0,v.jsx)("p",{children:o.map((function(e){return e.name})).join(", ")})]})]})]}),(0,v.jsx)("h3",{className:u,children:"Overview"}),(0,v.jsx)("p",{children:c})]})},f="MovieDetails_pageContainer__pLG1a",h="MovieDetails_error__uOHXe",p="MovieDetails_backLink__dzd-p",j="MovieDetails_subtitle__NWwoQ",x="MovieDetails_detailsList__c-mmj",g="MovieDetails_link__U+v+7";var k=function(){var e,i,t=(0,n.UO)().movieId,r=(0,n.TH)(),l=(0,c.useRef)(null!==(e=null===(i=r.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/"),_=(0,c.useState)({}),d=(0,s.Z)(_,2),u=d[0],k=d[1],w=(0,c.useState)(""),N=(0,s.Z)(w,2),y=N[0],b=N[1];return(0,c.useEffect)((function(){t&&(0,o.Pg)(t).then((function(e){k(e.data)})).catch((function(e){b(e.message)}))}),[t]),(0,v.jsxs)("main",{className:f,children:[(0,v.jsx)("div",{children:(0,v.jsx)(a.rU,{to:l.current,className:p,children:"\u2b05 Go back"})}),(y||!1===u.title)&&(0,v.jsx)("p",{className:h,children:"Results not found"}),u.title&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{movieInfo:u}),(0,v.jsx)("h4",{className:j,children:"Additional information"}),(0,v.jsxs)("ul",{className:x,children:[(0,v.jsx)("li",{className:g,children:(0,v.jsx)(a.rU,{to:"cast",state:{from:r},children:"Cast"})}),(0,v.jsx)("li",{className:g,children:(0,v.jsx)(a.rU,{to:"reviews",state:{from:r},children:"Reviews"})})]}),(0,v.jsx)(n.j3,{})]})]})}},402:function(e,i,t){t.d(i,{Ku:function(){return o},Pg:function(){return c},fI:function(){return r}});var s=t(243),n="https://api.themoviedb.org/3/movie/",a={api_key:"2ffe18644d276784f1ed0436b355498e"};function c(e){a.movie_id=e;try{return s.Z.get("".concat(n).concat(a.movie_id,"?api_key=").concat(a.api_key))}catch(i){console.log(i.message)}}function o(e){a.movie_id=e;try{return s.Z.get("".concat(n).concat(a.movie_id,"/credits?api_key=").concat(a.api_key))}catch(i){console.log(i.message)}}function r(e){a.movie_id=e;try{return s.Z.get("".concat(n).concat(a.movie_id,"/reviews?api_key=").concat(a.api_key))}catch(i){console.log(i.message)}}}}]);
//# sourceMappingURL=802.4f41f7f2.chunk.js.map