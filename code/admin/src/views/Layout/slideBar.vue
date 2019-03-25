<template>
<div class="silde-bar-wrapper">
    <el-menu class="el-menu-vertical" :default-active="$route.path" unique-opened router :collapse="$store.state.app.slideBar.opened">

        <template v-for="item in routesArr">
            <el-menu-item v-if="!item.hidden&&!item.dropdown" :index="(item.path === '/'?item.path:item.path+'/') + item.children[0].path">
                <Icon :name="item.icon" class="slide-icon"></Icon>
                <span slot="title">{{item.name}}</span>
            </el-menu-item>
            <el-submenu v-if="!item.hidden&&item.dropdown" :index="item.path">
                <template slot="title">
                    <Icon :name="item.icon" class="slide-icon"></Icon>
                    <span>{{item.name}}</span>
                </template>
                <template v-for="child in item.children">
                    <el-menu-item :index="item.path + '/' +child.path">{{child.name}}</el-menu-item>
                </template>
            </el-submenu>
        </template>

    </el-menu>
</div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse: true,
                routesArr :[]
            }
        },
        created() {
            let dataArr = this.$store.state.permission.routes
            if(sessionStorage.getItem("proxyFlag") == 1) {
                if(dataArr&&dataArr.length>0) {
                    dataArr.forEach(item => {
                        let flag = true
                        if(item.name=='系统设置'|| item.name=='任务管理' || item.name=='商品管理') {
                            flag = false
                        }
                        if(item.name=='用户管理') {
                            let itemArr = []
                            item.children.forEach(element => {
                                if(element.name != 'vip奖品管理') {
                                    itemArr.push(element)
                                }
                            });
                            item.children = itemArr
                        }
                        if(flag) {
                            this.routesArr.push(item)
                        }
                    });
                }
            } else {
                this.routesArr = dataArr
            }
console.log(this.$store.state.permission.routes)
        },
        methods: {
            demo (path, child) {
                console.log(path, child);
                return path
            }
        }
    };
</script>

<style lang="less" scoped>
    .silde-bar-wrapper {
        .el-menu-vertical:not(.el-menu--collapse) {
            width: 200px;
            height: 100%;
        }
        .el-menu-vertical {
            height: 100%;
        }
        .el-menu {
            border-right: none;
        }
        .slide-icon {
            width: 24px;
            font-size: 20px;
            text-align: center;
            vertical-align: middle;
        }
    }
</style>