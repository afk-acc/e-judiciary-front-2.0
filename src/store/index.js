import {createStore} from "vuex";
import constructor from "./constructor.js";
import auth from "./auth.js";
import appeals from "./appeals.js";
import users from "./users.js";
import request from "./request.js";
import role from "./role.js";
import history from "./history.js";
import report from "./report.js";
import chat from "./chat.js";
import notification from "./notification.js";
export default createStore({
    state(){
        return {}
    },
    getters:{
        get_base_url(state) {
            return 'http://api.e-judiciary.uz/'
        }
    },
    mutations:{},
    actions:{},
    modules:{
        constructor,
        auth,
        appeals,
        users,
        request,
        role,
        report,
        history,
        chat,
        notification
    },

})