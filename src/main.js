import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueSweetalert2 from 'vue-sweetalert2';
import JwPagination from 'jw-vue-pagination';



Vue.component('jw-pagination', JwPagination);
Vue.use(VueSweetalert2)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
