webpackJsonp([16],{FkRm:function(t,e,n){e=t.exports=n("UTlt")(!1),e.push([t.i,".shopping_count[data-v-79b48d9e]{width:100%;margin-top:70px}.shopping_count .shopping_img span[data-v-79b48d9e]{display:block;font-size:.35rem;font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:10px 0}.shopping_count ul li[data-v-79b48d9e]{background:#fff;margin:10px 0}.shopping_count .shopping_img em[data-v-79b48d9e]{color:#fe4b1c;font-size:.3rem}.shopping_img[data-v-79b48d9e]{width:50%;float:left}.shopping_img img[data-v-79b48d9e]{width:90%;height:80px;margin:10px 5%}.shopping_name[data-v-79b48d9e]{width:calc(50% - 60px)}.shopping_oper[data-v-79b48d9e]{float:right;width:36px;padding:5px;margin:35px 5px;border:1px solid #fe4b1c;border-radius:5px;background:#fe4b1c;color:#fff}",""])},"T/HP":function(t,e,n){var a=n("FkRm");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("FIqI")("4374e805",a,!0,{})},Xs75:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVRYR+2VT4hOYRTGf4/8T5OSKEWpERlKSVKklLFRsprZyspCsVIkJRZSms2QkpKUrGY3WShkoVFWYzsTDTXCwkpNPTrTHb0+937f+5nvm0vNWd3u+55zfuc55/SKmk0152cR4P9UwPZK4DpwS9KH+cxR2wrY3gM8BnqBnZLeLQiA7aXAReASEN9hCwNgO6qNqqP61LoLYDtadAa4CUTfG617ALY3Ag+BI016PAx8Br4Dn4D3wCtJzp2L0iG0PQDcBtbmBkruTQJ3gTuSvrXy/w3AdiS8B5xs5Zhx/hW4EoVImqm6/wvAdkgdkof0nbS3wHFJU2VBU4BRoL+TmZNYoUa/pDeN8VOA+D4L3ACWdwHkY6yxpOk09h9DaHtHsfO7ugDxXNLhpgBxaHtZMUAXgCUdBjkhaWQuZtO3wPYB4BGwpQKiT9J48ThtBrYBB4FjwO4Kn3FJfVkAhRpr4tUDTpcEnAUoS2R7L3AeGCw53ydpLP5nv4a2o6oHwPokYCXA3B3bocgTYEPid1XS5bYACjXWAfdjr4tgLQEKv63AC2BT4fdS0qG2AZKqTgFDwP6qFjTKbns78BroASYkBVR+C0oCxrpOS/qSuyW2YwWfAT8krZoXQG7SEvBrwDlJq+sCWAGMSZpd0+wt+NuKK1b0qKSntQGkULUosAjwTynwE1LblSFW7OQ5AAAAAElFTkSuQmCC"},YR0V:function(t,e,n){"use strict";function a(t){n("T/HP")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("uaig"),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var r=n("m6xO"),c=n("C7Lr"),d=a,p=c(s.a,r.a,!1,d,"data-v-79b48d9e",null);e.default=p.exports},m6xO:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"integral_wrapper"},[a("div",{staticClass:"new-header"},[a("div",{staticClass:"container cl"},[a("img",{staticStyle:{float:"left"},attrs:{src:n("Xs75")},on:{click:function(e){t.$router.back(-1)}}}),t._v(" "),a("div",{staticClass:"container_detail"},[t._v("积分商城")])])]),t._v(" "),a("div",{staticClass:"shopping_count"},[t.taskList.length>0?a("ul",{staticClass:"cf"},t._l(t.taskList,function(e,n){return a("li",{key:n,staticClass:"cf"},[a("p",{staticClass:"shopping_img"},[a("img",{attrs:{src:"http://vip.31d461.cn:8080/api/"+e.goodsPic,alt:""}})]),t._v(" "),a("p",{staticClass:"shopping_img shopping_name cf"},[a("span",[t._v(t._s(e.goodsName))]),a("em",[t._v(t._s(e.goodsIntegral)+"积分")])]),t._v(" "),a("p",{staticClass:"shopping_oper",on:{click:function(n){t.exchange(e)}}},[t._v("兑换")])])})):a("NoneData")],1)]),t._v(" "),a("Loading",{directives:[{name:"show",rawName:"v-show",value:t.taskLoadingMore,expression:"taskLoadingMore"}]})],1)},o=[],s={render:a,staticRenderFns:o};e.a=s},uaig:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n("lC5x"),s=a(o),i=n("J0Oq"),r=a(i),c=n("4YfN"),d=a(c),p=n("9rMa");e.default={data:function(){return{pageindex:1,keyword:""}},components:{},created:function(){this.getGoodsList()},mounted:function(){var t=this;window.addEventListener("scroll",function(){(document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)>=(document.documentElement.scrollHeight||document.body.scrollHeight)&&t.taskLoadingBol&&(t.pageindex++,t.getGoodsList())})},computed:(0,d.default)({},(0,p.mapGetters)(["dataList","taskList","taskLoadingMore","taskLoadingBol"])),methods:{getGoodsList:function(){var t=this;return(0,r.default)(s.default.mark(function e(){var n;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={current:t.pageindex},e.next=3,t.$store.dispatch("getGoodsList",n);case 3:case"end":return e.stop()}},e,t)}))()},exchange:function(t){var e=this;return(0,r.default)(s.default.mark(function n(){return s.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$store.dispatch("getAddress");case 2:e.dataList?e.exchangeShoopping(t):e.$message({message:"请先收获新增地址！！！",type:"info"});case 3:case"end":return n.stop()}},n,e)}))()},exchangeShoopping:function(t){var e=this;this.$confirm("是否兑换该商品","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0,customClass:"message_width"}).then((0,r.default)(s.default.mark(function n(){return s.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,e.$store.dispatch("exchangeShoopping",{goodsId:t.id});case 3:e.$message({message:"兑换成功",type:"success"}),e.loading=!1,e.getGoodsList();case 6:case"end":return n.stop()}},n,e)})))}}}}});