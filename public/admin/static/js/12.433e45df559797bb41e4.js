webpackJsonp([12],{"+ye8":function(t,e,i){var a=i("nZc3");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("FIqI")("386b39e4",a,!0,{})},"0d7K":function(t,e,i){"use strict";function a(t){i("v3dR")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("xlE6"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);var o=i("7fWE"),l=i("C7Lr"),c=a,m=l(r.a,o.a,!1,c,"data-v-dd95aaba",null);e.default=m.exports},"7fWE":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("div",{staticClass:"img-view",on:{click:t.bigImg}},[i("div",{staticClass:"img-layer"}),t._v(" "),i("div",{staticClass:"img"},[i("img",{attrs:{src:t.imgSrc}})])])])},n=[],r={render:a,staticRenderFns:n};e.a=r},JiXc:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i("lC5x"),r=a(n),s=i("J0Oq"),o=a(s),l=i("0d7K"),c=a(l);e.default={props:["info"],data:function(){return{dialogTableVisible:!0,showImg:!1,imgSrc:"",loading:!1}},components:{BigImg:c.default},methods:{clickImg:function(t){this.showImg=!0,this.imgSrc=t.currentTarget.src},viewImg:function(){this.showImg=!1},close:function(){this.$emit("close")},submitForm:function(t){var e=this;return(0,o.default)(r.default.mark(function i(){return r.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.$store.dispatch("toExamine",{id:e.info.id,userTaskRelationStatus:t});case 2:e.loading=!1,e.close();case 4:case"end":return i.stop()}},i,e)}))()}},computed:{}}},coVg:function(t,e,i){e=t.exports=i("UTlt")(!1),e.push([t.i,".fade-enter-activ [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fade-enter [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transform:translate3D(100%,0,0);-ms-transform:translate3D(100%,0,0);transform:translate3D(100%,0,0)}.img-view[data-v-dd95aaba]{position:fixed;z-index:9999;top:0;left:0;background:rgba(0,0,0,.7);width:100%;height:100%;overflow:hidden}.img-view .img img[data-v-dd95aaba]{max-width:100%;position:absolute;left:0;right:0;top:0;bottom:0;max-height:100%;margin:auto;z-index:1000}",""])},cxxb:function(t,e,i){"use strict";function a(t){i("+ye8")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("JiXc"),r=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);var o=i("lnL8"),l=i("C7Lr"),c=a,m=l(r.a,o.a,!1,c,"data-v-01676eec",null);e.default=m.exports},lnL8:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"任务详情",visible:t.dialogTableVisible,width:"50%",center:""},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.close}},[i("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"100px"}},[i("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"用户名称",prop:"type"}},[t._v("\n                "+t._s(t.info.username)+"\n            ")]),t._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务名称",prop:"type"}},[t._v("\n                "+t._s(t.info.taskName)+"\n            ")]),t._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务奖励",prop:"source"}},[t._v("\n                "+t._s(t.info.taskReward)+"积分\n            ")]),t._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"创建时间",prop:"releaseTime"}},[t._v("\n                "+t._s(t.info.createDate)+"\n            ")]),t._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务类型",prop:"title"}},[t._v("\n                "+t._s(t.info.taskTypeName)+"\n            ")]),t._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务描述",prop:"desc"}},[t._v("\n                "+t._s(t.info.taskDescribe)+"\n            ")]),t._v(" "),i("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务状态",prop:"album"}},[t._v("\n                "+t._s(t.info.userTaskRelationStatusName)+"\n            ")]),t._v(" "),i("el-form-item",{staticClass:"left-item",attrs:{label:"任务图片",prop:"isVisible"}},t._l(t.info.taskPicList,function(e,a){return t.info.taskPicList?i("img",{key:a,staticStyle:{width:"100px",height:"50px","margin-right":"5px"},attrs:{src:"http://www.sai32m.cn:8080/api/"+e,alt:""},on:{click:function(e){t.clickImg(e)}}}):t._e()})),t._v(" "),1!=t.info.linkType?i("el-form-item",{staticClass:"left-item",attrs:{label:"用户上传图片",prop:"isVisible"}},t._l(t.info.applyPicList,function(e,a){return t.info.applyPicList?i("img",{key:a,staticStyle:{width:"100px",height:"50px","margin-right":"5px"},attrs:{src:"http://www.sai32m.cn:8080/api/"+e,alt:""},on:{click:function(e){t.clickImg(e)}}}):t._e()})):t._e(),t._v(" "),2==t.info.userTaskRelationStatus?i("el-form-item",[i("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.loading=!0,t.submitForm(4)}}},[t._v("审核不通过")]),t._v(" "),i("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.loading=!0,t.submitForm(3)}}},[t._v("审核通过")])],1):t._e()],1),t._v(" "),t.showImg?i("BigImg",{attrs:{imgSrc:t.imgSrc},on:{clickit:t.viewImg}}):t._e()],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},nZc3:function(t,e,i){e=t.exports=i("UTlt")(!1),e.push([t.i,".edit-wrapper .block[data-v-01676eec]{width:100%;display:block}.edit-wrapper .submit[data-v-01676eec]{width:100px}",""])},v3dR:function(t,e,i){var a=i("coVg");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("FIqI")("13ed8fd6",a,!0,{})},xlE6:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["imgSrc"],methods:{bigImg:function(){this.$emit("clickit")}}}}});