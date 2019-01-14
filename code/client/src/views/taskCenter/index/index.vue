<template>
    <div>
        <div class="task_center_wrapper">
            <div class="block">
                <el-carousel trigger="click" height="5.9rem" arrow="never" indicator-position="none">
                    <el-carousel-item v-for="(item,index) in bannerImgLst" :key="index">
                        <img  :src="item.url" class="bannerImg"/>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- <div class="notice">
                <em></em>
                <textScroll :lists="textLists"></textScroll>
            </div> -->
            <div class="middle_menu">
                <ul class="cf">
                    <li><router-link :to="{path:'/taskCenter/generaltTask?taskType=1'}"><img src="../../../images/taskCenterMenu/grid1.png"/><p>普通任务</p></router-link></li>
                    <!-- <li><img src="../../images/taskCenterMenu/grid2.png"/><p>VIP任务区</p></li> -->
                    <!-- <li><img src="../../images/taskCenterMenu/grid3.png"/><p>VIP任务区</p></li> -->
                    <li><router-link :to="{path:'/taskCenter/generaltTask?taskType=2'}"><img src="../../../images/taskCenterMenu/grid4.png"/><p>高级任务</p></router-link></li>
                    <li><router-link :to="{path:'/taskCenter/myTask'}"><img src="../../../images/taskCenterMenu/grid5.png"/><p>参与的任务</p></router-link></li>
                </ul>
            </div>
            <div style="height:2rem"></div>
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
                    {url:require('../../../images/banner.jpeg')},
                    // {url:require('../../../images/banner2.jpg')},
                    // {url:require('../../../images/banner4.jpg')}
                ],
                textLists:['欢迎来到巨象优购']
            }
        },
        components: {
            footerCommon,
            textScroll
        },
        mounted () {
            
        },
        computed: {

        }
    }
</script>
<style lang="css" scoped>
.task_center_wrapperr {
    overflow: auto;
}
.bannerImg {
    width: 100%;
    height: 5.9rem;
}
.task_center_wrapper .notice{
    width: calc(100% - 0.4rem);
    margin: 0.2rem;
    padding: 0 .15rem;
    height: 1.2rem;
    line-height: 1.2rem;
    background: #fff;
    box-shadow: 0px 0px 1px 0px #ddd;
    box-sizing: border-box;
}
.task_center_wrapper .notice em {
    float:left;
    width: 0.72rem;
    height: 0.72rem;
    background: url(../../../images/homeMenu/icon10.png) no-repeat;
    background-size: 0.72rem 0.72rem;
    margin: 0.24rem 0.1rem;
}
.task_center_wrapper .middle_menu {
    position: relative;
    padding: .3rem 0rem;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 3px 10px #ccc;
    margin: 0.2rem;
}
.task_center_wrapper .middle_menu ul li {
        font-size: 0.3rem;
        text-align: center;
        width:33.333%;
        position: relative;
        float: left;
        padding: 20px 10px;
        box-sizing: border-box;
        background: #fff;
    }
.task_center_wrapper .middle_menu ul li img{
    display: inline-block;
    width: 28px;
    height: 28px;
}
/* .task_center_wrapper .middle_menu:after, .task_center_wrapper .middle_menu:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    color: #d9d9d9;
}

.task_center_wrapper .middle_menu ul li:after,.task_center_wrapper .middle_menu ul li:before {
    content: " ";
    position: absolute;
    right: 0;
    bottom: 0;
    color: #d9d9d9;
}
.task_center_wrapper .middle_menu ul li:before {
    top: 0;
    width: 1px;
    border-right: 1px solid #d9d9d9;
    transform-origin: 100% 0;
    transform: scaleX(.5);
}
.task_center_wrapper .middle_menu ul li:after {
    left: 0;
    height: 1px;
    border-bottom: 1px solid #d9d9d9;
    transform-origin: 0 100%;
    transform: scaleY(.5);
} */
</style>