webpackJsonp([21],{"58Nc":function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"article[data-v-d7d7fa50]{text-align:center;padding:0 100px}article h2[data-v-d7d7fa50]{text-align:center;line-height:80px;color:#666}article .block[data-v-d7d7fa50]{width:100%;display:block}article .left-item[data-v-d7d7fa50]{text-align:left}article .submit[data-v-d7d7fa50]{width:100px}",""])},Jjvy:function(e,t,a){"use strict";function r(e){a("y6OI")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("NDuF"),i=a.n(o);for(var l in o)"default"!==l&&function(e){a.d(t,e,function(){return o[e]})}(l);var n=a("Wwyf"),s=a("C7Lr"),c=r,d=s(i.a,n.a,!1,c,"data-v-d7d7fa50",null);t.default=d.exports},NDuF:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a("4YfN"),i=r(o),l=a("lC5x"),n=r(l),s=a("J0Oq"),c=r(s),d=a("9rMa");t.default={components:{},data:function(){return{info:{goodsName:"",goodsIntegral:"",goodsPic:""},fileList:[],loading:!1,dialogImageUrl:"",dialogVisible:!1,imageUrlArr:[]}},methods:{beforeAvatarUpload:function(e){var t=e.size/1024/1024<5;return t||this.$message.error("上传图片大小不能超过 5MB!"),t},handleAvatarSuccess:function(e,t){this.imageUrlArr.push(e.data)},handleRemove:function(e,t){var a=this,r=e.response.data;console.log(r),this.imageUrlArr.length<=1?this.imageUrlArr=[]:this.imageUrlArr.forEach(function(e,t){e===r&&a.imageUrlArr.splice(t,1)}),console.log(this.imageUrlArr)},handleExceed:function(e,t){this.$message.error("只能传一张图片")},submitForm:function(e){var t=this;this.loading=!0,this.$refs[e].validate(function(){var e=(0,c.default)(n.default.mark(function e(a){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=16;break}return e.prev=1,console.log(t.info),t.info.goodsPic=t.imageUrlArr.join(),e.next=6,t.$store.dispatch("addGoods",t.info);case 6:t.loading=!1,t.$message({message:"新增成功",type:"success",duration:1500}),t.$router.push("/shopping/list"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t.loading=!1;case 14:e.next=19;break;case 16:return console.log("error submit!!"),t.loading=!1,e.abrupt("return",!1);case 19:case"end":return e.stop()}},e,t,[[1,11]])}));return function(t){return e.apply(this,arguments)}}())}},computed:(0,i.default)({},(0,d.mapGetters)(["blogTypes","sources"]))}},Wwyf:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("h2",[e._v("新增商品")]),e._v(" "),a("div",{staticClass:"box"},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.info,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{attrs:{type:"text"},model:{value:e.info.goodsName,callback:function(t){e.$set(e.info,"goodsName",t)},expression:"info.goodsName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品积分"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.info.goodsIntegral,callback:function(t){e.$set(e.info,"goodsIntegral",t)},expression:"info.goodsIntegral"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品图片"}},[a("el-upload",{staticClass:"upload_img",attrs:{action:"http://vip.31d461.cn/api/imgUpload/","list-type":"picture-card","on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-remove":e.handleRemove,limit:1,"on-exceed":e.handleExceed}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("el-form-item",[a("div",{staticStyle:{color:"#FE4B1C"}},[e._v("*提示：上传商品图片时，宽高比例最好为2:1")])]),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.submitForm("form")}}},[e._v("立即创建")])],1)],1)],1)])},o=[],i={render:r,staticRenderFns:o};t.a=i},y6OI:function(e,t,a){var r=a("58Nc");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("FIqI")("2269b914",r,!0,{})}});