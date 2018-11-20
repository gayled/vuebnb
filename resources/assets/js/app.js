import "core-js/fn/object/assign";
import Vue from 'vue';
import App from '../components/App.vue';
import ListingPage from '../components/ListingPage.vue';
import router from './router.js';
import store from './store';

var app = new Vue({ //configuration object
    el: '#app', //mount point 
    render: h => h(App),
    router,
    store
});