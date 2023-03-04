import axios from "../axios/index.js";
import {toast} from "vue3-toastify";
import t from "../main.js"

export default {
    state() {
        return {
            document_template_list: [],
            document_template: {},
            input_type_list: [],
        }
    },
    getters: {
        get_document_template_list(state) {
            return state.document_template_list
        },
        get_document_template(state) {
            return state.document_template
        },
        get_input_type_list(state) {
            return state.input_type_list
        }
    },
    mutations: {
        update_document_template_list(state, data) {
            state.document_template_list = data
        },
        update_document_template(state, data) {
            state.document_template = data
        },
        update_input_type_list(state, data) {
            state.input_type_list = data
        }
    },
    actions: {
        load_document_template_list(context, params) {
            axios.get(`get-doc-template-list?page=${params.page}&limit=${params.limit}&appeal_type_id=${params.appeal_type_id || '-'}&locale=${localStorage.getItem('locale')}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(res => {
                context.commit('update_document_template_list', res.data)
            })
        },
        load_document_template(context, params) {
            axios.post(`get-doc-template`, {
                id: params.id,
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_document_template', res.data.data)
            })
        },
        load_input_type_list(context) {
            axios.get(`get-input-type-list?locale=${localStorage.getItem('locale')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_input_type_list', res.data.data)
            })
        },
        update_document_doc_template(context, params) {
            axios.post(`document-template/update-document-template-content`, {
                ...params,
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                toast.success(t('Документ успешно обновлен'), {autoClose: 2000})
            })
        },
        create_document_template(context, params) {
            axios.post(`document-template/create-document-template`, {
                ...params,
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                toast.success(t('Документ успешно создан'), {autoClose: 2000})

            })
        },
        update_doc_type(context, params) {
            axios.post(`document-template/document-type-update`, {
                ...params,
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                toast.success(t('Изменения внесены'), {autoClose: 2000})
                context.dispatch('load_doc_type_list')
            })
        },
        delete_doc_type(context, params) {
            axios.post(`document-template/document-type-delete`, {
                ...params,
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                toast.success(t('Удалено'), {autoClose: 2000})
                context.dispatch('load_doc_type_list')
            }).catch(e=>{
                toast.error(t('К этому типу привязаны документы, вы не можете его удалить'), {autoClose: 2000})

            })
        }
    },
}