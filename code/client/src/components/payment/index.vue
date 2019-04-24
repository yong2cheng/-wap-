<template>
    <div>
        
    </div>
</template>

<script>
    export default {
        props: ['info'],
    	data(){
            return{
                messageInfo:''
            }
        },
        mounted(){
            this.pay()
        },
        computed: {
            
        },
        methods: {
            pay(){
                var url = ''
                if(this.info.isRobot === 1) {
                    url = "buyRobot/jsapi?count="+this.info.robotNum
                } else {
                    url = "becomeVIP/jsapi?vipType="+this.info.vipType+"&goodsIntegral="+this.info.goodsIntegral+"&goodsId="+this.info.goodsId;
                }               
                this.axios.get(url).then( res => {
                    console.log(res)
                    this.messageInfo = res.data
                    var vm = this;
                    if (typeof WeixinJSBridge == "undefined"){//微信浏览器内置对象。参考微信官方文档
                            console("微信浏览器");
                        if( document.addEventListener ){
                            console("浏览器监听");
                            document.addEventListener('WeixinJSBridgeReady', vm.onBridgeReady(), false);
                        }else if (document.attachEvent){
                            document.attachEvent('WeixinJSBridgeReady', vm.onBridgeReady());
                            document.attachEvent('onWeixinJSBridgeReady',vm.onBridgeReady());
                        }
                    }else{
                        //  alert("直接回调");
                        vm.onBridgeReady();
                    }
                }).catch(err =>{
                    console.log(err)
                    this.$emit('close',5)
                })
            },
            onBridgeReady(){
                this.$emit('close',5)
                var that = this;
                console.log("sucheng")
                WeixinJSBridge.invoke( 'getBrandWCPayRequest', {
                    "appId":this.messageInfo.appId,     //公众号名称,由商户传入     
                    "timeStamp":this.messageInfo.timeStamp,         //时间戳,自1970年以来的秒数     
                    "nonceStr":this.messageInfo.nonceStr, //随机串     
                    "package":this.messageInfo.package,     
                    "signType":this.messageInfo.signType,         //微信签名方式：     
                    "paySign":this.messageInfo.paySign //微信签名 
                }, 
                function(res){      
                    if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                            that.$emit('close',1)
                            console.log('支付成功');
                            //支付成功后跳转的页面
                        }else if(res.err_msg == "get_brand_wcpay_request:cancel"){
                            that.$emit('close',2)
                            console.log('支付取消');
                        }else if(res.err_msg == "get_brand_wcpay_request:fail"){
                            that.$emit('close',3)
                            console.log('支付失败');
                            WeixinJSBridge.call('closeWindow');
                        } //使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok,但并不保证它绝对可靠。
                });   
            }
        },
    }

</script>

<style lang="css">
    
</style>
