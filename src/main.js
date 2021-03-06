// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'
import axios from 'axios'
import mockdata from "./mock"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'jsoneditor/dist/jsoneditor.min.css'
import components from './components/common'
import i18n from './i18n/i18n';
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.use(ElementUI)


//通过原型全局引用axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false
components.map(component => {
	Vue.component(component.name, component);
});


Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
