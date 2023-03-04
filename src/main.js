import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import store from "./store/index.js";
import router from "./router/index.js";
import "./style/app.css";
import {languages, defaultLocale} from "./lang/index.js";
import {createI18n} from "vue-i18n";
import axios from "./axios/index.js";
import VueAxios from "vue-axios";
import 'vue3-toastify/dist/index.css';
import {QuillEditor} from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import pusher from './pusher'
import VueNumber from "vue-number-animation";
const localeLocalStorage = localStorage.getItem("locale");
const messages = Object.assign(languages);
const i18n = createI18n({
    legacy: false,
    locale: localeLocalStorage || defaultLocale,
    fallbackLocale: "ru",
    messages,
});

const app = createApp(App)

app.use(store);
app.use(router);
app.use(i18n);
app.use(VueNumber);

app.component('QuillEditor', QuillEditor)
app.use(VueAxios, axios);
app.use(pusher, {
    wsHost: 'api.e.sjco.uz',
    wsPort:80,
    wssPort:443,
    encrypted:true,
    enabledTransports:[ 'ws', 'wss'],
    apiKey: 'e-judiciary-app-key', forceTLS: false,
    cluster: "mt1",
    authEndpoint: "https://api.e.sjco.uz/api/v1/pusher/auth",
    auth: {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
    },
    userAuthentication: {
        endpoint: "https://api.e.sjco.uz/api/v1/pusher/auth",
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
        },

    },
})
app.mount('#app')
export default i18n.global.t