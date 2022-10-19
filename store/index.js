// 全局操作
export const state = () => ({
  token: '',//后台返回token
  userName: 'admin',
  secretKey: "mas20220520",//秘钥
  subTabId: '',//二级菜单选中项id
  tabList: [],//菜单列表
})
export const mutations = {
  setToken(state, token) {
    state.token = token;
    this.$cookies.set('token', token)
  },
  getToken(state) {
    state.token = this.$cookies.get('token')
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
    this.$cookies.set('userInfo', userInfo)
  },
  getUserInfo(state) {
    state.userInfo =  this.$cookies.get('userInfo');
  },

  setSubTabId(state, data) {
    state.subTabId = data
    this.$cookies.set('subTabId', data)
  },
  setTabList(state, data) {
    state.tabList = data
    this.$cookies.set('tabList', data)
  },
}
export const actions={
  nuxtServerInit(store,content){
    //store:vuex上下文 content:nuxt上下文
    // store.commit('setToken','admin');
    store.commit('getToken');
    store.commit('getUserInfo');
    store.commit('setSubTabId', this.$cookies.get('subTabId'));
    store.commit('setTabList', this.$cookies.get('tabList'));
    // console.log(store.state.subTabId, 'nuxtServerInit')
  }
}
