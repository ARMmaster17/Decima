import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueMaterial from "vue-material";
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";
import SourcesPage from "@/components/SourcesPage";
import store from "@/services/store";

Vue.config.productionTip = false

//if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
//}

Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Login },
    { path: '/dashboard', component: Dashboard/*, meta: { requiresAuth: true }*/},
    { path: '/sources', component: SourcesPage }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
