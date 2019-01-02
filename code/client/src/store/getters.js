const getters = {
    // app
    screen_width: state => state.app.screen_width,
    pc_width: state => state.app.pc_width,
    pc_bol: state => state.app.pc_bol,

    userInfo: state => state.user.info,
    dataList: state => state.user.list,
    provinceList: state => state.user.provinceList,
    cityList: state => state.user.cityList,
    areaList: state => state.user.areaList,
    bankList: state => state.user.bankList,
    subBankList: state => state.user.subBankList,
    // task
    blogTypes: state => state.task.types,
    taskStatus: state => state.task.operStatus,
    taskList: state => state.task.list,
    taskInfo: state => state.task.info,
    taskLoadingMore: state => state.task.loadingMore,
    taskLoadingBol: state => state.task.loadingBol


}
export default getters