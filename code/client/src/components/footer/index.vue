<template>
    <div class="footbar">
        <ul class="cf">
            <li @click="getPath('/')">
                <img src="../../images/tab1.png"/>
                <p :class="{red_color:isHome}">
                    首页
                </p>
            </li>
            <li @click="getPath('/taskCenter/index')">
                <img src="../../images/tab2.png"/>
                <p :class="{red_color:isTaskCenter}">
                    任务中心
                </p>
            </li>
            <li @click="getPath('/userCeneter/index')">
                <img src="../../images/tab3.png"/>
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
                isTaskCenter:false,
                isUserCenter:false
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
        position:fixed;
        bottom:0;
        width:100%;
        background:#f7f7fa;;
        border-top:1px solid #e6e6e6; 
        height:62px;
    }
    .footbar ul {
        margin-top: 5px
    }
    .footbar ul li {
        float: left;
        font-size: 0.3rem;
        text-align: center;
        width:33.333%
    }
    .footbar ul li img{
        display: inline-block;
        width: 27px;
        height: 27px;
    }
    .red_color {
        color: red
    }
</style>
