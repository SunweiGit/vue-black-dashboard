/*
 =========================================================
 * Vue Black Dashboard - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";
import VueLazyload from 'vue-lazyload'

const instance = axios.create({timeout: 1000, baseURL: "http://localhost:8000"})
import BlackDashboard from "./plugins/blackDashboard";
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import i18n from "./i18n"
import './registerServiceWorker'

Vue.use(BootstrapVueIcons);
Vue.use(BootstrapVue);
Vue.use(VueLazyload);
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(VueAxios, instance)
/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  Vue,
  render: h => h(App)
}).$mount("#app");
/*axios 拦截器*/
axios.interceptors.response.use(response => {
  debugger;
  return response;
}, error => {
  if (error.response) {
    switch (error.response.status) {
      // 返回401，清除token信息并跳转到登录页面
      case 401:
        localStorage.removeItem('token');
        router.replace({
          path: '/login'
          //登录成功后跳入浏览的当前页面
          // query: {redirect: router.currentRoute.fullPath}
        })
    }
    // 返回接口返回的错误信息
    return Promise.reject(error.response.data);
  }
});

