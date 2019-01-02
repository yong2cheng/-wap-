// 任务中心
const taskCenter = () =>
    import('../../views/taskCenter/taskCenterMain');
const indexMain = () =>
    import('../../views/taskCenter/index/index')
const generaltTask = () =>
    import('../../views/taskCenter/generaltTask/index')
const myTask = () =>
    import('../../views/taskCenter/myTask/index')
const taskDetail = () =>
    import('../../views/taskCenter/taskDetail/index')

let indexArr = [
    { // 任务首页
        path: '/taskCenter/index',
        component: taskCenter,
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
                path: '/taskCenter/generaltTask',
                name: 'generaltTask',
                component: generaltTask,
                meta: {
                    requiresAuth: true
                }
            },
            { // 我的任务
                path: '/taskCenter/myTask',
                name: 'myTask',
                component: myTask,
                meta: {
                    requiresAuth: true
                }
            },
            { // 任务详情
                path: '/taskCenter/taskDetail',
                name: 'taskDetail',
                component: taskDetail,
                meta: {
                    requiresAuth: true
                }
            },
        ]
    }
]
export default indexArr