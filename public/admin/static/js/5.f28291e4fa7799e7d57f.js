webpackJsonp([5,12],{"0d7K":function(e,t,a){"use strict";function i(e){a("v3dR")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("xlE6"),r=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);var l=a("7fWE"),o=a("C7Lr"),c=i,d=o(r.a,l.a,!1,c,"data-v-dd95aaba",null);t.default=d.exports},"7fWE":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"img-view",on:{click:e.bigImg}},[a("div",{staticClass:"img-layer"}),e._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:e.imgSrc}})])])])},n=[],r={render:i,staticRenderFns:n};t.a=r},JiXc:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("lC5x"),r=i(n),s=a("J0Oq"),l=i(s),o=a("0d7K"),c=i(o);t.default={props:["info"],data:function(){return{dialogTableVisible:!0,showImg:!1,imgSrc:"",loading:!1}},components:{BigImg:c.default},methods:{clickImg:function(e){this.showImg=!0,this.imgSrc=e.currentTarget.src},viewImg:function(){this.showImg=!1},close:function(){this.$emit("close")},submitForm:function(e){var t=this;return(0,l.default)(r.default.mark(function a(){return r.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("toExamine",{id:t.info.id,userTaskRelationStatus:e});case 2:t.loading=!1,t.close();case 4:case"end":return a.stop()}},a,t)}))()}},computed:{}}},KiDQ:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"article[data-v-7bc748ca]{padding:20px}article .search[data-v-7bc748ca]{padding-bottom:20px}article .search .el-input[data-v-7bc748ca]{width:300px}article .pagination[data-v-7bc748ca]{text-align:right;padding:20px 0}article .tag[data-v-7bc748ca]{margin:5px}",""])},M0TD:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("4YfN"),r=i(n),s=a("lC5x"),l=i(s),o=a("J0Oq"),c=i(o),d=a("9rMa"),u=a("cxxb"),p=i(u);t.default={components:{Detail:p.default},data:function(){return{keyword:"",keywordRealName:"",detailShow:!1,taskInfo:{},loading:!1,pageindex:1,pagesize:10,size_scoped:[10,20,30,40],headerOptions:[{label:"_id",prop:"_id",hidden:!0,headerAlign:"center",align:"center"},{label:"用户名称",prop:"username",hidden:!1,headerAlign:"center",align:"center"},{label:"真实姓名",prop:"realName",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"任务名称",prop:"taskName",hidden:!1,headerAlign:"center",align:"center",minWidth:120},{label:"任务类型名称",prop:"taskTypeName",hidden:!1,headerAlign:"center",align:"center",minWidth:120},{label:"状态",prop:"userTaskRelationStatusName",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"奖励",prop:"taskReward",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"创建时间",prop:"createDate",hidden:!1,headerAlign:"center",align:"center"}],multipleSelection:[],dateValue:"",taskTypeArr:[{name:"所有类型",taskType:""},{name:"普通任务",taskType:1},{name:"高级任务",taskType:2}],taskStausArr:[{name:"所有状态",userTaskRelationStatus:""},{name:"已申请",userTaskRelationStatus:1},{name:"待审核",userTaskRelationStatus:2},{name:"审核通过",userTaskRelationStatus:3},{name:"审核不通过",userTaskRelationStatus:4}],taskStaus:"",taskType:""}},mounted:function(){this.getReviewedList()},methods:{selectable:function(e,t){return 2==e.userTaskRelationStatus},handleSelectionChange:function(e){this.multipleSelection=e},increment:function(e){return e+1+(this.pageindex-1)*this.pagesize},close:function(){this.detailShow=!1,this.getReviewedList()},handleSizeChange:function(e){this.pagesize=e,this.getReviewedList()},handleCurrentChange:function(e){this.pageindex=e,this.getReviewedList()},getReviewedList:function(){var e=this;return(0,c.default)(l.default.mark(function t(){var a;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,a={current:e.pageindex,size:e.pagesize},e.keyword&&(a.taskName=e.keyword),e.keywordRealName&&(a.realName=e.keywordRealName),e.taskType&&(a.taskType=e.taskType),e.taskStaus&&(a.userTaskRelationStatus=e.taskStaus),e.dateValue&&(a.beginDate=e.dateValue[0],a.endDate=e.dateValue[1]),t.prev=7,t.next=10,e.$store.dispatch("reviewedList",a);case 10:e.loading=!1,t.next=16;break;case 13:t.prev=13,t.t0=t.catch(7),e.loading=!1;case 16:case"end":return t.stop()}},t,e,[[7,13]])}))()},batchAudit:function(){var e=this;if(this.multipleSelection&&this.multipleSelection.length>0){this.loading=!0;var t=[];this.multipleSelection.forEach(function(e){t.push(e.id)}),this.$confirm("是否审核通过","提示",{distinguishCancelAndClose:!0,confirmButtonText:"审核通过",cancelButtonText:"审核不通过",type:"warning",center:!0,customClass:"message_color"}).then((0,c.default)(l.default.mark(function a(){var i;return l.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return i={ids:t.join(),userTaskRelationStatus:3},a.next=3,e.$store.dispatch("toExamineBatchUpdate",i);case 3:e.loading=!1,e.$message({message:"审核通过成功",type:"success",duration:1500}),e.getReviewedList();case 6:case"end":return a.stop()}},a,e)}))).catch(function(){var a=(0,c.default)(l.default.mark(function a(i){var n;return l.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("cancel"!==i){a.next=7;break}return n={ids:t.join(),userTaskRelationStatus:4},a.next=4,e.$store.dispatch("toExamineBatchUpdate",n);case 4:e.loading=!1,e.$message({message:"审核不通过成功",type:"success",duration:1500}),e.getReviewedList();case 7:case"end":return a.stop()}},a,e)}));return function(e){return a.apply(this,arguments)}}())}else this.$message({message:"请勾选要审核的数据",type:"info",duration:1500})},getDetail:function(e){this.detailShow=!0,this.taskInfo=e.row}},computed:(0,r.default)({},(0,d.mapGetters)(["taskList","taskTotal"]))}},PPRh:function(e,t,a){"use strict";function i(e){a("WDT4")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("M0TD"),r=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);var l=a("ZA6h"),o=a("C7Lr"),c=i,d=o(r.a,l.a,!1,c,"data-v-7bc748ca",null);t.default=d.exports},WDT4:function(e,t,a){var i=a("KiDQ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("21617676",i,!0,{})},ZA6h:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("div",{staticClass:"search"},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入任务名称","prefix-icon":"el-icon-search"},nativeOn:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.getTaskList(t):null}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e._v(" "),a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入真实姓名","prefix-icon":"el-icon-search"},nativeOn:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.getUserList(t):null}},model:{value:e.keywordRealName,callback:function(t){e.keywordRealName=t},expression:"keywordRealName"}}),e._v(" "),a("el-select",{staticClass:"block",staticStyle:{width:"120px"},attrs:{placeholder:"请选择任务类型"},model:{value:e.taskType,callback:function(t){e.taskType=t},expression:"taskType"}},e._l(e.taskTypeArr,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.taskType}})})),e._v(" "),a("el-select",{staticClass:"block",staticStyle:{width:"120px"},attrs:{placeholder:"请选择任务状态"},model:{value:e.taskStaus,callback:function(t){e.taskStaus=t},expression:"taskStaus"}},e._l(e.taskStausArr,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.userTaskRelationStatus}})})),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(t){e.pageindex=1,e.getReviewedList()}}},[e._v("搜索")]),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:e.batchAudit}},[e._v("批量审核")])],1),e._v(" "),a("div",{staticStyle:{height:"calc(100vh - 220px)"}},[a("el-table",{ref:"multipleTable",attrs:{data:e.taskList,"tooltip-effect":"dark",stripe:"",border:"",height:"100%"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center",selectable:e.selectable,width:"55"}}),e._v(" "),a("el-table-column",{attrs:{type:"index",width:"55",align:"center","header-align":"center",index:e.increment,label:"序号"}}),e._v(" "),e._l(e.headerOptions,function(t,i){return t.hidden?e._e():a("el-table-column",{key:i,attrs:{"show-overflow-tooltip":"",label:t.label,prop:t.prop,"header-align":t.headerAlign,align:t.align,sortable:t.sort,"min-width":t.minWidth||150},scopedSlots:e._u([{key:"default",fn:function(t){return["taskPic"==t.column.property?a("div",[a("img",{staticStyle:{width:"80px",height:"40px"},attrs:{src:"http://vip.31d461.cn:8080/api/"+t.row[t.column.property]}})]):"taskReward"==t.column.property?a("div",[e._v(e._s(t.row[t.column.property])+"积分")]):a("div",[e._v(e._s(t.row[t.column.property]||"无"))])]}}])})}),e._v(" "),a("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.getDetail(t)}}},[e._v("详情")]),e._v(" "),2==t.row.userTaskRelationStatus?a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.getDetail(t)}}},[e._v("审核")]):e._e()]}}])})],2)],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.pageindex,"page-sizes":e.size_scoped,"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.taskTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),e.detailShow?a("Detail",{attrs:{info:e.taskInfo},on:{close:e.close}}):e._e()],1)},n=[],r={render:i,staticRenderFns:n};t.a=r},coVg:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".fade-enter-activ [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fade-enter [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transform:translate3D(100%,0,0);-ms-transform:translate3D(100%,0,0);transform:translate3D(100%,0,0)}.img-view[data-v-dd95aaba]{position:fixed;z-index:9999;top:0;left:0;background:rgba(0,0,0,.7);width:100%;height:100%;overflow:hidden}.img-view .img img[data-v-dd95aaba]{max-width:100%;position:absolute;left:0;right:0;top:0;bottom:0;max-height:100%;margin:auto;z-index:1000}",""])},cxxb:function(e,t,a){"use strict";function i(e){a("zdL3")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("JiXc"),r=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);var l=a("gopN"),o=a("C7Lr"),c=i,d=o(r.a,l.a,!1,c,"data-v-a9495aaa",null);t.default=d.exports},gopN:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"任务详情",visible:e.dialogTableVisible,width:"50%",center:""},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"100px"}},[a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"用户名称",prop:"type"}},[e._v("\n                "+e._s(e.info.username)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务名称",prop:"type"}},[e._v("\n                "+e._s(e.info.taskName)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务奖励",prop:"source"}},[e._v("\n                "+e._s(e.info.taskReward)+"积分\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"创建时间",prop:"releaseTime"}},[e._v("\n                "+e._s(e.info.createDate)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务类型",prop:"title"}},[e._v("\n                "+e._s(e.info.taskTypeName)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务描述",prop:"desc"}},[e._v("\n                "+e._s(e.info.taskDescribe)+"\n            ")]),e._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务状态",prop:"album"}},[e._v("\n                "+e._s(e.info.statusName?e.info.statusName:e.info.userTaskRelationStatusName)+"\n            ")]),e._v(" "),a("el-form-item",{staticClass:"left-item",attrs:{label:"任务图片",prop:"isVisible"}},e._l(e.info.taskPicList,function(t,i){return e.info.taskPicList?a("img",{key:i,staticStyle:{width:"100px",height:"50px","margin-right":"5px"},attrs:{src:"http://vip.31d461.cn:8080/api/"+t,alt:""},on:{click:function(t){e.clickImg(t)}}}):e._e()})),e._v(" "),1!=e.info.linkType?a("el-form-item",{staticClass:"left-item",attrs:{label:"用户上传图片",prop:"isVisible"}},e._l(e.info.applyPicList,function(t,i){return e.info.applyPicList?a("img",{key:i,staticStyle:{width:"100px",height:"50px","margin-right":"5px"},attrs:{src:"http://vip.31d461.cn:8080/api/"+t,alt:""},on:{click:function(t){e.clickImg(t)}}}):e._e()})):e._e(),e._v(" "),2==e.info.userTaskRelationStatus?a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.loading=!0,e.submitForm(4)}}},[e._v("审核不通过")]),e._v(" "),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.loading=!0,e.submitForm(3)}}},[e._v("审核通过")])],1):e._e()],1),e._v(" "),e.showImg?a("BigImg",{attrs:{imgSrc:e.imgSrc},on:{clickit:e.viewImg}}):e._e()],1)},n=[],r={render:i,staticRenderFns:n};t.a=r},jZiv:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".edit-wrapper .block[data-v-a9495aaa]{width:100%;display:block}.edit-wrapper .submit[data-v-a9495aaa]{width:100px}",""])},v3dR:function(e,t,a){var i=a("coVg");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("13ed8fd6",i,!0,{})},xlE6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["imgSrc"],methods:{bigImg:function(){this.$emit("clickit")}}}},zdL3:function(e,t,a){var i=a("jZiv");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("7b5dc5ec",i,!0,{})}});