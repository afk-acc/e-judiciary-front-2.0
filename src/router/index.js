import index from '../pages/site/index.vue'
import {createRouter, createWebHistory} from "vue-router";
import service from "../pages/site/service.vue";
import base from "../pages/site/base.vue";
import designer from "../pages/site/designer.vue";
import signIn from "../pages/site/sign-in.vue";
import signUp from "../pages/site/sign-up.vue";
import signUpLawyer from "../pages/site/sign-upLawyer.vue";
import profile from "../pages/profile/index.vue";
import info from "../pages/profile/profileInfo.vue"
import appeals from "../pages/profile/appeals.vue";
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
import document_template_list from "../pages/profile/document_template/document_template_list.vue";
import document_template_page from "../pages/profile/document_template/document_template_page.vue";
import createDocumentTemplate from "../pages/profile/document_template/createDocumentTemplate.vue";
import documentTypeList from "../pages/profile/documentTypeList.vue";
import FAQ from "../pages/profile/FAQ.vue";
import SiteRef from "../pages/profile/SiteRef.vue";
import template_list from "../pages/profile/document_template/template_list.vue";

const routes = [

    {
        path: '/index',
        component: base,
        name: 'base',
        children: [
            {
                path: '/',
                component: index,
                name: "main"
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
                path: 'contacts',
                component: contacts,
                name: 'contacts'
            },
            {
                path: 'faq',
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
        path: '/sign-up-lawyer',
        component: signUpLawyer,
        name: 'sign-up-lawyer'
    },
    {
        path: '/profile',
        component: profile,
        name: 'profile-base',
        children: [
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
            },
            {
                path: '/document-templates/:page',
                component: document_template_list,
                name: 'document_list'
            },
            {
                path: '/document-template/:id',
                component: document_template_page,
                name: 'document_template_page'
            },
            {
                path: '/create-document-template',
                component: createDocumentTemplate,
                name: 'create_document_template'
            },
            {
                path: '/template-list/:page',
                component: template_list,
                name: 'template_list'
            },
            {
                path: '/document-type',
                component: documentTypeList,
                name: 'document_type_list'
            },
            {
                path: '/faq-list/:page',
                component: FAQ,
                name: "faq_list"
            },
            {
                path: '/site-ref-list/:page',
                component: SiteRef,
                name: "site_ref_list"
            },
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
    routes,
})