webpackJsonp([8,14],{"+J8E":function(e,t,a){"use strict";function n(e){a("yoTg")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("yKHo"),r=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);var l=a("9alK"),s=a("C7Lr"),d=n,c=s(r.a,l.a,!1,d,"data-v-b82cb404",null);t.default=c.exports},"0IfM":function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"article[data-v-b82cb404]{padding:20px}article .search[data-v-b82cb404]{padding-bottom:20px}article .search .el-input[data-v-b82cb404]{width:300px}article .pagination[data-v-b82cb404]{text-align:right;padding:20px 0}article .tag[data-v-b82cb404]{margin:5px}",""])},"9alK":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("div",{staticStyle:{height:"calc(100vh - 218px)"}},[a("el-table",{ref:"multipleTable",attrs:{data:e.taskRewardlist,"tooltip-effect":"dark",stripe:"",border:"",height:"100%"}},[a("el-table-column",{attrs:{type:"index",width:"55",align:"center","header-align":"center",index:e.increment,label:"序号"}}),e._v(" "),e._l(e.headerOptions,function(t,n){return t.hidden?e._e():a("el-table-column",{key:n,attrs:{"show-overflow-tooltip":"",label:t.label,prop:t.prop,"header-align":t.headerAlign,align:t.align,sortable:t.sort,"min-width":t.minWidth||150},scopedSlots:e._u([{key:"default",fn:function(t){return["taskPic"==t.column.property?a("div",[a("img",{staticStyle:{width:"80px",height:"40px"},attrs:{src:"http://vip.31d461.cn/api/"+t.row[t.column.property]},on:{click:function(t){e.clickImg(t)}}})]):a("div",[e._v(e._s(t.row[t.column.property]||"无"))])]}}])})}),e._v(" "),a("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.edit(t)}}},[e._v("编辑")])]}}])})],2)],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{layout:"total",total:e.taskRewardtotal}}),e._v(" "),e.editShow?a("EditComponent",{attrs:{info:e.vipInfo},on:{close:function(t){e.close(2)}}}):e._e()],1)},i=[],r={render:n,staticRenderFns:i};t.a=r},AEbD:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a("4YfN"),r=n(i),o=a("lC5x"),l=n(o),s=a("J0Oq"),d=n(s),c=a("9rMa");t.default={components:{},props:["info"],data:function(){return{dialogTableVisible:!0,loading:!1,taskTypeArr:[{name:"普通任务",taskType:1},{name:"高级任务",taskType:2}]}},created:function(){this.getGoodsList()},methods:{close:function(){this.$emit("close")},getGoodsList:function(){var e=this;return(0,d.default)(l.default.mark(function t(){return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getGoodsList");case 2:case"end":return t.stop()}},t,e)}))()},updataForm:function(e){var t=this;this.loading=!0,this.$refs[e].validate(function(){var e=(0,d.default)(l.default.mark(function e(a){var n;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=15;break}return e.prev=1,n={id:t.info.id,firstLevelReward:t.info.firstLevelReward,secondLevelReward:t.info.secondLevelReward,thirdLevelReward:t.info.thirdLevelReward},e.next=5,t.$store.dispatch("updatevTaskReward",n);case 5:(t.sysStatus=1e4)&&t.$message({message:"修改成功",type:"success"}),t.loading=!1,t.close(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.loading=!1;case 13:e.next=17;break;case 15:return console.log("error submit!!"),e.abrupt("return",!1);case 17:case"end":return e.stop()}},e,t,[[1,10]])}));return function(t){return e.apply(this,arguments)}}())}},computed:(0,r.default)({},(0,c.mapGetters)(["sysStatus"]))}},RiVi:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"任务奖励编辑",visible:e.dialogTableVisible,width:"360px",center:""},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.info,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"任务类型名称"}},[e._v("\n            "+e._s(e.info.taskTypeName)+"\n        ")]),e._v(" "),a("el-form-item",{attrs:{label:"一级奖励"}},[a("el-input",{model:{value:e.info.firstLevelReward,callback:function(t){e.$set(e.info,"firstLevelReward",t)},expression:"info.firstLevelReward"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"二级奖励"}},[a("el-input",{model:{value:e.info.secondLevelReward,callback:function(t){e.$set(e.info,"secondLevelReward",t)},expression:"info.secondLevelReward"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"三级奖励"}},[a("el-input",{model:{value:e.info.thirdLevelReward,callback:function(t){e.$set(e.info,"thirdLevelReward",t)},expression:"info.thirdLevelReward"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.updataForm("form")}}},[e._v("修改")])],1)],1)],1)},i=[],r={render:n,staticRenderFns:i};t.a=r},TPa7:function(e,t,a){var n=a("wM2C");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("3d99396d",n,!0,{})},tXHZ:function(e,t,a){"use strict";function n(e){a("TPa7")}Object.defineProperty(t,"__esModule",{value:!0});var i=a("AEbD"),r=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);var l=a("RiVi"),s=a("C7Lr"),d=n,c=s(r.a,l.a,!1,d,"data-v-a8394908",null);t.default=c.exports},wM2C:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".edit-wrapper .block[data-v-a8394908]{width:100%;display:block}.edit-wrapper .submit[data-v-a8394908]{width:100px}",""])},yKHo:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a("4YfN"),r=n(i),o=a("lC5x"),l=n(o),s=a("J0Oq"),d=n(s),c=a("9rMa"),u=a("tXHZ"),f=n(u);t.default={components:{EditComponent:f.default},data:function(){return{showImg:!1,detailShow:!1,editShow:!1,blogInfo:{},loading:!1,headerOptions:[{label:"_id",prop:"_id",hidden:!0,headerAlign:"center",align:"center"},{label:"任务类型",prop:"taskTypeName",hidden:!1,headerAlign:"center",align:"center"},{label:"一级奖励积分",prop:"firstLevelReward",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"二级奖励积分",prop:"secondLevelReward",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"三级奖励积分",prop:"thirdLevelReward",hidden:!1,headerAlign:"center",align:"center"}],vipInfo:""}},mounted:function(){this.getTaskReward()},methods:{increment:function(e){return e+1},close:function(e){1==e?this.detailShow=!1:(this.editShow=!1,this.getTaskReward())},getTaskReward:function(){var e=this;return(0,d.default)(l.default.mark(function t(){return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$store.dispatch("getTaskReward");case 4:e.loading=!1,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),e.loading=!1;case 10:case"end":return t.stop()}},t,e,[[1,7]])}))()},getDetail:function(e){this.detailShow=!0,this.vipInfo=e.row},edit:function(e){this.editShow=!0,this.vipInfo=e.row}},computed:(0,r.default)({},(0,c.mapGetters)(["taskRewardlist","taskRewardtotal"]))}},yoTg:function(e,t,a){var n=a("0IfM");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("73d94356",n,!0,{})}});