import axios from "../axios/index.js";
import {toast} from "vue3-toastify";
import t from '../main.js'

export default {
    state() {
        return {
            current_user: {},
            is_auth: '',
            user_docs: [],
            lawyer_list: [],
        }
    },
    getters: {
        get_lawyer_list(state) {
            return state.lawyer_list
        },
        get_user_docs(state) {
            return state.user_docs;
        },
        getCurrentUser(state) {
            return state.current_user;
        },
        getIsAuth(state) {
            return state.is_auth;
        }
    },
    mutations: {
        update_lawyer_list(state, data) {
            state.lawyer_list = data
        },
        update_user_docs(state, data) {
            state.user_docs = data
        },
        updateCurrentUser(state, data) {
            state.current_user = data;
        },
        updateIsAuth(state, data) {
            state.is_auth = data;
        }
    },
    actions: {
        load_lawyer_list(context, params) {
            axios.get(`all_lawyers?locale=${localStorage.getItem('locale')}&page=${params.page}&limit=${params.limit}`)
                .then(res => {
                    context.commit('update_lawyer_list', res.data)
                })
        },

        load_doc_list(context, params) {
            axios.get(`all-documents?locale=${localStorage.getItem('locale')}&limit=${params.limit}&page=${params.page}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_user_docs', res.data)
            })
        },
        loadCurrentUser(context) {
            axios.post(`current-user`, {
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('updateCurrentUser', res.data.data)
                context.commit('updateIsAuth', true)
            }).catch(res => {
                context.commit('updateIsAuth', false)
                localStorage.removeItem('token')
                // window.location = 'http://localhost:5173'
            })
        },
        authorize(context, param) {
            axios.post(`auth/login`, {
                login: param.login,
                password: param.password,
                locale: localStorage.getItem('locale')
            }).then(res => {
                localStorage.setItem('token', res.data.access_token);
                context.commit('updateIsAuth', true)
                toast.success(t('Успешная авторизация'), {autoClose: 1500})
            }).catch(e => {
                localStorage.removeItem('token');
                context.commit('updateIsAuth', false);
                let mes = e.response.data.errors;
                console.log(mes)
                for (let i in mes) {
                    mes[i].forEach(el => {
                        toast.error(el, {autoClose: 3000})
                    })
                }
            })
        },
        register(context, login) {
            axios.post(`auth/register`, {
                login: login.login,
                password: login.password,
                password_confirm: login.password_repeat,
                locale: localStorage.getItem('locale')
            }).then(res => {
                localStorage.setItem('token', res.data.access_token);
                context.commit('updateIsAuth', true)
                toast.success(t('Вы успешно зарегистрировались'), {autoClose: 1500})
            }).catch(e => {
                localStorage.removeItem('token');
                context.commit('updateIsAuth', false)
                let mes = e.response.data.errors;
                for (let i in mes) {
                    mes[i].forEach(el => {
                        toast.error(el, {autoClose: 3000})
                    })
                }
            })

        }


    }
}