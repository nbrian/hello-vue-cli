import Vue from 'vue';
import VueMdl from 'vue-mdl';


// import vueCustomElement from 'vue-custom-element';

import App from './App.vue';
import Message from './Message.vue';
import ExampleComponent from './ExampleComponent.vue';

import CountriesInput from './CountriesInput.vue';
import MdlSelect from './MdlSelect.vue';

// Vue.config.ignoredElements = [
//   'example-component'
// ];

// Vue.use(vueCustomElement);

Vue.use(VueMdl);


Vue.component('example-component', ExampleComponent);
Vue.component('app-message', Message);

Vue.component('countries-input', CountriesInput);
Vue.component('mdl-select', MdlSelect);

new Vue({
    el: '#app',
    render: h => h(App)
})