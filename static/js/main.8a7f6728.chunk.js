(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),s=a(6),i=a(7),u=a(11),m=a(9),o=a(10),d=a(2),f=a(8),b=a.n(f),k=Object(n.createContext)(),E=function(e){var t=JSON.parse(localStorage.getItem("tasks"))||[],a=Object(n.useState)(t),r=Object(d.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)(null),u=Object(d.a)(i,2),m=u[0],f=u[1];Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(l))}),[l]);return c.a.createElement(k.Provider,{value:{tasks:l,deleteTask:function(e){s(l.filter((function(t){return t.id!==e})))},addTask:function(e){s([].concat(Object(o.a)(l),[{title:e,id:b()()}]))},clearTasks:function(){s([])},findItem:function(e){var t=l.find((function(t){return t.id===e}));f(t)},editTask:function(e,t){var a=l.map((function(a){return a.id===t?{title:e,id:t}:a}));s(a),f(null)},editItem:m}},e.children)},p=function(e){var t=e.task,a=Object(n.useContext)(k),r=a.deleteTask,l=a.findItem;return c.a.createElement("li",{className:"list-item"},c.a.createElement("span",null,t.title),c.a.createElement("div",null,c.a.createElement("button",{className:"delete-task task-btn",onClick:function(){return r(t.id)}},c.a.createElement("i",{className:"fas fa-trash-alt"})),c.a.createElement("button",{className:"edit-task task-btn",onClick:function(){return l(t.id)}},c.a.createElement("i",{className:"fas fa-pen"}))))},v=function(){var e=Object(n.useContext)(k).tasks;return c.a.createElement("div",null,c.a.createElement("ul",{className:"list"},e.map((function(e){return c.a.createElement(p,{key:e.id,task:e})}))))},O=(a(19),function(){var e=Object(n.useContext)(k),t=e.addTask,a=e.clearTasks,r=e.editTask,l=e.editItem,s=Object(n.useState)(""),i=Object(d.a)(s,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){m(l?l.title:"")}),[l]),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l?r(u,l.id):(t(u),m(""))},className:"form"},c.a.createElement("input",{type:"text",className:"task-input",placeholder:"Add task",value:u,onChange:function(e){m(e.target.value)},required:!0}),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{type:"submit",className:"btn add-task"},l?"Edit":"Add"),c.a.createElement("button",{onClick:a,type:"submit",className:"btn clear"},"Clear")))}),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(E,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"app-wrapper"},c.a.createElement("div",{className:"main"},c.a.createElement(O,null),c.a.createElement(v,null)))))}}]),a}(n.Component);l.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8a7f6728.chunk.js.map