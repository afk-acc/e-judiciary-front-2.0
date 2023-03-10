import axios from "../axios/index.js";

export default {
    state() {
        return {
            faq_list: [],
        }
    },
    getters: {
        get_faq_list(state) {
            return state.faq_list
        }
    },
    mutations: {
        update_faq_list(state, data) {
            state.faq_list = data;
        }
    },
    actions: {
        load_faq_list(context, page) {
            axios.get(`get-site-faq?page=${page}&limit=10&locale=${localStorage.getItem('locale')}`).then(res => {
                context.commit('update_faq_list', res.data)
            })
        },
        update_faq(context, params) {
            axios.post(`update-faq/${params.id}`, {faq: params}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('load_faq_list', params.page);
            })
        },
        remove_faq(context, params) {
            axios.delete(`faq/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('load_faq_list', params.page)
            })
        },
        create_faq(context, params) {
            axios.post(`create-faq`, params, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('load_faq_list',params.page)
            })
        }
    },
}