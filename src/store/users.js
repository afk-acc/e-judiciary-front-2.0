import axios from '../axios/index'
import {toast} from "vue3-toastify";
import t from '../main.js'

export default {
    state() {
        return {
            users_list: {},
            role_list: []
        }
    },
    getters: {
        getUsersList(state) {
            return state.users_list
        },
        getRoleList(state) {
            return state.role_list;
        }
    },
    mutations: {
        updateUsersList(state, data) {
            state.users_list = data
        },
        updateRoleList(state, data) {
            state.role_list = data
        }
    },
    actions: {
        update_user(context, params) {
            let fd = new FormData();
            fd.set('education_place', params.education_place)
            fd.set('education_start', params.education_start)
            fd.set('education_end', params.education_end)
            fd.set('work_experience', params.work_experience)
            fd.set('country', params.country)
            fd.set('city', params.city)
            fd.set('languages', params.languages)
            fd.set('bio', params.bio)
            fd.set('locale', localStorage.getItem('locale'))
            fd.set('role', params.role_id)
            if (params.new_image)
                fd.set('image', params.new_image)
            if (params.new_lawyer_file)
                fd.set('lawyer_file', params.new_lawyer_file)

            axios.post(`user/${params.id}/update`, fd, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('loadCurrentUser')
                toast.success(t('Вы успешно обновили свои данные'), {autoClose: 1500})
            }).catch(e => {
                let mes = e.response.data.errors;
                for (let i in mes) {
                    mes[i].forEach(el => {
                        toast.error(el, {autoClose: 2000})
                    })
                }
            })
        },
        loadUsersList(context, params) {
            axios.get(`users-list?query=${params.query}&page=${params.page}&limit=${params.limit}&locale=${localStorage.getItem('locale')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('updateUsersList', res.data)
            })
        },
        loadRoleList(context) {
            axios.get(`role?locale=${localStorage.getItem('locale')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('updateRoleList', res.data.data)
            })
        },
        changeUserRole(context, par) {
            axios.post(`user/${par.user_id}/update`, {
                role: par.role,
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.dispatch('loadUsersList', {
                    limit: 15,
                    page: par.page,
                    locale: localStorage.getItem('locale'),
                    query: ''
                })
                toast.success(t('Роль успешно обновлена'), {autoClose: 1500})

            })
        }

    }

}