webpackJsonp([1],{Agdp:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("/5sW"),i=o("mtWM"),s=o.n(i),a={data:function(){return{todos:[],edit:!1,newTodo:"",filter:"all"}},watch:{todos:{deep:!0,handler:function(){this.$http.post("http://localhost:5000/",this.todos).then(function(e){})}}},methods:{addTodo:function(){this.todos.push({completed:!1,name:this.newTodo}),this.newTodo=""},deleteTodo:function(e){this.todos=this.todos.filter(function(t){return t!=e})},changeEdit:function(){this.edit=!1}},computed:{allDone:{get:function(){return 0===this.remaining},set:function(e){this.todos.forEach(function(t){t.completed=e})}},remaining:function(){return this.todos.filter(function(e){return!e.completed}).length},filteredTodos:function(){return"todo"===this.filter?this.todos.filter(function(e){return!e.completed}):"done"===this.filter?this.todos.filter(function(e){return e.completed}):this.todos}},beforeMount:function(){var e=this;this.$http.get("http://localhost:5000/").then(function(t){e.todos=Array.isArray(t.data)?t.data:[]})}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"todoapp"},[o("header",{staticClass:"header"},[o("h1",[e._v("Todo list")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodo,expression:"newTodo"}],staticClass:"new-todo",attrs:{type:"text",placeholder:"newtask"},domProps:{value:e.newTodo},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(t)},input:function(t){t.target.composing||(e.newTodo=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"main"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.allDone,expression:"allDone"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.allDone)?e._i(e.allDone,null)>-1:e.allDone},on:{change:function(t){var o=e.allDone,n=t.target,i=!!n.checked;if(Array.isArray(o)){var s=e._i(o,null);n.checked?s<0&&(e.allDone=o.concat([null])):s>-1&&(e.allDone=o.slice(0,s).concat(o.slice(s+1)))}else e.allDone=i}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.edit,expression:"edit"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.edit)?e._i(e.edit,null)>-1:e.edit},on:{change:function(t){var o=e.edit,n=t.target,i=!!n.checked;if(Array.isArray(o)){var s=e._i(o,null);n.checked?s<0&&(e.edit=o.concat([null])):s>-1&&(e.edit=o.slice(0,s).concat(o.slice(s+1)))}else e.edit=i}}}),e._v(" "),o("ul",{staticClass:"todo-list"},e._l(e.filteredTodos,function(t){return o("li",{staticClass:"todo editing",class:{completed:t.completed}},[o("div",{directives:[{name:"show",rawName:"v-show",value:!1===e.edit,expression:"edit === false"}],staticClass:"vue"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(o){var n=t.completed,i=o.target,s=!!i.checked;if(Array.isArray(n)){var a=e._i(n,null);i.checked?a<0&&e.$set(t,"completed",n.concat([null])):a>-1&&e.$set(t,"completed",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(t,"completed",s)}}}),e._v(" "),o("label",[e._v(e._s(t.name))]),e._v(" "),o("button",{staticClass:"destroy",on:{click:function(o){return o.preventDefault(),e.deleteTodo(t)}}})]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"todo.name"},{name:"show",rawName:"v-show",value:!0===e.edit,expression:"edit === true"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:t.name},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.changeEdit(t)},input:function(o){o.target.composing||e.$set(t,"name",o.target.value)}}})])}),0)]),e._v(" "),o("footer",{directives:[{name:"show",rawName:"v-show",value:e.todos.length>0,expression:"todos.length > 0"}],staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",[e._v(e._s(e.remaining))]),e._v(" task(s) to do")]),e._v(" "),o("ul",{staticClass:"filters"},[o("li",[o("a",{class:{selected:"all"===e.filter},attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.filter="all"}}},[e._v("All")])]),e._v(" "),o("li",[o("a",{class:{selected:"todo"===e.filter},attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.filter="todo"}}},[e._v("To do")])]),e._v(" "),o("li",[o("a",{class:{selected:"done"===e.filter},attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.filter="done"}}},[e._v("Done")])])])])])},staticRenderFns:[]};var r={components:{Todos:o("VU/8")(a,l,!1,function(e){o("WiHL")},null,null).exports},name:"App"},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("todos")],1)},staticRenderFns:[]};var d=o("VU/8")(r,c,!1,function(e){o("Agdp")},null,null).exports,u=o("/ocq");n.a.use(u.a);var p=new u.a({routes:[]});n.a.config.productionTip=!1,n.a.prototype.$http=s.a,new n.a({el:"#app",router:p,render:function(e){return e(d)}})},WiHL:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3397a1562aff3541d2b7.js.map