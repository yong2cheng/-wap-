webpackJsonp([3],{"542L":function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,"",""])},"8/rc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},o=[],i={render:n,staticRenderFns:o};t.a=i},AGYt:function(e,t,a){t=e.exports=a("UTlt")(!1),t.push([e.i,".shopping_count[data-v-eaed89b4]{width:100%;margin-top:70px}.shopping_count .shopping_img h4[data-v-eaed89b4]{display:block;font-weight:700;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:10px 0}.shopping_count ul li[data-v-eaed89b4]{background:#fff;margin:10px 0}.shopping_count .shopping_img em[data-v-eaed89b4]{color:#fe4b1c}.shopping_img[data-v-eaed89b4]{width:50%;float:left}.shopping_img img[data-v-eaed89b4]{width:100%;height:100px;margin:10px 0;padding:0 calc((100% - 100px) / 2)}.shopping_name[data-v-eaed89b4]{width:calc(50% - 78px)}.shopping_oper[data-v-eaed89b4]{float:right;width:68px;margin:35px 5px;color:#a98d1a}.shopping_oper span[data-v-eaed89b4]{display:block}.shopping_oper em[data-v-eaed89b4]{padding:5px;border:1px solid #fe4b1c;border-radius:5px;background:#fe4b1c;color:#fff}.opertion_but[data-v-eaed89b4]{padding-bottom:10px}.opertion_but button[data-v-eaed89b4]{width:135px;display:block;margin:0 auto;background:#fe4b1c;border:1px solid #fe4b1c;color:#fff}.vip_but button[data-v-eaed89b4]{background:#fe4b1c;color:#fff;width:96%;margin:0 2%;border-radius:5px;height:50px;line-height:50px;font-size:.3rem}.vip_but .color_red[data-v-eaed89b4]{color:#fff;background:#fe4b1c}.have_vip_count[data-v-eaed89b4]{width:100%;height:300px;text-align:center}.have_vip_count img[data-v-eaed89b4]{width:90%;height:200px;margin:20px auto}.have_vip_but[data-v-eaed89b4]{color:#fff;background:orange;width:96%;margin:0 2%;border-radius:5px;padding-bottom:.2rem}.have_vip_but .color_org[data-v-eaed89b4]{color:#fff;font-size:.45rem;padding:.2rem 0}",""])},E2di:function(e,t,a){"use strict";function n(e){a("aPGK")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("Qv+I"),i=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);var r=a("pai7"),d=a("C7Lr"),c=n,p=d(i.a,r.a,!1,c,"data-v-eaed89b4",null);t.default=p.exports},MhNP:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["info"],data:function(){return{messageInfo:""}},mounted:function(){this.pay()},computed:{},methods:{pay:function(){var e=this,t="becomeVIP/jsapi?vipType="+this.info.vipType+"&goodsIntegral="+this.info.goodsIntegral+"&goodsId="+this.info.goodsId;this.axios.get(t).then(function(t){e.messageInfo=t.data;var a=e;"undefined"==typeof WeixinJSBridge?(console("微信浏览器"),document.addEventListener?(console("浏览器监听"),document.addEventListener("WeixinJSBridgeReady",a.onBridgeReady(),!1)):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",a.onBridgeReady()),document.attachEvent("onWeixinJSBridgeReady",a.onBridgeReady()))):a.onBridgeReady()})},onBridgeReady:function(){var e=this;console.log("sucheng"),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:this.messageInfo.appId,timeStamp:this.messageInfo.timeStamp,nonceStr:this.messageInfo.nonceStr,package:this.messageInfo.package,signType:this.messageInfo.signType,paySign:this.messageInfo.paySign},function(t){"get_brand_wcpay_request:ok"==t.err_msg?(e.$emit("close",1),console.log("支付成功")):"get_brand_wcpay_request:cancel"==t.err_msg?(e.$emit("close",2),console.log("支付取消")):"get_brand_wcpay_request:fail"==t.err_msg&&(e.$emit("close",3),console.log("支付失败"),WeixinJSBridge.call("closeWindow"))})}}}},"Qv+I":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a("lC5x"),i=n(o),s=a("J0Oq"),r=n(s),d=a("4YfN"),c=n(d),p=a("TZHP"),u=n(p),l=a("9rMa");t.default={data:function(){return{codeImg:"",dialogVisible:!1,intervalId:"",timeIndex:0,paymentShow:!1,paymentInfo:{},loading1:!1,loading2:!1}},components:{payment:u.default},created:function(){this.getVipCondition()},mounted:function(){},computed:(0,c.default)({},(0,l.mapGetters)(["dataList","userInfo"])),methods:{close:function(e){this.loading1=!1,this.loading2=!1,this.paymentShow=!1,this.getUserInfo()},getVipCondition:function(){var e=this;return(0,r.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getVipCondition");case 2:case"end":return t.stop()}},t,e)}))()},openMembership:function(e){var t=this;return(0,r.default)(i.default.mark(function a(){return i.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.paymentShow=!0,t.paymentInfo=e;case 2:case"end":return a.stop()}},a,t)}))()},getUserInfo:function(){var e=this;return(0,r.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getUserInfo");case 2:case"end":return t.stop()}},t,e)}))()}}}},TZHP:function(e,t,a){"use strict";function n(e){a("gbO8")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("MhNP"),i=a.n(o);for(var s in o)"default"!==s&&function(e){a.d(t,e,function(){return o[e]})}(s);var r=a("8/rc"),d=a("C7Lr"),c=n,p=d(i.a,r.a,!1,c,null,null);t.default=p.exports},Xs75:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACAUlEQVRYR+2VT4hOYRTGf4/8T5OSKEWpERlKSVKklLFRsprZyspCsVIkJRZSms2QkpKUrGY3WShkoVFWYzsTDTXCwkpNPTrTHb0+937f+5nvm0vNWd3u+55zfuc55/SKmk0152cR4P9UwPZK4DpwS9KH+cxR2wrY3gM8BnqBnZLeLQiA7aXAReASEN9hCwNgO6qNqqP61LoLYDtadAa4CUTfG617ALY3Ag+BI016PAx8Br4Dn4D3wCtJzp2L0iG0PQDcBtbmBkruTQJ3gTuSvrXy/w3AdiS8B5xs5Zhx/hW4EoVImqm6/wvAdkgdkof0nbS3wHFJU2VBU4BRoL+TmZNYoUa/pDeN8VOA+D4L3ACWdwHkY6yxpOk09h9DaHtHsfO7ugDxXNLhpgBxaHtZMUAXgCUdBjkhaWQuZtO3wPYB4BGwpQKiT9J48ThtBrYBB4FjwO4Kn3FJfVkAhRpr4tUDTpcEnAUoS2R7L3AeGCw53ydpLP5nv4a2o6oHwPokYCXA3B3bocgTYEPid1XS5bYACjXWAfdjr4tgLQEKv63AC2BT4fdS0qG2AZKqTgFDwP6qFjTKbns78BroASYkBVR+C0oCxrpOS/qSuyW2YwWfAT8krZoXQG7SEvBrwDlJq+sCWAGMSZpd0+wt+NuKK1b0qKSntQGkULUosAjwTynwE1LblSFW7OQ5AAAAAElFTkSuQmCC"},aPGK:function(e,t,a){var n=a("AGYt");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("a58f2876",n,!0,{})},gbO8:function(e,t,a){var n=a("542L");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("FIqI")("a707b2c6",n,!0,{})},lTkO:function(e,t,a){e.exports=a.p+"static/img/VIP.3b1bc6d.jpg"},pai7:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"new-header"},[n("div",{staticClass:"container cl"},[n("img",{staticStyle:{float:"left"},attrs:{src:a("Xs75")},on:{click:function(t){e.$router.back(-1)}}}),e._v(" "),n("div",{staticClass:"container_detail"},[e._v("成为VIP")])])]),e._v(" "),e.userInfo.vipType?n("div",{staticClass:"wrapper_count have_vip_count"},[n("img",{attrs:{src:a("lTkO"),alt:""}}),e._v(" "),n("div",{staticClass:"have_vip_but"},[n("div",{staticClass:"color_org"},[e._v("已成为"+e._s(e.userInfo.vipTypeName)+"VIP")]),e._v(" "),n("p",{staticStyle:{"font-size":"0.28rem",color:"#FE4B1C"}},[e._v("有效期："+e._s(e.userInfo.vipBeginDate.substring(0,10))+"至"+e._s(e.userInfo.vipEndDate.substring(0,10)))])])]):n("div",{staticClass:"shopping_count"},[e.dataList.length>0?n("ul",{staticClass:"cf"},e._l(e.dataList,function(t,a){return n("li",{key:a},[n("div",{staticClass:"cf"},[n("p",{staticClass:"shopping_img"},[n("img",{attrs:{src:"http://vip.31d461.cn/api/"+t.goodsPic,alt:""}})]),e._v(" "),n("div",{staticClass:"shopping_img shopping_name cf"},[n("h4",[e._v(e._s(t.goodsName))]),n("em",[e._v(e._s(t.goodsIntegral)+"积分")])]),e._v(" "),n("p",{staticClass:"shopping_oper"},[n("span",[e._v(e._s(t.vipTypeName))])])]),e._v(" "),1==t.vipType?n("p",{staticClass:"opertion_but"},[n("el-button",{staticClass:"commom_button",attrs:{loading:e.loading1},on:{click:function(a){e.loading1=!0,e.openMembership(t)}}},[e._v("成为普通会员")])],1):e._e(),e._v(" "),2==t.vipType?n("p",{staticClass:"opertion_but"},[n("el-button",{staticClass:"commom_button",attrs:{loading:e.loading2},on:{click:function(a){e.loading2=!0,e.openMembership(t)}}},[e._v("成为高级会员")])],1):e._e()])})):n("NoneData")],1),e._v(" "),e.paymentShow?n("payment",{attrs:{info:e.paymentInfo},on:{close:e.close}}):e._e()],1)])},o=[],i={render:n,staticRenderFns:o};t.a=i}});