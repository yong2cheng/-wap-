webpackJsonp([11],{"0d7K":function(t,e,a){"use strict";function i(t){a("v3dR")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("xlE6"),r=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);var s=a("7fWE"),l=a("C7Lr"),c=i,f=l(r.a,s.a,!1,c,"data-v-dd95aaba",null);e.default=f.exports},"7fWE":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"img-view",on:{click:t.bigImg}},[a("div",{staticClass:"img-layer"}),t._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:t.imgSrc}})])])])},n=[],r={render:i,staticRenderFns:n};e.a=r},"9C77":function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".edit-wrapper .block[data-v-21f071a7]{width:100%;display:block}.edit-wrapper .submit[data-v-21f071a7]{width:100px}",""])},JiXc:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a("lC5x"),r=i(n),o=a("J0Oq"),s=i(o),l=a("0d7K"),c=i(l);e.default={props:["info"],data:function(){return{dialogTableVisible:!0,showImg:!1,imgSrc:"",loading:!1}},components:{BigImg:c.default},methods:{clickImg:function(t){this.showImg=!0,this.imgSrc=t.currentTarget.src},viewImg:function(){this.showImg=!1},close:function(){this.$emit("close")},submitForm:function(t){var e=this;return(0,s.default)(r.default.mark(function a(){return r.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("toExamine",{id:e.info.id,userTaskRelationStatus:t});case 2:e.loading=!1,e.close();case 4:case"end":return a.stop()}},a,e)}))()}},computed:{}}},LTAo:function(t,e,a){var i=a("9C77");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("dae683cc",i,!0,{})},VVro:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"任务详情",visible:t.dialogTableVisible,width:"50%",center:""},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"100px"}},[t.info.username?a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"用户名称",prop:"type"}},[t._v("\n                "+t._s(t.info.username)+"\n            ")]):t._e(),t._v(" "),t.info.taskName?a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务名称",prop:"type"}},[t._v("\n                "+t._s(t.info.taskName)+"\n            ")]):t._e(),t._v(" "),t.info.taskReward?a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务奖励",prop:"source"}},[t._v("\n                "+t._s(t.info.taskReward)+"积分\n            ")]):t._e(),t._v(" "),t.info.createDate?a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"创建时间",prop:"releaseTime"}},[t._v("\n                "+t._s(t.info.createDate)+"\n            ")]):t._e(),t._v(" "),t.info.taskTypeName?a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务类型",prop:"title"}},[t._v("\n                "+t._s(t.info.taskTypeName)+"\n            ")]):t._e(),t._v(" "),t.info.taskDescribe?a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务描述",prop:"desc"}},[t._v("\n                "+t._s(t.info.taskDescribe)+"\n            ")]):t._e(),t._v(" "),t.info.userTaskRelationStatusName?a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务状态",prop:"album"}},[t._v("\n                "+t._s(t.info.userTaskRelationStatusName)+"\n            ")]):t._e(),t._v(" "),t.info.taskPicList?a("el-form-item",{staticClass:"left-item",attrs:{label:"任务图片",prop:"isVisible"}},t._l(t.info.taskPicList,function(e,i){return a("img",{key:i,staticStyle:{width:"100px",height:"50px"},attrs:{src:"http://vip.omx65.cn:8080/api/"+e,alt:""},on:{click:function(e){t.clickImg(e)}}})})):t._e(),t._v(" "),2==t.info.userTaskRelationStatus?a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.loading=!0,t.submitForm(4)}}},[t._v("审核不通过")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.loading=!0,t.submitForm(3)}}},[t._v("审核通过")])],1):t._e()],1),t._v(" "),t.showImg?a("BigImg",{attrs:{imgSrc:t.imgSrc},on:{clickit:t.viewImg}}):t._e()],1)},n=[],r={render:i,staticRenderFns:n};e.a=r},coVg:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".fade-enter-activ [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fade-enter [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transform:translate3D(100%,0,0);-ms-transform:translate3D(100%,0,0);transform:translate3D(100%,0,0)}.img-view[data-v-dd95aaba]{position:fixed;z-index:9999;top:0;left:0;background:rgba(0,0,0,.7);width:100%;height:100%;overflow:hidden}.img-view .img img[data-v-dd95aaba]{max-width:100%;position:absolute;left:0;right:0;top:0;bottom:0;max-height:100%;margin:auto;z-index:1000}",""])},cxxb:function(t,e,a){"use strict";function i(t){a("LTAo")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("JiXc"),r=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);var s=a("VVro"),l=a("C7Lr"),c=i,f=l(r.a,s.a,!1,c,"data-v-21f071a7",null);e.default=f.exports},v3dR:function(t,e,a){var i=a("coVg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("13ed8fd6",i,!0,{})},xlE6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["imgSrc"],methods:{bigImg:function(){this.$emit("clickit")}}}}});