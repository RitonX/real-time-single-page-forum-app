
require('./bootstrap');
window.Vue = require('vue');

import vuetify from "./plugins/vuetify";

import App from './components/AppHome';
import router from './Router/router'

const app = new Vue({
    vuetify,
    render: h =>h(App),
    el: '#app',
    router
});

// Vue.component('AppHome', require('./components/AppHome.vue').default);



