webpackJsonp([9],{"0d7K":function(t,e,a){"use strict";function i(t){a("v3dR")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("xlE6"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var s=a("7fWE"),l=a("C7Lr"),d=i,c=l(o.a,s.a,!1,d,"data-v-dd95aaba",null);e.default=c.exports},"1nnT":function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a("4YfN"),o=i(n),r=a("lC5x"),s=i(r),l=a("J0Oq"),d=i(l),c=a("9rMa"),f=a("0d7K"),u=i(f);e.default={components:{BigImg:u.default},props:["info"],data:function(){return{dialogTableVisible:!0,loading:!1,showImg:!1,imgSrc:""}},created:function(){this.getGoodsList()},methods:{getShoppingDetail:function(t){var e=this;this.goodsList.forEach(function(a){a.id==t&&(e.info.goodsPic=a.goodsPic,e.info.goodsIntegral=a.goodsIntegral)})},clickImg:function(t){this.showImg=!0,this.imgSrc=t.currentTarget.src},viewImg:function(){this.showImg=!1},close:function(){this.$emit("close")},getGoodsList:function(){var t=this;return(0,d.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getGoodsLists");case 2:case"end":return e.stop()}},e,t)}))()},updataForm:function(t){var e=this;this.loading=!0,this.$refs[t].validate(function(){var t=(0,d.default)(s.default.mark(function t(a){var i;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=15;break}return t.prev=1,i={id:e.info.id,goodsId:e.info.goodsId,applyTaskLimitCount:e.info.applyTaskLimitCount,secondLevelReward:e.info.secondLevelReward,thirdLevelReward:e.info.thirdLevelReward},t.next=5,e.$store.dispatch("updatevVipCondition",i);case 5:(e.sysStatus=1e4)&&e.$message({message:"修改成功",type:"success"}),e.loading=!1,e.close(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.loading=!1;case 13:t.next=17;break;case 15:return console.log("error submit!!"),t.abrupt("return",!1);case 17:case"end":return t.stop()}},t,e,[[1,10]])}));return function(e){return t.apply(this,arguments)}}())}},computed:(0,o.default)({},(0,c.mapGetters)(["goodsList","sysStatus"]))}},"7fWE":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"img-view",on:{click:t.bigImg}},[a("div",{staticClass:"img-layer"}),t._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:t.imgSrc}})])])])},n=[],o={render:i,staticRenderFns:n};e.a=o},I7Mx:function(t,e,a){var i=a("vQuQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("b32bbb20",i,!0,{})},LAXm:function(t,e,a){"use strict";function i(t){a("I7Mx")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("1nnT"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var s=a("MRHB"),l=a("C7Lr"),d=i,c=l(o.a,s.a,!1,d,"data-v-3f42661f",null);e.default=c.exports},MRHB:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"会员条件编辑",visible:t.dialogTableVisible,width:"60%",center:""},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:t.info,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"会员类型名称"}},[t._v("\n                "+t._s(t.info.vipTypeName)+"\n            ")]),t._v(" "),a("el-form-item",{attrs:{label:"商品选择"}},[a("el-select",{staticClass:"block",attrs:{placeholder:"请选择商品"},on:{change:t.getShoppingDetail},model:{value:t.info.goodsId,callback:function(e){t.$set(t.info,"goodsId",e)},expression:"info.goodsId"}},t._l(t.goodsList,function(t,e){return a("el-option",{key:e,attrs:{label:t.goodsName,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"商品图片"}},[a("img",{staticStyle:{width:"100px",height:"50px"},attrs:{src:"http://vip.xyxzw.cn/api/"+t.info.goodsPic,alt:""},on:{click:function(e){t.clickImg(e)}}})]),t._v(" "),a("el-form-item",{attrs:{label:"商品积分"}},[t._v("\n                "+t._s(t.info.goodsIntegral)+"\n            ")]),t._v(" "),a("el-form-item",{attrs:{label:"任务申请上限"}},[a("el-input",{model:{value:t.info.applyTaskLimitCount,callback:function(e){t.$set(t.info,"applyTaskLimitCount",e)},expression:"info.applyTaskLimitCount"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"一级奖励"}},[a("el-input",{model:{value:t.info.secondLevelReward,callback:function(e){t.$set(t.info,"secondLevelReward",e)},expression:"info.secondLevelReward"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"二级奖励"}},[a("el-input",{model:{value:t.info.thirdLevelReward,callback:function(e){t.$set(t.info,"thirdLevelReward",e)},expression:"info.thirdLevelReward"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.updataForm("form")}}},[t._v("修改")])],1)],1),t._v(" "),t.showImg?a("BigImg",{attrs:{imgSrc:t.imgSrc},on:{clickit:t.viewImg}}):t._e()],1)},n=[],o={render:i,staticRenderFns:n};e.a=o},coVg:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".fade-enter-activ [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fade-enter [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transform:translate3D(100%,0,0);-ms-transform:translate3D(100%,0,0);transform:translate3D(100%,0,0)}.img-view[data-v-dd95aaba]{position:fixed;z-index:9999;top:0;left:0;background:rgba(0,0,0,.7);width:100%;height:100%;overflow:hidden}.img-view .img img[data-v-dd95aaba]{max-width:100%;position:absolute;left:0;right:0;top:0;bottom:0;max-height:100%;margin:auto;z-index:1000}",""])},v3dR:function(t,e,a){var i=a("coVg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("13ed8fd6",i,!0,{})},vQuQ:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".edit-wrapper .block[data-v-3f42661f]{width:100%;display:block}.edit-wrapper .submit[data-v-3f42661f]{width:100px}",""])},xlE6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["imgSrc"],methods:{bigImg:function(){this.$emit("clickit")}}}}});