(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e,t,r){},23:function(e,t,r){},24:function(e,t,r){},45:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),s=r(12),a=r.n(s),i=(r(22),r(23),r(24),r(0)),l=function(){return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h1",{children:"Employee Directory"}),Object(i.jsx)("p",{children:"Use the search box to narrow your results or click the sort button to sort by name."})]})},o=r(13),h=r(14),d=r(17),j=r(16);function u(e){return Object(i.jsx)(i.Fragment,{children:e.employees.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:e.picture.medium,alt:e.name.first})}),Object(i.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(i.jsx)("td",{children:e.phone}),Object(i.jsx)("td",{children:e.email}),Object(i.jsx)("td",{children:e.dob.date})]},e.login.uuid)}))})}var b=function(e){var t=e.handleSearchChange;return Object(i.jsx)("search",{children:Object(i.jsx)("input",{className:"search",onChange:t,placeholder:"Search..."})})},m=r(15),O=r.n(m),f=function(){return O.a.get("https://randomuser.me/api/?results=100&nat=us")},x=function(e){Object(d.a)(r,e);var t=Object(j.a)(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={results:[],order:1,filtered:[]},e.handleSearchChange=function(){var t=document.querySelector(".search").value.toLowerCase(),r=e.state.results.filter((function(e){return e.name.first.toLowerCase().indexOf(t)>-1}));e.setState({filtered:r})},e.handleNameClick=function(){var t=e.state.results;1===e.state.order?(t.sort((function(e,t){return e.name.first.localeCompare(t.name.first)})),e.setState({results:t,order:-1}),console.log("ARRAY",t)):(t.sort((function(e,t){return t.name.first.localeCompare(e.name.first)})),e.setState({results:t,order:1}))},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=this;f().then((function(t){return e.setState({results:t.data.results,filtered:t.data.results})}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{handleSearchChange:this.handleSearchChange}),Object(i.jsxs)("table",{class:"table mt-2",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Image"}),Object(i.jsxs)("th",{children:["Name",Object(i.jsx)("button",{className:"btn btn-outline-primary btn-sm ml-1",onClick:this.handleNameClick,children:"Sort"})]}),Object(i.jsx)("th",{children:"Phone Number"}),Object(i.jsx)("th",{children:"Email"}),Object(i.jsx)("th",{children:"Date of Birth"})]})}),Object(i.jsx)("tbody",{children:Object(i.jsx)(u,{employees:this.state.filtered})})]})]})}}]),r}(n.Component);function p(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(x,{})]})}r(44);a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e3ffe073.chunk.js.map