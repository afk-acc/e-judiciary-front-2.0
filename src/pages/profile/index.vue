<template>

  <div class="">
    <v-header class="bg-primary_gr"/>
    <div class="_container flex w-full py-16">
      <div class=" w-4/12 bg-footer_bg h-screen pt-[37px]">
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
        <profile-link-items route="" @click="logout" class="text-danger font-bold ">
          {{ $t("Выход") }}
        </profile-link-items>

      </div>
      <div class="w-8/12  pt-9 ">
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