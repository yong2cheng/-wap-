webpackJsonp([20],{"532T":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"task_detail_wrapper"},[i("div",{staticClass:"new-header"},[i("div",{staticClass:"container cl"},[i("img",{staticStyle:{float:"left"},attrs:{src:e("Xs75")},on:{click:function(a){t.$router.back(-1)}}}),t._v(" "),i("div",{staticClass:"task_detail"},[t._v("任务详情")])])]),t._v(" "),i("div",{staticClass:"task_detail_count"},[i("div",{staticClass:"task_detail_name"},[i("p",[t._v(t._s(this.detailData.taskName))]),t._v(" "),i("span",[t._v(t._s(this.detailData.taskReward)+"积分")])]),t._v(" "),i("div",{staticClass:"task_detail_derc"},[i("h3",[t._v("任务描述")]),t._v(" "),i("p",[t._v(t._s(this.detailData.taskDescribe))]),t._v(" "),t._l(this.detailData.taskPicList,function(t,a){return i("img",{key:a,staticStyle:{width:"96%",height:"175px"},attrs:{src:"http://vip.31d461.cn/api/"+t,alt:""}})})],2),t._v(" "),this.detailData.applyPicList&&this.detailData.applyPicList.length>0?i("div",{staticClass:"task_detail_derc"},[i("h3",[t._v("完成任务上传图片")]),t._v(" "),t._l(this.detailData.applyPicList,function(t,a){return i("img",{key:a,staticStyle:{width:"96%",height:"175px"},attrs:{src:"http://vip.31d461.cn/api/"+t,alt:""}})})],2):t._e(),t._v(" "),i("div",{staticClass:"task_detail_but"},[i("button",{staticClass:"commom_button",class:{color_red:1!=this.detailData.sourePath&&0!=this.detailData.userTaskRelationStatus&&-2!=this.detailData.userTaskRelationStatus||1==this.detailData.sourePath&&1!=this.detailData.userTaskRelationStatus},on:{click:function(a){t.applyTask()}}},[t._v(t._s(1==this.detailData.sourePath&&1==this.detailData.userTaskRelationStatus?"提交审核":this.detailData.userTaskRelationStatusName))])]),t._v(" "),i("el-dialog",{staticClass:"task_dialog",attrs:{title:"请选取图片",visible:t.dialogVisible,width:"90%",center:""},on:{"update:visible":function(a){t.dialogVisible=a}}},[i("span",[i("el-upload",{staticClass:"upload_img",attrs:{action:"http://vip.31d461.cn/api/imgUpload/","list-type":"picture-card","on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove}},[i("i",{staticClass:"el-icon-plus"})])],1),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)])],1)])])},s=[],r={render:i,staticRenderFns:s};a.a=r},ClXq:function(t,a,e){var i=e("NfMy");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("FIqI")("6cb7b284",i,!0,{})},NfMy:function(t,a,e){a=t.exports=e("UTlt")(!1),a.push([t.i,".new-header[data-v-ab23677e]{background:#fe4b1c;height:60px;background-size:cover;overflow:hidden;box-sizing:border-box;padding-top:15px;position:fixed;top:0;left:0;width:100%;z-index:10;padding-top:12px}.task_detail[data-v-ab23677e]{text-align:center;font-size:20px;line-height:36px;height:36px;color:#fff}.container[data-v-ab23677e]{width:96%;margin:0 auto;padding:0}.task_detail_count[data-v-ab23677e]{width:96%;margin-top:60px;background:#fff;padding:0 2% 30px}.task_detail_name[data-v-ab23677e]{height:60px;padding:10px 0}.task_detail_name p[data-v-ab23677e]{font-size:.35rem;font-weight:700}.task_detail_derc h3[data-v-ab23677e]{color:#fe4b1c;border-bottom:1px solid #e9e9e9}.task_detail_derc p[data-v-ab23677e]{margin:10px 0}.task_detail_but button[data-v-ab23677e]{background:#fe4b1c;color:#fff;width:100%}.task_detail_but .color_red[data-v-ab23677e]{color:#e63512;background:#e9e9e9}.avatar-uploader .el-upload[data-v-ab23677e]{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload[data-v-ab23677e]:hover{border-color:#409eff}.avatar-uploader-icon[data-v-ab23677e]{border:1px dashed #d9d9d9;font-size:28px;color:#8c939d;width:100px;height:100px;line-height:100px;text-align:center}.avatar[data-v-ab23677e]{width:100px;height:100px;display:block}",""])},WyyJ:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var s=e("lC5x"),r=i(s),o=e("J0Oq"),l=i(o);e("9rMa");a.default={data:function(){return{detailData:this.$route.query,dialogVisible:!1,dialogImageUrl:"",applyPic:"",imageUrlArr:[]}},components:{},created:function(){this.detailData.taskPic.indexOf(",")<0&&(this.detailData.taskPicList=[this.detailData.taskPic]),this.detailData.applyPicList&&this.detailData.applyPicList.length>0&&this.detailData.applyPic.indexOf(",")<0&&(this.detailData.applyPicList=[this.detailData.applyPic]),console.log(this.detailData)},mounted:function(){},computed:{},methods:{beforeAvatarUpload:function(t){var a=t.size/1024/1024<2;return a||this.$message.error("上传头像图片大小不能超过 2MB!"),a},handleAvatarSuccess:function(t,a){this.imageUrlArr.push(t.data)},handleRemove:function(t,a){var e=this,i=t.response.data;this.imageUrlArr.length<=1?this.imageUrlArr=[]:this.imageUrlArr.forEach(function(t,a){t===i&&e.imageUrlArr.splice(a,1)}),console.log(this.imageUrlArr)},applyTask:function(){var t=this;return(0,l.default)(r.default.mark(function a(){return r.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(1==t.detailData.sourePath||0!==t.detailData.userTaskRelationStatus){a.next=4;break}return a.next=3,t.$store.dispatch("applyTask",{taskId:t.detailData.id});case 3:t.$router.back(-1);case 4:1!=t.detailData.sourePath&&-2===t.detailData.userTaskRelationStatus&&t.$router.push({name:"becomeVip",query:{name:"成为VIP"}}),1==t.detailData.sourePath&&1==t.detailData.userTaskRelationStatus&&(t.dialogVisible=!0);case 6:case"end":return a.stop()}},a,t)}))()},confirm:function(){var t=this;return(0,l.default)(r.default.mark(function a(){var e;return r.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.dialogVisible=!1,e={id:t.detailData.id},t.imageUrlArr&&(e.applyPic=t.imageUrlArr.join()),a.next=5,t.$store.dispatch("submitTask",e);case 5:t.$message({message:"提交成功",type:"success"}),t.$router.back(-1);case 7:case"end":return a.stop()}},a,t)}))()}}}},Xs75:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVRYR+2VT4hOYRTGf4/8T5OSKEWpERlKSVKklLFRsprZyspCsVIkJRZSms2QkpKUrGY3WShkoVFWYzsTDTXCwkpNPTrTHb0+937f+5nvm0vNWd3u+55zfuc55/SKmk0152cR4P9UwPZK4DpwS9KH+cxR2wrY3gM8BnqBnZLeLQiA7aXAReASEN9hCwNgO6qNqqP61LoLYDtadAa4CUTfG617ALY3Ag+BI016PAx8Br4Dn4D3wCtJzp2L0iG0PQDcBtbmBkruTQJ3gTuSvrXy/w3AdiS8B5xs5Zhx/hW4EoVImqm6/wvAdkgdkof0nbS3wHFJU2VBU4BRoL+TmZNYoUa/pDeN8VOA+D4L3ACWdwHkY6yxpOk09h9DaHtHsfO7ugDxXNLhpgBxaHtZMUAXgCUdBjkhaWQuZtO3wPYB4BGwpQKiT9J48ThtBrYBB4FjwO4Kn3FJfVkAhRpr4tUDTpcEnAUoS2R7L3AeGCw53ydpLP5nv4a2o6oHwPokYCXA3B3bocgTYEPid1XS5bYACjXWAfdjr4tgLQEKv63AC2BT4fdS0qG2AZKqTgFDwP6qFjTKbns78BroASYkBVR+C0oCxrpOS/qSuyW2YwWfAT8krZoXQG7SEvBrwDlJq+sCWAGMSZpd0+wt+NuKK1b0qKSntQGkULUosAjwTynwE1LblSFW7OQ5AAAAAElFTkSuQmCC"},ZPvU:function(t,a,e){"use strict";function i(t){e("ClXq")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("WyyJ"),r=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(a,t,function(){return s[t]})}(o);var l=e("532T"),d=e("C7Lr"),n=i,c=d(r.a,l.a,!1,n,"data-v-ab23677e",null);a.default=c.exports}});