webpackJsonp([3],{"542L":function(t,e,n){e=t.exports=n("UTlt")(!1),e.push([t.i,"",""])},"8/rc":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},a=[],i={render:o,staticRenderFns:a};e.a=i},"8fon":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"new-header"},[o("div",{staticClass:"container cl"},[o("img",{staticStyle:{float:"left"},attrs:{src:n("Xs75")},on:{click:function(e){t.$router.back(-1)}}}),t._v(" "),o("div",{staticClass:"container_detail"},[t._v("成为VIP")])])]),t._v(" "),t.userInfo.vipType?o("div",{staticClass:"wrapper_count have_vip_count"},[o("img",{attrs:{src:n("lTkO"),alt:""}}),t._v(" "),o("div",{staticClass:"have_vip_but"},[o("button",{staticClass:"color_org"},[t._v("已成为"+t._s(t.userInfo.vipTypeName)+"VIP")])])]):o("div",{staticClass:"shopping_count"},[t.dataList.length>0?o("ul",{staticClass:"cf"},t._l(t.dataList,function(e,n){return o("li",{key:n},[o("div",{staticClass:"cf"},[o("p",{staticClass:"shopping_img"},[o("img",{attrs:{src:"http://vip.31d461.cn:8080/api/"+e.goodsPic,alt:""}})]),t._v(" "),o("p",{staticClass:"shopping_img shopping_name cf"},[o("span",[t._v(t._s(e.goodsName))]),o("em",[t._v(t._s(e.goodsIntegral)+"积分")])]),t._v(" "),o("p",{staticClass:"shopping_oper"},[o("span",[t._v(t._s(e.vipTypeName))])])]),t._v(" "),1==e.vipType?o("p",{staticClass:"opertion_but"},[o("el-button",{staticClass:"commom_button",attrs:{loading:t.loading1},on:{click:function(n){t.loading1=!0,t.openMembership(e)}}},[t._v("成为普通会员")])],1):t._e(),t._v(" "),2==e.vipType?o("p",{staticClass:"opertion_but"},[o("el-button",{staticClass:"commom_button",attrs:{loading:t.loading2},on:{click:function(n){t.loading2=!0,t.oopenMembership(e)}}},[t._v("成为高级会员")])],1):t._e()])})):o("NoneData")],1),t._v(" "),t.paymentShow?o("payment",{attrs:{info:t.paymentInfo},on:{close:t.close}}):t._e()],1)])},a=[],i={render:o,staticRenderFns:a};e.a=i},E2di:function(t,e,n){"use strict";function o(t){n("pguo")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("Qv+I"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var r=n("8fon"),c=n("C7Lr"),p=o,d=c(i.a,r.a,!1,p,"data-v-35860e8f",null);e.default=d.exports},MhNP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["info"],data:function(){return{messageInfo:""}},mounted:function(){this.pay()},computed:{},methods:{pay:function(){var t=this,e="becomeVIP/jsapi?vipType="+this.info.vipType+"&goodsIntegral="+this.info.goodsIntegral+"&goodsId="+this.info.goodsId;this.axios.get(e).then(function(e){t.messageInfo=e.data;var n=t;"undefined"==typeof WeixinJSBridge?(console("微信浏览器"),document.addEventListener?(console("浏览器监听"),document.addEventListener("WeixinJSBridgeReady",n.onBridgeReady(),!1)):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",n.onBridgeReady()),document.attachEvent("onWeixinJSBridgeReady",n.onBridgeReady()))):n.onBridgeReady()})},onBridgeReady:function(){var t=this;console.log("sucheng"),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:this.messageInfo.appId,timeStamp:this.messageInfo.timeStamp,nonceStr:this.messageInfo.nonceStr,package:this.messageInfo.package,signType:this.messageInfo.signType,paySign:this.messageInfo.paySign},function(e){"get_brand_wcpay_request:ok"==e.err_msg?(t.$emit("close",1),console.log("支付成功")):"get_brand_wcpay_request:cancel"==e.err_msg?(t.$emit("close",2),console.log("支付取消")):"get_brand_wcpay_request:fail"==e.err_msg&&(t.$emit("close",3),console.log("支付失败"),WeixinJSBridge.call("closeWindow"))})}}}},"Qv+I":function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n("lC5x"),i=o(a),s=n("J0Oq"),r=o(s),c=n("4YfN"),p=o(c),d=n("TZHP"),f=o(d),u=n("9rMa");e.default={data:function(){return{codeImg:"",dialogVisible:!1,intervalId:"",timeIndex:0,paymentShow:!1,paymentInfo:{},loading1:!1,loading2:!1}},components:{payment:f.default},created:function(){this.getVipCondition()},mounted:function(){},computed:(0,p.default)({},(0,u.mapGetters)(["dataList","userInfo"])),methods:{close:function(t){this.loading1=!1,this.loading2=!1,this.paymentShow=!1,this.getUserInfo()},getVipCondition:function(){var t=this;return(0,r.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getVipCondition");case 2:case"end":return e.stop()}},e,t)}))()},openMembership:function(t){var e=this;return(0,r.default)(i.default.mark(function n(){return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.paymentShow=!0,e.paymentInfo=t;case 2:case"end":return n.stop()}},n,e)}))()},getUserInfo:function(){var t=this;return(0,r.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getUserInfo");case 2:case"end":return e.stop()}},e,t)}))()}}}},TZHP:function(t,e,n){"use strict";function o(t){n("gbO8")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("MhNP"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var r=n("8/rc"),c=n("C7Lr"),p=o,d=c(i.a,r.a,!1,p,null,null);e.default=d.exports},Xs75:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVRYR+2VT4hOYRTGf4/8T5OSKEWpERlKSVKklLFRsprZyspCsVIkJRZSms2QkpKUrGY3WShkoVFWYzsTDTXCwkpNPTrTHb0+937f+5nvm0vNWd3u+55zfuc55/SKmk0152cR4P9UwPZK4DpwS9KH+cxR2wrY3gM8BnqBnZLeLQiA7aXAReASEN9hCwNgO6qNqqP61LoLYDtadAa4CUTfG617ALY3Ag+BI016PAx8Br4Dn4D3wCtJzp2L0iG0PQDcBtbmBkruTQJ3gTuSvrXy/w3AdiS8B5xs5Zhx/hW4EoVImqm6/wvAdkgdkof0nbS3wHFJU2VBU4BRoL+TmZNYoUa/pDeN8VOA+D4L3ACWdwHkY6yxpOk09h9DaHtHsfO7ugDxXNLhpgBxaHtZMUAXgCUdBjkhaWQuZtO3wPYB4BGwpQKiT9J48ThtBrYBB4FjwO4Kn3FJfVkAhRpr4tUDTpcEnAUoS2R7L3AeGCw53ydpLP5nv4a2o6oHwPokYCXA3B3bocgTYEPid1XS5bYACjXWAfdjr4tgLQEKv63AC2BT4fdS0qG2AZKqTgFDwP6qFjTKbns78BroASYkBVR+C0oCxrpOS/qSuyW2YwWfAT8krZoXQG7SEvBrwDlJq+sCWAGMSZpd0+wt+NuKK1b0qKSntQGkULUosAjwTynwE1LblSFW7OQ5AAAAAElFTkSuQmCC"},gbO8:function(t,e,n){var o=n("542L");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("FIqI")("a707b2c6",o,!0,{})},lTkO:function(t,e,n){t.exports=n.p+"static/img/VIP.3b1bc6d.jpg"},pguo:function(t,e,n){var o=n("z8m5");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n("FIqI")("449b35a0",o,!0,{})},z8m5:function(t,e,n){e=t.exports=n("UTlt")(!1),e.push([t.i,".shopping_count[data-v-35860e8f]{width:100%;margin-top:70px}.shopping_count .shopping_img span[data-v-35860e8f]{display:block;font-size:.35rem;font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:10px 0}.shopping_count ul li[data-v-35860e8f]{background:#fff;margin:10px 0}.shopping_count .shopping_img em[data-v-35860e8f]{color:#fe4b1c;font-size:.3rem}.shopping_img[data-v-35860e8f]{width:50%;float:left}.shopping_img img[data-v-35860e8f]{width:90%;height:80px;margin:10px 5%}.shopping_name[data-v-35860e8f]{width:calc(50% - 78px)}.shopping_oper[data-v-35860e8f]{float:right;width:68px;margin:35px 5px;color:#a98d1a}.shopping_oper span[data-v-35860e8f]{display:block}.shopping_oper em[data-v-35860e8f]{padding:5px;border:1px solid #fe4b1c;border-radius:5px;background:#fe4b1c;color:#fff}.opertion_but[data-v-35860e8f]{padding-bottom:10px}.opertion_but button[data-v-35860e8f]{width:135px;display:block;margin:0 auto;background:#fe4b1c;border:1px solid #fe4b1c;color:#fff}.vip_but button[data-v-35860e8f]{background:#fe4b1c;color:#fff;width:96%;margin:0 2%;border-radius:5px;height:50px;line-height:50px;font-size:.3rem}.vip_but .color_red[data-v-35860e8f]{color:#fff;background:#fe4b1c}.have_vip_count[data-v-35860e8f]{width:100%;height:300px;text-align:center}.have_vip_count img[data-v-35860e8f]{width:90%;height:200px;margin:20px auto}.have_vip_but button[data-v-35860e8f]{background:#fe4b1c;color:#fff;width:96%;margin:0 2%;border-radius:5px;height:50px;line-height:50px;font-size:.35rem}.have_vip_but .color_org[data-v-35860e8f]{color:#fff;background:orange}",""])}});