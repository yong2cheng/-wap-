webpackJsonp([6],{"2cBs":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"task_generalt_wrapper"},[o("div",{staticClass:"new-header"},[o("div",{staticClass:"container cl"},[o("img",{staticStyle:{float:"left"},attrs:{src:a("Xs75")},on:{click:function(e){t.$router.back(-1)}}}),t._v(" "),o("div",{staticClass:"input-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],attrs:{type:"text",placeholder:"请输入任务关键词"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),t._v(" "),o("img",{staticClass:"search-btn",attrs:{src:a("qkWK")},on:{click:function(e){t.pageindex=1,t.myTaskList()}}})])])]),t._v(" "),o("div",{staticClass:"task_generalt_count"},[t.taskList.length>0?o("ul",{staticClass:"cf"},t._l(t.taskList,function(e,a){return o("li",{key:a,on:{click:function(a){t.getTaskDetail(e)}}},[o("p",[o("span",[t._v(t._s(e.taskName))]),t._v(" "),o("em",[t._v(t._s(e.taskReward)+"积分")])]),t._v(" "),o("button",{staticClass:"commom_button",class:{color_green:1==e.userTaskRelationStatus,color_red:1!=e.userTaskRelationStatus},on:{click:function(a){a.stopPropagation(),t.applyTask(e)}}},[t._v(t._s(1==e.userTaskRelationStatus?"提交审核":e.userTaskRelationStatusName))])])})):o("NoneData")],1),t._v(" "),o("el-dialog",{staticClass:"task_dialog",attrs:{title:"请选取图片",visible:t.dialogVisible,width:"90%",center:""},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("span",[o("el-upload",{staticClass:"upload_img",attrs:{action:"http://vip.omx65.cn:8080/api/imgUpload/","list-type":"picture-card","on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload,"on-remove":t.handleRemove}},[o("i",{staticClass:"el-icon-plus"})])],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)])],1),t._v(" "),o("Loading",{directives:[{name:"show",rawName:"v-show",value:t.taskLoadingMore,expression:"taskLoadingMore"}]})],1)},r=[],s={render:o,staticRenderFns:r};e.a=s},LheC:function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a("lC5x"),s=o(r),i=a("J0Oq"),n=o(i),l=a("4YfN"),d=o(l),u=a("9rMa");e.default={data:function(){return{pageindex:1,keyword:"",status:!0,dialogVisible:!1,dialogImageUrl:"",applyPic:"",seleteData:"",imageUrlArr:[]}},components:{},created:function(){this.myTaskList()},mounted:function(){var t=this;window.addEventListener("scroll",function(){(document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)>=(document.documentElement.scrollHeight||document.body.scrollHeight)&&t.taskLoadingBol&&(t.pageindex++,t.myTaskList())})},computed:(0,d.default)({},(0,u.mapGetters)(["taskList","taskLoadingMore","taskLoadingBol"])),methods:{beforeAvatarUpload:function(t){var e=t.size/1024/1024<2;return e||this.$message({message:"上传图片大小不能超过 2MB!",type:"error",duration:1500}),e},handleAvatarSuccess:function(t,e){this.imageUrlArr.push(t.data)},handleRemove:function(t,e){var a=this,o=t.response.data;this.imageUrlArr.length<=1?this.imageUrlArr=[]:this.imageUrlArr.forEach(function(t,e){t===o&&a.imageUrlArr.splice(e,1)}),console.log(this.imageUrlArr)},myTaskList:function(){var t=this;return(0,n.default)(s.default.mark(function e(){var a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={taskType:t.$route.params.taskType,current:t.pageindex},t.keyword&&(a.taskName=t.keyword),e.next=4,t.$store.dispatch("myTaskList",a);case 4:case"end":return e.stop()}},e,t)}))()},getTaskDetail:function(t){t.sourePath=1,this.$router.push({name:"taskDetail",query:t})},applyTask:function(t){var e=this;return(0,n.default)(s.default.mark(function a(){return s.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.seleteData=t,1==t.userTaskRelationStatus&&(e.dialogVisible=!0);case 2:case"end":return a.stop()}},a,e)}))()},confirm:function(){var t=this;return(0,n.default)(s.default.mark(function e(){var a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.dialogVisible=!1,a={id:t.seleteData.id},t.imageUrlArr&&(a.applyPic=t.imageUrlArr.join()),console.log(a),e.next=6,t.$store.dispatch("submitTask",a);case 6:t.$message({message:"提交成功",type:"success",duration:1500}),t.seleteData.userTaskRelationStatus=2,t.seleteData.userTaskRelationStatusName="待审核";case 9:case"end":return e.stop()}},e,t)}))()}}}},"XlP+":function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".new-header[data-v-3933ef01]{background:#fe4b1c;height:60px;background-size:cover;overflow:hidden;box-sizing:border-box;padding-top:15px;position:fixed;top:0;left:0;width:100%;z-index:10;padding-top:12px}.container[data-v-3933ef01]{width:96%;margin:0 auto;padding:0}.input-group[data-v-3933ef01]{width:65%;position:relative;float:left;border-collapse:separate;margin-left:.5rem}.input-group input[data-v-3933ef01]{background:#fff;border-radius:15px;border:none;height:36px;width:100%;text-indent:20px;font-size:14px}.input-group img[data-v-3933ef01]{position:absolute;top:8px;right:12px;cursor:pointer;width:20px;height:20px}.task_generalt_count[data-v-3933ef01]{width:100%;margin-top:60px}.task_generalt_count ul li[data-v-3933ef01]{background:#fff;float:left;width:100%;height:70px;padding:0 2%;box-sizing:border-box;border-bottom:1px solid #e9e9e9}.task_generalt_count ul li p[data-v-3933ef01]{float:left;width:calc(96% - 80px);margin-top:12px}.task_generalt_count ul li p span[data-v-3933ef01]{display:block;font-size:.35rem;font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.task_generalt_count .color_green[data-v-3933ef01]{float:right;color:#7caf0f}.task_generalt_count .color_red[data-v-3933ef01]{float:right;color:#e63512}.avatar-uploader .el-upload[data-v-3933ef01]{border:1px dashed #d9d9d9;border-radius:6px;cursor:pointer;position:relative;overflow:hidden}.avatar-uploader .el-upload[data-v-3933ef01]:hover{border-color:#409eff}.avatar-uploader-icon[data-v-3933ef01]{border:1px dashed #d9d9d9;font-size:28px;color:#8c939d;width:100px;height:100px;line-height:100px;text-align:center}.avatar[data-v-3933ef01]{width:100px;height:100px;display:block}",""])},XnC3:function(t,e,a){"use strict";function o(t){a("gILB")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("LheC"),s=a.n(r);for(var i in r)"default"!==i&&function(t){a.d(e,t,function(){return r[t]})}(i);var n=a("2cBs"),l=a("C7Lr"),d=o,u=l(s.a,n.a,!1,d,"data-v-3933ef01",null);e.default=u.exports},Xs75:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVRYR+2VT4hOYRTGf4/8T5OSKEWpERlKSVKklLFRsprZyspCsVIkJRZSms2QkpKUrGY3WShkoVFWYzsTDTXCwkpNPTrTHb0+937f+5nvm0vNWd3u+55zfuc55/SKmk0152cR4P9UwPZK4DpwS9KH+cxR2wrY3gM8BnqBnZLeLQiA7aXAReASEN9hCwNgO6qNqqP61LoLYDtadAa4CUTfG617ALY3Ag+BI016PAx8Br4Dn4D3wCtJzp2L0iG0PQDcBtbmBkruTQJ3gTuSvrXy/w3AdiS8B5xs5Zhx/hW4EoVImqm6/wvAdkgdkof0nbS3wHFJU2VBU4BRoL+TmZNYoUa/pDeN8VOA+D4L3ACWdwHkY6yxpOk09h9DaHtHsfO7ugDxXNLhpgBxaHtZMUAXgCUdBjkhaWQuZtO3wPYB4BGwpQKiT9J48ThtBrYBB4FjwO4Kn3FJfVkAhRpr4tUDTpcEnAUoS2R7L3AeGCw53ydpLP5nv4a2o6oHwPokYCXA3B3bocgTYEPid1XS5bYACjXWAfdjr4tgLQEKv63AC2BT4fdS0qG2AZKqTgFDwP6qFjTKbns78BroASYkBVR+C0oCxrpOS/qSuyW2YwWfAT8krZoXQG7SEvBrwDlJq+sCWAGMSZpd0+wt+NuKK1b0qKSntQGkULUosAjwTynwE1LblSFW7OQ5AAAAAElFTkSuQmCC"},gILB:function(t,e,a){var o=a("XlP+");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("71c0bed0",o,!0,{})},qkWK:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAAWdEVYdENyZWF0aW9uIFRpbWUAMTAvMTcvMTf1v1IVAAACjklEQVRIibXWT6hVRRwH8M/cZ6XBIystEE9WGi2ioCTaSJlZltQQ/dGFuFOhIhIiSFoouAhqIbUJhODxoiBIihGCyqh0EYEtkv6QFUoj+NAwsAT7g9NizoVHvPPe9f35bs7lML/zmZkzc+aGUoqulNgswCLcjOtwHkcwFlL+rbOwI2EirMRmGBuxBXe1ty+g1/4+hxHsDSkfmTZWYrMOu3EnvsL7OIY/MYQrsKrtyBBew4sh5fMXhZXYbMMbOIlt+CKkfG6iwhKbFdiOZ9pOxZDyqYGwEpvH8R4OYUNIeWyqnrZ1mzGKA1gfUv6nq22vLbgWe/ANHh4UgpDyW9iEtXh5sra9EAK8gAYbQ8pnB4XGge+o7/bpEpvlndiFR5ZehefwZkj5x4uFxmUHFmBrJ4b1mIcPZwBpO3oY95bYXNKFrcYv+HImWJsPsEJ9JRNit+B3nJ4FbEzdh4u7sIXtdWgWsNI+Z34X9jUux/AsYMP4G2e6sG+xDLfOAvYEfsDxLuxtdcmumYlSYnO1+s38PKT8Rxd2Avuwo8Tmxhl4u9rrvq4GvZBywU78i1eno5TYrFY382hI+VAnBiHl7/A8Hiux2dt+wgaFVuJdXIbXJ2v7/yNmj3psHMRTIeXvJ0EuVY+X3eo+XYhf8WhI+acpsfYhW/AKrlTnfwRH1cNznrphV+FZLMeneBK34WN1Ja4LKR+fEmvBG/AS7sP17e2/1Knq5zOMhJRHx9Xdg4SMB0PKJ6bExhUvwe3qn56b1M/RGRwNKR/uqLkbH6mr/KGQ8s8DYdNNic1afKJO6f19sDdZ0XQTUj6AB3AN9pfYLGWORtZPO6X71VW6dU5G1k9I+SAiluCOOR1ZPyU2y3D6P6g345mjMyQKAAAAAElFTkSuQmCC"}});