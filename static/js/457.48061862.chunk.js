"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[457],{457:function(e,s,i){i.r(s),i.d(s,{default:function(){return l}});var t=i(439),n=i(791),c=i(689),o=i(402),r={reviewsContainer:"Reviews_reviewsContainer__bHfUv",error:"Reviews_error__urRRw",subTitle:"Reviews_subTitle__GswFN",reviewsList:"Reviews_reviewsList__hDAQA",info:"Reviews_info__ij-Go",infoEl:"Reviews_infoEl__BbyvV"},a=i(184);var l=function(){var e=(0,c.UO)().movieId,s=Number(e),i=(0,n.useState)([]),l=(0,t.Z)(i,2),u=l[0],_=l[1],f=(0,n.useState)(""),v=(0,t.Z)(f,2),d=v[0],h=v[1],m=(0,n.useState)(""),w=(0,t.Z)(m,2),p=w[0],g=w[1];return(0,n.useEffect)((function(){s&&(0,o.fI)(s).then((function(e){_(e.data.results),h(e.status)})).catch((function(e){g(e.message)}))}),[s]),(0,a.jsxs)("div",{className:r.reviewsContainer,children:[(0,a.jsx)("h3",{className:r.subTitle,children:"Reviews"}),u.length>0&&(0,a.jsx)("ul",{className:r.reviewsList,children:u.map((function(e){var s=e.author,i=e.content,t=e.created_at,n=e.id;return(0,a.jsxs)("li",{className:r.listItem,children:[(0,a.jsxs)("p",{className:r.info,children:[(0,a.jsx)("span",{className:r.infoEl,children:"Author:"})," ",s]}),(0,a.jsxs)("p",{className:r.info,children:[(0,a.jsx)("span",{className:r.infoEl,children:"Created:"})," ",t.slice(0,10)]}),(0,a.jsxs)("p",{children:['"',i,'"']})]},n)}))}),p&&(0,a.jsx)("p",{className:r.error,children:"Results not found"}),200===d&&0===u.length&&(0,a.jsx)("p",{className:r.error,children:"Results not found"})]})}},402:function(e,s,i){i.d(s,{Ku:function(){return r},Pg:function(){return o},fI:function(){return a}});var t=i(243),n="https://api.themoviedb.org/3/movie/",c={api_key:"2ffe18644d276784f1ed0436b355498e"};function o(e){c.movie_id=e;try{return t.Z.get("".concat(n).concat(c.movie_id,"?api_key=").concat(c.api_key))}catch(s){console.log(s.message)}}function r(e){c.movie_id=e;try{return t.Z.get("".concat(n).concat(c.movie_id,"/credits?api_key=").concat(c.api_key))}catch(s){console.log(s.message)}}function a(e){c.movie_id=e;try{return t.Z.get("".concat(n).concat(c.movie_id,"/reviews?api_key=").concat(c.api_key))}catch(s){console.log(s.message)}}}}]);
//# sourceMappingURL=457.48061862.chunk.js.map