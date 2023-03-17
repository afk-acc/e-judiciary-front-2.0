import axios from "../axios/index.js";
import {toast} from "vue3-toastify";
import t from "../main.js"

export default {
    state() {
        return {
            document_template_list: [],
            document_template: {},
            input_type_list: [],
            template_list: [],
        }

    },
    getters: {
        get_document_template_list(state) {
            return state.document_template_list
        },
        get_document_template(state) {
            return state.document_template
        },
        get_template_list(state) {
            return state.template_list
        },
        get_input_type_list(state) {
            return state.input_type_list
        }
    },
    mutations: {
        update_template_list(state, data) {
            state.template_list = data;
        },
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
        load_template_list(context, params) {
            axios.get(`document-template/get-doc-value-list?page=${params.page}&limit=${params.limit}&locale=${localStorage.getItem('locale')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_template_list', res.data)
            })
        },
        delete_template_list(context, params) {
            axios.delete(`document-template/delete-doc-value-list/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                toast.success(t('Список удален'), {autoClose: 2000})
                context.dispatch('load_template_list', params)
            }).catch(er => {
                toast.error(t('Список не удален'), {autoClose: 2000})

            })
        },
        add_template_list(context, params) {
            axios.post(`document-template/create-doc-value-list`, params, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                toast.success(t('Список добавлен'), {autoClose: 2000})
                context.dispatch('load_template_list', {page: params.page, limit: params.limit})
            }).catch(er => {
                toast.error(t('Список не добавлен'), {autoClose: 2000})

            })
        },
        update_template_list(context, params) {
            axios.post(`document-template/update-doc-value-list/${params.id}`, params, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                toast.success(t('Список обновлен'), {autoClose: 2000})
                context.dispatch('load_template_list', {page: params.page, limit: params.limit})
            }).catch(er => {
                toast.error(t('Список не обновлен'), {autoClose: 2000})

            })
        },
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
            for (let i = 0; i < params.doc_content.length; i++) {
                if (params.doc_content[i].text)
                    params.doc_content[i].text = params.doc_content[i].text.replaceAll('\n', '<br>')
            }
            params.doc_content = params.doc_content.sort((a, b)=>a.position - b.position - 1);
            for(let i = 0;i<params.doc_content.length;i++){
                params.doc_content[i].fields = params.doc_content[i].fields.sort((a, b)=>a.position - b.position - 1);
            }
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
            params.doc_content = params.doc_content.sort((a, b)=>a.position - b.position - 1);
            for(let i = 0;i<params.doc_content.length;i++){
                params.doc_content[i].fields = params.doc_content[i].fields.sort((a, b)=>a.position - b.position - 1);
            }
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
            }).catch(e => {
                toast.error(t('К этому типу привязаны документы, вы не можете его удалить'), {autoClose: 2000})

            })
        }
    },
}