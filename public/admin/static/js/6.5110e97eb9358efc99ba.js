webpackJsonp([6,18],{"085r":function(e,t,a){var i=a("0NNx");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("3fe7e83c",i,!0,{})},"0NNx":function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".edit-wrapper .block[data-v-2d572b47]{width:100%;display:block}.edit-wrapper .submit[data-v-2d572b47]{width:100px}",""])},"0d7K":function(e,t,a){"use strict";function i(e){a("v3dR")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("xlE6"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);var s=a("7fWE"),l=a("C7Lr"),d=i,c=l(r.a,s.a,!1,d,"data-v-dd95aaba",null);t.default=c.exports},"5fzN":function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("4YfN"),r=i(n),o=a("lC5x"),s=i(o),l=a("J0Oq"),d=i(l),c=a("9rMa");t.default={components:{},props:["info"],data:function(){return{dialogTableVisible:!0,loading:!1,dialogImageUrl:"",fileList:this.info.picList,imageUrlArr:[this.info.goodsPic],dialogVisible:!1,imageUrl:""}},methods:{beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传头像图片大小不能超过 2MB!"),t},handleAvatarSuccess:function(e,t){this.imageUrlArr.push(e.data)},handleRemove:function(e,t){var a=this;console.log(this.imageUrlArr);var i=e.response?e.response.data:e.url.substring(29);console.log(i),this.imageUrlArr.length<=1?this.imageUrlArr=[]:this.imageUrlArr.forEach(function(e,t){e===i&&a.imageUrlArr.splice(t,1)}),console.log(this.imageUrlArr)},handleExceed:function(e,t){this.$message.error("只能传一张图片")},close:function(){this.$emit("close")},updataForm:function(e){var t=this;this.loading=!0,this.$refs[e].validate(function(){var e=(0,d.default)(s.default.mark(function e(a){var i;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=15;break}return e.prev=1,i={id:t.info.id,goodsName:t.info.goodsName,goodsIntegral:t.info.goodsIntegral,goodsPic:t.imageUrlArr.join()},e.next=5,t.$store.dispatch("updateGoods",i);case 5:(t.shoppingStatus=1e4)&&t.$message({message:"修改成功",type:"success"}),t.loading=!1,t.close(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.loading=!1;case 13:e.next=17;break;case 15:return console.log("error submit!!"),e.abrupt("return",!1);case 17:case"end":return e.stop()}},e,t,[[1,10]])}));return function(t){return e.apply(this,arguments)}}())}},computed:(0,r.default)({},(0,c.mapGetters)(["shoppingStatus"]))}},"6aHO":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"edit-wrapper",attrs:{title:"商品编辑",visible:e.dialogTableVisible,width:"80%",center:""},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.close}},[a("el-form",{ref:"form",staticClass:"form",attrs:{model:e.info,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{attrs:{type:"text"},model:{value:e.info.goodsName,callback:function(t){e.$set(e.info,"goodsName",t)},expression:"info.goodsName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品积分"}},[a("el-input",{model:{value:e.info.goodsIntegral,callback:function(t){e.$set(e.info,"goodsIntegral",t)},expression:"info.goodsIntegral"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品图片"}},[a("el-upload",{attrs:{action:"http://www.sai32m.cn:8080/api/imgUpload/","list-type":"picture-card","on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload,"on-remove":e.handleRemove,"file-list":e.fileList,limit:1,"on-exceed":e.handleExceed}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){e.updataForm("form")}}},[e._v("修改")])],1)],1)],1)},n=[],r={render:i,staticRenderFns:n};t.a=r},"7fWE":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"img-view",on:{click:e.bigImg}},[a("div",{staticClass:"img-layer"}),e._v(" "),a("div",{staticClass:"img"},[a("img",{attrs:{src:e.imgSrc}})])])])},n=[],r={render:i,staticRenderFns:n};t.a=r},"86KU":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",[a("div",{staticClass:"search"},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入任务名称","prefix-icon":"el-icon-search"},nativeOn:{keydown:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.getGoodsList(t):null}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd"},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:e.loading},on:{click:e.getGoodsList}},[e._v("搜索")]),e._v(" "),a("el-button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[a("router-link",{attrs:{to:{path:"/shopping/add"}}},[e._v("添加")])],1)],1),e._v(" "),a("div",{staticStyle:{height:"calc(100vh - 220px)"}},[a("el-table",{ref:"multipleTable",attrs:{data:e.shoppingList,"tooltip-effect":"dark",stripe:"",border:"",height:"100%"}},[a("el-table-column",{attrs:{type:"index",width:"55",align:"center","header-align":"center",index:e.increment,label:"序号"}}),e._v(" "),e._l(e.headerOptions,function(t,i){return t.hidden?e._e():a("el-table-column",{key:i,attrs:{"show-overflow-tooltip":"",label:t.label,prop:t.prop,"header-align":t.headerAlign,align:t.align,sortable:t.sort,"min-width":t.minWidth||150},scopedSlots:e._u([{key:"default",fn:function(t){return["goodsPic"==t.column.property?a("div",[a("img",{staticStyle:{width:"80px",height:"40px"},attrs:{src:"http://www.sai32m.cn:8080/api/"+t.row[t.column.property]},on:{click:function(t){e.clickImg(t)}}})]):a("div",[e._v(e._s(t.row[t.column.property]||"无"))])]}}])})}),e._v(" "),a("el-table-column",{attrs:{label:"操作","header-align":"center",align:"center",width:"235"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.edit(t)}}},[e._v("编辑")])]}}])})],2)],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.pageindex,"page-sizes":e.size_scoped,"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.shoppingTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),e.showImg?a("BigImg",{attrs:{imgSrc:e.imgSrc},on:{clickit:e.viewImg}}):e._e(),e._v(" "),e.editShow?a("EditComponent",{attrs:{info:e.shoppingInfo},on:{close:function(t){e.close(2)}}}):e._e()],1)},n=[],r={render:i,staticRenderFns:n};t.a=r},GWKb:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("4YfN"),r=i(n),o=a("lC5x"),s=i(o),l=a("J0Oq"),d=i(l),c=a("9rMa"),u=a("0d7K"),p=i(u),f=a("s5VJ"),g=i(f);t.default={components:{BigImg:p.default,EditComponent:g.default},data:function(){return{showImg:!1,imgSrc:"",keyword:"",detailShow:!1,editShow:!1,blogInfo:{},loading:!1,pageindex:1,pagesize:10,size_scoped:[10,20,30,40],headerOptions:[{label:"_id",prop:"_id",hidden:!0,headerAlign:"center",align:"center"},{label:"商品名称",prop:"goodsName",hidden:!1,headerAlign:"center",align:"center"},{label:"商品积分",prop:"goodsIntegral",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"商品图片",prop:"goodsPic",hidden:!1,headerAlign:"center",align:"center",minWidth:100},{label:"创建日期",prop:"createDate",hidden:!1,headerAlign:"center",align:"center",minWidth:100}],multipleSelection:[],dateValue:"",taskTypeArr:[{name:"所有任务",taskType:""},{name:"普通任务",taskType:1},{name:"高级任务",taskType:2}],taskType:"",shoppingInfo:""}},mounted:function(){this.getGoodsList()},methods:{clickImg:function(e){this.showImg=!0,this.imgSrc=e.currentTarget.src},viewImg:function(){this.showImg=!1},increment:function(e){return e+1+(this.pageindex-1)*this.pagesize},close:function(e){1==e?this.detailShow=!1:(this.editShow=!1,this.getGoodsList())},handleSizeChange:function(e){this.pagesize=e,this.getGoodsList()},handleCurrentChange:function(e){this.pageindex=e,this.getGoodsList()},getGoodsList:function(){var e=this;return(0,d.default)(s.default.mark(function t(){var a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={current:e.pageindex,size:e.pagesize},e.keyword&&(a.goodsName=e.keyword),e.dateValue&&(a.beginDate=e.dateValue[0],a.endDate=e.dateValue[1]),t.prev=3,t.next=6,e.$store.dispatch("getGoodsList",a);case 6:e.loading=!1,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),e.loading=!1;case 12:case"end":return t.stop()}},t,e,[[3,9]])}))()},getDetail:function(e){this.detailShow=!0,this.shoppingInfo=e.row},edit:function(e){if(this.editShow=!0,this.shoppingInfo=e.row,this.shoppingInfo.goodsPic){var t=[];t.push({url:"http://www.sai32m.cn:8080/api"+this.shoppingInfo.goodsPic}),this.shoppingInfo.picList=t}},releaseTask:function(e,t){var a=this,i="",n="";2==t?(i="是否发布任务？",n="发布成功"):(i="是否停止发布任务？",n="停止发布成功"),this.$confirm(i,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then((0,d.default)(s.default.mark(function i(){var r;return s.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return r={id:e.row.id,status:t},i.next=3,a.$store.dispatch("updateTask",r);case 3:(a.shoppingStatus=1e4)&&a.$message({message:n,type:"success"}),a.close();case 5:case"end":return i.stop()}},i,a)})))}},computed:(0,r.default)({},(0,c.mapGetters)(["shoppingList","shoppingTotal","shoppingStatus"]))}},JDeG:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"article[data-v-e4f6326e]{padding:20px}article .search[data-v-e4f6326e]{padding-bottom:20px}article .search .el-input[data-v-e4f6326e]{width:300px}article .pagination[data-v-e4f6326e]{text-align:right;padding:20px 0}article .tag[data-v-e4f6326e]{margin:5px}",""])},KCts:function(e,t,a){var i=a("JDeG");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("062d51f8",i,!0,{})},aXlE:function(e,t,a){"use strict";function i(e){a("KCts")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("GWKb"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);var s=a("86KU"),l=a("C7Lr"),d=i,c=l(r.a,s.a,!1,d,"data-v-e4f6326e",null);t.default=c.exports},coVg:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".fade-enter-activ [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transition:all .2s linear;transition:all .2s linear;-webkit-transform:translate3D(0,0,0);-ms-transform:translate3D(0,0,0);transform:translate3D(0,0,0)}.fade-enter [data-v-dd95aaba],.fade-leave-active[data-v-dd95aaba]{-webkit-transform:translate3D(100%,0,0);-ms-transform:translate3D(100%,0,0);transform:translate3D(100%,0,0)}.img-view[data-v-dd95aaba]{position:fixed;z-index:9999;top:0;left:0;background:rgba(0,0,0,.7);width:100%;height:100%;overflow:hidden}.img-view .img img[data-v-dd95aaba]{max-width:100%;position:absolute;left:0;right:0;top:0;bottom:0;max-height:100%;margin:auto;z-index:1000}",""])},s5VJ:function(e,t,a){"use strict";function i(e){a("085r")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("5fzN"),r=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);var s=a("6aHO"),l=a("C7Lr"),d=i,c=l(r.a,s.a,!1,d,"data-v-2d572b47",null);t.default=c.exports},v3dR:function(e,t,a){var i=a("coVg");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("FIqI")("13ed8fd6",i,!0,{})},xlE6:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["imgSrc"],methods:{bigImg:function(){this.$emit("clickit")}}}}});