webpackJsonp([10,18],{"1uuH":function(t,e,n){"use strict";function a(t){n("36aD")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("1w8u"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var l=n("87yJ"),c=n("C7Lr"),s=a,d=c(r.a,l.a,!1,s,"data-v-2ed00a7f",null);e.default=d.exports},"1w8u":function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n("4YfN"),r=a(i),o=n("lC5x"),l=a(o),c=n("J0Oq"),s=a(c),d=n("9rMa");e.default={components:{},props:["info"],data:function(){return{dialogTableVisible:!0,loading:!1,taskTypeArr:[{name:"普通任务",taskType:1},{name:"高级任务",taskType:2}]}},created:function(){},methods:{close:function(){this.$emit("close")},updataForm:function(t){var e=this;this.loading=!0,this.$refs[t].validate(function(){var t=(0,s.default)(l.default.mark(function t(n){var a;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=15;break}return t.prev=1,a={id:e.info.id,content:e.info.content},t.next=5,e.$store.dispatch("updatevNotice",a);case 5:(e.sysStatus=1e4)&&e.$message({message:"修改成功",type:"success",duration:1500}),e.loading=!1,e.close(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.loading=!1;case 13:t.next=17;break;case 15:return console.log("error submit!!"),t.abrupt("return",!1);case 17:case"end":return t.stop()}},t,e,[[1,10]])}));return function(e){return t.apply(this,arguments)}}())}},computed:(0,r.default)({},(0,d.mapGetters)(["sysStatus"]))}},"36aD":function(t,e,n){var a=n("Luhr");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("FIqI")("04f037c0",a,!0,{})},"87yJ":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"公告编辑",visible:t.dialogTableVisible,width:"360px",center:""},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.close}},[n("el-form",{ref:"form",staticClass:"form",attrs:{model:t.info,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"公告内容"}},[n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.info.content,callback:function(e){t.$set(t.info,"content",e)},expression:"info.content"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.updataForm("form")}}},[t._v("修改")])],1)],1)],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},Luhr:function(t,e,n){e=t.exports=n("UTlt")(!1),e.push([t.i,".edit-wrapper .block[data-v-2ed00a7f]{width:100%;display:block}.edit-wrapper .submit[data-v-2ed00a7f]{width:100px}",""])},N3ct:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n("4YfN"),r=a(i),o=n("lC5x"),l=a(o),c=n("J0Oq"),s=a(c),d=n("9rMa"),u=n("1uuH"),p=a(u);e.default={components:{EditComponent:p.default},data:function(){return{showImg:!1,detailShow:!1,editShow:!1,blogInfo:{},loading:!1,headerOptions:[{label:"_id",prop:"_id",hidden:!0,headerAlign:"center",align:"center"},{label:"任务类型",prop:"taskTypeName",hidden:!0,headerAlign:"center",align:"center"},{label:"公告名称",prop:"content",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"发布时间",prop:"createDate",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"三级奖励积分",prop:"thirdLevelReward",hidden:!0,headerAlign:"center",align:"center"}],vipInfo:""}},mounted:function(){this.getNotice()},methods:{increment:function(t){return t+1},close:function(t){1==t?this.detailShow=!1:(this.editShow=!1,this.getNotice())},getNotice:function(){var t=this;return(0,s.default)(l.default.mark(function e(){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$store.dispatch("getNotice");case 4:t.loading=!1,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.loading=!1;case 10:case"end":return e.stop()}},e,t,[[1,7]])}))()},getDetail:function(t){this.detailShow=!0,this.vipInfo=t.row},edit:function(t){this.editShow=!0,this.vipInfo=t.row}},computed:(0,r.default)({},(0,d.mapGetters)(["noticelist","noticetotal"]))}},Tg3V:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("div",{staticStyle:{height:"calc(100vh - 220px)"}},[n("el-table",{ref:"multipleTable",attrs:{data:t.noticelist,"tooltip-effect":"dark",stripe:"",border:"",height:"100%"}},[n("el-table-column",{attrs:{type:"index",width:"55",align:"center","header-align":"center",index:t.increment,label:"序号"}}),t._v(" "),t._l(t.headerOptions,function(e,a){return e.hidden?t._e():n("el-table-column",{key:a,attrs:{"show-overflow-tooltip":"",label:e.label,prop:e.prop,"header-align":e.headerAlign,align:e.align,sortable:e.sort,"min-width":e.minWidth||150},scopedSlots:t._u([{key:"default",fn:function(e){return["taskPic"==e.column.property?n("div",[n("img",{staticStyle:{width:"80px",height:"40px"},attrs:{src:"http://vip.31d461.cn/api/"+e.row[e.column.property]},on:{click:function(e){t.clickImg(e)}}})]):n("div",[t._v(t._s(e.row[e.column.property]||"无"))])]}}])})}),t._v(" "),n("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center",width:"135"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){t.edit(e)}}},[t._v("编辑")])]}}])})],2)],1),t._v(" "),n("el-pagination",{staticClass:"pagination",attrs:{layout:"total",total:t.noticetotal}}),t._v(" "),t.editShow?n("EditComponent",{attrs:{info:t.vipInfo},on:{close:function(e){t.close(2)}}}):t._e()],1)},i=[],r={render:a,staticRenderFns:i};e.a=r},"b+TJ":function(t,e,n){var a=n("ylWC");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("FIqI")("9793d28e",a,!0,{})},roxP:function(t,e,n){"use strict";function a(t){n("b+TJ")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("N3ct"),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var l=n("Tg3V"),c=n("C7Lr"),s=a,d=c(r.a,l.a,!1,s,"data-v-762bae87",null);e.default=d.exports},ylWC:function(t,e,n){e=t.exports=n("UTlt")(!1),e.push([t.i,"article[data-v-762bae87]{padding:20px}article .search[data-v-762bae87]{padding-bottom:20px}article .search .el-input[data-v-762bae87]{width:300px}article .pagination[data-v-762bae87]{text-align:right;padding:20px 0}article .tag[data-v-762bae87]{margin:5px}",""])}});