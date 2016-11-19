// Import.
import Vue from 'vue'
import VueResource from 'vue-resource'

import Focused from './components/Focused.vue'

// Register directives.
Vue.use(VueResource)


// Instantiate app.
const app = new Vue({
  replace: false,
  components: {
    'Focused': Focused
  }
}).$mount('#main')