(this.webpackJsonpcovid=this.webpackJsonpcovid||[]).push([[0],{111:function(e,t,n){e.exports={sheet__wrapper:"GlobalPerCountry_sheet__wrapper__1qE5v",table:"GlobalPerCountry_table__34Sty"}},121:function(e,t,n){e.exports={sheet__wrapper:"GlobalSheet_sheet__wrapper__2uekK"}},122:function(e,t,n){e.exports={Map:"Map_Map__45FA4",chartdiv:"Map_chartdiv__3y_qs"}},125:function(e,t,n){e.exports={sheet__wrapper:"table_sheet__wrapper__1hUsN"}},136:function(e,t,n){},137:function(e,t,n){e.exports={App:"App_App__3_5C5"}},156:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n(28),c=n.n(r),o=n(120),i=n.n(o),l=(n(136),n(137),n(51)),s=n.n(l),u=n(83),d=n(49),j=n(121),p=n.n(j),b=n(84),h=n.n(b),O=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){!function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://corona.lmao.ninja/v2/all?yesterday");case 2:t=e.sent,c(t.data.cases);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(a.jsx)("div",{className:p.a.sheet__wrapper,children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsx)("td",{children:"Global cases!"})}),Object(a.jsx)("tbody",{children:Object(a.jsx)("td",{children:n})})]})})},x=n(111),f=n.n(x),g=function(){var e=new Array(220).fill(""),t=Object(r.useState)(),n=Object(d.a)(t,2),c=n[0],o=n[1],i=Object(r.useState)([]),l=Object(d.a)(i,2),j=l[0],p=l[1],b=Object(r.useState)([]),O=Object(d.a)(b,2),x=O[0],g=O[1],v=Object(r.useState)(""),m=Object(d.a)(v,2),_=m[0],y=m[1],w=Object(r.useState)("Country"),C=Object(d.a)(w,2),k=C[0],S=C[1],M=Object(r.useState)(""),P=Object(d.a)(M,2),N=P[0],D=P[1];return Object(r.useEffect)((function(){!function(){var e=Object(u.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://corona.lmao.ninja/v2/countries?yesterday&sort=cases");case 2:t=e.sent,n=[],t.data.map((function(e){n.push(e.cases)})),p(n),n=[],t.data.map((function(e){n.push(e.country)})),g(n),o(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(a.jsxs)("div",{className:f.a.sheet__wrapper,children:[Object(a.jsx)("input",{value:N,onChange:function(e){D(e.target.value);var t=c.findIndex((function(e){return-1!=e.search(N)}));y(j[t]),S(x[t]),console.log(N)},type:"text"}),Object(a.jsxs)("div",{children:[k,": ",Object(a.jsx)("br",{}),_]}),Object(a.jsxs)("div",{className:f.a.table,children:[Object(a.jsx)("ul",{className:"leftColumn",children:e.map((function(e,t){return Object(a.jsx)("li",{children:x[t]},t)}))}),Object(a.jsx)("ul",{className:"rightColumn",children:e.map((function(e,t){return Object(a.jsx)("li",{children:j[t]},t)}))})]})]})},v=n(122),m=n.n(v),_=n(68),y=n(88),w=n(124),C=n(126),k=n(127);_.e(C.a),_.e(k.a);var S=function(e){return Object(r.useLayoutEffect)((function(){var e=_.c("chartdiv",y.a);e.geodata=w.a,e.projection=new y.d.Miller;var t=e.series.push(new y.c);t.exclude=["AQ"],t.useGeodata=!0;var n=t.mapPolygons.template;n.tooltipText="{name}",n.polygon.fillOpacity=.6,n.states.create("hover").properties.fill=e.colors.getIndex(0);var a=e.series.push(new y.b);a.mapImages.template.propertyFields.longitude="longitude",a.mapImages.template.propertyFields.latitude="latitude",a.mapImages.template.tooltipText="{title}",a.mapImages.template.propertyFields.url="url";var r=a.mapImages.template.createChild(_.a);r.radius=3,r.propertyFields.fill="color";var c=a.mapImages.template.createChild(_.a);function o(e){e.animate([{property:"scale",from:1,to:5},{property:"opacity",from:1,to:0}],1e3,_.d.circleOut).events.on("animationended",(function(e){o(e.target.object)}))}c.radius=3,c.propertyFields.fill="color",c.events.on("inited",(function(e){o(e.target)}));var i=new _.b;a.data=[{title:"Brussels",latitude:50.8371,longitude:4.3676,color:i.next()},{title:"Copenhagen",latitude:55.6763,longitude:12.5681,color:i.next()},{title:"Paris",latitude:48.8567,longitude:2.351,color:i.next()},{title:"Reykjavik",latitude:64.1353,longitude:-21.8952,color:i.next()},{title:"Moscow",latitude:55.7558,longitude:37.6176,color:i.next()},{title:"Madrid",latitude:40.4167,longitude:-3.7033,color:i.next()},{title:"London",latitude:51.5002,longitude:-.1262,url:"http://www.google.co.uk",color:i.next()},{title:"Peking",latitude:39.9056,longitude:116.3958,color:i.next()},{title:"New Delhi",latitude:28.6353,longitude:77.225,color:i.next()},{title:"Tokyo",latitude:35.6785,longitude:139.6823,url:"http://www.google.co.jp",color:i.next()},{title:"Ankara",latitude:39.9439,longitude:32.856,color:i.next()},{title:"Buenos Aires",latitude:-34.6118,longitude:-58.4173,color:i.next()},{title:"Brasilia",latitude:-15.7801,longitude:-47.9292,color:i.next()},{title:"Ottawa",latitude:45.4235,longitude:-75.6979,color:i.next()},{title:"Washington",latitude:38.8921,longitude:-77.0241,color:i.next()},{title:"Kinshasa",latitude:-4.3369,longitude:15.3271,color:i.next()},{title:"Cairo",latitude:30.0571,longitude:31.2272,color:i.next()},{title:"Pretoria",latitude:-25.7463,longitude:28.1876,color:i.next()}]}),[]),Object(a.jsx)("div",{id:"chartdiv",className:m.a.chartdiv})},M=n(125),P=n.n(M),N=function(){var e=Object(r.useState)("Global Deaths"),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),l=i[0],j=i[1],p=Object(r.useState)(),b=Object(d.a)(p,2),O=b[0],x=b[1];return Object(r.useEffect)((function(){!function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://corona.lmao.ninja/v2/all?yesterday");case 2:t=e.sent,j(t.data.deaths),x(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(a.jsxs)("div",{className:P.a.sheet__wrapper,children:[Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsx)("td",{children:n})}),Object(a.jsx)("tbody",{children:Object(a.jsx)("td",{children:l})})]}),Object(a.jsx)("button",{onClick:function(){c("Global recovery"),j(O.recovered)},children:"RECOVERED"}),Object(a.jsx)("button",{onClick:function(){c("Global Deaths"),j(O.deaths)},children:"DEATHS"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){c("Deaths today"),j(O.todayDeaths)},children:"today Deaths"}),Object(a.jsx)("button",{onClick:function(){c("Cases today"),j(O.todayCases)},children:"today Cases"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){c("Cases to PerOneMillion"),j(O.casesPerOneMillion)},children:"Cases PerOneMillion"}),Object(a.jsx)("button",{onClick:function(){c("Deaths to PerOneMillion"),j(O.deathsPerOneMillion)},children:"Deaths PerOneMillion"})]})]})},D=function(){return Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsxs)("div",{className:"wrapper__sheets-global",children:[Object(a.jsx)(O,{}),Object(a.jsx)(g,{})]}),Object(a.jsx)(S,{}),Object(a.jsxs)("div",{className:"wrapper__sheets-global",children:[Object(a.jsx)(N,{}),Object(a.jsx)(g,{})]})]})},E=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,362)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(D,{})}),document.getElementById("root")),E()}},[[156,1,4]]]);
//# sourceMappingURL=main.0d36a9fd.chunk.js.map