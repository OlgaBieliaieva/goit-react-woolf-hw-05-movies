"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[21],{991:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var c=a(439),n=a(791),s=a(689),i=a(402),o=a.p+"static/media/defaultImg.91b09929d18689bf5095.jpg",r="Cast_castContainer__NIXqj",l="Cast_error__hQWWB",u="Cast_subTitle__tUkuB",_="Cast_gallery__LrDoG",d="Cast_info__UHntJ",f="Cast_infoEl__tViKX",h=a(184);var m=function(){var e=(0,s.UO)().movieId,t=Number(e),a=(0,n.useState)([]),m=(0,c.Z)(a,2),g=m[0],p=m[1],v=(0,n.useState)(""),j=(0,c.Z)(v,2),k=j[0],x=j[1],y=(0,n.useState)(""),C=(0,c.Z)(y,2),N=C[0],b=C[1];return(0,n.useEffect)((function(){t&&(0,i.Ku)(t).then((function(e){p(e.data.cast),x(e.status)})).catch((function(e){b(e.message)}))}),[t]),(0,h.jsxs)("div",{className:r,children:[(0,h.jsx)("h3",{className:u,children:"Cast"}),g.length>0&&(0,h.jsx)("ul",{className:_,children:g.map((function(e,t){var a=e.profile_path,c=e.name,n=e.character;return(0,h.jsxs)("li",{children:[null!==a&&(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(a),alt:c}),null===a&&(0,h.jsx)("img",{src:o,alt:c,width:200,height:300}),(0,h.jsx)("p",{className:d,children:c}),(0,h.jsxs)("p",{className:d,children:[(0,h.jsx)("span",{className:f,children:"Character:"})," ",n]})]},t)}))}),N&&(0,h.jsx)("p",{className:l,children:"Results not found"}),200===k&&0===g.length&&(0,h.jsx)("p",{className:l,children:"Results not found"})]})}},402:function(e,t,a){a.d(t,{Ku:function(){return o},Pg:function(){return i},fI:function(){return r}});var c=a(243),n="https://api.themoviedb.org/3/movie/",s={api_key:"2ffe18644d276784f1ed0436b355498e"};function i(e){s.movie_id=e;try{return c.Z.get("".concat(n).concat(s.movie_id,"?api_key=").concat(s.api_key))}catch(t){console.log(t.message)}}function o(e){s.movie_id=e;try{return c.Z.get("".concat(n).concat(s.movie_id,"/credits?api_key=").concat(s.api_key))}catch(t){console.log(t.message)}}function r(e){s.movie_id=e;try{return c.Z.get("".concat(n).concat(s.movie_id,"/reviews?api_key=").concat(s.api_key))}catch(t){console.log(t.message)}}}}]);
//# sourceMappingURL=21.e23bc8fc.chunk.js.map