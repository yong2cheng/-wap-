webpackJsonp([3],{"+xaK":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"new-header"},[n("div",{staticClass:"container cl"},[n("img",{staticStyle:{float:"left"},attrs:{src:a("Xs75")},on:{click:function(e){t.$router.back(-1)}}}),t._v(" "),n("div",{staticClass:"container_detail"},[t._v("成为VIP")])])]),t._v(" "),t.userInfo.vipType?n("div",{staticClass:"wrapper_count have_vip_count"},[n("img",{attrs:{src:a("lTkO"),alt:""}}),t._v(" "),n("div",{staticClass:"have_vip_but"},[n("div",{staticClass:"color_org"},[t._v("已成为"+t._s(t.userInfo.vipTypeName)+"VIP")]),t._v(" "),n("p",{staticStyle:{"font-size":"0.28rem",color:"#FE4B1C"}},[t._v("有效期："+t._s(t.userInfo.vipBeginDate.substring(0,10))+"至"+t._s(t.userInfo.vipEndDate.substring(0,10)))])])]):n("div",{staticClass:"shopping_count"},[t.dataList.length>0?n("ul",{staticClass:"cf"},t._l(t.dataList,function(e,a){return n("li",{key:a},[n("div",{staticClass:"cf"},[n("p",{staticClass:"shopping_img"},[n("img",{attrs:{src:"http://vip.31d461.cn/api/"+e.goodsPic,alt:""}})]),t._v(" "),n("div",{staticClass:"shopping_img shopping_name cf"},[n("h4",[t._v(t._s(e.goodsName))]),n("em",[t._v(t._s(e.goodsIntegral)+"积分")])]),t._v(" "),n("p",{staticClass:"shopping_oper"},[n("span",[t._v(t._s(e.vipTypeName))])])]),t._v(" "),n("p",{staticClass:"opertion_but"},[n("el-button",{staticClass:"commom_button",on:{click:function(a){t.openMembership(e)}}},[t._v("成为"+t._s(e.vipTypeName))])],1)])})):n("NoneData")],1),t._v(" "),t.paymentShow?n("payment",{attrs:{info:t.paymentInfo},on:{close:t.close}}):t._e()],1)])},o=[],i={render:n,staticRenderFns:o};e.a=i},"542L":function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,"",""])},"6Sp+":function(t,e,a){e=t.exports=a("UTlt")(!1),e.push([t.i,".shopping_count[data-v-adabc586]{width:100%;margin-top:70px}.shopping_count .shopping_img h4[data-v-adabc586]{display:block;font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:10px 0}.shopping_count ul li[data-v-adabc586]{background:#fff;margin:10px 0}.shopping_count .shopping_img em[data-v-adabc586]{color:#fe4b1c}.shopping_img[data-v-adabc586]{width:50%;float:left}.shopping_img img[data-v-adabc586]{width:100%;height:100px;margin:10px 0;padding:0 calc((100% - 100px) / 2)}.shopping_name[data-v-adabc586]{width:calc(50% - 78px)}.shopping_oper[data-v-adabc586]{float:right;width:68px;margin:35px 5px;color:#a98d1a}.shopping_oper span[data-v-adabc586]{display:block}.shopping_oper em[data-v-adabc586]{padding:5px;border:1px solid #fe4b1c;border-radius:5px;background:#fe4b1c;color:#fff}.opertion_but[data-v-adabc586]{padding-bottom:10px}.opertion_but button[data-v-adabc586]{width:135px;display:block;margin:0 auto;background:#fe4b1c;border:1px solid #fe4b1c;color:#fff}.vip_but button[data-v-adabc586]{background:#fe4b1c;color:#fff;width:96%;margin:0 2%;border-radius:5px;height:50px;line-height:50px;font-size:.3rem}.vip_but .color_red[data-v-adabc586]{color:#fff;background:#fe4b1c}.have_vip_count[data-v-adabc586]{width:100%;height:300px;text-align:center}.have_vip_count img[data-v-adabc586]{width:90%;height:200px;margin:20px auto}.have_vip_but[data-v-adabc586]{color:#fff;background:orange;width:96%;margin:0 2%;border-radius:5px;padding-bottom:.2rem}.have_vip_but .color_org[data-v-adabc586]{color:#fff;font-size:.45rem;padding:.2rem 0}",""])},"8/rc":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},o=[],i={render:n,staticRenderFns:o};e.a=i},E2di:function(t,e,a){"use strict";function n(t){a("nIPF")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("Qv+I"),i=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);var r=a("+xaK"),c=a("C7Lr"),d=n,p=c(i.a,r.a,!1,d,"data-v-adabc586",null);e.default=p.exports},MhNP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["info"],data:function(){return{messageInfo:""}},mounted:function(){this.pay()},computed:{},methods:{pay:function(){var t=this,e="becomeVIP/jsapi?vipType="+this.info.vipType+"&goodsIntegral="+this.info.goodsIntegral+"&goodsId="+this.info.goodsId;this.axios.get(e).then(function(e){t.messageInfo=e.data;var a=t;"undefined"==typeof WeixinJSBridge?(console("微信浏览器"),document.addEventListener?(console("浏览器监听"),document.addEventListener("WeixinJSBridgeReady",a.onBridgeReady(),!1)):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",a.onBridgeReady()),document.attachEvent("onWeixinJSBridgeReady",a.onBridgeReady()))):a.onBridgeReady()})},onBridgeReady:function(){var t=this;console.log("sucheng"),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:this.messageInfo.appId,timeStamp:this.messageInfo.timeStamp,nonceStr:this.messageInfo.nonceStr,package:this.messageInfo.package,signType:this.messageInfo.signType,paySign:this.messageInfo.paySign},function(e){"get_brand_wcpay_request:ok"==e.err_msg?(t.$emit("close",1),console.log("支付成功")):"get_brand_wcpay_request:cancel"==e.err_msg?(t.$emit("close",2),console.log("支付取消")):"get_brand_wcpay_request:fail"==e.err_msg&&(t.$emit("close",3),console.log("支付失败"),WeixinJSBridge.call("closeWindow"))})}}}},"Qv+I":function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a("lC5x"),i=n(o),s=a("J0Oq"),r=n(s),c=a("4YfN"),d=n(c),p=a("TZHP"),u=n(p),f=a("9rMa");e.default={data:function(){return{codeImg:"",dialogVisible:!1,intervalId:"",timeIndex:0,paymentShow:!1,paymentInfo:{},loading1:!1,loading2:!1,loading3:!1}},components:{payment:u.default},created:function(){this.getVipCondition()},mounted:function(){},computed:(0,d.default)({},(0,f.mapGetters)(["dataList","userInfo"])),methods:{close:function(t){this.loading1=!1,this.loading2=!1,this.loading3=!1,this.paymentShow=!1,this.getUserInfo()},getVipCondition:function(){var t=this;return(0,r.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getVipCondition");case 2:case"end":return e.stop()}},e,t)}))()},openMembership:function(t){var e=this;return(0,r.default)(i.default.mark(function a(){return i.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e.paymentShow=!0,e.paymentInfo=t;case 2:case"end":return a.stop()}},a,e)}))()},getUserInfo:function(){var t=this;return(0,r.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getUserInfo");case 2:case"end":return e.stop()}},e,t)}))()}}}},TZHP:function(t,e,a){"use strict";function n(t){a("gbO8")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("MhNP"),i=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);var r=a("8/rc"),c=a("C7Lr"),d=n,p=c(i.a,r.a,!1,d,null,null);e.default=p.exports},Xs75:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVRYR+2VT4hOYRTGf4/8T5OSKEWpERlKSVKklLFRsprZyspCsVIkJRZSms2QkpKUrGY3WShkoVFWYzsTDTXCwkpNPTrTHb0+937f+5nvm0vNWd3u+55zfuc55/SKmk0152cR4P9UwPZK4DpwS9KH+cxR2wrY3gM8BnqBnZLeLQiA7aXAReASEN9hCwNgO6qNqqP61LoLYDtadAa4CUTfG617ALY3Ag+BI016PAx8Br4Dn4D3wCtJzp2L0iG0PQDcBtbmBkruTQJ3gTuSvrXy/w3AdiS8B5xs5Zhx/hW4EoVImqm6/wvAdkgdkof0nbS3wHFJU2VBU4BRoL+TmZNYoUa/pDeN8VOA+D4L3ACWdwHkY6yxpOk09h9DaHtHsfO7ugDxXNLhpgBxaHtZMUAXgCUdBjkhaWQuZtO3wPYB4BGwpQKiT9J48ThtBrYBB4FjwO4Kn3FJfVkAhRpr4tUDTpcEnAUoS2R7L3AeGCw53ydpLP5nv4a2o6oHwPokYCXA3B3bocgTYEPid1XS5bYACjXWAfdjr4tgLQEKv63AC2BT4fdS0qG2AZKqTgFDwP6qFjTKbns78BroASYkBVR+C0oCxrpOS/qSuyW2YwWfAT8krZoXQG7SEvBrwDlJq+sCWAGMSZpd0+wt+NuKK1b0qKSntQGkULUosAjwTynwE1LblSFW7OQ5AAAAAElFTkSuQmCC"},gbO8:function(t,e,a){var n=a("542L");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("FIqI")("a707b2c6",n,!0,{})},lTkO:function(t,e,a){t.exports=a.p+"static/img/VIP.3b1bc6d.jpg"},nIPF:function(t,e,a){var n=a("6Sp+");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("FIqI")("fcb54142",n,!0,{})}});