const getters = {
    userName: state => state.user.username,
    userList: state =>state.user.list,
    userTotal: state =>state.user.userTotal,

    intergralList: state => state.integral.list,
    intergralTotal: state => state.integral.total,

    sysSettingList: state => state.sysSetting.list,
    sysSettingTotal: state => state.sysSetting.total,
    goodsList: state => state.sysSetting.goodsList,
    taskRewardlist: state => state.sysSetting.taskRewardlist,
    taskRewardtotal: state => state.sysSetting.taskRewardtotal,
    sysStatus: state => state.sysSetting.status,

    sources: state => state.task.sources,
    taskList: state => state.task.list,
    taskTotal: state => state.task.total,
    opertionStatus: state => state.task.status,

    shoppingList: state => state.shopping.list,
    shoppingTotal: state => state.shopping.total,
    shoppingStatus: state => state.shopping.status,
}
export default getters