import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
// 导入组件库
import BlazeUI from '../lib/blaze.umd'
import '../lib/blaze.css'
// 注册组件库
Vue.use(BlazeUI)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
