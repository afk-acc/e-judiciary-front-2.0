import index from '../pages/site/index.vue'
import {createRouter, createWebHistory} from "vue-router";
import service from "../pages/site/service.vue";
import base from "../pages/site/base.vue";
import designer from "../pages/site/designer.vue";
import signIn from "../pages/site/sign-in.vue";
import signUp from "../pages/site/sign-up.vue";
import profile from "../pages/profile/index.vue";
import info from "../pages/profile/profileInfo.vue"
import appeals from "../pages/profile/appeals.vue";
import docuements from "../pages/profile/documents.vue";
import documents from "../pages/profile/documents.vue";
import lawyers from "../pages/site/lawyers.vue";
import appeal from "../pages/profile/appeal.vue";
import users from "../pages/profile/users.vue";
import requests from "../pages/profile/requests.vue";
import role from "../pages/profile/role.vue";
import reports from "../pages/profile/reports.vue";
import chat from "../pages/profile/chat.vue";
import history from "../pages/profile/history.vue";
import contacts from "../pages/site/contacts.vue";
import faq from '../pages/site/faq.vue'
import appealsForLawyers from "../pages/profile/appealsForLawyers.vue";
const routes = [
    {
        path: '/',
        component: index,
        name: "main"
    },

    {
        path: '/index',
        component: base,
        name: 'base',
        children: [
            {
                path: '',
                component: base,
            },
            {
                path: 'service/:page',
                component: service,
                name: 'service',
            },
            {
                path: "/constructor/:name",
                component: designer,
                name: 'constructor'
            },
            {
                path: 'lawyers/:page',
                component: lawyers,
                name: 'lawyers'
            },
            {
                path:'contacts',
                component: contacts,
                name: 'contacts'
            },
            {
                path:'faq',
                component: faq,
                name: 'faq'
            },


        ],
    },
    {
        path: '/sign-in',
        component: signIn,
        name: 'sign-in'
    },
    {
        path: '/sign-up',
        component: signUp,
        name: 'sign-up'
    },
    {
        path: '/profile',
        component: profile,
        children: [
            {
                path: "",
                name: 'profile-base'
            },
            {
                path: 'info',
                component: info,
                name: 'info'
            },
            {
                path: 'questions/:page',
                component: appeals,
                name: 'appeals',
            },
            {
              path: 'appeals-lawyer/:page',
              component: appealsForLawyers,
              name: 'lawyer-appeals'
            },

            {
                path: 'documents/:page',
                component: documents,
                name: 'documents'
            },
            {
                path: 'users-list/:page',
                component: users,
                name: 'users-list'
            },
            {
                path: 'requests/:page',
                component: requests,
                name: 'requests'
            },
            {
                path: 'roles/:page',
                component: role,
                name: 'roles'
            },
            {
                path: 'history/:page',
                component: history,
                name: 'history'
            },
            {
                path: '/reports/:page',
                component: reports,
                name: 'reports'
            },
            {
                path: '/chat',
                component: chat,
                name: 'chat'
            }
        ],
    },
    {
        path: '/question/info/:id',
        component: appeal,
        name: 'appeal-info',
    },




]

export default new createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active-link',
    routes
})