// 个人中心
const userCeneter = () =>
    import('../../views/userCeneter/userCenterMain');
const indexMain = () =>
    import('../../views/userCeneter/index/index')
const integralMall = () =>
    import('../../views/userCeneter/children/integralMall')
const integralRecord = () =>
    import('../../views/userCeneter/children/integralRecord')
const integraExchangeHistory = () =>
    import('../../views/userCeneter/children/integraExchangeHistory')
const vipAwards = () =>
    import('../../views/userCeneter/children/vipAwards')
const userSetting = () =>
    import('../../views/userCeneter/children/userSetting/settingMain')
const settingMain = () =>
    import('../../views/userCeneter/children/userSetting/index/index')
const harvestAddressIndex = () =>
    import('../../views/userCeneter/children/userSetting/harvestAddress/index')
const harvestAddressAdd = () =>
    import('../../views/userCeneter/children/userSetting/harvestAddress/add')
const harvestAddressEdit = () =>
    import('../../views/userCeneter/children/userSetting/harvestAddress/edit')
const myBankCardIndex = () =>
    import('../../views/userCeneter/children/userSetting/myBankCard/index')
const myBankCardAdd = () =>
    import('../../views/userCeneter/children/userSetting/myBankCard/add')     
const updataPassword = () =>
    import('../../views/userCeneter/children/userSetting/updataPassword/index')  
const alipay = () =>
    import('../../views/userCeneter/children/userSetting/alipay/index')
    
let indexArr = [
    { // 任务首页
        path: '/userCeneter/index',
        component: userCeneter,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '',
                name: 'indexMain',
                component: indexMain,
                meta: {
                    requiresAuth: true
                }
            },
            { // 积分商城
                path: '/userCeneter/integralMall',
                name: 'integralMall',
                component: integralMall,
                meta: {
                    requiresAuth: true
                }
            },
            { // 积分记录
                path: '/userCeneter/integralRecord',
                name: 'integralRecord',
                component: integralRecord,
                meta: {
                    requiresAuth: true
                }
            },
            { // 积分兑换记录
                path: '/userCeneter/integraExchangeHistory',
                name: 'integraExchangeHistory',
                component: integraExchangeHistory,
                meta: {
                    requiresAuth: true
                }
            },
            { // 积分兑换记录
                path: '/userCeneter/vipAwards',
                name: 'vipAwards',
                component: vipAwards,
                meta: {
                    requiresAuth: true
                }
            },
            { // 设置
                path: '/userCeneter/userSetting',
                name: 'userSetting',
                component: userSetting,
                meta: {
                    requiresAuth: true
                },
                children:[
                    {
                        path: '',
                        name: 'settingMain',
                        component: settingMain,
                        meta: {
                            requiresAuth: true
                        }
                    },
                    { 
                        path: '/userSetting/harvestAddress/index',
                        name: 'harvestAddressIndex',
                        component: harvestAddressIndex,
                        meta: {
                            requiresAuth: true
                        }
                    },
                    { 
                        path: '/userSetting/harvestAddress/add',
                        name: 'harvestAddressAdd',
                        component: harvestAddressAdd,
                        meta: {
                            requiresAuth: true
                        }
                    },
                    { 
                        path: '/userSetting/harvestAddress/edit',
                        name: 'harvestAddressEdit',
                        component: harvestAddressEdit,
                        meta: {
                            requiresAuth: true
                        }
                    },
                    { 
                        path: '/userSetting/myBankCard/index',
                        name: 'myBankCardIndex',
                        component: myBankCardIndex,
                        meta: {
                            requiresAuth: true
                        }
                    },
                    { 
                        path: '/userSetting/myBankCard/add',
                        name: 'myBankCardAdd',
                        component: myBankCardAdd,
                        meta: {
                            requiresAuth: true
                        }
                    },
                    { 
                        path: '/userSetting/updataPassword/index',
                        name: 'updataPassword',
                        component: updataPassword,
                        meta: {
                            requiresAuth: true
                        }
                    },
                    { 
                        path: '/userSetting/alipay/index',
                        name: 'alipay',
                        component: alipay,
                        meta: {
                            requiresAuth: true
                        }
                    },
                ]
            },
        ]
    }
]
export default indexArr
