webpackJsonp([14],{"/9YX":function(e,t,a){"use strict";function r(e){a("1dZi")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("hPGd"),n=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);var i=a("Yyrz"),c=a("C7Lr"),d=r,l=c(n.a,i.a,!1,d,"data-v-de570a16",null);t.default=l.exports},"1dZi":function(e,t,a){var r=a("EJa/");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("FIqI")("b0877f68",r,!0,{})},"EJa/":function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".password_count[data-v-de570a16]{background:#fff}.password_form[data-v-de570a16]{width:80%;margin:0 auto;padding:20px 0}.password_but[data-v-de570a16]{width:80%;margin:0 auto}.password_but button[data-v-de570a16]{width:100%;background:#fe4b1c;color:#fff}",""])},Xs75:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVRYR+2VT4hOYRTGf4/8T5OSKEWpERlKSVKklLFRsprZyspCsVIkJRZSms2QkpKUrGY3WShkoVFWYzsTDTXCwkpNPTrTHb0+937f+5nvm0vNWd3u+55zfuc55/SKmk0152cR4P9UwPZK4DpwS9KH+cxR2wrY3gM8BnqBnZLeLQiA7aXAReASEN9hCwNgO6qNqqP61LoLYDtadAa4CUTfG617ALY3Ag+BI016PAx8Br4Dn4D3wCtJzp2L0iG0PQDcBtbmBkruTQJ3gTuSvrXy/w3AdiS8B5xs5Zhx/hW4EoVImqm6/wvAdkgdkof0nbS3wHFJU2VBU4BRoL+TmZNYoUa/pDeN8VOA+D4L3ACWdwHkY6yxpOk09h9DaHtHsfO7ugDxXNLhpgBxaHtZMUAXgCUdBjkhaWQuZtO3wPYB4BGwpQKiT9J48ThtBrYBB4FjwO4Kn3FJfVkAhRpr4tUDTpcEnAUoS2R7L3AeGCw53ydpLP5nv4a2o6oHwPokYCXA3B3bocgTYEPid1XS5bYACjXWAfdjr4tgLQEKv63AC2BT4fdS0qG2AZKqTgFDwP6qFjTKbns78BroASYkBVR+C0oCxrpOS/qSuyW2YwWfAT8krZoXQG7SEvBrwDlJq+sCWAGMSZpd0+wt+NuKK1b0qKSntQGkULUosAjwTynwE1LblSFW7OQ5AAAAAElFTkSuQmCC"},Yyrz:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"integral_wrapper"},[r("div",{staticClass:"new-header"},[r("div",{staticClass:"container cl"},[r("img",{staticStyle:{float:"left"},attrs:{src:a("Xs75")},on:{click:function(t){e.$router.back(-1)}}}),e._v(" "),r("div",{staticClass:"container_detail"},[e._v("新增收货地址")])])]),e._v(" "),r("div",{staticClass:"wrapper_count password_count"},[r("div",{staticClass:"password_form"},[r("el-form",{ref:"form",staticClass:"form",attrs:{model:e.info,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"收货人",prop:"receiver"}},[r("el-input",{model:{value:e.info.receiver,callback:function(t){e.$set(e.info,"receiver",t)},expression:"info.receiver"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"手机号",prop:"telphone"}},[r("el-input",{model:{value:e.info.telphone,callback:function(t){e.$set(e.info,"telphone",t)},expression:"info.telphone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"省",prop:"pCode"}},[r("el-select",{staticClass:"block",attrs:{placeholder:"请选择所在省份"},on:{change:function(t){e.gettData(2)}},model:{value:e.info.pCode,callback:function(t){e.$set(e.info,"pCode",t)},expression:"info.pCode"}},e._l(e.provinceList,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"市",prop:"cCode"}},[r("el-select",{staticClass:"block",attrs:{placeholder:"请选择所在市"},on:{change:function(t){e.gettData(3)}},model:{value:e.info.cCode,callback:function(t){e.$set(e.info,"cCode",t)},expression:"info.cCode"}},e._l(e.cityList,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"区",prop:"aCode"}},[r("el-select",{staticClass:"block",attrs:{placeholder:"请选择所在区"},model:{value:e.info.aCode,callback:function(t){e.$set(e.info,"aCode",t)},expression:"info.aCode"}},e._l(e.areaList,function(e,t){return r("el-option",{key:t,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"详细地址"}},[r("el-input",{attrs:{type:"textarea",placeholder:"如道路，门牌号，小区，单元室等"},model:{value:e.info.detailAddress,callback:function(t){e.$set(e.info,"detailAddress",t)},expression:"info.detailAddress"}})],1)],1)],1)]),e._v(" "),r("div",{staticClass:"password_but"},[r("button",{staticClass:"commom_button",attrs:{loading:e.loading},on:{click:function(t){e.updataForm()}}},[e._v("新增")])])])])},o=[],n={render:r,staticRenderFns:o};t.a=n},hPGd:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a("lC5x"),n=r(o),s=a("J0Oq"),i=r(s),c=a("4YfN"),d=r(c),l=a("9rMa");t.default={data:function(){return{info:{receiver:"",telphone:"",pCode:"",cCode:"",aCode:"",detailAddress:"",mergeAddress:""},loading:!1}},components:{},created:function(){this.getProvinceCity({level:1})},mounted:function(){},computed:(0,d.default)({},(0,l.mapGetters)(["provinceList","cityList","areaList"])),methods:{gettData:function(e){2==e&&(this.info.cCode="",this.info.aCode="",this.getProvinceCity({level:2,code:this.info.pCode})),3==e&&(this.info.aCode="",this.getProvinceCity({level:3,code:this.info.cCode}))},getProvinceCity:function(e){var t=this;return(0,i.default)(n.default.mark(function a(){return n.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("getProvinceCity",e);case 2:case"end":return a.stop()}},a,t)}))()},updataForm:function(){var e=this;return(0,i.default)(n.default.mark(function t(){var a,r,o;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.info.receiver){t.next=3;break}return e.$message({message:"请填写收货人",type:"error"}),t.abrupt("return");case 3:if(e.info.telphone){t.next=6;break}return e.$message({message:"请填写电话号码",type:"error"}),t.abrupt("return");case 6:if(e.info.pCode){t.next=9;break}return e.$message({message:"请选择所在省份",type:"error"}),t.abrupt("return");case 9:if(e.info.cCode){t.next=12;break}return e.$message({message:"请填选择所在市",type:"error"}),t.abrupt("return");case 12:if(e.info.aCode){t.next=15;break}return e.$message({message:"请选择所在区",type:"error"}),t.abrupt("return");case 15:if(e.info.detailAddress){t.next=18;break}return e.$message({message:"请填写详细地址",type:"error"}),t.abrupt("return");case 18:a="",r="",o="",e.provinceList.forEach(function(t){e.info.pCode==t.code&&(a=t.name)}),e.cityList.forEach(function(t){e.info.cCode==t.code&&(r=t.name)}),e.areaList.forEach(function(t){e.info.aCode==t.code&&(o=t.name)}),a&&r&&o&&(e.info.mergeAddress=a+r+o+e.info.detailAddress),e.$confirm("请确认所填信息，一经保存不可修改！！！","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0,customClass:"message_width"}).then((0,i.default)(n.default.mark(function t(){return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$store.dispatch("addAddress",e.info);case 3:e.$message({message:"新增成功",type:"success"}),e.info={receiver:"",telphone:"",pCode:"",cCode:"",aCode:"",detailAddress:"",mergeAddress:""},e.loading=!1,e.$router.back(-1);case 7:case"end":return t.stop()}},t,e)})));case 24:case"end":return t.stop()}},t,e)}))()}}}}});