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
                        <li><img src="../../../images/homeMenu/projectRevenue.png"/><p><span>{{todayIncrease}}元</span><em>今日收益</em></p></li>
                        <li v-if="!userInfo.vipType"><img src="../../../images/homeMenu/wjh.png"/><p>待激活</p></li>
                        <li v-else-if="working"><img src="../../../images/homeMenu/working.png"/><p>工作中</p></li>
                        <li v-else><img src="../../../images/homeMenu/worked.png"/><p>工作完成</p></li>
                        <li><img src="../../../images/homeMenu/totalRevenue.png"/><p><span>{{totalIncrease}}元</span><em>总收益</em></p></li>
                        <!-- <li @click="getPath('becomeVip','成为VIP')"><img src="../../../images/homeMenu/icon01.png"/><p>成为VIP</p></li>
                        <li @click="getPath('promotionLinks','推广二维码')"><img src="../../../images/homeMenu/icon02.png"/><p>推广二维码</p></li>
                        <li @click="getPath('earnCommission','如何赚佣')"><img src="../../../images/homeMenu/icon03.png"/><p>如何赚佣</p></li> -->
                        <!-- <li @click="getPath('notOpen','广告投放')"><img src="../../../images/homeMenu/icon04.png"/><p>广告投放</p></li> -->
                        <!-- <li @click="getPath('notOpen','签到赚分')"><img src="../../../images/homeMenu/icon05.png"/><p>签到赚分</p></li> -->
                        <!-- <li @click="getPath('join','城主加盟')"><img src="../../../images/homeMenu/icon12.png"/><p>城主加盟</p></li>
                        <li @click="getPath('onlineService','人工客服')"><img src="../../../images/homeMenu/icon06.png"/><p>人工客服</p></li> -->
                        <!-- <li @click="getPath('notOpen','发布任务')" style="padding-bottom:0"><img src="../../../images/homeMenu/icon07.png"/><p>发布任务</p></li>
                        <li @click="getPath('intelligentRobot','智能机器人')" style="padding-bottom:0"><img src="../../../images/homeMenu/icon08.jpg" style="height:1rem;margin-bottom:0.2rem"/><p>AI机器人</p></li>
                        <li @click="getPath('notOpen','淘宝返利')" style="padding-bottom:0"><img src="../../../images/homeMenu/icon09.png"/><p>淘宝返利</p></li> -->
                    </ul>
                </div>
                <div class="middle_count">
                    <ul class="cf">
                        <li class="cf" @click="getPath('checkProduct','查看项目')">
                            <img src="../../../images/homeMenu/product.png" alt="">
                            <p>
                                <span>查看项目</span>
                                <em>查看项目说明</em>
                            </p>
                        </li>
                        <li class="cf" @click="getPath('promotionLinks','分享赚钱')">
                            <img src="../../../images/homeMenu/share.png" alt="">
                            <p>
                                <span>分享赚钱</span>
                                <em>分享即可赚钱</em>
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="notice cf">
                    <em></em>
                    <textScroll :lists="textLists" :createDate="createDate"></textScroll>
                    <!-- <div class="notice_tip">
                        <p class="notice_wrapper"><img class="notice_mark" src="../../../images/homeMenu/icon11.png" />公告</p>
                        <p class="notice_content">欢迎来到巨象传媒</p>
                    </div> -->
                </div>
                <div style="height:1.8rem"></div>
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
                    {url:require('../../../images/banner .png')},
                    // {url:require('../../../images/banner2.jpg')},
                    // {url:require('../../../images/banner4.jpg')}
                ],
                textLists:'',
                createDate:'',
                working:true,
                totalIncrease:'',
                todayIncrease:'',
                workTime:''
            }
        },
        components: {
            footerCommon,
            textScroll
        },
        created () {
            this.workTime = new Date().getFullYear()+'-'+((new Date().getMonth()+1)<10? "0"+(new Date().getMonth()+1):(new Date().getMonth()+1))+'-'+new Date().getDate();
            if(new Date().getTime()-new Date(this.workTime+' 13:00:00').getTime()>0) {
                this.working = false
            }
            this.statisticsIntegral()
            this.getNotice()
        },
        mounted () {
            
        },
        computed: {
            ...mapGetters([
                'noticelist',
                'noticetotal',
                'userInfo'
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
                this.createDate = this.noticelist[0].createDate
                this.$nextTick(() => {
                    this.textLists = this.noticelist[0].content
                })
                console.log(this.textLists)
            },
            statisticsIntegral() {
                this.axios.get('user/statisticsIntegral').then( res => {
                    if(res.code === 10000) {
                        this.todayIncrease = res.data.todayIncrease
                        this.totalIncrease = res.data.totalIncrease
                    }
				}).catch( err => {
					// console.log(err)
					reject(err)
				})
            }
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
    margin: 0.4rem 0;
    padding: 0 .15rem;
    height: 1.6rem;
    line-height: 1.6rem;
    background: #fff;
    box-shadow: 0px 3px 10px #ccc;
    box-sizing: border-box;
    border-radius: 0.16rem;
    padding: 0.2rem 0;
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
    left: .3rem;
    right: .3rem;
}
.home-wrapper .middle_menu {
    position: relative;
    z-index: 999;
}
.home-wrapper .middle_menu ul {
}
.home-wrapper .middle_menu ul li {
    font-size: 0.3rem;
    text-align: center;
    width:31.5%;
    position: relative;
    float: left;
    padding: .3rem 0rem;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 3px 10px #ccc;
    margin-right: 2.75%;
    /* padding-bottom: 0.39rem; */
}
.home-wrapper .middle_menu ul li:nth-child(3) {
    margin-right: 0;
}
.home-wrapper .middle_menu ul li img{
    display: inline-block;
    width: 0.7rem;
    height: 0.9rem;
}
.home-wrapper .middle_menu ul li:nth-child(2) img{
    display: inline-block;
    width: 0.9rem;
}
.home-wrapper .middle_menu ul li p {
    margin-top: -5px;
    text-align: center;
    font-size: 0.27rem;
    height:1rem;
    margin-bottom: 0;
}
.home-wrapper .middle_menu ul li:nth-child(2) p {
    line-height:1rem;
    color:#4781fe;
}
.home-wrapper .middle_menu ul li p span {
    color:#4781fe;
    display:block;
    padding: 0.1rem 0 0.1rem;
    font-size: 0.3rem;
    height: 0.5rem;
    line-height: 0.5rem;
}
.home-wrapper .middle_menu ul li p em {
    color:#999;
    display:block;
    font-size: 0.2rem;
}
.middle_count {
    margin-top: 0.4rem;
}
.middle_count ul {
    background: #fff;
    border-radius: 0.16rem;
    box-shadow: 0px 3px 10px #ccc;
}
.middle_count ul li {
    float: left;
    width:50%;
    padding-left:0.4rem;
    border-right: 1px solid #4781fe;
    box-sizing: border-box;
    margin: 0.4rem 0;
}
.middle_count ul li:nth-child(2){
    border-right:0;
    padding:0 0 0 0.7rem;
}
.middle_count ul li img {
    float: left;
    width: 0.7rem;
    height:0.7rem;
}
.middle_count ul li p {
    float: left;
    margin: 0 0 0 0.1rem;
}
.middle_count ul li p span {
    display: block;
    font-size: 0.3rem;
    color:#333;
}
.middle_count ul li p em {
    font-size: 0.2rem;
    color:#999;
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