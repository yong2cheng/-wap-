webpackJsonp([5,12],{"0d7K":function(t,e,a){"use strict";function i(t){a("v3dR")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("xlE6"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var l=a("7fWE"),o=a("C7Lr"),c=i,d=o(r.a,l.a,!1,c,"data-v-dd95aaba",null);e.default=d.exports},"7fWE":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"img-view",on:{click:t.bigImg}},[a("div",{staticClass:"img-layer"}),t._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:t.imgSrc}})])])])},n=[],r={render:i,staticRenderFns:n};e.a=r},AUBb:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,"article[data-v-b7ff1408]{padding:20px}article .search[data-v-b7ff1408]{padding-bottom:20px}article .search .el-input[data-v-b7ff1408]{width:300px}article .pagination[data-v-b7ff1408]{text-align:right;padding:20px 0}article .tag[data-v-b7ff1408]{margin:5px}",""])},JiXc:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a("lC5x"),r=i(n),s=a("J0Oq"),l=i(s),o=a("0d7K"),c=i(o);e.default={props:["info"],data:function(){return{dialogTableVisible:!0,showImg:!1,imgSrc:"",loading:!1}},components:{BigImg:c.default},methods:{clickImg:function(t){this.showImg=!0,this.imgSrc=t.currentTarget.src},viewImg:function(){this.showImg=!1},close:function(){this.$emit("close")},submitForm:function(t){var e=this;return(0,l.default)(r.default.mark(function a(){return r.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("toExamine",{id:e.info.id,userTaskRelationStatus:t});case 2:e.loading=!1,e.close();case 4:case"end":return a.stop()}},a,e)}))()}},computed:{}}},M0TD:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a("4YfN"),r=i(n),s=a("lC5x"),l=i(s),o=a("J0Oq"),c=i(o),d=a("9rMa"),p=a("cxxb"),u=i(p);e.default={components:{Detail:u.default},data:function(){return{keyword:"",detailShow:!1,taskInfo:{},loading:!1,pageindex:1,pagesize:10,size_scoped:[10,20,30,40],headerOptions:[{label:"_id",prop:"_id",hidden:!0,headerAlign:"center",align:"center"},{label:"用户名称",prop:"username",hidden:!1,headerAlign:"center",align:"center"},{label:"任务名称",prop:"taskName",hidden:!1,headerAlign:"center",align:"center"},{label:"任务类型名称",prop:"taskTypeName",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"状态",prop:"userTaskRelationStatusName",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"奖励",prop:"taskReward",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"创建时间",prop:"createDate",hidden:!1,headerAlign:"center",align:"center"}],multipleSelection:[],dateValue:"",taskTypeArr:[{name:"所有类型",taskType:""},{name:"普通任务",taskType:1},{name:"高级任务",taskType:2}],taskStausArr:[{name:"所有状态",taskType:""},{name:"已申请",taskType:1},{name:"待审核",taskType:2},{name:"审核通过",taskType:3},{name:"审核不通过",taskType:4}],taskStaus:"",taskType:""}},mounted:function(){this.getReviewedList()},methods:{increment:function(t){return t+1+(this.pageindex-1)*this.pagesize},close:function(){this.detailShow=!1,this.getReviewedList()},handleSizeChange:function(t){this.pagesize=t,this.getReviewedList()},handleCurrentChange:function(t){this.pageindex=t,this.getReviewedList()},getReviewedList:function(){var t=this;return(0,c.default)(l.default.mark(function e(){var a;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,a={current:t.pageindex,size:t.pagesize},t.keyword&&(a.taskName=t.keyword),t.taskType&&(a.taskType=t.taskType),t.dateValue&&(a.beginDate=t.dateValue[0],a.endDate=t.dateValue[1]),e.prev=5,e.next=8,t.$store.dispatch("reviewedList",a);case 8:t.loading=!1,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),t.loading=!1;case 14:case"end":return e.stop()}},e,t,[[5,11]])}))()},getDetail:function(t){this.detailShow=!0,this.taskInfo=t.row}},computed:(0,r.default)({},(0,d.mapGetters)(["taskList","taskTotal"]))}},PPRh:function(t,e,a){"use strict";function i(t){a("QcG0")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("M0TD"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var l=a("w2ND"),o=a("C7Lr"),c=i,d=o(r.a,l.a,!1,c,"data-v-b7ff1408",null);e.default=d.exports},QcG0:function(t,e,a){var i=a("AUBb");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("5b09bdb7",i,!0,{})},coVg:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".fade-enter-activ [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fade-enter [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transform:translate3D(100%,0,0);-ms-transform:translate3D(100%,0,0);transform:translate3D(100%,0,0)}.img-view[data-v-dd95aaba]{position:fixed;z-index:9999;top:0;left:0;background:rgba(0,0,0,.7);width:100%;height:100%;overflow:hidden}.img-view .img img[data-v-dd95aaba]{max-width:100%;position:absolute;left:0;right:0;top:0;bottom:0;max-height:100%;margin:auto;z-index:1000}",""])},cxxb:function(t,e,a){"use strict";function i(t){a("zdL3")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("JiXc"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var l=a("gopN"),o=a("C7Lr"),c=i,d=o(r.a,l.a,!1,c,"data-v-a9495aaa",null);e.default=d.exports},gopN:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"任务详情",visible:t.dialogTableVisible,width:"50%",center:""},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"100px"}},[a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"用户名称",prop:"type"}},[t._v("\n                "+t._s(t.info.username)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务名称",prop:"type"}},[t._v("\n                "+t._s(t.info.taskName)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务奖励",prop:"source"}},[t._v("\n                "+t._s(t.info.taskReward)+"积分\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"创建时间",prop:"releaseTime"}},[t._v("\n                "+t._s(t.info.createDate)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务类型",prop:"title"}},[t._v("\n                "+t._s(t.info.taskTypeName)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务描述",prop:"desc"}},[t._v("\n                "+t._s(t.info.taskDescribe)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务状态",prop:"album"}},[t._v("\n                "+t._s(t.info.statusName?t.info.statusName:t.info.userTaskRelationStatusName)+"\n            ")]),t._v(" "),a("el-form-item",{staticClass:"left-item",attrs:{label:"任务图片",prop:"isVisible"}},t._l(t.info.taskPicList,function(e,i){return t.info.taskPicList?a("img",{key:i,staticStyle:{width:"100px",height:"50px","margin-right":"5px"},attrs:{src:"http://vip.31d461.cn/api/"+e,alt:""},on:{click:function(e){t.clickImg(e)}}}):t._e()})),t._v(" "),1!=t.info.linkType?a("el-form-item",{staticClass:"left-item",attrs:{label:"用户上传图片",prop:"isVisible"}},t._l(t.info.applyPicList,function(e,i){return t.info.applyPicList?a("img",{key:i,staticStyle:{width:"100px",height:"50px","margin-right":"5px"},attrs:{src:"http://vip.31d461.cn/api/"+e,alt:""},on:{click:function(e){t.clickImg(e)}}}):t._e()})):t._e(),t._v(" "),2==t.info.userTaskRelationStatus?a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.loading=!0,t.submitForm(4)}}},[t._v("审核不通过")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.loading=!0,t.submitForm(3)}}},[t._v("审核通过")])],1):t._e()],1),t._v(" "),t.showImg?a("BigImg",{attrs:{imgSrc:t.imgSrc},on:{clickit:t.viewImg}}):t._e()],1)},n=[],r={render:i,staticRenderFns:n};e.a=r},jZiv:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".edit-wrapper .block[data-v-a9495aaa]{width:100%;display:block}.edit-wrapper .submit[data-v-a9495aaa]{width:100px}",""])},v3dR:function(t,e,a){var i=a("coVg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("13ed8fd6",i,!0,{})},w2ND:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("div",{staticClass:"search"},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入任务名称","prefix-icon":"el-icon-search"},nativeOn:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getTaskList(e):null}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),a("el-select",{staticClass:"block",staticStyle:{width:"120px"},attrs:{placeholder:"请选择任务类型"},model:{value:t.taskType,callback:function(e){t.taskType=e},expression:"taskType"}},t._l(t.taskTypeArr,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.taskType}})})),t._v(" "),a("el-select",{staticClass:"block",staticStyle:{width:"120px"},attrs:{placeholder:"请选择任务状态"},model:{value:t.taskStaus,callback:function(e){t.taskStaus=e},expression:"taskStaus"}},t._l(t.taskStausArr,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.taskType}})})),t._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:t.loading},on:{click:t.getReviewedList}},[t._v("搜索")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[a("router-link",{attrs:{to:{path:"/task/add"}}},[t._v("添加")])],1)],1),t._v(" "),a("div",{staticStyle:{height:"calc(100vh - 220px)"}},[a("el-table",{ref:"multipleTable",attrs:{data:t.taskList,"tooltip-effect":"dark",stripe:"",border:"",height:"100%"}},[a("el-table-column",{attrs:{type:"index",width:"55",align:"center","header-align":"center",index:t.increment,label:"序号"}}),t._v(" "),t._l(t.headerOptions,function(e,i){return e.hidden?t._e():a("el-table-column",{key:i,attrs:{"show-overflow-tooltip":"",label:e.label,prop:e.prop,"header-align":e.headerAlign,align:e.align,sortable:e.sort,"min-width":e.minWidth||150},scopedSlots:t._u([{key:"default",fn:function(e){return["taskPic"==e.column.property?a("div",[a("img",{staticStyle:{width:"80px",height:"40px"},attrs:{src:"http://vip.31d461.cn/api/"+e.row[e.column.property]}})]):"taskReward"==e.column.property?a("div",[t._v(t._s(e.row[e.column.property])+"积分")]):a("div",[t._v(t._s(e.row[e.column.property]||"无"))])]}}])})}),t._v(" "),a("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.getDetail(e)}}},[t._v("详情")]),t._v(" "),2==e.row.userTaskRelationStatus?a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.getDetail(e)}}},[t._v("审核")]):t._e()]}}])})],2)],1),t._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.pageindex,"page-sizes":t.size_scoped,"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.taskTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),t.detailShow?a("Detail",{attrs:{info:t.taskInfo},on:{close:t.close}}):t._e()],1)},n=[],r={render:i,staticRenderFns:n};e.a=r},xlE6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["imgSrc"],methods:{bigImg:function(){this.$emit("clickit")}}}},zdL3:function(t,e,a){var i=a("jZiv");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("7b5dc5ec",i,!0,{})}});