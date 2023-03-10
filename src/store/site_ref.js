import axios from "../axios/index.js";

export default {
    state() {
        return {
            site_ref_list: [],
        }
    },
    getters: {
        get_site_ref_list(state) {
            return state.site_ref_list
        }
    },
    mutations: {
        update_site_ref_list(state, data) {
            state.site_ref_list = data;
        }
    },
    actions: {
        load_site_ref_list(context, page) {
            axios.get(`get-site-ref?page=${page}&limit=10&locale=${localStorage.getItem('locale')}`).then(res => {
                context.commit('update_site_ref_list', res.data)
            })
        },
        update_site_ref(context, params) {
            axios.post(`update-site-ref/${params.id}`, {site_ref: params}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('load_site_ref_list', params.page);
            })
        },
        remove_site_ref(context, params) {
            axios.delete(`site-ref/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('load_site_ref_list', params.page)
            })
        },
        create_site_ref(context, params) {
            axios.post(`create-site-ref`, params, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('load_site_ref_list',params.page)
            })
        }
    },
}