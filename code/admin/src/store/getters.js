const getters = {
    userName: state => state.user.username,
    userList: state =>state.user.list,
    userTotal: state =>state.user.userTotal,
    provinceList: state => state.user.provinceList,
    cityList: state => state.user.cityList,
    areaList: state => state.user.areaList,
    bankList: state => state.user.bankList,
    subBankList: state => state.user.subBankList,
    userBankList: state => state.user.userBankList,
    userAddressList: state => state.user.userAddressList,

    intergralList: state => state.integral.list,
    intergralTotal: state => state.integral.total,
    totalIncrease: state => state.integral.totalIncrease,
    totalReduce: state => state.integral.totalReduce,
    totalJia: state => state.integral.totalJia,
    totalRecharge: state => state.integral.totalRecharge,

    sysSettingList: state => state.sysSetting.list,
    sysSettingTotal: state => state.sysSetting.total,
    goodsList: state => state.sysSetting.goodsList,
    taskRewardlist: state => state.sysSetting.taskRewardlist,
    taskRewardtotal: state => state.sysSetting.taskRewardtotal,
    sysStatus: state => state.sysSetting.status,
    noticelist: state => state.sysSetting.noticelist,
    noticetotal: state => state.sysSetting.noticetotal,

    sources: state => state.task.sources,
    taskList: state => state.task.list,
    taskTotal: state => state.task.total,
    opertionStatus: state => state.task.status,

    shoppingList: state => state.shopping.list,
    shoppingTotal: state => state.shopping.total,
    shoppingStatus: state => state.shopping.status,
}
export default getters