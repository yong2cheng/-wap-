webpackJsonp([20],{"+6+L":function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".edit-wrapper .block[data-v-4f64aac3]{width:100%;display:block}.edit-wrapper .submit[data-v-4f64aac3]{width:100px}",""])},"5fzN":function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a("4YfN"),r=i(o),s=a("lC5x"),l=i(s),n=a("J0Oq"),c=i(n),d=a("9rMa");t.default={components:{},props:["info"],data:function(){return{dialogTableVisible:!0,loading:!1,dialogImageUrl:"",fileList:this.info.picList,imageUrlArr:[this.info.goodsPic],dialogVisible:!1,imageUrl:""}},methods:{beforeAvatarUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("上传图片大小不能超过 5MB!"),t},handleAvatarSuccess:function(e,t){this.imageUrlArr.push(e.data)},handleRemove:function(e,t){var a=this;console.log(this.imageUrlArr);var i=e.response?e.response.data:e.url.substring(29);console.log(i),this.imageUrlArr.length<=1?this.imageUrlArr=[]:this.imageUrlArr.forEach(function(e,t){e===i&&a.imageUrlArr.splice(t,1)}),console.log(this.imageUrlArr)},handleExceed:function(e,t){this.$message.error("只能传一张图片")},close:function(){this.$emit("close")},updataForm:function(e){var t=this;this.loading=!0,this.$refs[e].validate(function(){var e=(0,c.default)(l.default.mark(function e(a){var i;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=15;break}return e.prev=1,i={id:t.info.id,goodsName:t.info.goodsName,goodsIntegral:t.info.goodsIntegral,goodsPic:t.imageUrlArr.join()},e.next=5,t.$store.dispatch("updateGoods",i);case 5:(t.shoppingStatus=1e4)&&t.$message({message:"修改成功",type:"success",duration:1500}),t.loading=!1,t.close(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.loading=!1;case 13:e.next=17;break;case 15:return console.log("error submit!!"),e.abrupt("return",!1);case 17:case"end":return e.stop()}},e,t,[[1,10]])}));return function(t){return e.apply(this,arguments)}}())}},computed:(0,r.default)({},(0,d.mapGetters)(["shoppingStatus"]))}},G4VO:function(e,t,a){var i=a("+6+L");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("5061386e",i,!0,{})},s5VJ:function(e,t,a){"use strict";function i(e){a("G4VO")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("5fzN"),r=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);var l=a("tqxg"),n=a("C7Lr"),c=i,d=n(r.a,l.a,!1,c,"data-v-4f64aac3",null);t.default=d.exports},tqxg:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"商品编辑",visible:e.dialogTableVisible,width:"80%",center:""},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.info,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{attrs:{type:"text"},model:{value:e.info.goodsName,callback:function(t){e.$set(e.info,"goodsName",t)},expression:"info.goodsName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品积分"}},[a("el-input",{model:{value:e.info.goodsIntegral,callback:function(t){e.$set(e.info,"goodsIntegral",t)},expression:"info.goodsIntegral"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品图片"}},[a("el-upload",{staticClass:"upload_img",attrs:{action:"http://vip.xyxzw.cn/api/imgUpload/","list-type":"picture-card","on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-remove":e.handleRemove,"file-list":e.fileList,limit:1,"on-exceed":e.handleExceed}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("el-form-item",[a("div",{staticStyle:{color:"#FE4B1C"}},[e._v("*提示：上传商品图片时，宽高比例最好为2:1")])]),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.updataForm("form")}}},[e._v("修改")])],1)],1)],1)},o=[],r={render:i,staticRenderFns:o};t.a=r}});