webpackJsonp([6],{"+bbF":function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",[i("div",{staticClass:"task_detail_wrapper"},[i("div",{staticClass:"new-header"},[i("div",{staticClass:"container cl"},[i("img",{staticStyle:{float:"left"},attrs:{src:e("Xs75")},on:{click:function(t){a.$router.back(-1)}}}),a._v(" "),i("div",{staticClass:"task_detail"},[a._v("任务详情")])])]),a._v(" "),i("div",{staticClass:"task_detail_count"},[i("div",{staticClass:"task_detail_name"},[i("p",[a._v(a._s(this.detailData.taskName))]),a._v(" "),i("span",[a._v(a._s(this.detailData.taskReward)+"积分")])]),a._v(" "),i("div",{staticClass:"task_detail_derc"},[i("h3",[a._v("任务描述")]),a._v(" "),i("p",[a._v(a._s(this.detailData.taskDescribe))]),a._v(" "),i("img",{staticStyle:{width:"96%"},attrs:{src:"http://vip.31d461.cn/api/"+this.detailData.taskPic,alt:""}})]),a._v(" "),i("div",{staticClass:"task_detail_but"},[i("button",{staticClass:"commom_button",class:{color_red:1!=this.detailData.sourePath&&0!=this.detailData.userTaskRelationStatus||1==this.detailData.sourePath&&1!=this.detailData.userTaskRelationStatus},on:{click:function(t){a.applyTask()}}},[a._v(a._s(1==this.detailData.sourePath&&1==this.detailData.userTaskRelationStatus?"提交审核":this.detailData.userTaskRelationStatusName))])]),a._v(" "),i("el-dialog",{staticClass:"task_dialog",attrs:{title:"请选取图片",visible:a.dialogVisible,width:"90%",center:""},on:{"update:visible":function(t){a.dialogVisible=t}}},[i("span",[i("el-upload",{staticClass:"upload_img",attrs:{action:"http://vip.31d461.cn/api/imgUpload/","list-type":"picture-card","on-success":a.handleAvatarSuccess,"before-upload":a.beforeAvatarUpload,"on-remove":a.handleRemove}},[i("i",{staticClass:"el-icon-plus"})])],1),a._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:a.confirm}},[a._v("确 定")])],1)])],1)])])},s=[],r={render:i,staticRenderFns:s};t.a=r},WyyJ:function(a,t,e){"use strict";function i(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(t,"__esModule",{value:!0});var s=e("lC5x"),r=i(s),o=e("J0Oq"),d=i(o),n=e("4YfN"),l=i(n),c=e("9rMa");t.default={data:function(){return{detailData:this.$route.query,dialogVisible:!1,dialogImageUrl:"",applyPic:"",imageUrlArr:[]}},components:{},created:function(){},mounted:function(){},computed:(0,l.default)({},(0,c.mapGetters)(["taskStatus"])),methods:{beforeAvatarUpload:function(a){var t=a.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t},handleAvatarSuccess:function(a,t){this.imageUrlArr.push(a.data)},handleRemove:function(a,t){var e=this,i=a.response.data;console.log(i),this.imageUrlArr.length<=1?this.imageUrlArr=[]:this.imageUrlArr.forEach(function(a,t){a===i&&e.imageUrlArr.splice(t,1)}),console.log(this.imageUrlArr)},applyTask:function(){var a=this;return(0,d.default)(r.default.mark(function t(){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(1==a.detailData.sourePath||0!==a.detailData.userTaskRelationStatus){t.next=4;break}return t.next=3,a.$store.dispatch("applyTask",{taskId:a.detailData.id});case 3:a.$router.back(-1);case 4:1==a.detailData.sourePath&&1==a.detailData.userTaskRelationStatus&&(a.dialogVisible=!0);case 5:case"end":return t.stop()}},t,a)}))()},confirm:function(){var a=this;return(0,d.default)(r.default.mark(function t(){var e;return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.dialogVisible=!1,e={id:a.detailData.id},a.imageUrlArr&&(e.applyPic=a.imageUrlArr.join()),t.next=5,a.$store.dispatch("submitTask",e);case 5:(a.taskStatus=1e4)&&(a.$message({message:"提交成功",type:"success"}),a.$router.back(-1));case 6:case"end":return t.stop()}},t,a)}))()}}}},XVxB:function(a,t,e){t=a.exports=e("UTlt")(!1),t.push([a.i,".new-header[data-v-7a15e476]{background:#fe4b1c;height:60px;background-size:cover;overflow:hidden;box-sizing:border-box;padding-top:15px;position:fixed;top:0;left:0;width:100%;z-index:10;padding-top:12px}.task_detail[data-v-7a15e476]{text-align:center;font-size:20px;line-height:36px;height:36px;color:#fff}.container[data-v-7a15e476]{width:96%;margin:0 auto;padding:0}.task_detail_count[data-v-7a15e476]{width:96%;margin-top:60px;background:#fff;padding:0 2% 30px}.task_detail_name[data-v-7a15e476]{height:60px;padding:10px 0}.task_detail_name p[data-v-7a15e476]{font-size:.35rem;font-weight:700}.task_detail_derc h3[data-v-7a15e476]{color:#fe4b1c;border-bottom:1px solid #e9e9e9}.task_detail_derc p[data-v-7a15e476]{margin:10px 0}.task_detail_but button[data-v-7a15e476]{background:#fe4b1c;color:#fff;width:100%}.task_detail_but .color_red[data-v-7a15e476]{color:#e63512;background:#e9e9e9}.avatar-uploader .el-upload[data-v-7a15e476]{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload[data-v-7a15e476]:hover{border-color:#409eff}.avatar-uploader-icon[data-v-7a15e476]{border:1px dashed #d9d9d9;font-size:28px;color:#8c939d;width:100px;height:100px;line-height:100px;text-align:center}.avatar[data-v-7a15e476]{width:100px;height:100px;display:block}",""])},Xs75:function(a,t){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVRYR+2VT4hOYRTGf4/8T5OSKEWpERlKSVKklLFRsprZyspCsVIkJRZSms2QkpKUrGY3WShkoVFWYzsTDTXCwkpNPTrTHb0+937f+5nvm0vNWd3u+55zfuc55/SKmk0152cR4P9UwPZK4DpwS9KH+cxR2wrY3gM8BnqBnZLeLQiA7aXAReASEN9hCwNgO6qNqqP61LoLYDtadAa4CUTfG617ALY3Ag+BI016PAx8Br4Dn4D3wCtJzp2L0iG0PQDcBtbmBkruTQJ3gTuSvrXy/w3AdiS8B5xs5Zhx/hW4EoVImqm6/wvAdkgdkof0nbS3wHFJU2VBU4BRoL+TmZNYoUa/pDeN8VOA+D4L3ACWdwHkY6yxpOk09h9DaHtHsfO7ugDxXNLhpgBxaHtZMUAXgCUdBjkhaWQuZtO3wPYB4BGwpQKiT9J48ThtBrYBB4FjwO4Kn3FJfVkAhRpr4tUDTpcEnAUoS2R7L3AeGCw53ydpLP5nv4a2o6oHwPokYCXA3B3bocgTYEPid1XS5bYACjXWAfdjr4tgLQEKv63AC2BT4fdS0qG2AZKqTgFDwP6qFjTKbns78BroASYkBVR+C0oCxrpOS/qSuyW2YwWfAT8krZoXQG7SEvBrwDlJq+sCWAGMSZpd0+wt+NuKK1b0qKSntQGkULUosAjwTynwE1LblSFW7OQ5AAAAAElFTkSuQmCC"},ZPvU:function(a,t,e){"use strict";function i(a){e("sKNX")}Object.defineProperty(t,"__esModule",{value:!0});var s=e("WyyJ"),r=e.n(s);for(var o in s)"default"!==o&&function(a){e.d(t,a,function(){return s[a]})}(o);var d=e("+bbF"),n=e("C7Lr"),l=i,c=n(r.a,d.a,!1,l,"data-v-7a15e476",null);t.default=c.exports},sKNX:function(a,t,e){var i=e("XVxB");"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);e("FIqI")("6f03e509",i,!0,{})}});