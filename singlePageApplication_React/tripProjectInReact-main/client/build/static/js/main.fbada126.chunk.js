(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},5:function(e,t,n){e.exports={container:"Trip_container__1brLJ",nav:"Trip_nav__1lspn",btnM:"Trip_btnM__1H5lU",container_new:"Trip_container_new__3qKB4",weather:"Trip_weather__14bgc",display:"Trip_display__3kd_u"}},71:function(e,t,n){"use strict";n.r(t);var a,c,s=n(0),i=n.n(s),r=n(31),l=n.n(r),o=(n(41),n(42),n(7)),d=n(6),j=n(10),b=n(9),h=n.n(b),p=n(5),m=n.n(p),u=n(16),O=n.n(u),x=n.p+"static/media/road.fe5b516d.jpg",f=n(12),g=n(72),v=n(11),N=n(17),w=n(1),y=Object(f.a)(g.a.button)(a||(a=Object(j.a)(["\n    padding: 0.5rem;\n    margin-right: 35px;\n    font-size: 1rem;\n    border: 2px solid #131313;\n    border-radius: 20px;\n    outline: none;\n    cursor: pointer;\n    background: transparent;\n"]))),_=function(){var e=Object(s.useState)({name:"",dateStart:"",dateFinish:"",description:""}),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)({}),i=Object(d.a)(c,2),r=i[0],l=i[1],j=function(e){a(Object(N.a)(Object(N.a)({},n),{},Object(v.a)({},e.target.name,e.target.value)))};return Object(w.jsx)("div",{className:m.a.container_new,children:Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h.a.post("http://localhost:8000/api/trips/create",n).then((function(e){console.log(e),e.data.errors?l(e.data.errors):Object(o.c)("/")})).catch((function(e){return console.log(e)}))},children:[Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col",children:[Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{className:"form-label",children:"Destinations"}),Object(w.jsx)("input",{onChange:j,type:"text",className:"form-control",name:"name"}),Object(w.jsx)("p",{className:"text-danger",children:r.name?r.name.message:""})]}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{className:"form-label",children:"Begin Date"}),Object(w.jsx)("input",{onChange:j,type:"date",className:"form-control",name:"dateStart"}),Object(w.jsx)("p",{className:"text-danger",children:r.dateStart?r.dateStart.message:""})]}),Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{className:"form-label",children:"Finish Date"}),Object(w.jsx)("input",{onChange:j,type:"date",className:"form-control",name:"dateFinish"}),Object(w.jsx)("p",{className:"text-danger",children:r.dateFinish?r.dateFinish.message:""})]})]}),Object(w.jsx)("div",{className:"col",children:Object(w.jsxs)("div",{className:"mb-3",children:[Object(w.jsx)("label",{className:"form-label",children:"Description"}),Object(w.jsx)("textarea",{onChange:j,type:"text",className:"form-control",name:"description"}),Object(w.jsx)("p",{className:"text-danger",children:r.description?r.description.message:""})]})})]}),Object(w.jsx)("div",{className:"mb-3 d-flex justify-content-end",children:Object(w.jsx)(y,{type:"submit",whileHover:{scale:1.05},whileTap:{scale:.95,backgroundColor:"#F8421B",border:"none",color:"#D8B9B3"},children:"CREATE"})})]})})},S=n(19),D=n.n(S),F=n(36),C=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(null),i=Object(d.a)(c,2),r=i[0],l=i[1];function o(){return(o=Object(F.a)(D.a.mark((function e(){var t,a,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"db39f705d21f8a023b07d4f432f8be36",t="http://api.openweathermap.org/data/2.5/weather?q=".concat(n,"&appid=").concat("db39f705d21f8a023b07d4f432f8be36","&units=imperial"),e.next=5,fetch(t);case 5:return a=e.sent,e.next=8,a.json();case 8:c=e.sent,console.log(c),l(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}return Object(w.jsxs)("div",{className:"col",children:[Object(w.jsxs)("div",{className:m.a.weather,children:[Object(w.jsx)("h1",{children:"Check weather!"}),Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){o.apply(this,arguments)}()},children:[Object(w.jsx)("input",{className:"form-control",type:"text",placeholder:"enter city",value:n,onChange:function(e){a(e.target.value)}}),Object(w.jsx)("button",{type:"submit",className:m.a.btnM,children:"Submit"})]})]}),Object(w.jsx)("div",{children:r?Object(w.jsxs)(g.a.div,{className:m.a.display,drag:!0,children:[r.main.temp,"F",Object(w.jsxs)("p",{children:["in ",r.name]})]}):null})]})},k=Object(f.a)(g.a.img)(c||(c=Object(j.a)(["\n    width: 250px;\n    height: 180px;\n    border-radius: 50%;\n    border: 3px solid rgb(180, 148, 105);\n    margin-right: 70px;\n"]))),T=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!1),i=Object(d.a)(c,2),r=i[0],l=i[1];Object(s.useEffect)((function(){h.a.get("http://localhost:8000/api/trips").then((function(e){console.log(e),a(e.data.results)})).catch((function(e){return console.log(e)}))}),[r]);return Object(w.jsxs)("div",{className:m.a.container,children:[Object(w.jsx)("div",{className:"row mb-3",children:Object(w.jsxs)("div",{className:m.a.nav,children:[Object(w.jsx)(k,{src:x,alt:"img",drag:!0}),Object(w.jsx)(_,{}),Object(w.jsx)(C,{})]})}),Object(w.jsxs)("div",{className:"row mb-3",children:[Object(w.jsx)("h3",{children:"Road trips have always been a favorite pastime in the United States and will continue to be, as what better way than being free to experience a vast array of stunning coastal views, breathtaking valleys and rocky cliffs, lush forests and limitless deserts. Behind the wheel. Our website will help you plan your trip, whichever destination you choose in the United States."}),Object(w.jsxs)("table",{children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Destinations"}),Object(w.jsx)("th",{children:"Begin Date"}),Object(w.jsx)("th",{children:"Finish Date"}),Object(w.jsx)("th",{children:"Description"}),Object(w.jsx)("th",{children:"Actions"})]})}),Object(w.jsx)("tbody",{children:n.map((function(e,t){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.name}),Object(w.jsx)("td",{children:Object(w.jsx)(O.a,{format:"MM/DD/YYYY",children:e.dateStart})}),Object(w.jsx)("td",{children:Object(w.jsx)(O.a,{format:"MM/DD/YYYY",children:e.dateFinish})}),Object(w.jsx)("td",{children:e.description}),Object(w.jsx)("td",{children:Object(w.jsx)(o.a,{onClick:function(t){return n=e._id,void h.a.delete("http://localhost:8000/api/trips/delete/".concat(n)).then((function(e){console.log("this will be deleted",e),l(!r)})).catch((function(e){return console.log(e)}));var n},to:"#!",children:Object(w.jsx)("button",{className:m.a.btnM,children:"Delete"})})})]},t)}))})]})]})]})};var B=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(o.b,{children:Object(w.jsx)(T,{path:"/"})})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};l.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(B,{})}),document.getElementById("root")),M()}},[[71,1,2]]]);
//# sourceMappingURL=main.fbada126.chunk.js.map