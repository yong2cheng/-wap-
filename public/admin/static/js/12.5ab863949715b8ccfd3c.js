webpackJsonp([12],{"0d7K":function(t,a,e){"use strict";function i(t){e("v3dR")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("xlE6"),r=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);var o=e("7fWE"),l=e("C7Lr"),c=i,m=l(r.a,o.a,!1,c,"data-v-dd95aaba",null);a.default=m.exports},"7fWE":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"img-view",on:{click:t.bigImg}},[e("div",{staticClass:"img-layer"}),t._v(" "),e("div",{staticClass:"img"},[e("img",{attrs:{src:t.imgSrc}})])])])},n=[],r={render:i,staticRenderFns:n};a.a=r},"7ngw":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"任务详情",visible:t.dialogTableVisible,width:"50%",center:""},on:{"update:visible":function(a){t.dialogTableVisible=a},close:t.close}},[e("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"100px"}},[e("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"用户名称",prop:"type"}},[t._v("\n                "+t._s(t.info.username)+"\n            ")]),t._v(" "),e("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务名称",prop:"type"}},[t._v("\n                "+t._s(t.info.taskName)+"\n            ")]),t._v(" "),e("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务奖励",prop:"source"}},[t._v("\n                "+t._s(t.info.taskReward)+"积分\n            ")]),t._v(" "),e("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"创建时间",prop:"releaseTime"}},[t._v("\n                "+t._s(t.info.createDate)+"\n            ")]),t._v(" "),e("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务类型",prop:"title"}},[t._v("\n                "+t._s(t.info.taskTypeName)+"\n            ")]),t._v(" "),e("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务描述",prop:"desc"}},[t._v("\n                "+t._s(t.info.taskDescribe)+"\n            ")]),t._v(" "),e("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务状态",prop:"album"}},[t._v("\n                "+t._s(t.info.statusName?t.info.statusName:t.info.userTaskRelationStatusName)+"\n            ")]),t._v(" "),e("el-form-item",{staticClass:"left-item",attrs:{label:"任务图片",prop:"isVisible"}},t._l(t.info.taskPicList,function(a,i){return t.info.taskPicList?e("img",{key:i,staticStyle:{width:"100px",height:"50px","margin-right":"5px"},attrs:{src:"http://vip.31d461.cn/api/"+a,alt:""},on:{click:function(a){t.clickImg(a)}}}):t._e()})),t._v(" "),1!=t.info.linkType?e("el-form-item",{staticClass:"left-item",attrs:{label:"用户上传图片",prop:"isVisible"}},t._l(t.info.applyPicList,function(a,i){return t.info.applyPicList?e("img",{key:i,staticStyle:{width:"100px",height:"50px","margin-right":"5px"},attrs:{src:"http://vip.31d461.cn/api/"+a,alt:""},on:{click:function(a){t.clickImg(a)}}}):t._e()})):t._e(),t._v(" "),2==t.info.userTaskRelationStatus?e("el-form-item",[e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(a){t.loading=!0,t.submitForm(4)}}},[t._v("审核不通过")]),t._v(" "),e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(a){t.loading=!0,t.submitForm(3)}}},[t._v("审核通过")])],1):t._e()],1),t._v(" "),t.showImg?e("BigImg",{attrs:{imgSrc:t.imgSrc},on:{clickit:t.viewImg}}):t._e()],1)},n=[],r={render:i,staticRenderFns:n};a.a=r},JiXc:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var n=e("lC5x"),r=i(n),s=e("J0Oq"),o=i(s),l=e("0d7K"),c=i(l);a.default={props:["info"],data:function(){return{dialogTableVisible:!0,showImg:!1,imgSrc:"",loading:!1}},components:{BigImg:c.default},methods:{clickImg:function(t){this.showImg=!0,this.imgSrc=t.currentTarget.src},viewImg:function(){this.showImg=!1},close:function(){this.$emit("close")},submitForm:function(t){var a=this;return(0,o.default)(r.default.mark(function e(){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$store.dispatch("toExamine",{id:a.info.id,userTaskRelationStatus:t});case 2:a.loading=!1,a.close();case 4:case"end":return e.stop()}},e,a)}))()}},computed:{}}},coVg:function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,".fade-enter-activ [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fade-enter [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transform:translate3D(100%,0,0);-ms-transform:translate3D(100%,0,0);transform:translate3D(100%,0,0)}.img-view[data-v-dd95aaba]{position:fixed;z-index:9999;top:0;left:0;background:rgba(0,0,0,.7);width:100%;height:100%;overflow:hidden}.img-view .img img[data-v-dd95aaba]{max-width:100%;position:absolute;left:0;right:0;top:0;bottom:0;max-height:100%;margin:auto;z-index:1000}",""])},cxxb:function(t,a,e){"use strict";function i(t){e("zMSS")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("JiXc"),r=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(a,t,function(){return n[t]})}(s);var o=e("7ngw"),l=e("C7Lr"),c=i,m=l(r.a,o.a,!1,c,"data-v-ac62c28a",null);a.default=m.exports},"fz+s":function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,".edit-wrapper .block[data-v-ac62c28a]{width:100%;display:block}.edit-wrapper .submit[data-v-ac62c28a]{width:100px}",""])},v3dR:function(t,a,e){var i=e("coVg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("13ed8fd6",i,!0,{})},xlE6:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={props:["imgSrc"],methods:{bigImg:function(){this.$emit("clickit")}}}},zMSS:function(t,a,e){var i=e("fz+s");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("dba29a46",i,!0,{})}});