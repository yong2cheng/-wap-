<template>
    <div class="footbar">
        <ul class="cf">
            <li @click="getPath('/')">
                <img src="../../images/homeMenu/home.png" v-if="!isHome"/>
                <img src="../../images/homeMenu/home1.png" v-else/>
                <p :class="{red_color:isHome}">
                    首页
                </p>
            </li>
            <li @click="getPath('/taskCenter/index')">
                <img src="../../images/homeMenu/working.png" v-if="working"/>
                <img src="../../images/homeMenu/worked.png" v-else/>
            </li>
            <li @click="getPath('/userCeneter/index')">
                <img src="../../images/homeMenu/my.png" v-if="!isUserCenter"/>
                <img src="../../images/homeMenu/my1.png" v-else/>
                <p :class="{red_color:isUserCenter}">
                    个人中心
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
    	data(){
            return{
                isHome:false,
                working:true,
                isUserCenter:false,
                workTime:''
            }
        },
        created () {
            this.workTime = new Date().getFullYear()+'-'+((new Date().getMonth()+1)<10? "0"+(new Date().getMonth()+1):(new Date().getMonth()+1))+'-'+new Date().getDate();
            if(new Date().getTime()-new Date(this.workTime+' 13:00:00').getTime()>0) {
                this.working = false
            }
        },
        mounted(){
            console.log(this.$router.currentRoute.path)
            if(this.$router.currentRoute.path=='/') {
                this.isHome = true
            } else if(this.$router.currentRoute.path=='/taskCenter/index') {
                this.isTaskCenter = true
            } else if(this.$router.currentRoute.path=='/userCeneter/index') {
                this.isUserCenter = true
            }
        },
        computed: {
            
        },
        methods: {
            getPath(path) {
                this.$router.push({ 
                    path: path, 
                })
            }
        },

    }

</script>

<style lang="css">
    .footbar{
        position: fixed;
        bottom: 0;
        width: 100%;
        /* height: 1.3rem; */
        z-index: 9999;
        background: #e9eff7 !important;
    }
    .footbar ul {
        margin: 0.3rem 0.3rem 0.4rem;
        background: #fff;
        border-radius: 0.16rem;
    }
    .footbar ul li {
        float: left;
        /* font-size: 0.28rem; */
        text-align: center;
        width:33.333%;
    }
    .footbar ul li img{
        display: inline-block;
        width: 0.5rem;
        height: 0.5rem;
        margin-top: 0.1rem;
    }
    .footbar ul li:nth-child(2) img{
        display: inline-block;
        width: 0.9rem;
        height: 0.9rem;
    }
    .footbar ul li p{
        color: #75797d;
        font-size:0.3rem;
        margin-bottom: 0.1rem;
    }
    .footbar ul li .red_color {
        color: #4781fe
    }
</style>
