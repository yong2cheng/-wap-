webpackJsonp([3,12,17],{"0d7K":function(t,e,a){"use strict";function i(t){a("v3dR")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("xlE6"),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var o=a("7fWE"),l=a("C7Lr"),c=i,d=l(s.a,o.a,!1,c,"data-v-dd95aaba",null);e.default=d.exports},"7fWE":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"img-view",on:{click:t.bigImg}},[a("div",{staticClass:"img-layer"}),t._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:t.imgSrc}})])])])},n=[],s={render:i,staticRenderFns:n};e.a=s},JSNL:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".edit-wrapper .block[data-v-ec5dd364]{width:100%;display:block}.edit-wrapper .submit[data-v-ec5dd364]{width:100px}",""])},JiXc:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a("lC5x"),s=i(n),r=a("J0Oq"),o=i(r),l=a("0d7K"),c=i(l);e.default={props:["info"],data:function(){return{dialogTableVisible:!0,showImg:!1,imgSrc:"",loading:!1}},components:{BigImg:c.default},methods:{clickImg:function(t){this.showImg=!0,this.imgSrc=t.currentTarget.src},viewImg:function(){this.showImg=!1},close:function(){this.$emit("close")},submitForm:function(t){var e=this;return(0,o.default)(s.default.mark(function a(){return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("toExamine",{id:e.info.id,userTaskRelationStatus:t});case 2:e.loading=!1,e.close();case 4:case"end":return a.stop()}},a,e)}))()}},computed:{}}},QFZy:function(t,e,a){"use strict";function i(t){a("XU6j")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("ok0S"),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var o=a("wQa2"),l=a("C7Lr"),c=i,d=l(s.a,o.a,!1,c,"data-v-ec5dd364",null);e.default=d.exports},XU6j:function(t,e,a){var i=a("JSNL");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("6d80b452",i,!0,{})},ckT9:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a("4YfN"),s=i(n),r=a("lC5x"),o=i(r),l=a("J0Oq"),c=i(l),d=a("9rMa"),u=a("cxxb"),p=i(u),f=a("QFZy"),m=i(f);e.default={components:{EditComponent:m.default,Detail:p.default},data:function(){return{showImg:!1,imgSrc:"",keyword:"",detailShow:!1,editShow:!1,blogInfo:{},loading:!1,pageindex:1,pagesize:10,size_scoped:[10,20,30,40],headerOptions:[{label:"_id",prop:"_id",hidden:!0,headerAlign:"center",align:"center"},{label:"任务名称",prop:"taskName",hidden:!1,headerAlign:"center",align:"center"},{label:"任务类型名称",prop:"taskTypeName",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"任务状态",prop:"statusName",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"任务派发数量",prop:"taskDistributeCount",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"创建时间",prop:"createDate",hidden:!1,headerAlign:"center",align:"center"}],multipleSelection:[],dateValue:"",taskTypeArr:[{name:"所有任务",taskType:""},{name:"普通任务",taskType:1},{name:"高级任务",taskType:2}],taskType:"",taskInfo:""}},mounted:function(){this.getTaskList()},methods:{clickImg:function(t){this.showImg=!0,this.imgSrc=t.currentTarget.src},viewImg:function(){this.showImg=!1},increment:function(t){return t+1+(this.pageindex-1)*this.pagesize},close:function(t){1==t?this.detailShow=!1:(this.editShow=!1,this.getTaskList())},handleSizeChange:function(t){this.pagesize=t,this.getTaskList()},handleCurrentChange:function(t){this.pageindex=t,this.getTaskList()},getTaskList:function(){var t=this;return(0,c.default)(o.default.mark(function e(){var a;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={current:t.pageindex,size:t.pagesize},t.keyword&&(a.taskName=t.keyword),t.taskType&&(a.taskType=t.taskType),t.dateValue&&(a.beginDate=t.dateValue[0],a.endDate=t.dateValue[1]),e.prev=4,e.next=7,t.$store.dispatch("getTaskList",a);case 7:t.loading=!1,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),t.loading=!1;case 13:case"end":return e.stop()}},e,t,[[4,10]])}))()},getDetail:function(t){this.detailShow=!0,this.taskInfo=t.row,this.taskInfo.linkType=1},edit:function(t){if(this.editShow=!0,this.taskInfo=t.row,this.taskInfo.taskPicList&&this.taskInfo.taskPicList.length>0){var e=[];this.taskInfo.taskPicList.forEach(function(t){e.push({url:"http://vip.omx65.cn:8080/api"+t})}),this.taskInfo.picList=e}},releaseTask:function(t,e){var a=this,i="",n="";2==e?(i="是否发布任务？",n="发布成功"):(i="是否停止发布任务？",n="停止发布成功"),this.$confirm(i,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((0,c.default)(o.default.mark(function i(){var s;return o.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return s={id:t.row.id,status:e},i.next=3,a.$store.dispatch("updateTask",s);case 3:(a.opertionStatus=1e4)&&a.$message({message:n,type:"success"}),a.close();case 5:case"end":return i.stop()}},i,a)})))}},computed:(0,s.default)({},(0,d.mapGetters)(["taskList","taskTotal","opertionStatus"]))}},coVg:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".fade-enter-activ [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fade-enter [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transform:translate3D(100%,0,0);-ms-transform:translate3D(100%,0,0);transform:translate3D(100%,0,0)}.img-view[data-v-dd95aaba]{position:fixed;z-index:9999;top:0;left:0;background:rgba(0,0,0,.7);width:100%;height:100%;overflow:hidden}.img-view .img img[data-v-dd95aaba]{max-width:100%;position:absolute;left:0;right:0;top:0;bottom:0;max-height:100%;margin:auto;z-index:1000}",""])},cxxb:function(t,e,a){"use strict";function i(t){a("zdL3")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("JiXc"),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var o=a("gopN"),l=a("C7Lr"),c=i,d=l(s.a,o.a,!1,c,"data-v-a9495aaa",null);e.default=d.exports},df7i:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",[a("div",{staticClass:"search"},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入任务名称","prefix-icon":"el-icon-search"},nativeOn:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getTaskList(e):null}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),a("el-select",{staticClass:"block",staticStyle:{width:"120px"},attrs:{placeholder:"请选择任务类型"},model:{value:t.taskType,callback:function(e){t.taskType=e},expression:"taskType"}},t._l(t.taskTypeArr,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.taskType}})})),t._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:t.loading},on:{click:t.getTaskList}},[t._v("搜索")]),t._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[a("router-link",{attrs:{to:{path:"/task/add"}}},[t._v("添加")])],1)],1),t._v(" "),a("div",{staticStyle:{height:"calc(100vh - 220px)"}},[a("el-table",{ref:"multipleTable",attrs:{data:t.taskList,"tooltip-effect":"dark",stripe:"",border:"",height:"100%"}},[a("el-table-column",{attrs:{type:"index",width:"55",align:"center","header-align":"center",index:t.increment,label:"序号"}}),t._v(" "),t._l(t.headerOptions,function(e,i){return e.hidden?t._e():a("el-table-column",{key:i,attrs:{"show-overflow-tooltip":"",label:e.label,prop:e.prop,"header-align":e.headerAlign,align:e.align,sortable:e.sort,"min-width":e.minWidth||150},scopedSlots:t._u([{key:"default",fn:function(e){return["taskPic"==e.column.property?a("div",[a("img",{staticStyle:{width:"80px",height:"40px"},attrs:{src:"http://vip.omx65.cn:8080/api/"+e.row[e.column.property]},on:{click:function(e){t.clickImg(e)}}})]):a("div",[t._v(t._s(e.row[e.column.property]||"无"))])]}}])})}),t._v(" "),a("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center",width:"235"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.getDetail(e)}}},[t._v("详情")]),t._v(" "),1==e.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.edit(e)}}},[t._v("编辑")]):t._e(),t._v(" "),1==e.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.releaseTask(e,2)}}},[t._v("发布")]):t._e(),t._v(" "),2==e.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.releaseTask(e,3)}}},[t._v("停止发布")]):t._e()]}}])})],2)],1),t._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.pageindex,"page-sizes":t.size_scoped,"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.taskTotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),t.detailShow?a("Detail",{attrs:{info:t.taskInfo},on:{close:function(e){t.close(1)}}}):t._e(),t._v(" "),t.editShow?a("EditComponent",{attrs:{info:t.taskInfo},on:{close:function(e){t.close(2)}}}):t._e()],1)},n=[],s={render:i,staticRenderFns:n};e.a=s},gopN:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"任务详情",visible:t.dialogTableVisible,width:"50%",center:""},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"100px"}},[a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"用户名称",prop:"type"}},[t._v("\n                "+t._s(t.info.username)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务名称",prop:"type"}},[t._v("\n                "+t._s(t.info.taskName)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务奖励",prop:"source"}},[t._v("\n                "+t._s(t.info.taskReward)+"积分\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"创建时间",prop:"releaseTime"}},[t._v("\n                "+t._s(t.info.createDate)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务类型",prop:"title"}},[t._v("\n                "+t._s(t.info.taskTypeName)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务描述",prop:"desc"}},[t._v("\n                "+t._s(t.info.taskDescribe)+"\n            ")]),t._v(" "),a("el-form-item",{staticStyle:{"margin-bottom":"10px"},attrs:{label:"任务状态",prop:"album"}},[t._v("\n                "+t._s(t.info.statusName?t.info.statusName:t.info.userTaskRelationStatusName)+"\n            ")]),t._v(" "),a("el-form-item",{staticClass:"left-item",attrs:{label:"任务图片",prop:"isVisible"}},t._l(t.info.taskPicList,function(e,i){return t.info.taskPicList?a("img",{key:i,staticStyle:{width:"100px",height:"50px","margin-right":"5px"},attrs:{src:"http://vip.omx65.cn:8080/api/"+e,alt:""},on:{click:function(e){t.clickImg(e)}}}):t._e()})),t._v(" "),1!=t.info.linkType?a("el-form-item",{staticClass:"left-item",attrs:{label:"用户上传图片",prop:"isVisible"}},t._l(t.info.applyPicList,function(e,i){return t.info.applyPicList?a("img",{key:i,staticStyle:{width:"100px",height:"50px","margin-right":"5px"},attrs:{src:"http://vip.omx65.cn:8080/api/"+e,alt:""},on:{click:function(e){t.clickImg(e)}}}):t._e()})):t._e(),t._v(" "),2==t.info.userTaskRelationStatus?a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.loading=!0,t.submitForm(4)}}},[t._v("审核不通过")]),t._v(" "),a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.loading=!0,t.submitForm(3)}}},[t._v("审核通过")])],1):t._e()],1),t._v(" "),t.showImg?a("BigImg",{attrs:{imgSrc:t.imgSrc},on:{clickit:t.viewImg}}):t._e()],1)},n=[],s={render:i,staticRenderFns:n};e.a=s},jZiv:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".edit-wrapper .block[data-v-a9495aaa]{width:100%;display:block}.edit-wrapper .submit[data-v-a9495aaa]{width:100px}",""])},jm4H:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,"article[data-v-492f6de2]{padding:20px}article .search[data-v-492f6de2]{padding-bottom:20px}article .search .el-input[data-v-492f6de2]{width:300px}article .pagination[data-v-492f6de2]{text-align:right;padding:20px 0}article .tag[data-v-492f6de2]{margin:5px}",""])},ok0S:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a("4YfN"),s=i(n),r=a("lC5x"),o=i(r),l=a("J0Oq"),c=i(l),d=a("9rMa");e.default={components:{},props:["info"],data:function(){return{dialogTableVisible:!0,loading:!1,dialogImageUrl:"",fileList:this.info.picList,imageUrlArr:this.info.taskPicList,dialogVisible:!1,imageUrl:"",taskTypeArr:[{name:"普通任务",taskType:1},{name:"高级任务",taskType:2}]}},methods:{beforeAvatarUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message.error("上传图片大小不能超过 2MB!"),e},handleAvatarSuccess:function(t,e){this.imageUrlArr.push(t.data)},handleRemove:function(t,e){var a=this;console.log(this.imageUrlArr);var i=t.response?t.response.data:t.url.substring(29);console.log(i),this.imageUrlArr.length<=1?this.imageUrlArr=[]:this.imageUrlArr.forEach(function(t,e){t===i&&a.imageUrlArr.splice(e,1)}),console.log(this.imageUrlArr)},close:function(){this.$emit("close")},updataForm:function(t){var e=this;this.loading=!0,this.$refs[t].validate(function(){var t=(0,c.default)(o.default.mark(function t(a){var i;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=15;break}return t.prev=1,i={id:e.info.id,taskName:e.info.taskName,taskDescribe:e.info.taskDescribe,taskType:e.info.taskType,taskDistributeCount:e.info.taskDistributeCount,taskPic:e.imageUrlArr.join()},t.next=5,e.$store.dispatch("updateTask",i);case 5:(e.opertionStatus=1e4)&&e.$message({message:"修改成功",type:"success"}),e.loading=!1,e.close(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.loading=!1;case 13:t.next=17;break;case 15:return console.log("error submit!!"),t.abrupt("return",!1);case 17:case"end":return t.stop()}},t,e,[[1,10]])}));return function(e){return t.apply(this,arguments)}}())}},computed:(0,s.default)({},(0,d.mapGetters)(["opertionStatus"]))}},v3dR:function(t,e,a){var i=a("coVg");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("13ed8fd6",i,!0,{})},wQa2:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"任务编辑",visible:t.dialogTableVisible,width:"80%",center:""},on:{"update:visible":function(e){t.dialogTableVisible=e},close:t.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:t.info,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"任务名称"}},[a("el-input",{attrs:{type:"text"},model:{value:t.info.taskName,callback:function(e){t.$set(t.info,"taskName",e)},expression:"info.taskName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"任务描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.info.taskDescribe,callback:function(e){t.$set(t.info,"taskDescribe",e)},expression:"info.taskDescribe"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"任务类型"}},[a("el-select",{staticClass:"block",attrs:{placeholder:"请选择任务类型"},model:{value:t.info.taskType,callback:function(e){t.$set(t.info,"taskType",e)},expression:"info.taskType"}},t._l(t.taskTypeArr,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.taskType}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"任务派发数量"}},[a("el-input",{attrs:{rules:[{required:!0,message:"派发数量不能为空"},{type:"number",message:"派发数量必须为数字值且大于0"}]},model:{value:t.info.taskDistributeCount,callback:function(e){t.$set(t.info,"taskDistributeCount",e)},expression:"info.taskDistributeCount"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"任务图片"}},[a("el-upload",{attrs:{action:"http://vip.omx65.cn:8080/api/imgUpload/","list-type":"picture-card","on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove,"file-list":t.fileList}},[a("i",{staticClass:"el-icon-plus"})]),t._v(" "),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:function(e){t.updataForm("form")}}},[t._v("修改")])],1)],1)],1)},n=[],s={render:i,staticRenderFns:n};e.a=s},xlE6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["imgSrc"],methods:{bigImg:function(){this.$emit("clickit")}}}},zRGB:function(t,e,a){var i=a("jm4H");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("35782211",i,!0,{})},zdL3:function(t,e,a){var i=a("jZiv");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("FIqI")("7b5dc5ec",i,!0,{})},zzfk:function(t,e,a){"use strict";function i(t){a("zRGB")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("ckT9"),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var o=a("df7i"),l=a("C7Lr"),c=i,d=l(s.a,o.a,!1,c,"data-v-492f6de2",null);e.default=d.exports}});