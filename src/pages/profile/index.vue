<template>

  <div class="">
    <v-header class="bg-primary_gr"/>
    <div class="_container flex w-full py-16">
      <div class=" w-4/12 max-lg:fixed z-40 transition-all duration-300 bg-footer_bg h-full pt-[37px] max-lg:w-6/12 max-md:w-8/12 max-sm:w-10/12"
        :class="{'left-[-1000px]' : !openAdmin, 'left-0' : openAdmin}"
      >
        <profile-link-items route="info">
          {{ $t("Основная информация") }}
        </profile-link-items>
        <profile-link-items route="users-list" :params="{page:1}" v-if="can(getCurrentUser, 'users.profile.read')">
          {{ $t("Пользователи") }}
        </profile-link-items>
        <profile-link-items route="roles" :params="{page:1}" v-if="can(getCurrentUser, 'role.read')">
          {{ $t("Роли") }}
        </profile-link-items>
        <profile-link-items route="history" :params="{page:1}" v-if="can(getCurrentUser, 'logs.read')">
          {{ $t("История действий") }}
        </profile-link-items>
        <profile-link-items route="reports" :params="{page:1}" v-if="can(getCurrentUser, 'report.read')">
          {{ $t("Жалобы") }}
        </profile-link-items>
        <profile-link-items route="requests" :params="{page:1}" v-if="can(getCurrentUser, 'request.read')">
          {{ $t("Завки стать юристом") }}
        </profile-link-items>
        <profile-link-items route="appeals" :params="{page:1}">
          {{ $t("Мои вопросы") }}
        </profile-link-items>
        <profile-link-items route="documents" :params="{page:1}">
          {{ $t("Мои документы") }}
        </profile-link-items>
        <profile-link-items route="service" :params="{page:1}">
          {{ $t("Добавить обращение") }}
        </profile-link-items>
        <profile-link-items route="chat" :params="{page:1}">
          {{ $t("Чаты с юристами") }}
        </profile-link-items>
        <profile-link-items route="" @click="logout" class="text-danger font-bold ">
          {{ $t("Выход") }}
        </profile-link-items>
      </div>
      <div class="bg-black fixed z-30 opacity-40 w-full h-screen"
        :class="{'hidden' : !openAdmin, 'block' : openAdmin}"
         @click="openAdmin = !openAdmin">

      ></div>
      <div class="fill-black hidden max-lg:block absolute top-[130px] left-[100px] max-md:left-[50px]">
        <svg class="cursor-pointer"  width="30px" height="30px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
        @click="openAdmin = !openAdmin">
          <path d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
        </svg>
      </div>
      <div class="w-8/12 max-lg:w-11/12 pt-9 mx-auto">
        <div class=" ">
          <div class="px-4 py-2 ">
            <router-view/>
          </div>
        </div>

      </div>
    </div>
    <v-info/>
    <v-footer/>
  </div>
</template>

<script>
import VFooter from "../../components/site/vFooter.vue";
import VHeader from "../../components/site/vHeader.vue";
import ProfileLinkItems from "../../components/profile/profileLinkItems.vue";
import VInfo from "../../components/site/index/vInfo.vue";
import {mapActions, mapGetters} from "vuex";
import {canAccess} from "../../assets/functions";

export default {
  data() {
    return {
      openAdmin: false
    }
  },
  name: "index",
  components: {VInfo, ProfileLinkItems, VHeader, VFooter},
  methods: {
    ...mapActions(['loadCurrentUser', 'add_new_appeal']),
    can(user, item) {
      return canAccess(user, item)
    },
    logout(){
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'get_send_appeal'])
  },

  mounted() {
    if (localStorage.getItem('token')) {
      this.loadCurrentUser()
    } else {
      this.$router.push('/')
    }


  },
  watch: {
    getCurrentUser(val) {
      if (val.id) {
        if (this.get_send_appeal) {
          this.add_new_appeal(this.get_send_appeal)
        }
      }
    }
  }

}
</script>

<style scoped>

</style>