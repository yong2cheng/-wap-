webpackJsonp([17],{"9IsK":function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".edit-wrapper .block[data-v-34a9ffcd]{width:100%;display:block}.edit-wrapper .submit[data-v-34a9ffcd]{width:100px}",""])},Ncex:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"任务编辑",visible:e.dialogTableVisible,width:"80%",center:""},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.info,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"任务名称"}},[a("el-input",{attrs:{type:"text"},model:{value:e.info.taskName,callback:function(t){e.$set(e.info,"taskName",t)},expression:"info.taskName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.info.taskDescribe,callback:function(t){e.$set(e.info,"taskDescribe",t)},expression:"info.taskDescribe"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务类型"}},[a("el-select",{staticClass:"block",attrs:{placeholder:"请选择任务类型"},model:{value:e.info.taskType,callback:function(t){e.$set(e.info,"taskType",t)},expression:"info.taskType"}},e._l(e.taskTypeArr,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.taskType}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"任务派发数量"}},[a("el-input",{attrs:{rules:[{required:!0,message:"派发数量不能为空"},{type:"number",message:"派发数量必须为数字值且大于0"}]},model:{value:e.info.taskDistributeCount,callback:function(t){e.$set(e.info,"taskDistributeCount",t)},expression:"info.taskDistributeCount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务图片"}},[a("el-upload",{attrs:{action:"http://vip.31d461.cn:8080/api/imgUpload/","list-type":"picture-card","on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-remove":e.handleRemove,"file-list":e.fileList}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.updataForm("form")}}},[e._v("修改")])],1)],1)],1)},s=[],r={render:i,staticRenderFns:s};t.a=r},QFZy:function(e,t,a){"use strict";function i(e){a("oWm4")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("ok0S"),r=a.n(s);for(var o in s)"default"!==o&&function(e){a.d(t,e,function(){return s[e]})}(o);var l=a("Ncex"),n=a("C7Lr"),c=i,u=n(r.a,l.a,!1,c,"data-v-34a9ffcd",null);t.default=u.exports},oWm4:function(e,t,a){var i=a("9IsK");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("6c4da252",i,!0,{})},ok0S:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a("4YfN"),r=i(s),o=a("lC5x"),l=i(o),n=a("J0Oq"),c=i(n),u=a("9rMa");t.default={components:{},props:["info"],data:function(){return{dialogTableVisible:!0,loading:!1,dialogImageUrl:"",fileList:this.info.picList,imageUrlArr:this.info.taskPicList,dialogVisible:!1,imageUrl:"",taskTypeArr:[{name:"普通任务",taskType:1},{name:"高级任务",taskType:2}]}},methods:{beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t},handleAvatarSuccess:function(e,t){this.imageUrlArr.push(e.data)},handleRemove:function(e,t){var a=this;console.log(this.imageUrlArr);var i=e.response?e.response.data:e.url.substring(29);console.log(i),this.imageUrlArr.length<=1?this.imageUrlArr=[]:this.imageUrlArr.forEach(function(e,t){e===i&&a.imageUrlArr.splice(t,1)}),console.log(this.imageUrlArr)},close:function(){this.$emit("close")},updataForm:function(e){var t=this;this.loading=!0,this.$refs[e].validate(function(){var e=(0,c.default)(l.default.mark(function e(a){var i;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=15;break}return e.prev=1,i={id:t.info.id,taskName:t.info.taskName,taskDescribe:t.info.taskDescribe,taskType:t.info.taskType,taskDistributeCount:t.info.taskDistributeCount,taskPic:t.imageUrlArr.join()},e.next=5,t.$store.dispatch("updateTask",i);case 5:(t.opertionStatus=1e4)&&t.$message({message:"修改成功",type:"success",duration:1500}),t.loading=!1,t.close(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.loading=!1;case 13:e.next=17;break;case 15:return console.log("error submit!!"),e.abrupt("return",!1);case 17:case"end":return e.stop()}},e,t,[[1,10]])}));return function(t){return e.apply(this,arguments)}}())}},computed:(0,r.default)({},(0,u.mapGetters)(["opertionStatus"]))}}});