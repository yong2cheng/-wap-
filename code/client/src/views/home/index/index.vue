<template>
    <div>
        <div class="home-wrapper">
            <div class="block">
                <el-carousel trigger="click" height="5.9rem" arrow="never" indicator-position="none">
                    <el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">
                        <img  :src="item.url" class="bannerImg"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="mian-contain">
                <div class="middle_menu">
                    <ul class="cf">
                        <li @click="getPath('becomeVip','成为VIP')"><img src="../../../images/homeMenu/icon01.png"/><p>成为VIP</p></li>
                        <li @click="getPath('promotionLinks','推广二维码')"><img src="../../../images/homeMenu/icon02.png"/><p>推广二维码</p></li>
                        <li @click="getPath('earnCommission','如何赚佣')"><img src="../../../images/homeMenu/icon03.png"/><p>如何赚佣</p></li>
                        <li @click="getPath('notOpen','广告投放')"><img src="../../../images/homeMenu/icon04.png"/><p>广告投放</p></li>
                        <li @click="getPath('notOpen','签到赚分')"><img src="../../../images/homeMenu/icon05.png"/><p>签到赚分</p></li>
                        <li @click="getPath('onlineService','人工客服')"><img src="../../../images/homeMenu/icon06.png"/><p>人工客服</p></li>
                        <li @click="getPath('notOpen','发布任务')" style="padding-bottom:0"><img src="../../../images/homeMenu/icon07.png"/><p>发布任务</p></li>
                        <li @click="getPath('notOpen','免费影视')" style="padding-bottom:0"><img src="../../../images/homeMenu/icon08.png"/><p>免费影视</p></li>
                        <li @click="getPath('notOpen','淘宝返利')" style="padding-bottom:0"><img src="../../../images/homeMenu/icon09.png"/><p>淘宝返利</p></li>
                    </ul>
                </div>
                <div class="notice">
                    <em></em>
                    <textScroll :lists="textLists"></textScroll>
                    <!-- <div class="notice_tip">
                        <p class="notice_wrapper"><img class="notice_mark" src="../../../images/homeMenu/icon11.png" />公告</p>
                        <p class="notice_content">欢迎来到巨象传媒</p>
                    </div> -->
                </div>
                <div style="height:1.3rem"></div>
            </div>
        </div>
        <footer-common></footer-common>
    </div>
</template>
<script>
    import footerCommon from '../../../components/footer/index'
    import textScroll from '../../../components/textScroll/index'
    import { mapGetters } from 'vuex'
    export default {
        data () {
            return {
                bannerImgLst:[
                    {url:require('../../../images/banner.jpeg')},
                    // {url:require('../../../images/banner2.jpg')},
                    // {url:require('../../../images/banner4.jpg')}
                ],
                textLists:''
            }
        },
        components: {
            footerCommon,
            textScroll
        },
        created () {
            this.getNotice()
        },
        mounted () {
            
        },
        computed: {
            ...mapGetters([
                'noticelist',
                'noticetotal'
            ])
        },
        methods: {
            getPath(path,typeName) {
                this.$router.push({ 
                    name: path, 
                    query: {
                        name:typeName
                    } 
                })
            },
            async getNotice () {
                await this.$store.dispatch('getNotice')
                this.textLists = this.noticelist[0].content
                this.$nextTick(() => {
                    this.textLists = this.noticelist[0].content
                })
                console.log(this.textLists)
            },
        },
    }
</script>
<style lang="css" scoped>
.home-wrapper {
    position: relative;
}
.bannerImg {
    width: 100%;
    height: 5.9rem;
}
.home-wrapper .notice{
    width: 100%;
    margin: 0.2rem 0;
    padding: 0 .15rem;
    height: 1.2rem;
    line-height: 1.2rem;
    background: #fff;
    box-shadow: 0px 0px 1px 0px #ddd;
    box-sizing: border-box;
}
.home-wrapper .notice em {
    float:left;
    width: 0.72rem;
    height: 0.72rem;
    background: url(../../../images/homeMenu/icon10.png) no-repeat;
    background-size: 0.72rem 0.72rem;
    margin: 0.24rem 0.1rem;
}
.home-wrapper .mian-contain {
    position: absolute;
    top: 4.6rem;
    left: .15rem;
    right: .15rem;
}
.home-wrapper .middle_menu {
    position: relative;
    padding: .3rem 0rem;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 3px 10px #ccc;
    z-index: 999;
}
.home-wrapper .middle_menu ul {
}
.home-wrapper .middle_menu ul li {
    font-size: 0.3rem;
    text-align: center;
    width:33.333%;
    position: relative;
    float: left;
    padding-bottom: 0.39rem;
}
.home-wrapper .middle_menu ul li img{
    display: inline-block;
    width: 1.3rem;
    height: 1.2rem;
}
.home-wrapper .middle_menu ul li p{
    margin-top: -5px;
    text-align: center;
    font-size: 0.27rem;
    color: #434343;
}
/* .home-wrapper .middle_menu:after, .home-wrapper .middle_menu:before {
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
} */
</style>