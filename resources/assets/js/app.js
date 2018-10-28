import "core-js/fn/object/assign";
import Vue from 'vue';
import ListingPage from '../components/ListingPage.vue';

var app = new Vue({ //configuration object
    el: '#app', //mount point 
    render: h => h(ListingPage)
});