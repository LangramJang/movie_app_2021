(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{56:function(e,t,s){},58:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),c=s(25),i=s.n(c),r=s(10),o=s(2),j=s(13),m=s.n(j),l=s(26),u=s(27),d=s(28),b=s(32),v=s(31),h=s(29),p=s.n(h),x=(s(56),s(1));var O=function(e){var t=e.year,s=e.title,n=e.summary,a=e.poster,c=e.genres;return Object(x.jsxs)("div",{className:"movie",children:[Object(x.jsx)("img",{src:a,alt:s,title:s}),Object(x.jsxs)("div",{className:"movie__data",children:[Object(x.jsx)("h3",{className:"movie__title",children:s}),Object(x.jsx)("h5",{className:"movie__year",children:t}),Object(x.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(x.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(x.jsxs)("p",{className:"movie__summary",children:[n.slice(0,140),"..."]})]})]})},_=(s(58),function(e){Object(b.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(m.a.mark((function t(){var s,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(x.jsx)("section",{className:"container",children:t?Object(x.jsx)("div",{className:"loader",children:Object(x.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(x.jsx)("div",{className:"movies",children:s.map((function(e){return Object(x.jsx)(O,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));var g=function(){return Object(x.jsx)("span",{children:"About this page: I built it because I love movies."})};var f=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(r.b,{to:"/",children:"Home"}),Object(x.jsx)(r.b,{to:"/about",children:"About"})]})};s(64);var y=function(){return Object(x.jsxs)(r.a,{children:[Object(x.jsx)(f,{}),Object(x.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(x.jsx)(o.a,{path:"/about",exact:!0,component:g})]})};i.a.render(Object(x.jsx)(y,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.3d2b21bf.chunk.js.map