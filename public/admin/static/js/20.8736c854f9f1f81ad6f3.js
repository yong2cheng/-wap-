webpackJsonp([20],{"+vuY":function(e,t,i){t=e.exports=i("UTlt")(!1),t.push([e.i,".edit-wrapper .block[data-v-7d650c68]{width:100%;display:block}.edit-wrapper .submit[data-v-7d650c68]{width:100px}",""])},"5fzN":function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i("4YfN"),r=a(o),s=i("lC5x"),l=a(s),n=i("J0Oq"),c=a(n),d=i("9rMa");t.default={components:{},props:["info"],data:function(){return{dialogTableVisible:!0,loading:!1,dialogImageUrl:"",fileList:this.info.picList,imageUrlArr:[this.info.goodsPic],dialogVisible:!1,imageUrl:""}},methods:{beforeAvatarUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("上传图片大小不能超过 5MB!"),t},handleAvatarSuccess:function(e,t){this.imageUrlArr.push(e.data)},handleRemove:function(e,t){var i=this;console.log(this.imageUrlArr);var a=e.response?e.response.data:e.url.substring(29);console.log(a),this.imageUrlArr.length<=1?this.imageUrlArr=[]:this.imageUrlArr.forEach(function(e,t){e===a&&i.imageUrlArr.splice(t,1)}),console.log(this.imageUrlArr)},handleExceed:function(e,t){this.$message.error("只能传一张图片")},close:function(){this.$emit("close")},updataForm:function(e){var t=this;this.loading=!0,this.$refs[e].validate(function(){var e=(0,c.default)(l.default.mark(function e(i){var a;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=15;break}return e.prev=1,a={id:t.info.id,goodsName:t.info.goodsName,goodsIntegral:t.info.goodsIntegral,goodsPic:t.imageUrlArr.join()},e.next=5,t.$store.dispatch("updateGoods",a);case 5:(t.shoppingStatus=1e4)&&t.$message({message:"修改成功",type:"success",duration:1500}),t.loading=!1,t.close(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.loading=!1;case 13:e.next=17;break;case 15:return console.log("error submit!!"),e.abrupt("return",!1);case 17:case"end":return e.stop()}},e,t,[[1,10]])}));return function(t){return e.apply(this,arguments)}}())}},computed:(0,r.default)({},(0,d.mapGetters)(["shoppingStatus"]))}},kvyz:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"商品编辑",visible:e.dialogTableVisible,width:"80%",center:""},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.close}},[i("el-form",{ref:"form",staticClass:"form",attrs:{model:e.info,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"商品名称"}},[i("el-input",{attrs:{type:"text"},model:{value:e.info.goodsName,callback:function(t){e.$set(e.info,"goodsName",t)},expression:"info.goodsName"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"商品积分"}},[i("el-input",{model:{value:e.info.goodsIntegral,callback:function(t){e.$set(e.info,"goodsIntegral",t)},expression:"info.goodsIntegral"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"商品图片"}},[i("el-upload",{staticClass:"upload_img",attrs:{action:"http://vip.xyxzw.cn/api/imgUpload/","list-type":"picture-card","on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-remove":e.handleRemove,"file-list":e.fileList,limit:1,"on-exceed":e.handleExceed}},[i("i",{staticClass:"el-icon-plus"})]),e._v(" "),i("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),i("el-form-item",[i("div",{staticStyle:{color:"#FE4B1C"}},[e._v("*提示：上传商品图片时，宽高比例最好为2:1")])]),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.updataForm("form")}}},[e._v("修改")])],1)],1)],1)},o=[],r={render:a,staticRenderFns:o};t.a=r},s5VJ:function(e,t,i){"use strict";function a(e){i("t2lq")}Object.defineProperty(t,"__esModule",{value:!0});var o=i("5fzN"),r=i.n(o);for(var s in o)"default"!==s&&function(e){i.d(t,e,function(){return o[e]})}(s);var l=i("kvyz"),n=i("C7Lr"),c=a,d=n(r.a,l.a,!1,c,"data-v-7d650c68",null);t.default=d.exports},t2lq:function(e,t,i){var a=i("+vuY");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i("FIqI")("1f07e6e8",a,!0,{})}});