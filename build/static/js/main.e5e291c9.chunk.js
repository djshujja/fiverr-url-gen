(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(t,e,c){},36:function(t,e,c){},60:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c(1),j=c.n(r),s=c(27),a=c.n(s),i=(c(35),c(36),c(12)),l=c(2),o=c(8),b=c(11),u=c.n(b),h="http://localhost:5000",O=function(){var t=Object(r.useState)([]),e=Object(o.a)(t,2),c=e[0],j=e[1];Object(r.useEffect)((function(){s()}),[]);var s=function(){u.a.get(h+"/all").then((function(t){console.log(t.data),j(t.data),console.log(c)}))};return Object(n.jsxs)("div",{class:"container",children:[Object(n.jsx)("h2",{children:"Affiliate Tracking Software"}),Object(n.jsxs)("table",{class:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Full Url"}),Object(n.jsx)("th",{children:"Affiliate Link"}),Object(n.jsx)("th",{children:"Clicks"}),Object(n.jsx)("th",{children:"Get Pixels"})]})}),Object(n.jsx)("tbody",{children:c.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.full}),Object(n.jsx)("td",{children:Object(n.jsx)("a",{href:h+"/".concat(t.short),children:h+"/".concat(t.short)})}),Object(n.jsx)("td",{children:t.clicks}),Object(n.jsx)("td",{children:Object(n.jsx)(i.b,{to:"/".concat(t.short),children:"Get Pixels"})})]},t._id)}))})]})]})},d=c(17),x=c.n(d),f=c(29),p=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),c=e[0],j=e[1],s=Object(r.useState)(""),a=Object(o.a)(s,2),i=a[0],l=a[1],b=Object(r.useState)(""),O=Object(o.a)(b,2),d=O[0],p=O[1],g=Object(r.useState)({}),v=Object(o.a)(g,2),m=v[0],S=v[1],k=Object(r.useState)(!1),F=Object(o.a)(k,2),T=F[0],w=F[1],y=Object(r.useState)(""),C=Object(o.a)(y,2),P=C[0],L=C[1],U=Object(r.useState)(""),E=Object(o.a)(U,2);E[0],E[1];Object(r.useEffect)((function(){S({sourceId:c,full:i,sub:d})}),[c,i,d]);var q=function(){var t=Object(f.a)(x.a.mark((function t(e){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),A(m);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(t){console.log(t),u.a.post("".concat(h,"/shortUrls"),t).then((function(t){w(!0),L(t.data.short)}))},G="<img src='".concat(h,"/").concat(P,"' width='1px' height='1px' />");return Object(n.jsxs)("div",{children:[Object(n.jsxs)("form",{onSubmit:q,children:[Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"source",children:"Tracking URL"}),Object(n.jsx)("input",{name:"source",type:"text",value:i,onChange:function(t){return l(t.target.value)},required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"source",children:"Enter Source"}),Object(n.jsx)("input",{name:"source",type:"text",value:c,onChange:function(t){return j(t.target.value)},required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"Sub",children:"Enter Sub"}),Object(n.jsx)("input",{name:"sub",type:"text",value:d,onChange:function(t){return p(t.target.value)},required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{type:"submit",children:"Generate Url and Pixels"})]}),T?Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"HTML Pixels"}),G,Object(n.jsx)("br",{}),Object(n.jsx)("h2",{children:"Tracking Url"}),"".concat(h,"/").concat(P)]}):null]})};var g=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsx)(p,{})]})},v=function(t){var e=t.location.pathname+t.location.search,c="<img src='".concat(h).concat(e,"' width='1px' height='1px' />");return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"HTML Pixels"}),c,Object(n.jsx)("br",{}),Object(n.jsx)("h2",{children:"Tracking Url"}),"".concat(h).concat(e)]})})};var m=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(i.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/",exact:!0,component:g}),Object(n.jsx)(l.a,{path:"/generate",exact:!0,component:p}),Object(n.jsx)(l.a,{path:"/:id",component:v})]})})})},S=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,j=e.getLCP,s=e.getTTFB;c(t),n(t),r(t),j(t),s(t)}))};a.a.render(Object(n.jsx)(j.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),S()}},[[60,1,2]]]);
//# sourceMappingURL=main.e5e291c9.chunk.js.map