webpackJsonp([14],{"0d7K":function(t,e,a){"use strict";function i(t){a("v3dR")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("xlE6"),o=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);var s=a("7fWE"),l=a("C7Lr"),c=i,m=l(o.a,s.a,!1,c,"data-v-dd95aaba",null);e.default=m.exports},"7fWE":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"img-view",on:{click:t.bigImg}},[a("div",{staticClass:"img-layer"}),t._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:t.imgSrc}})])])])},r=[],o={render:i,staticRenderFns:r};e.a=o},NDo0:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"vip奖品详情",visible:t.dialogTableVisible,width:"50%",center:""},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"100px"}},[a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"创建时间",prop:"releaseTime"}},[t._v("\n                "+t._s(t.info.createDate)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"用户名称",prop:"type"}},[t._v("\n                "+t._s(t.info.username)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"会员名称",prop:"type"}},[t._v("\n                "+t._s(t.info.vipTypeName)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"真实姓名",prop:"type"}},[t._v("\n                "+t._s(t.info.realName)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"收货人",prop:"type"}},[t._v("\n                "+t._s(t.info.receiver)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"联系电话",prop:"type"}},[t._v("\n                "+t._s(t.info.telphone)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"商品名称",prop:"type"}},[t._v("\n                "+t._s(t.info.goodsName)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"商品积分",prop:"source"}},[t._v("\n                "+t._s(t.info.goodsIntegral)+"积分\n            ")]),t._v(" "),a("el-form-item",{staticClass:"left-item",attrs:{label:"商品图片",prop:"isVisible"}},[a("img",{staticStyle:{width:"100px",height:"50px"},attrs:{src:"http://vip.xyxzw.cn/api/"+t.info.goodsPic,alt:""},on:{click:function(e){t.clickImg(e)}}})]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"状态",prop:"album"}},[t._v("\n                "+t._s(t.info.statusName)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"收货地址",prop:"title"}},[t._v("\n                "+t._s(t.info.address)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"支行名称",prop:"desc"}},[t._v("\n                "+t._s(t.info.subBranchName)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"银行卡号",prop:"desc"}},[t._v("\n                "+t._s(t.info.bankCard)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"支付宝账号",prop:"desc"}},[t._v("\n                "+t._s(t.info.alipayCard)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"物流单号",prop:"title"}},[t._v("\n                "+t._s(t.info.logisticsNo)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"支付交易号",prop:"type"}},[t._v("\n                "+t._s(t.info.tradeNo)+"\n            ")])],1),t._v(" "),t.showImg?a("BigImg",{attrs:{imgSrc:t.imgSrc},on:{clickit:t.viewImg}}):t._e()],1)},r=[],o={render:i,staticRenderFns:r};e.a=o},Rypy:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a("lC5x"),o=i(r),n=a("J0Oq"),s=i(n),l=a("0d7K"),c=i(l);e.default={props:["info"],data:function(){return{dialogTableVisible:!0,showImg:!1,imgSrc:"",loading:!1}},components:{BigImg:c.default},methods:{clickImg:function(t){this.showImg=!0,this.imgSrc=t.currentTarget.src},viewImg:function(){this.showImg=!1},close:function(){this.$emit("close")},submitForm:function(t){var e=this;return(0,s.default)(o.default.mark(function a(){return o.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("toExamine",{id:e.info.id,userTaskRelationStatus:t});case 2:e.loading=!1,e.close();case 4:case"end":return a.stop()}},a,e)}))()}},computed:{}}},b4mB:function(t,e,a){var i=a("daI0");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("35934488",i,!0,{})},coVg:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".fade-enter-activ [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fade-enter [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transform:translate3D(100%,0,0);-ms-transform:translate3D(100%,0,0);transform:translate3D(100%,0,0)}.img-view[data-v-dd95aaba]{position:fixed;z-index:9999;top:0;left:0;background:rgba(0,0,0,.7);width:100%;height:100%;overflow:hidden}.img-view .img img[data-v-dd95aaba]{max-width:100%;position:absolute;left:0;right:0;top:0;bottom:0;max-height:100%;margin:auto;z-index:1000}",""])},daI0:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".edit-wrapper .block[data-v-0c9d7e34]{width:100%;display:block}.edit-wrapper .submit[data-v-0c9d7e34]{width:100px}",""])},ov83:function(t,e,a){"use strict";function i(t){a("b4mB")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("Rypy"),o=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,function(){return r[t]})}(n);var s=a("NDo0"),l=a("C7Lr"),c=i,m=l(o.a,s.a,!1,c,"data-v-0c9d7e34",null);e.default=m.exports},v3dR:function(t,e,a){var i=a("coVg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("13ed8fd6",i,!0,{})},xlE6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["imgSrc"],methods:{bigImg:function(){this.$emit("clickit")}}}}});