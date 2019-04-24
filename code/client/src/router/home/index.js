const homeCenter = () =>
    import('../../views/home/homeCenterMain');
const indexMain = () =>
    import('../../views/home/index/index')
const becomeVip = () =>
    import('../../views/home/children/becomeVip/index')
const promotionLinks = () =>
    import('../../views/home/children/promotionLinks/index')
const earnCommission = () =>
    import('../../views/home/children/earnCommission/index')
const onlineService = () =>
    import('../../views/home/children/onlineService/index')
const join = () =>
    import('../../views/home/children/join/index')
const intelligentRobot = () =>
    import('../../views/home/children/intelligentRobot/index')
const notOpen = () =>
    import('../../views/home/children/notOpen')

let indexArr = [
    { // 任务首页
        path: '/',
        component: homeCenter,
        meta: {
            requiresAuth: false
        },
        children: [
            {
                path: '',
                name: 'indexMain',
                component: indexMain,
                meta: {
                    requiresAuth: false
                }
            },
            { // 
                path: '/becomeVip',
                name: 'becomeVip',
                component: becomeVip,
                meta: {
                    requiresAuth: true
                }
            },
            { // 
                path: '/promotionLinks',
                name: 'promotionLinks',
                component: promotionLinks,
                meta: {
                    requiresAuth: true
                }
            },
            { // 
                path: '/earnCommission',
                name: 'earnCommission',
                component: earnCommission,
                meta: {
                    requiresAuth: true
                }
            },
            { // 
                path: '/onlineService',
                name: 'onlineService',
                component: onlineService,
                meta: {
                    requiresAuth: true
                }
            },
            { // 
                path: '/join',
                name: 'join',
                component: join,
                meta: {
                    requiresAuth: true
                }
            },
            { // 智能机器人
                path: '/intelligentRobot',
                name: 'intelligentRobot',
                component: intelligentRobot,
                meta: {
                    requiresAuth: true
                }
            },
            { // 暂未开放
                path: '/notOpen',
                name: 'notOpen',
                component: notOpen,
                meta: {
                    requiresAuth: false
                }
            }
        ]
    }
]
export default indexArr