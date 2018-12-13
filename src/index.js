import BlButton from '../packages/button/index'
import BlSlide from '../packages/slide/index'

const components = [BlButton, BlSlide]
const install = function (Vue) {
    if (install.installed) return;
    components.map(component => {
        Vue.use(component)
    })
}
//  全局引用可自动安装
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    install,
    BlButton,
    BlSlide
}
