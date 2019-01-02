const homeCenter = () =>
    import('../../views/home/homeCenterMain');
const indexMain = () =>
    import('../../views/home/index/index')
const becomeVip = () =>
    import('../../views/home/children/becomeVip/index')
const promotionLinks = () =>
    import('../../views/home/children/promotionLinks/index')
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
            { // 任务类型
                path: '/becomeVip',
                name: 'becomeVip',
                component: becomeVip,
                meta: {
                    requiresAuth: true
                }
            },
            { // 我的任务
                path: '/promotionLinks',
                name: 'promotionLinks',
                component: promotionLinks,
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