import App from './App'
import uvUI from '@/uni_modules/uv-ui-tools'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // 如果你需要中文的星期，需加载对应的语言包
import VueCompositionAPI from '@vue/composition-api'
dayjs.locale('zh-cn'); // 设置语言为中文
import Vant from './node_modules/vant/lib/vant';
import store from './store'
import '@/common/date-format.js'
Vue.use(VueCompositionAPI)
Vue.use(uvUI);
Vue.prototype.$store = store
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
Vue.use(Vant);
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
