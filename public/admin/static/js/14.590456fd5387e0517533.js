webpackJsonp([14],{"6RdV":function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a("lC5x"),n=r(l),i=a("J0Oq"),o=r(i);a("9rMa");t.default={data:function(){return{info:{name:"",username:"",pwd:"",avatar:"",roles:["default"]},roles:[{label:"超级管理员",value:"admin"},{label:"普通管理员",value:"default"}],loading:!1,rules:{name:[{required:!0,message:"请填写名字",trigger:"blur"}],username:[{required:!0,message:"请填写用户名",trigger:"blur"}],pwd:[{required:!0,message:"请填写密码",trigger:"blur"}],roles:[{required:!0,message:"请选择权限",trigger:"change",type:"array"}]}}},methods:{submitForm:function(e){var t=this;this.loading=!0,this.$refs[e].validate(function(){var e=(0,o.default)(n.default.mark(function e(a){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=13;break}return e.prev=1,e.next=4,t.$store.dispatch("addUser",t.info);case 4:t.loading=!1,t.$router.push("/permission/list"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.loading=!1;case 11:e.next=16;break;case 13:return console.log("error submit!!"),t.loading=!1,e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,t,[[1,8]])}));return function(t){return e.apply(this,arguments)}}())}}}},"8Ccc":function(e,t,a){"use strict";function r(e){a("IlRg")}Object.defineProperty(t,"__esModule",{value:!0});var l=a("6RdV"),n=a.n(l);for(var i in l)"default"!==i&&function(e){a.d(t,e,function(){return l[e]})}(i);var o=a("CAXj"),s=a("C7Lr"),c=r,u=s(n.a,o.a,!1,c,"data-v-995ca76c",null);t.default=u.exports},CAXj:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("h2",[e._v("添加管理员")]),e._v(" "),a("div",{staticClass:"box"},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.info,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"名字",prop:"name"}},[a("el-input",{attrs:{type:"text"},model:{value:e.info.name,callback:function(t){e.$set(e.info,"name",t)},expression:"info.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{type:"text"},model:{value:e.info.username,callback:function(t){e.$set(e.info,"username",t)},expression:"info.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[a("el-input",{attrs:{type:"password"},model:{value:e.info.pwd,callback:function(t){e.$set(e.info,"pwd",t)},expression:"info.pwd"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"权限",prop:"roles"}},[a("el-select",{staticClass:"block",attrs:{multiple:"",placeholder:"请选择"},model:{value:e.info.roles,callback:function(t){e.$set(e.info,"roles",t)},expression:"info.roles"}},e._l(e.roles,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.submitForm("form")}}},[e._v("立即创建")])],1)],1)],1)])},l=[],n={render:r,staticRenderFns:l};t.a=n},IlRg:function(e,t,a){var r=a("UhPD");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("FIqI")("e33ba2e0",r,!0,{})},UhPD:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"article[data-v-995ca76c]{text-align:center;padding:0 100px}article h2[data-v-995ca76c]{text-align:center;line-height:80px;color:#666}article .box[data-v-995ca76c]{width:500px;text-align:left}article .block[data-v-995ca76c]{width:100%;display:block}article .left-item[data-v-995ca76c]{text-align:left}article .submit[data-v-995ca76c]{width:100px}",""])}});