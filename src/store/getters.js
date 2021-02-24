// getters可认为是 store 的计算属性
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  routes: state => state.permission.routes,
  name: state => state.user.name
}
export default getters
