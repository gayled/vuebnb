import "core-js/fn/object/assign";
import Vue from 'vue';
<<<<<<< HEAD
import App from '../components/App.vue';
import ListingPage from '../components/ListingPage.vue';
import router from './router.js';

var app = new Vue({ //configuration object
    el: '#app', //mount point 
    render: h => h(App),
    router
=======
import ListingPage from '../components/ListingPage.vue';

var app = new Vue({ //configuration object
    el: '#app', //mount point 
    render: h => h(ListingPage)
>>>>>>> 206b8754449bd479f9b2756dcf1a9b36113cb18b
});