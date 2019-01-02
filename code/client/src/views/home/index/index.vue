<template>
    <div>
        <div class="home-wrapper">
            <div class="block">
                <el-carousel trigger="click" height="200px" arrow="never">
                    <el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">
                        <img  :src="item.url" class="bannerImg"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="notice">
                <em></em>
                <textScroll :lists="textLists"></textScroll>
            </div>
            <div class="middle_menu">
                <ul>
                    <li @click="getPath('becomeVip','成为VIP')"><img src="../../../images/homeMenu/grid4.png"/><p>成为VIP</p></li>
                    <li @click="getPath('promotionLinks','推广二维码')"><img src="../../../images/homeMenu/grid2.png"/><p>推广二维码</p></li>
                    <li @click="getPath('notOpen','如何赚佣')"><img src="../../../images/homeMenu/grid1.png"/><p>如何赚佣</p></li>
                    <li @click="getPath('notOpen','广告投放')"><img src="../../../images/homeMenu/grid3.png"/><p>广告投放</p></li>
                    <li @click="getPath('notOpen','100积分抽奖')"><img src="../../../images/homeMenu/grid5.png"/><p>100积分抽奖</p></li>
                    <li @click="getPath('notOpen','签到赚分')"><img src="../../../images/homeMenu/grid6.png"/><p>签到赚分</p></li>
                    <li @click="getPath('notOpen','在线充值')"><img src="../../../images/homeMenu/grid7.png"/><p>在线充值</p></li>
                    <li @click="getPath('notOpen','立即提现')"><img src="../../../images/homeMenu/grid8.png"/><p>立即提现</p></li>
                    <li @click="getPath('notOpen','在线客服')"><img src="../../../images/homeMenu/grid9.png"/><p>在线客服</p></li>
                    <li @click="getPath('notOpen','发布任务')"><img src="../../../images/homeMenu/grid10.png"/><p>发布任务</p></li>
                    <li @click="getPath('notOpen','免费影视')"><img src="../../../images/homeMenu/grid11.png"/><p>免费影视</p></li>
                    <li @click="getPath('notOpen','淘宝返利')"><img src="../../../images/homeMenu/grid12.png"/><p>淘宝返利</p></li>
                    <div style="height: 73px;clear: both;background-color: #f8f8f8;"></div>
                </ul>
            </div>
        </div>
        <footer-common></footer-common>
    </div>
</template>
<script>
    import footerCommon from '../../../components/footer/index'
    import textScroll from '../../../components/textScroll/index'
    export default {
        data () {
            return {
                bannerImgLst:[
                    {url:require('../../../images/banner1.jpg')},
                    {url:require('../../../images/banner2.jpg')},
                    {url:require('../../../images/banner4.jpg')}
                ],
                textLists:['新版霸屏天下2.0.3前台UI界面上线了']
            }
        },
        components: {
            footerCommon,
            textScroll
        },
        mounted () {
            
        },
        computed: {

        },
        methods: {
            getPath(path,typeName) {
                this.$router.push({ 
                    name: path, 
                    query: {
                        name:typeName
                    } 
                })
            }
        },
    }
</script>
<style lang="css" scoped>
.home-wrapper {
    overflow: auto;
}
.bannerImg {
    width: 100%;
    height: 200px;
}
.home-wrapper .notice{
    width:100%;
    height:36px;
    background:#f7f7fa;
}
.home-wrapper .notice em {
    float:left;
    width:20px;
    height:20px;
    background: url(../../../images/notice.png) no-repeat;
    background-size:20px 20px;
    margin: 8px 5px
}
.home-wrapper .middle_menu {
    position: relative;
}
.home-wrapper .middle_menu ul li {
        font-size: 0.3rem;
        text-align: center;
        width:33.333%;
        position: relative;
        float: left;
        padding: 20px 10px;
        box-sizing: border-box;
        background: #fff;
    }
.home-wrapper .middle_menu ul li img{
    display: inline-block;
    width: 28px;
    height: 28px;
}
.home-wrapper .middle_menu:after, .home-wrapper .middle_menu:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    color: #d9d9d9;
}

.home-wrapper .middle_menu ul li:after, .home-wrapper .middle_menu ul li:before {
    content: " ";
    position: absolute;
    right: 0;
    bottom: 0;
    color: #d9d9d9;
}
.home-wrapper .middle_menu ul li:before {
    top: 0;
    width: 1px;
    border-right: 1px solid #d9d9d9;
    transform-origin: 100% 0;
    transform: scaleX(.5);
}
.home-wrapper .middle_menu ul li:after {
    left: 0;
    height: 1px;
    border-bottom: 1px solid #d9d9d9;
    transform-origin: 0 100%;
    transform: scaleY(.5);
}
</style>