webpackJsonp([8,14],{"0d7K":function(e,t,a){"use strict";function i(e){a("v3dR")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("xlE6"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);var s=a("7fWE"),l=a("C7Lr"),c=i,d=l(r.a,s.a,!1,c,"data-v-dd95aaba",null);t.default=d.exports},"7fWE":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"img-view",on:{click:e.bigImg}},[a("div",{staticClass:"img-layer"}),e._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:e.imgSrc}})])])])},n=[],r={render:i,staticRenderFns:n};t.a=r},"9LMo":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"积分兑换详情",visible:e.dialogTableVisible,width:"50%",center:""},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"100px"}},[a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"创建时间",prop:"releaseTime"}},[e._v("\n                "+e._s(e.info.createDate)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"用户名称",prop:"type"}},[e._v("\n                "+e._s(e.info.username)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"真实姓名",prop:"type"}},[e._v("\n                "+e._s(e.info.realName)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"收货人",prop:"type"}},[e._v("\n                "+e._s(e.info.receiver)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"联系电话",prop:"type"}},[e._v("\n                "+e._s(e.info.telphone)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"商品名称",prop:"type"}},[e._v("\n                "+e._s(e.info.goodsName)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"商品积分",prop:"source"}},[e._v("\n                "+e._s(e.info.goodsIntegral)+"积分\n            ")]),e._v(" "),a("el-form-item",{staticClass:"left-item",attrs:{label:"商品图片",prop:"isVisible"}},[a("img",{staticStyle:{width:"100px",height:"50px"},attrs:{src:"http://vip.31d461.cn:8080/api/"+e.info.goodsPic,alt:""},on:{click:function(t){e.clickImg(t)}}})]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"状态",prop:"album"}},[e._v("\n                "+e._s(e.info.statusName)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"收货地址",prop:"title"}},[e._v("\n                "+e._s(e.info.address)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"支行名称",prop:"desc"}},[e._v("\n                "+e._s(e.info.subBranchName)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"银行卡号",prop:"desc"}},[e._v("\n                "+e._s(e.info.bankCard)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"支付宝账号",prop:"desc"}},[e._v("\n                "+e._s(e.info.alipayCard)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"物流单号",prop:"title"}},[e._v("\n                "+e._s(e.info.logisticsNo)+"\n            ")])],1),e._v(" "),e.showImg?a("BigImg",{attrs:{imgSrc:e.imgSrc},on:{clickit:e.viewImg}}):e._e()],1)},n=[],r={render:i,staticRenderFns:n};t.a=r},"9Pv8":function(e,t,a){var i=a("G12R");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("60496f22",i,!0,{})},G12R:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".edit-wrapper .block[data-v-8ed9dbda]{width:100%;display:block}.edit-wrapper .submit[data-v-8ed9dbda]{width:100px}",""])},K30i:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("div",{staticClass:"search"},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入用户名","prefix-icon":"el-icon-search"},nativeOn:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.exchangeShooppingList(t):null}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:e.loading},on:{click:e.exchangeShooppingList}},[e._v("搜索")])],1),e._v(" "),a("div",{staticStyle:{height:"calc(100vh - 220px)"}},[a("el-table",{ref:"multipleTable",attrs:{data:e.intergralList,"tooltip-effect":"dark",stripe:"",border:"",height:"100%"}},[a("el-table-column",{attrs:{type:"index",width:"55",align:"center","header-align":"center",index:e.increment,label:"序号"}}),e._v(" "),e._l(e.headerOptions,function(t,i){return t.hidden?e._e():a("el-table-column",{key:i,attrs:{"show-overflow-tooltip":"",label:t.label,prop:t.prop,"header-align":t.headerAlign,align:t.align,"min-width":t.minWidth||150},scopedSlots:e._u([{key:"default",fn:function(t){return["roles"===t.column.property?a("div",e._l(t.row.roles,function(t,i){return a("el-tag",{key:i,staticClass:"tag",attrs:{type:"primary","close-transition":""}},[e._v(e._s(t))])})):"avatar"===t.column.property?a("div",[a("img",{staticStyle:{height:"40px"},attrs:{src:t.row[t.column.property],alt:""}})]):a("div",[e._v(e._s(t.row[t.column.property]||"无"))])]}}])})}),e._v(" "),a("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center",width:"235"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.getDetail(t)}}},[e._v("详情")]),e._v(" "),1==t.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.deliverGoods(t)}}},[e._v("发货")]):e._e(),e._v(" "),3==t.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.refund(t)}}},[e._v("退款")]):e._e()]}}])})],2)],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.pageindex,"page-sizes":e.size_scoped,"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.intergralTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),e.detailShow?a("Detail",{attrs:{info:e.exchangeShooppingInfo},on:{close:function(t){e.close(1)}}}):e._e(),e._v(" "),a("el-dialog",{attrs:{title:"物流单号",visible:e.dialogFormVisible,width:"50%",center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"物流单号","label-width":"100px"}},[a("el-input",{model:{value:e.logisticsNo,callback:function(t){e.logisticsNo=t},expression:"logisticsNo"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)],1)],1)},n=[],r={render:i,staticRenderFns:n};t.a=r},O40m:function(e,t,a){var i=a("hZul");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("679b20ce",i,!0,{})},a58Q:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("4YfN"),r=i(n),o=a("lC5x"),s=i(o),l=a("J0Oq"),c=i(l),d=a("9rMa"),u=a("gjkd"),p=i(u);t.default={components:{Detail:p.default},data:function(){return{logisticsNo:"",deliverInfo:{status:"",id:""},dateValue:"",keyword:"",dialogFormVisible:!1,detailShow:!1,editShow:!1,userInfo:{},loading:!1,pageindex:1,pagesize:10,size_scoped:[10,20,30,40],exchangeShooppingInfo:{},headerOptions:[{label:"id",prop:"_id",hidden:!0,headerAlign:"center",align:"center",width:""},{label:"用户名",prop:"username",hidden:!1,headerAlign:"center",align:"center",width:""},{label:"商品名称",prop:"goodsName",hidden:!1,headerAlign:"center",align:"center",width:"",sort:!0,minWidth:100},{label:"商品积分",prop:"goodsIntegral",hidden:!1,headerAlign:"center",align:"center",width:"",sort:!0,minWidth:80},{label:"状态",prop:"statusName",hidden:!1,headerAlign:"center",align:"center",width:"",sort:!0},{label:"创建时间",prop:"createDate",hidden:!1,headerAlign:"center",align:"center",width:"",sort:!0}],multipleSelection:[]}},mounted:function(){this.exchangeShooppingList()},methods:{increment:function(e){return e+1+(this.pageindex-1)*this.pagesize},handleSizeChange:function(e){this.pagesize=e,this.exchangeShooppingList()},handleCurrentChange:function(e){this.pageindex=e,this.exchangeShooppingList()},exchangeShooppingList:function(){var e=this;return(0,c.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={current:e.pageindex,size:e.pagesize},e.dateValue&&(a.beginDate=e.dateValue[0],a.endDate=e.dateValue[1]),e.keyword&&(a.username=e.keyword),e.loading=!0,t.prev=4,t.next=7,e.$store.dispatch("exchangeShooppingList",a);case 7:e.loading=!1,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),e.loading=!1;case 13:case"end":return t.stop()}},t,e,[[4,10]])}))()},getDetail:function(e){this.detailShow=!0,this.exchangeShooppingInfo=e.row},close:function(e){1==e?this.detailShow=!1:(this.editShow=!1,this.exchangeShooppingList())},deliverGoods:function(e){this.dialogFormVisible=!0,this.deliverInfo.id=e.row.id,this.deliverInfo.status=2},refund:function(e){var t=this;return(0,c.default)(s.default.mark(function a(){return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.deliverInfo.id=e.row.id,t.deliverInfo.status=4,t.$confirm("是否申请退款","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0,customClass:"message_width"}).then((0,c.default)(s.default.mark(function e(){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$store.dispatch("updateIntegralConvert",t.deliverInfo);case 3:t.$message({message:"退款成功",type:"success"}),t.exchangeShooppingList();case 5:case"end":return e.stop()}},e,t)})));case 3:case"end":return a.stop()}},a,t)}))()},confirm:function(){var e=this;return(0,c.default)(s.default.mark(function t(){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.deliverInfo.logisticsNo=e.logisticsNo,t.next=3,e.$store.dispatch("updateIntegralConvert",e.deliverInfo);case 3:e.$message({message:"发货成功",type:"success"}),e.dialogFormVisible=!1,e.exchangeShooppingList();case 6:case"end":return t.stop()}},t,e)}))()}},computed:(0,r.default)({},(0,d.mapGetters)(["intergralTotal","intergralList"]))}},cego:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("lC5x"),r=i(n),o=a("J0Oq"),s=i(o),l=a("0d7K"),c=i(l);t.default={props:["info"],data:function(){return{dialogTableVisible:!0,showImg:!1,imgSrc:"",loading:!1}},components:{BigImg:c.default},methods:{clickImg:function(e){this.showImg=!0,this.imgSrc=e.currentTarget.src},viewImg:function(){this.showImg=!1},close:function(){this.$emit("close")},submitForm:function(e){var t=this;return(0,s.default)(r.default.mark(function a(){return r.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("toExamine",{id:t.info.id,userTaskRelationStatus:e});case 2:t.loading=!1,t.close();case 4:case"end":return a.stop()}},a,t)}))()}},computed:{}}},coVg:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".fade-enter-activ [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fade-enter [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transform:translate3D(100%,0,0);-ms-transform:translate3D(100%,0,0);transform:translate3D(100%,0,0)}.img-view[data-v-dd95aaba]{position:fixed;z-index:9999;top:0;left:0;background:rgba(0,0,0,.7);width:100%;height:100%;overflow:hidden}.img-view .img img[data-v-dd95aaba]{max-width:100%;position:absolute;left:0;right:0;top:0;bottom:0;max-height:100%;margin:auto;z-index:1000}",""])},gjkd:function(e,t,a){"use strict";function i(e){a("9Pv8")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("cego"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);var s=a("9LMo"),l=a("C7Lr"),c=i,d=l(r.a,s.a,!1,c,"data-v-8ed9dbda",null);t.default=d.exports},hZul:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"article[data-v-6a13f84e]{padding:20px}article .search[data-v-6a13f84e]{padding-bottom:20px}article .search .el-input[data-v-6a13f84e]{width:300px}article .pagination[data-v-6a13f84e]{text-align:right;padding:20px 0}article .tag[data-v-6a13f84e]{margin:0 10px}",""])},v3dR:function(e,t,a){var i=a("coVg");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("13ed8fd6",i,!0,{})},xlE6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["imgSrc"],methods:{bigImg:function(){this.$emit("clickit")}}}},"zp+l":function(e,t,a){"use strict";function i(e){a("O40m")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("a58Q"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);var s=a("K30i"),l=a("C7Lr"),c=i,d=l(r.a,s.a,!1,c,"data-v-6a13f84e",null);t.default=d.exports}});