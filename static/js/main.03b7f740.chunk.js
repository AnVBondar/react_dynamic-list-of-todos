(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(1),l=c.n(n),i=(c(12),c(13),c(7)),r=c(2);function d(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var o;!function(e){e.All="All",e.Active="Active",e.Completed="Completed"}(o||(o={}));var j=c(0),u=l.a.createContext({todosList:[],loader:!1,filterSelect:o.All,setFilterSelect:function(e){},search:"",setSearch:function(e){},todo:null,setTodo:function(e){}}),b=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(r.a)(c,2),a=s[0],l=s[1],i=Object(n.useState)(!1),b=Object(r.a)(i,2),h=b[0],O=b[1],m=Object(n.useState)(o.All),x=Object(r.a)(m,2),f=x[0],v=x[1],p=Object(n.useState)(""),N=Object(r.a)(p,2),y=N[0],S=N[1],g=Object(n.useState)(null),C=Object(r.a)(g,2),k=C[0],A=C[1];Object(n.useEffect)((function(){O(!0),d("/todos").then(l).finally((function(){return O(!1)}))}),[]);var T={todosList:a,loader:h,filterSelect:f,setFilterSelect:v,search:y,setSearch:S,todo:k,setTodo:A};return Object(j.jsx)(u.Provider,{value:T,children:t})};var h=function(){var e=Object(n.useContext)(u),t=e.todo,c=e.todosList,s=e.filterSelect,a=e.search,l=e.setTodo,r=function(e,t,c){var s=Object(i.a)(e).filter((function(e){return e.title.includes(c)}));switch(t){case o.Active:return s.filter((function(e){return!1===e.completed}));case o.Completed:return s.filter((function(e){return!0===e.completed}));default:return s}}(c,s,a);return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:r.map((function(e){var c=e.id,s=e.title,a=e.completed,n=e.userId;return Object(j.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(j.jsx)("td",{className:"is-vcentered",children:c}),Object(j.jsx)("td",{className:"is-vcentered",children:a&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:a?"has-text-success":"has-text-danger",children:s})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return l({id:c,title:s,completed:a,userId:n})},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:(null===t||void 0===t?void 0:t.id)===c?"far fa-eye-slash":"far fa-eye"})})})})]},c)}))})]})},O=function(){var e=Object(n.useContext)(u),t=e.filterSelect,c=e.setFilterSelect,s=e.search,a=e.setSearch;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){c(e.currentTarget.value)},children:[Object(j.jsx)("option",{value:o.All,children:"All"}),Object(j.jsx)("option",{value:o.Active,children:"Active"}),Object(j.jsx)("option",{value:o.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return a(e.currentTarget.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})},m=(c(15),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),x=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),l=Object(r.a)(a,2),i=l[0],o=l[1],b=Object(n.useContext)(u),h=b.todo,O=b.setTodo;return Object(n.useEffect)((function(){var e;o(!0),h&&(e=h.userId,d("/users/".concat(e))).then(s).finally((function(){return o(!1)}))}),[]),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),i?Object(j.jsx)(m,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===h||void 0===h?void 0:h.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return O(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:null===h||void 0===h?void 0:h.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===c||void 0===c?void 0:c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})},f=function(){var e=Object(n.useContext)(u),t=e.loader,c=e.todo;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(O,{})}),Object(j.jsxs)("div",{className:"block",children:[t&&Object(j.jsx)(m,{}),!t&&Object(j.jsx)(h,{})]})]})})}),c&&Object(j.jsx)(x,{})]})};a.a.render(Object(j.jsx)(b,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.03b7f740.chunk.js.map