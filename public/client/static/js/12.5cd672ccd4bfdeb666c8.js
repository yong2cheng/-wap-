webpackJsonp([12],{"3iMu":function(t,e,o){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o("lC5x"),i=a(n),s=o("J0Oq"),r=a(s),d=o("4YfN"),c=a(d),p=o("9rMa");e.default={data:function(){return{pageindex:1,keyword:""}},components:{},created:function(){this.getBecomeVIPAwardsList()},mounted:function(){var t=this;window.addEventListener("scroll",function(){(document.documentElement.scrollTop||document.body.scrollTop)+(document.documentElement.clientHeight||document.body.clientHeight)>=(document.documentElement.scrollHeight||document.body.scrollHeight)&&t.taskLoadingBol&&(t.pageindex++,t.getBecomeVIPAwardsList())})},computed:(0,c.default)({},(0,p.mapGetters)(["dataList","taskList","taskLoadingMore","taskLoadingBol","userInfo"])),methods:{getBecomeVIPAwardsList:function(){var t=this;return(0,r.default)(i.default.mark(function e(){var o;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o={current:t.pageindex,vipType:t.userInfo.vipType},console.log(o),e.next=4,t.$store.dispatch("getBecomeVIPAwardsList",o);case 4:case"end":return e.stop()}},e,t)}))()}}}},Erpp:function(t,e,o){var a=o("MoHd");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("FIqI")("57aacff2",a,!0,{})},MoHd:function(t,e,o){e=t.exports=o("UTlt")(!1),e.push([t.i,".shopping_count[data-v-fc265d36]{width:100%;margin-top:70px}.shopping_count .shopping_img span[data-v-fc265d36]{display:block;font-size:.35rem;font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:10px 0}.shopping_count ul li[data-v-fc265d36]{background:#fff;margin:10px 0}.shopping_count .shopping_img em[data-v-fc265d36]{color:#fe4b1c;font-size:.3rem}.shopping_img[data-v-fc265d36]{width:50%;float:left}.shopping_img img[data-v-fc265d36]{width:90%;height:80px;margin:10px 5%}.shopping_name[data-v-fc265d36]{width:calc(50% - 60px)}.shopping_oper[data-v-fc265d36]{float:right;width:50px;margin:35px 5px}.shopping_oper span[data-v-fc265d36]{display:block}.shopping_oper em[data-v-fc265d36]{padding:5px;border:1px solid #fe4b1c;border-radius:5px;background:#fe4b1c;color:#fff}.opertion_but[data-v-fc265d36]{padding-bottom:10px}.opertion_but button[data-v-fc265d36]{display:block;margin:0 auto;background:#fe4b1c;border:1px solid #fe4b1c;color:#fff}",""])},"RE/t":function(t,e,o){"use strict";function a(t){o("Erpp")}Object.defineProperty(e,"__esModule",{value:!0});var n=o("3iMu"),i=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);var r=o("TYU4"),d=o("C7Lr"),c=a,p=d(i.a,r.a,!1,c,"data-v-fc265d36",null);e.default=p.exports},TYU4:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"integral_wrapper"},[a("div",{staticClass:"new-header"},[a("div",{staticClass:"container cl"},[a("img",{staticStyle:{float:"left"},attrs:{src:o("Xs75")},on:{click:function(e){t.$router.back(-1)}}}),t._v(" "),a("div",{staticClass:"container_detail"},[t._v("会员奖品")])])]),t._v(" "),a("div",{staticClass:"shopping_count"},[t.taskList.length>0?a("ul",{staticClass:"cf"},t._l(t.taskList,function(e,o){return a("li",{key:o},[a("div",{staticClass:"cf"},[a("p",{staticClass:"shopping_img"},[a("img",{attrs:{src:"http://vip.31d461.cn/api/"+e.goodsPic,alt:""}})]),t._v(" "),a("p",{staticClass:"shopping_img shopping_name cf"},[a("span",[t._v(t._s(e.goodsName))]),a("em",[t._v(t._s(e.goodsIntegral)+"积分")])]),t._v(" "),a("p",{staticClass:"shopping_oper"},[a("span",[t._v(t._s(e.statusName))])])]),t._v(" "),a("p",{staticStyle:{margin:"10px 2.5%"}},[t._v("收货地址："+t._s(e.address))]),t._v(" "),a("p",{staticStyle:{margin:"10px 2.5%"}},[t._v(t._s(e.receiver)+"   "+t._s(e.telphone))])])})):a("NoneData")],1)]),t._v(" "),a("Loading",{directives:[{name:"show",rawName:"v-show",value:t.taskLoadingMore,expression:"taskLoadingMore"}]})],1)},n=[],i={render:a,staticRenderFns:n};e.a=i},Xs75:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVRYR+2VT4hOYRTGf4/8T5OSKEWpERlKSVKklLFRsprZyspCsVIkJRZSms2QkpKUrGY3WShkoVFWYzsTDTXCwkpNPTrTHb0+937f+5nvm0vNWd3u+55zfuc55/SKmk0152cR4P9UwPZK4DpwS9KH+cxR2wrY3gM8BnqBnZLeLQiA7aXAReASEN9hCwNgO6qNqqP61LoLYDtadAa4CUTfG617ALY3Ag+BI016PAx8Br4Dn4D3wCtJzp2L0iG0PQDcBtbmBkruTQJ3gTuSvrXy/w3AdiS8B5xs5Zhx/hW4EoVImqm6/wvAdkgdkof0nbS3wHFJU2VBU4BRoL+TmZNYoUa/pDeN8VOA+D4L3ACWdwHkY6yxpOk09h9DaHtHsfO7ugDxXNLhpgBxaHtZMUAXgCUdBjkhaWQuZtO3wPYB4BGwpQKiT9J48ThtBrYBB4FjwO4Kn3FJfVkAhRpr4tUDTpcEnAUoS2R7L3AeGCw53ydpLP5nv4a2o6oHwPokYCXA3B3bocgTYEPid1XS5bYACjXWAfdjr4tgLQEKv63AC2BT4fdS0qG2AZKqTgFDwP6qFjTKbns78BroASYkBVR+C0oCxrpOS/qSuyW2YwWfAT8krZoXQG7SEvBrwDlJq+sCWAGMSZpd0+wt+NuKK1b0qKSntQGkULUosAjwTynwE1LblSFW7OQ5AAAAAElFTkSuQmCC"}});