webpackJsonp([10],{"3iMu":function(t,e,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a("lC5x"),s=o(n),i=a("J0Oq"),r=o(i),p=a("4YfN"),c=o(p),d=a("9rMa");e.default={data:function(){return{pageindex:1,keyword:""}},components:{},created:function(){this.getBecomeVIPAwardsList()},mounted:function(){var t=this;window.addEventListener("scroll",function(){(document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)>=(document.documentElement.scrollHeight||document.body.scrollHeight)&&t.taskLoadingBol&&(t.pageindex++,t.getBecomeVIPAwardsList())})},computed:(0,c.default)({},(0,d.mapGetters)(["dataList","taskList","taskLoadingMore","taskLoadingBol","userInfo"])),methods:{getBecomeVIPAwardsList:function(){var t=this;return(0,r.default)(s.default.mark(function e(){var a;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={current:t.pageindex,vipType:t.userInfo.vipType},console.log(a),e.next=4,t.$store.dispatch("getBecomeVIPAwardsList",a);case 4:case"end":return e.stop()}},e,t)}))()}}}},"5KtF":function(t,e,a){var o=a("ppPa");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("FIqI")("7a487b3e",o,!0,{})},"RE/t":function(t,e,a){"use strict";function o(t){a("5KtF")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("3iMu"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);var r=a("mDqp"),p=a("C7Lr"),c=o,d=p(s.a,r.a,!1,c,"data-v-b743e756",null);e.default=d.exports},Xs75:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVRYR+2VT4hOYRTGf4/8T5OSKEWpERlKSVKklLFRsprZyspCsVIkJRZSms2QkpKUrGY3WShkoVFWYzsTDTXCwkpNPTrTHb0+937f+5nvm0vNWd3u+55zfuc55/SKmk0152cR4P9UwPZK4DpwS9KH+cxR2wrY3gM8BnqBnZLeLQiA7aXAReASEN9hCwNgO6qNqqP61LoLYDtadAa4CUTfG617ALY3Ag+BI016PAx8Br4Dn4D3wCtJzp2L0iG0PQDcBtbmBkruTQJ3gTuSvrXy/w3AdiS8B5xs5Zhx/hW4EoVImqm6/wvAdkgdkof0nbS3wHFJU2VBU4BRoL+TmZNYoUa/pDeN8VOA+D4L3ACWdwHkY6yxpOk09h9DaHtHsfO7ugDxXNLhpgBxaHtZMUAXgCUdBjkhaWQuZtO3wPYB4BGwpQKiT9J48ThtBrYBB4FjwO4Kn3FJfVkAhRpr4tUDTpcEnAUoS2R7L3AeGCw53ydpLP5nv4a2o6oHwPokYCXA3B3bocgTYEPid1XS5bYACjXWAfdjr4tgLQEKv63AC2BT4fdS0qG2AZKqTgFDwP6qFjTKbns78BroASYkBVR+C0oCxrpOS/qSuyW2YwWfAT8krZoXQG7SEvBrwDlJq+sCWAGMSZpd0+wt+NuKK1b0qKSntQGkULUosAjwTynwE1LblSFW7OQ5AAAAAElFTkSuQmCC"},mDqp:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"integral_wrapper"},[o("div",{staticClass:"new-header"},[o("div",{staticClass:"container cl"},[o("img",{staticStyle:{float:"left"},attrs:{src:a("Xs75")},on:{click:function(e){t.$router.back(-1)}}}),t._v(" "),o("div",{staticClass:"container_detail"},[t._v("会员奖品")])])]),t._v(" "),o("div",{staticClass:"shopping_count"},[t.taskList.length>0?o("ul",{staticClass:"cf"},t._l(t.taskList,function(e,a){return o("li",{key:a},[o("div",{staticClass:"cf"},[o("p",{staticClass:"shopping_img"},[o("img",{attrs:{src:"http://vip.31d461.cn/api/"+e.goodsPic,alt:""}})]),t._v(" "),o("p",{staticClass:"shopping_img shopping_name cf"},[o("span",[t._v(t._s(e.goodsName))]),o("em",[t._v(t._s(e.goodsIntegral)+"积分")])]),t._v(" "),o("p",{staticClass:"shopping_oper"},[o("span",[t._v(t._s(e.statusName))])])]),t._v(" "),o("p",{staticStyle:{margin:"10px 2.5%"}},[t._v("收货地址："+t._s(e.address))]),t._v(" "),o("p",{staticStyle:{margin:"10px 2.5%"}},[t._v(t._s(e.receiver)+"   "+t._s(e.telphone))])])})):o("NoneData")],1)]),t._v(" "),o("Loading",{directives:[{name:"show",rawName:"v-show",value:t.taskLoadingMore,expression:"taskLoadingMore"}]})],1)},n=[],s={render:o,staticRenderFns:n};e.a=s},ppPa:function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".shopping_count[data-v-b743e756]{width:100%;margin-top:70px}.shopping_count .shopping_img span[data-v-b743e756]{display:block;font-size:.35rem;font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:10px 0}.shopping_count ul li[data-v-b743e756]{background:#fff;margin:10px 0}.shopping_count .shopping_img em[data-v-b743e756]{color:#fe4b1c;font-size:.3rem}.shopping_img[data-v-b743e756]{width:50%;float:left}.shopping_img img[data-v-b743e756]{width:90%;height:80px;margin:10px 5%}.shopping_name[data-v-b743e756]{width:calc(50% - 60px)}.shopping_oper[data-v-b743e756]{float:right;width:50px;margin:35px 5px}.shopping_oper span[data-v-b743e756]{display:block}.shopping_oper em[data-v-b743e756]{padding:5px;border:1px solid #fe4b1c;border-radius:5px;background:#fe4b1c;color:#fff}.opertion_but[data-v-b743e756]{padding-bottom:10px}.opertion_but button[data-v-b743e756]{display:block;margin:0 auto;background:#fe4b1c;border:1px solid #fe4b1c;color:#fff}",""])}});