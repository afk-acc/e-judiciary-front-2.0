import axios from "../axios/index.js";


export default {
    state() {
        return {
            doc_type_list: [],
            all_doc_list: [],
            fields: [],
            preview: '',
        }

    },
    getters: {
        get_doc_type_list(state) {
            return state.doc_type_list
        },
        get_all_doc_list(state) {
            return state.all_doc_list
        },
        get_fields(state) {
            return state.fields
        },
        get_preview(state) {
            return state.preview
        }
    },
    mutations: {
        update_doc_type_list(state, data) {
            state.doc_type_list = data
        },
        update_all_doc_list(state, data) {
            state.all_doc_list = data
        },
        update_fields(state, data) {
            state.fields = data
        },
        update_preview(state, data) {
            state.preview = data
        }
    },
    actions: {
        load_doc_type_list(context) {
            axios.get(`appeal/type_list?locale=${localStorage.getItem('locale')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_doc_type_list', res.data)
            })

        },
        load_all_doc_list(context, params) {
            axios.get(`appeal/all?query=${params.query}&page=${params.page}&locale=${localStorage.getItem('locale')}&limit=${params.limit}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(res => {
                context.commit('update_all_doc_list', res.data)
            })

        },
        load_fields(context, id) {
            context.commit('update_preview', '')
            axios.get(`constructor/fields/${id}?locale=${localStorage.getItem('locale')}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(res => {
                context.commit('update_fields', res.data.data)
            })
        },
        load_preview(context, params) {
            axios.post(`constructor/document/${params.doc}`, {
                locale: localStorage.getItem('locale'),
                fields: params.fields
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_preview', res.data)
            })

        }
    },
}