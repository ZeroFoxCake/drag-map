import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
    
import VueDragResize from 'vue-drag-resize'
import VueCodemirror from 'vue-codemirror'
import router from '@/router'

import './base.less'
import 'element-ui/lib/theme-chalk/index.css'
import 'codemirror/lib/codemirror.css'


Vue.config.productionTip = false

Vue.component('vue-drag-resize', VueDragResize)

Vue.use(ElementUI)
Vue.use(VueCodemirror)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
