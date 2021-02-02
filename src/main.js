import Vue from 'vue'
import App from './app/App.vue'
import { store } from './app/features/Todo/todo_state.js'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
