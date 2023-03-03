import axios from "../axios/index.js";
import {canAccess} from "../assets/functions.js";
import {toast} from "vue3-toastify";
import t from '../main.js'
export default {
    state() {
        return {
            appeals_list: [],
            appeal: {},
            appeal_type: [],
            document_list: [],
            is_created: false,
            send_appeal: false
        }
    },
    getters: {
        get_appeal_list(state) {
            return state.appeals_list
        },
        get_is_created(state) {
            return state.is_created
        },
        get_document_list(state) {
            return state.document_list
        },
        get_appeal_type(state) {
            return state.appeal_type
        },
        get_appeal(state) {
            return state.appeal;
        },
        get_send_appeal(state) {
            return state.send_appeal
        }
    },
    mutations: {
        updateAppeal(state, data) {
            state.appeals_list = data
            
        },
        update_send_appeal(state, data) {
            state.send_appeal = data
        },
        update_is_created(state, data) {
            state.is_created = data
        },
        update_document_list(state, data) {
            state.document_list = data
        },
        update_appeal_type(state, data) {
            state.appeal_type = data;
        },
        update_appeal(state, data) {
            state.appeal = data
        },

    },
    actions: {
        delete_appeal(context, params) {
            axios.delete(`appeal/${params.del_id}`,{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            }).then(res=>{
                context.dispatch('loadAppealList', params.params)
            })
        },
        add_new_appeal(context, params) {
            axios.post('appeal/add', {
                locale: localStorage.getItem('locale'),
                ...params.appeal,
                ...params.doc
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_is_created', true)
                toast.success(t('Вы успешно создали новое обращение'))
                context.commit('update_fields', [])
            }).catch(e => {
                context.commit('update_is_created', false)
                let mes = e.response.data.errors;
                for (let i in mes) {
                    mes[i].forEach(el => {
                        toast.error(el, {autoClose: 2000})
                    })
                }
            })
        },

        load_document_list(context, params) {
            axios.get(`constructor?appeal_type_id=${params.appeal_type_id}&locale=${localStorage.getItem('locale')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_document_list', res.data.data)
            })
        },
        load_appeal_type_list(context, params) {
            axios.get('appeal/type_list?locale=' + localStorage.getItem('locale'), {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_appeal_type', res.data.data)
            })
        },
        loadAppealList(context, params) {
            context.commit('updateAppeal', [])
            if (canAccess(context.getters.getCurrentUser, 'appeal.read') && context.getters.getCurrentUser.role_name === 'lawyer' && params.parametr === 'lawyer') {
                if (params.params === 'new')
                    axios.get(`appeal?locale=${localStorage.getItem('locale')}&page=${params.page}&limit=${params.limit}&query=${params.query}&sort=${params.sort}&par=${params.par}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }).then(res => {
                        context.commit('updateAppeal', res.data)
                    })
                else if (params.params === 'progress') {
                    axios.get(`appeal/lawyers/in_progress?locale=${localStorage.getItem('locale')}&page=${params.page}&limit=${params.limit}&query=${params.query}&sort=${params.sort}&par=${params.par}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }).then(res => {
                        context.commit('updateAppeal', res.data)
                    })
                } else if (params.params === 'ended') {
                    axios.get(`appeal/lawyers/ended?locale=${localStorage.getItem('locale')}&page=${params.page}&limit=${params.limit}&query=${params.query}&sort=${params.sort}&par=${params.par}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }).then(res => {
                        context.commit('updateAppeal', res.data)
                    })
                } else if (params.params === 'all') {
                    axios.get(`appeal/lawyers/all?locale=${localStorage.getItem('locale')}&page=${params.page}&limit=${params.limit}&query=${params.query}&sort=${params.sort}&par=${params.par}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }).then(res => {
                        context.commit('updateAppeal', res.data)
                    })
                }
            } else {
                if (params.params === 'new')
                    axios.get(`appeal?locale=${localStorage.getItem('locale')}&page=${params.page}&limit=${params.limit}&query=${params.query}&sort=${params.sort}&par=${params.par}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }).then(res => {
                        context.commit('updateAppeal', res.data)
                    })
                else if (params.params === 'progress') {
                    axios.get(`appeal/users/in_progress?locale=${localStorage.getItem('locale')}&page=${params.page}&limit=${params.limit}&query=${params.query}&sort=${params.sort}&par=${params.par}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }).then(res => {
                        context.commit('updateAppeal', res.data)
                    })
                } else if (params.params === 'ended') {
                    axios.get(`appeal/users/ended?locale=${localStorage.getItem('locale')}&page=${params.page}&limit=${params.limit}&query=${params.query}&sort=${params.sort}&par=${params.par}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }).then(res => {
                        context.commit('updateAppeal', res.data)
                    })
                } else {
                    axios.get(`appeal/users/all?locale=${localStorage.getItem('locale')}&page=${params.page}&limit=${params.limit}&query=${params.query}&sort=${params.sort}&par=${params.par}`, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }).then(res => {
                        context.commit('updateAppeal', res.data)
                    })
                }
            }
        },
        async load_appeal(context, params) {
            await axios.post(`appeal/${params.id}`, {
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_appeal', res.data.data)
            })
        },
        send_response(context, params) {
            axios.post(`appeal/${params.appeal_id}/send_response`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('load_appeal', {id: params.appeal_id})
                toast.success(t('Ваш отклик успешно доставлен'), {autoClose: 1500})
            });
        },
        ignore_lawyer(context, params) {
            axios.post(`appeal/${params.appeal_id}/lawyer/${params.lawyer_id}/ignore`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('load_appeal', {id: params.appeal_id})
            })
        },
        change_lawyer(context, params) {
            axios.post('appeal/change-lawyer', {
                appeal_id: params.appeal_id,
                lawyer_id: params.lawyer_id,
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('load_appeal', {id: params.appeal_id})
                toast.success(t('Вы успешно выбрали юриста'), {autoClose: 1500})
            })
        },
        send_file(context, params) {
            let fd = new FormData();
            fd.set('document', params.file)
            axios.post('appeal/add_document/' + params.appeal_id, fd, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('load_appeal', {id: params.appeal_id})
                toast.success(t('Вы успешно загрузили ответ'), {autoClose: 1500})
            }).catch(e => {
                let mes = e.response.data.errors;
                for (let i in mes) {
                    mes[i].forEach(el => {
                        toast.error(el, {autoClose: 2000})
                    })
                }
            })
        },
        send_rating(context, params) {
            axios.post('appeal/set-score', {
                appeal_id: params.appeal_id,
                score: params.rating,
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('load_appeal', {id: params.appeal_id})
                toast.success(t('Ваш оценка доставлена'), {autoClose: 1500})
            }).catch(e => {
                let mes = e.response.data.errors;
                for (let i in mes) {
                    mes[i].forEach(el => {
                        toast.error(el, {autoClose: 2000})
                    })
                }
            })
        }
    },
}