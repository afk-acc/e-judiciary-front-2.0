<template>
  <div class="">
    <v-header class="bg-primary_gr" />
    <div class="_container flex w-full pt-16">
     <Suspense>
      <div
        class="max-lg:fixed z-40 transition-all overflow-y-scroll duration-300 bg-footer_bg h-full pb-[100px] pt-[37px] max-lg:w-6/12 max-md:w-8/12 max-sm:w-10/12"
        :class="{ 'left-[-1000px]': !openAdmin, 'left-0': openAdmin }"
      >
        <profile-link-items route="info">
          {{ $t("Основная информация") }}
        </profile-link-items>
        <profile-link-items
          route="users-list"
          :params="{ page: 1 }"
          v-if="can(getCurrentUser, 'users.profile.read')"
        >
          {{ $t("Пользователи") }}
        </profile-link-items>
        <profile-link-items
          route="roles"
          :params="{ page: 1 }"
          v-if="can(getCurrentUser, 'role.read')"
        >
          {{ $t("Роли") }}
        </profile-link-items>
        <profile-link-items
          route="history"
          :params="{ page: 1 }"
          v-if="can(getCurrentUser, 'logs.read')"
        >
          {{ $t("История действий") }}
        </profile-link-items>
        <profile-link-items
          route="reports"
          :params="{ page: 1 }"
          v-if="can(getCurrentUser, 'report.read')"
        >
          {{ $t("Жалобы") }}
        </profile-link-items>
        <profile-link-items
          route="requests"
          :params="{ page: 1 }"
          v-if="can(getCurrentUser, 'request.read')"
        >
          {{ $t("Завки стать юристом") }}
        </profile-link-items>
        <profile-link-items route="appeals" :params="{ page: 1 }">
          {{ $t("Мои вопросы") }}
        </profile-link-items>
        <profile-link-items
          route="lawyer-appeals"
          :params="{ page: 1 }"
          v-if="can(getCurrentUser, 'appeal.read')"
        >
          {{ $t("Обращение пользователей") }}
        </profile-link-items>
        <profile-link-items route="documents" :params="{ page: 1 }">
          {{ $t("Мои документы") }}
        </profile-link-items>
        <profile-link-items route="service" :params="{ page: 1 }">
          {{ $t("Добавить обращение") }}
        </profile-link-items>
        <profile-link-items route="chat" :params="{ page: 1 }">
          {{ $t("Чаты с юристами") }}
        </profile-link-items>
        <profile-link-items route="" @click="logout" class="text-danger font-bold">
          {{ $t("Выход") }}
        </profile-link-items>
      </div>
      <template #fallback>
        <navScelet></navScelet>
      </template>
     </Suspense>
      <div
        class="bg-black fixed z-30 opacity-40 w-full h-screen"
        :class="{ hidden: !openAdmin, block: openAdmin }"
        @click="openAdmin = !openAdmin"
      >
        >
      </div>
      <div
        class="fill-black hidden absolute top-[130px] left-[100px] max-md:left-[50px]"
        :class="{ 'max-lg:block': (this.$route.name !== 'reports') & 'chat' }"
      >
        <svg
          class="cursor-pointer"
          width="30px"
          height="30px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          @click="openAdmin = !openAdmin"
        >
          <path
            d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"
          ></path>
        </svg>
      </div>
      <div
        class="max-lg:flex hidden absolute top-[120px] left-2 bg-opacity-20"
        :class="{ 'max-lg:hidden': (this.$route.name !== 'reports') & 'chat' }"
      >
        <div
          class="flex items-center transition-all duration-300"
          :class="{ 'rotate-180': openAdmin }"
          @click="openAdmin = !openAdmin"
        >
          <svg
            height="20"
            width="20"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 185.343 185.343"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  style="fill: #3498db"
                  d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
        					l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
        					c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="w-10/12 max-lg:w-11/12 pt-9 mx-auto">
        <div class="">
          <div class="px-4 py-0" :class="{ 'py-2': this.$route.name !== 'reports' }">
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <v-info />
    <v-footer />
  </div>
</template>

<script>
import VFooter from "../../components/site/vFooter.vue";
import VHeader from "../../components/site/vHeader.vue";
import navScelet from "./sceleton/navScelet.vue";
import ProfileLinkItems from "../../components/profile/profileLinkItems.vue";
import VInfo from "../../components/site/index/vInfo.vue";
import { mapActions, mapGetters } from "vuex";
import { canAccess } from "../../assets/functions";

export default {
  data() {
    return {
      openAdmin: false,
    };
  },
  name: "index",
  components: { VInfo, ProfileLinkItems, VHeader, VFooter, navScelet },
  methods: {
    ...mapActions(["loadCurrentUser", "add_new_appeal"]),
    can(user, item) {
      return canAccess(user, item);
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["getCurrentUser", "get_send_appeal"]),
  },

  mounted() {
    if (localStorage.getItem("token")) {
      this.loadCurrentUser();
    } else {
      this.$router.push("/");
    }
  },
  watch: {
    getCurrentUser(val) {
      if (val.id) {
        if (this.get_send_appeal) {
          this.add_new_appeal(this.get_send_appeal);
        }
      }
    },
  },
 
};
</script>

<style scoped></style>
