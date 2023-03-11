<template>
  <teleport to="body">
    <div
        :class="{
      'bg-header_gr': showBg(),
        
    }"
        class="absolute max-lg:bg-header_gr max-lg:fixed transition-all duration-300 top-0 left-0 w-full border-b-[0.5px] border-white border-opacity-40 z-30"
    >
      <div class="_container flex items-center justify-between relative"
      >
        <div class="flex max-lg:justify-between max-lg:items-center  h-full max-lg:w-full max-lg:mx-4 items-start pt-2">
          <router-link to="/" class=" h-[70px]  relative  ">
            <div
                class="w-[60px] h-[60px] object-cover flex items-center justify-center header__logo transition-all duration-300">
              <svg width="60" height="60" viewBox="190 100 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path
                    d="M254.892 208.291C255.609 208.703 256.492 208.705 257.211 208.297L327.518 168.409C329.07 167.528 331 168.642 331 170.419L330.932 206.305C330.932 207.124 330.497 207.881 329.788 208.297L256.105 251.802C255.383 252.227 254.487 252.232 253.76 251.816L226.732 235.666C226.009 235.253 225.564 234.488 225.564 233.66V196.774C225.564 194.992 227.505 193.879 229.057 194.771L254.892 208.291Z"
                    fill="#fff"/>
                <path
                    d="M223.141 180.297C222.417 180.712 221.524 180.71 220.802 180.29L188.944 161.774C187.391 160.871 187.411 158.633 188.98 157.758L254.357 121.296C255.065 120.901 255.928 120.901 256.636 121.296L322.037 157.77C323.611 158.648 323.625 160.895 322.062 161.792L290.01 180.203C289.291 180.616 288.405 180.617 287.685 180.206L256.576 162.44C255.856 162.029 254.971 162.03 254.252 162.442L223.141 180.297Z"
                    fill="#fff"/>
                <path
                    d="M216.603 187.744C217.323 188.157 217.767 188.921 217.767 189.748V239.439C217.767 240.256 218.201 241.013 218.908 241.43L254.317 262.287C255.045 262.716 255.949 262.718 256.68 262.294L327.496 221.665C329.048 220.762 331 221.875 331 223.662V260.471C331 261.317 330.535 262.096 329.788 262.502L256.613 301.717C255.917 302.094 255.076 302.094 254.38 301.717L182.212 262.526C181.465 262.12 181 261.341 181 260.495V171.316C181 169.535 182.94 168.421 184.492 169.312L216.603 187.744Z"
                    fill="white"/>
              </svg>
            </div>
          </router-link>
          <div class="cursor-pointer hidden max-lg:block "
               @click="openBurger = !openBurger">
            <svg fill="#fff" width="30px" height="30px" viewBox="0 0 32 32" version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
            </svg>
          </div>
        </div>
        <div
            class="flex transition-all max-lg:absolute max-lg:bg-header_gr max-lg:w-full max-lg:flex-col items-center justify-between max-lg:justify-start max-lg:h-screen"
            :class="{'max-lg:top-[-1000px]' : !openBurger, 'max-lg:top-[78px]' : openBurger}">
          <ul class="flex max-lg:flex-col gap-x-8 text-white font-bold mr-4 max-lg:text-xl items-center text-sm">
            <router-link :to="{name:'service', params:{page:1}}"
                         class="cursor-pointer py-4 header__link transition-all duration-300">{{
                $t('Услуги')
              }}
            </router-link>
            <router-link :to="{name: 'faq'}" class="header__link">
              <li class="cursor-pointer py-4">{{ $t('Вопросы') }}</li>
            </router-link>
            <router-link :to="{name:'lawyers', params:{page:1}}" class="cursor-pointer py-4 header__link">{{
                $t('Юристы')
              }}
            </router-link>
            <router-link :to="{name: 'contacts'}" class="header__link">
              <li class="cursor-pointer py-4">{{ $t('Контакты') }}</li>
            </router-link>
            <li class="relative max-lg:my-10">
              <span @click="show_adv = !show_adv" class="cursor-pointer"
              >{{ $t('Дополнительно') }}</span>
              <ul class="flex flex-col  gap-y-2 bg-primary_gr z-30 max-md:left-[-60px] border border-filter_gray border-opacity-50 absolute max-w-[300px] w-screen left-0 top-10 transition-all duration-300 "
                  :class="{
                'max-h-0 overflow-hidden hidden':!show_adv,
                'max-h-[200px] overflow-y-auto py-2 px-4':show_adv
                  }"
              >
                <li class="underline text-base" v-for="item in ref_list">
                  <a :href="item.ref">
                    {{ item.name }}
                  </a>
                </li>

              </ul>
            </li>
            <div class="relative py-4  mt-[-12px] max-lg:py-4 text-sm min-w-[150px]">
              <input
                  v-model="params.query"
                  @keyup.enter="load_all_doc_list(this.params); isActive = true"
                  type="text"
                  :class="{'search_active':search_active}"
                  class=" outline-none text-sm  border-b border-white header__search"
                  style="background: none;"
              >
              <div @click="search_active = !search_active" class="cursor-pointer  header__search-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                      stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M17.5 17.5L13.875 13.875" stroke="white" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </div>
              <div class="absolute p-4 z-50  top-full bg-primary_gr flex flex-col gap-y-2 left-0"
                   v-if="isActive && get_all_doc_list?.data?.length > 0 && search_active">
                <div @click="isActive = false;$router.push({name:'constructor', params:{name:item.id}});"
                     v-for="(item, index) in get_all_doc_list?.data" :key="index" class="underline cursor-pointer">
                  {{ item.name.slice(0, 45) }}
                </div>
              </div>

            </div>

          </ul>
          <div class="flex  max-lg:flex-col gap-x-8 text-white items-center ">
            <select
                v-model="lang"
                class="select text-sm appearance-none text-center w-[50px] h-[50px]  focus:outline-none text-white"
                style="background: none">
              <option value="ru">Ру</option>
              <option value="uz_l">Uz</option>
              <option value="uz_c">Уз</option>
            </select>
            <div class="flex max-lg:flex-col gap-x-4 items-center z-30" v-if="show()">
              <div class="header-icons flex max-lg:flex-col  items-center ">
                <div class="notification flex max-lg:flex-col max-md:justify-center items-center">
                  <div class="flex max-lg:mt-10">
                    <div class="relative">
                      <div class="relative">
                        <div @click="show_notification=!show_notification" class="cursor-pointer">
                          <svg class="mx-4 cursor-pointer" width="18" height="20"
                               viewBox="0 0 18 20" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.7695 9.64534C16.039 8.79229 15.7071 8.05305 15.7071 6.79716V6.37013C15.7071 4.73354 15.3304 3.67907 14.5115 2.62459C13.2493 0.986993 11.1244 0 9.04423 0H8.95577C6.91935 0 4.86106 0.941671 3.577 2.5128C2.71333 3.58842 2.29293 4.68822 2.29293 6.37013V6.79716C2.29293 8.05305 1.98284 8.79229 1.23049 9.64534C0.676907 10.2738 0.5 11.0815 0.5 11.9557C0.5 12.8309 0.787226 13.6598 1.36367 14.3336C2.11602 15.1413 3.17846 15.6569 4.26375 15.7466C5.83505 15.9258 7.40634 15.9933 9.0005 15.9933C10.5937 15.9933 12.165 15.8805 13.7372 15.7466C14.8215 15.6569 15.884 15.1413 16.6363 14.3336C17.2118 13.6598 17.5 12.8309 17.5 11.9557C17.5 11.0815 17.3231 10.2738 16.7695 9.64534Z"
                                fill="#fff"/>
                            <path opacity="0.7"
                                  d="M11.0088 17.2285C10.5088 17.1217 7.46266 17.1217 6.96275 17.2285C6.53539 17.3272 6.07324 17.5568 6.07324 18.0604C6.09809 18.5408 6.37935 18.9648 6.76895 19.2337L6.76795 19.2347C7.27184 19.6275 7.86319 19.8773 8.48236 19.9669C8.81232 20.0122 9.14825 20.0102 9.49014 19.9669C10.1083 19.8773 10.6997 19.6275 11.2036 19.2347L11.2026 19.2337C11.5922 18.9648 11.8734 18.5408 11.8983 18.0604C11.8983 17.5568 11.4361 17.3272 11.0088 17.2285Z"
                                  fill="#fff"/>
                          </svg>
                          <span class=" absolute -bottom-1 text-sm right-2"
                                v-if="Number(this.get_notifications.length) > 0">
                      <span class="flex h-4 w-4 relative">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
                        <span
                            class="relative text-[10px]   px-2 py-2 items-center justify-center text-white inline-flex rounded-full h-3 w-3 bg-danger">
                            {{ this.get_notifications.length }}</span>
                      </span>
                    </span>
                        </div>

                      </div>

                      <div
                          v-if="show_notification && get_notifications.length > 0"
                          class="absolute shadow-2xl top-10 z-30 -left-[200px] max-md:-left-[125px]  max-md:px-6 max-md:mx-4 max-md:flex-wrap max-h-[400px] overflow-scroll max-w-[400px] w-screen bg-white py-5 flex flex-col gap-y-4">
                        <v-notification :item="item" v-for="(item,index) in get_notifications" :key="index"/>
                      </div>
                    </div>
                    <router-link :to="{name:'chat'}" @click="mes=0" class="relative">
                      <div class="relative">
                        <svg class="mx-4 cursor-pointer" width="20" height="18" viewBox="0 0 20 18" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.7"
                                d="M20 12.94C20 15.73 17.76 17.99 14.97 18H14.96H5.05C2.27 18 0 15.75 0 12.96V12.95C0 12.95 0.006 8.524 0.014 6.298C0.015 5.88 0.495 5.646 0.822 5.906C3.198 7.791 7.447 11.228 7.5 11.273C8.21 11.842 9.11 12.163 10.03 12.163C10.95 12.163 11.85 11.842 12.56 11.262C12.613 11.227 16.767 7.893 19.179 5.977C19.507 5.716 19.989 5.95 19.99 6.367C20 8.576 20 12.94 20 12.94Z"
                                fill="#fff"/>
                          <path
                              d="M19.4759 2.67351C18.6099 1.04151 16.9059 -0.000488281 15.0299 -0.000488281H5.04988C3.17388 -0.000488281 1.46988 1.04151 0.603884 2.67351C0.409884 3.03851 0.501884 3.49351 0.824884 3.75151L8.24988 9.69051C8.76988 10.1105 9.39988 10.3195 10.0299 10.3195C10.0339 10.3195 10.0369 10.3195 10.0399 10.3195C10.0429 10.3195 10.0469 10.3195 10.0499 10.3195C10.6799 10.3195 11.3099 10.1105 11.8299 9.69051L19.2549 3.75151C19.5779 3.49351 19.6699 3.03851 19.4759 2.67351Z"
                              fill="#fff"/>
                        </svg>
                      </div>
                      <span class=" absolute -bottom-1 right-2" v-if="Number(mes) > 0">
                      <span class="flex h-4 w-4 relative">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
                        <span
                            class="relative text-[10px] px-1 py-1 items-center justify-center text-white inline-flex rounded-full h-3 w-3 bg-danger">
                          {{ mes }}
                        </span>
                     </span>
                   </span>

                      <!--          <span-->
                      <!--              class="w-[8px] animate-ping h-[8px] absolute bottom-0 right-2 z-10 text-[8px] bg-l_secondary rounded-full flex items-center justify-center text-white">-->
                      <!--          {{ this.mes }}-->
                      <!--        </span>-->

                    </router-link>
                  </div>
                  <router-link :to="{name:'info'}" class="flex mx-auto   gap-x-4 max-lg:my-6 items-center">
                    <div class="text-sm  hidden max-lg:flex">{{ getCurrentUser.name }}</div>
                    <div class="w-[85px] h-[55px] ">
                      <img :src="getCurrentUser.image" class="w-[55px] h-[55px] rounded-full" alt="">
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div v-else class="flex gap-x-8 text-white items-center">

              <router-link :to="{name:'sign-in'}"
                           class="flex items-center gap-x-2 px-5 py-2 hover:bg-white hover:text-link rounded-2xl transition-all duration-300 cursor-pointer font-bold el-hover">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.8333 9.16663H4.16667C3.24619 9.16663 2.5 9.91282 2.5 10.8333V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V10.8333C17.5 9.91282 16.7538 9.16663 15.8333 9.16663Z"
                      stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M5.83332 9.16667V5.83334C5.83228 4.80005 6.21522 3.80323 6.90779 3.03639C7.60037 2.26956 8.55317 1.78742 9.58124 1.68358C10.6093 1.57974 11.6393 1.86159 12.4712 2.47443C13.3031 3.08728 13.8777 3.98738 14.0833 5.00001"
                      stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ $t('Войти') }}
              </router-link>
              <router-link :to="{name:'sign-up'}"
                           class="flex items-center gap-x-2 px-5 py-2 hover:bg-white hover:text-link rounded-2xl transition-all duration-300 cursor-pointer font-bold el-hover">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15.8333 9.16663H4.16667C3.24619 9.16663 2.5 9.91282 2.5 10.8333V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V10.8333C17.5 9.91282 16.7538 9.16663 15.8333 9.16663Z"
                      stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M5.83331 9.16663V5.83329C5.83331 4.72822 6.2723 3.66842 7.0537 2.88701C7.8351 2.10561 8.89491 1.66663 9.99998 1.66663C11.105 1.66663 12.1649 2.10561 12.9463 2.88701C13.7277 3.66842 14.1666 4.72822 14.1666 5.83329V9.16663"
                      stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                {{ $t('Регистрация') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>

</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import {useI18n} from "vue-i18n";
import VNotification from "../profile/vNotification.vue";
import {toast} from "vue3-toastify";
import axios from "../../axios/index.js";

export default {
  name: "vHeader",
  components: {VNotification},
  data() {
    return {
      search_active: false,
      mes: 0,
      scrollPosition: null,
      show_notification: false,
      openBurger: false,
      lang: "",
      show_adv: false,
      params: {
        query: "",
        page: 1,
        limit: 5
      },
      isActive: false,
      ref_list: [],
    }
  },
  setup() {
    const {locale, t} = useI18n({useScope: "global"});
    localStorage.setItem("locale", "" + locale.value);
    return {
      switchLanguage: () => {
        locale.value = localStorage.getItem('locale')
      },
    };
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'get_notifications', 'get_base_url', 'get_all_doc_list']),

  },
  methods: {
    ...mapActions(['load_notifications', 'load_all_doc_list']),
    ...mapMutations(['update_all_doc_list']),
    show() {
      return localStorage.getItem('token')
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    showBg() {
      if (this.$route.name === 'main')
        return this.scrollPosition > 150
      return true
    }
  },
  mounted() {
    this.mes = this.getCurrentUser.notify
    this.lang = localStorage.getItem('locale')
    window.addEventListener("scroll", this.updateScroll);
    axios.get(`get-site-ref?limit=1000`).then(res => {
      this.ref_list = res.data.data
    })
  },
  watch: {
    $route() {
      this.isActive = false
    },
    getCurrentUser(val) {
      this.mes = this.getCurrentUser.notify
      if (this.mes === undefined)
        this.mes = 0;
      let channel = this.$pusher.subscribe('private-notification.' + val.id)
      channel.bind('notify', notify => {
        toast.info(this.$t('Новое уведомление'), {autoClose: 2000})
        this.mes = Number(this.mes) + 1
      })
      this.load_notifications()
      channel.bind('notification', notify => {
        toast.info(this.$t('Новое уведомление'), {autoClose: 2000})
        this.add_notification(notify.notification)
      })
    },
    lang(val) {
      localStorage.setItem('locale', val)
      this.switchLanguage()
    }
  },

}
</script>

<style scoped>

.search_active{
  right: 0px !important;
  width: 100% !important;

}
.search_active + .header__search-icon{
  right: 100%;
  justify-content: start;
}
.header__search {
  position: absolute;
  top:10px;
  margin-left: 0;
  width: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
}


.header__search-icon {
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  transform: translateY(-25%);
  right: 0;
}


.header__logo path {
  transition: all 0.3s ease-in-out;
}

.header__logo:hover path {
  fill: #007bff;

}

.header__link {
  position: relative;
}

.header__link:hover::after {
  width: 100%;
}


.router-link-active::after {
  width: 100% !important;
}

.header__link::after {
  content: "";
  width: 0;
  transition: all 0.3s ease-in-out;
  height: 3px;
  left: 0;
  bottom: 10px;
  position: absolute;
  display: block;
  background: #fff;
}

a.router-link-active {
  /*text-decoration: underline;*/
}

.el-hover path {
  transition: all 0.3s;
}

.el-hover:hover path {
  stroke: #2556B5 !important;
}

.select option {
  background: #2556B5;
}
</style>