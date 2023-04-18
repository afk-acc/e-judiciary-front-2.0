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
import VueTheMask from 'vue-the-mask'
const localeLocalStorage = localStorage.getItem("locale");
const messages = Object.assign(languages);
const i18n = createI18n({
    legacy: false,
    locale: localeLocalStorage || defaultLocale,
    fallbackLocale: "ru",
    messages,
});
const app = createApp(App)
let API_KEYS = [
    'localhost', '96D0C1491615C82B9A54D9989779DF825B690748224C2B04F500F370D51827CE2644D8D4A82C18184D73AB8530BB8ED537269603F61DB0D03D2104ABF789970B',
    '127.0.0.1', 'A7BCFA5D490B351BE0754130DF03A068F855DB4333D43921125B9CF2670EF6A40370C646B90401955E1F7BC9CDBF59CE0B2C5467D820BE189C845D0B79CFC96F'
    // добавьте свой Домен и API-KEY сюда
];
app.use(store);
app.use(router);
app.use(i18n);
app.use(VueNumber);
app.use(VueTheMask)

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
