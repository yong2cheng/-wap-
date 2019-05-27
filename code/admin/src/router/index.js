import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const _import_ = file => () => import('views/' + file + '.vue')

export const constantRouterMap = [
    { path: '/login', name: '登录', component: _import_('Login/index'), hidden: true },
    // { 
    //     path: '/', 
    //     name: '首页', 
    //     component: _import_('Layout/index'),
    //     redirect: '/home',
    //     icon: 'homel',
    //     children: [
    //         { path: 'home', component: _import_('Home/index'), name: '首页' }
    //     ]
    // }
    {
        path: '',
        name: '用户管理',
        // meta: { role: ['admin'] },
        component: _import_('Layout/index'),
        redirect: 'list',
        // requireAuth: true, // 是否需要登录
        dropdown: true,
        icon: 'authority',
        children: [
            { path: 'list', component: _import_('Permission/list/index'), name: '用户列表' },
            // { path: 'add', component: _import_('Permission/add/index'), name: '添加管理员' }
            { path: 'vipAwards', component: _import_('Permission/vipAwards/index'), name: 'vip奖品管理' },
        ]
    },
]
export const asyncRouterMap = [
    // {
    //     path: '/permission',
    //     name: '用户管理',
    //     meta: { role: ['admin'] },
    //     component: _import_('Layout/index'),
    //     redirect: '/permission/list',
    //     requireAuth: true, // 是否需要登录
    //     dropdown: true,
    //     icon: 'authority',
    //     children: [
    //         { path: 'list', component: _import_('Permission/list/index'), name: '用户列表' },
    //         // { path: 'add', component: _import_('Permission/add/index'), name: '添加管理员' }
    //     ]
    // },
    // {
    //     path: '/task',
    //     name: '任务管理',
    //     component: _import_('Layout/index'),
    //     redirect: '/task/list',
    //     dropdown: true,
    //     icon: 'zuowen',
    //     children: [
    //         { path: 'list', component: _import_('Task/tasklist/index'), name: '任务列表' },
    //         { path: 'add', component: _import_('Task/add/index'), name: '新增任务' },
    //         { path: 'reviewedList', component: _import_('Task/reviewedList/index'), name: '任务审核' },
    //     ]
    // },
    {
        path: '/integral',
        name: '积分管理',
        component: _import_('Layout/index'),
        redirect: '/integral/list',
        dropdown: true,
        icon: 'zuowen',
        children: [
            { path: 'list', component: _import_('Integral/integrallist/index'), name: '积分列表' },
            { path: 'statistics', component: _import_('Integral/integralStatistics/index'), name: '积分统计' },
            { path: 'exchange', component: _import_('Integral/integrallExchange/index'), name: '提现列表' },
            // { path: 'robot', component: _import_('Integral/robotList/index'), name: 'AI机器人购买列表' },
        ]
    },
    // {
    //     path: '/shopping',
    //     name: '商品管理',
    //     component: _import_('Layout/index'),
    //     redirect: '/shopping/list',
    //     dropdown: true,
    //     icon: 'zuowen',
    //     children: [
    //         { path: 'list', component: _import_('Shopping/shoppingList/index'), name: '商品列表' },
    //         { path: 'add', component: _import_('Shopping/add/index'), name: '新增商品' },
    //     ]
    // },
    {
        path: '/sysSetting',
        name: '系统设置',
        component: _import_('Layout/index'),
        redirect: '/sysSetting/index',
        dropdown: true,
        icon: 'zuowen',
        children: [
            // { path: 'index', component: _import_('sysSetting/index/index'), name: '会员条件查看' },
            // { path: 'reward', component: _import_('sysSetting/reward/index'), name: '任务奖励列表' },
            { path: 'reward', component: _import_('sysSetting/rebate/index'), name: '返利设置' },
            { path: 'announcement', component: _import_('sysSetting/announcement/index'), name: '公告配置' },
        ]
    }
]

export const router = new Router({
    // mode: 'history',
    routes: constantRouterMap
})

