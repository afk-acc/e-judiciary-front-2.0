<template>
  <div class="max-lg:overflow-x-scroll max-lg:h-full w-full max-lg:mt-20">
    <v-search v-model:model-value="params.query" @search="loadUsersList(params)"/>
      <div v-if="getUsersList.data">
        <user-item
        @showInfo="(el)=>{show_info = true; change_user = el}"
        @showModal="(el)=>{show_del = true;change_user = el }" v-for="(item, index) in getUsersList.data"
        :item="item" :key="index" :num="(params.page - 1) * params.limit + index + 1"/>
      </div>
      <div v-else>
        <UsersScelet />
        <UsersScelet />
        <UsersScelet />
        <UsersScelet />
        <UsersScelet />
      </div>
    <div class="flex gap-x-[1px] flex-wrap my-10 " v-if="getUsersList?.data?.length > 0">
      <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
           v-for="item in getUsersList?.meta?.links"
           :class="{'bg-primary text-white rounded-full ':item.active}">
        {{ $t(item.label) }}
      </div>
    </div>
    <div class="text-center font-bold text-2xl" v-else>
      {{ $t('Ничего не найдено') }}
    </div>
    <v-modal v-if="show_del" @showModal="show_del = !show_del">
      <p class="text-center font-bold text-black text-3xl">{{ $t('Изменить пользователя') }}</p>
      <div class="flex justify-center gap-x-4 my-5">
        <form @submit.prevent="changeUser"
              class="flex items-center gap-4 max-sm:flex-col">
          <select id="roles" class=" border-[#DBDBDB] border-[1px] mx-10 w-[70%] outline-none   rounded-[12px] p-4"
                  v-model="change_user.role_id" :value="change_user.role_id">
            <option value="" selected disabled class="text-l_black">{{ $t("Выбрать роль") }}</option>
            <option :value="item.id" v-for="item in getRoleList">{{ item.role_name }}</option>
          </select>
          <div class=" flex justify-end mx-10 gap-x-4 my-4 max-md:mx-auto">
            <v-button @click="show_del = false">{{ $t("Отменить") }}</v-button>
            <v-button type="submit">{{ $t("Изменить") }}
            </v-button>
          </div>
        </form>

      </div>
    </v-modal>
    <v-modal v-if="show_info" @showModal="show_info = !show_info">
      <div class="text-center font-bold text-primary text-2xl">{{ $t("Информация о пользователе") }}</div>
      <div class="flex justify-center my-2"><img :src="change_user.image" alt=""
                                                 class="w-[100px] h-[100px] rounded-full object-cover "></div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Имя') }}:</span> {{ change_user.name }}</div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Роль') }}:</span> {{ change_user.role_locale }}
      </div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('О пользователе') }}:</span> {{ change_user.bio }}
      </div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Образование') }}:</span>
        {{ change_user.education_place || '-' }}
      </div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Телефон') }}:</span> {{ change_user.phone || '-' }}
      </div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Рейтинг') }}:</span> {{
          change_user.rating || '-'
        }}
      </div>
      <div class="flex justify-center mt-1">
        <v-button @click="show_info = false">{{ $t("Закрыть") }}</v-button>
      </div>
    </v-modal>
  </div>
</template>

<script>
import userItem from "../../components/profile/userItem.vue";
import {mapActions, mapGetters} from "vuex";
import VModal from "../../components/UI/vModal.vue";
import VButton from "../../components/UI/vButton2.vue";
import VSearch from "../../components/UI/vSearch.vue";
import UsersScelet from "./sceleton/usersScelet.vue";

export default {
  name: "users",
  components: {
    VSearch,
    VButton,
    VModal,
    userItem,
    UsersScelet
},
  data() {
    return {
      params: {
        page: 1,
        limit: 10,
        query: ''
      },
      del: {},
      show_del: false,
      change_user: {},
      show_info: false,


    }
  },

  computed: {
    ...mapGetters(['getUsersList', 'getRoleList'])
  },
  methods: {
    ...mapActions(['loadUsersList', 'loadRoleList', 'changeUserRole']),
    changeUser() {
      this.changeUserRole({user_id: this.change_user.id, role: this.change_user.role_id, page: this.$route.params.page})
      this.show_del = false;
      this.change_user = {}
    },
    loadPage(page) {
      console.log(page)
      if (page === '<') {
        if (Number(this.params.page) > 1) {
          this.params.page -= 1;
        }
      } else if (page === '>') {
        if (Number(this.params.page) < this.getUsersList.meta.last_page) {
          this.params.page = Number(this.params.page) + 1
        }
      } else {
        if (Number(page) <= this.getUsersList.meta.last_page) {
          this.params.page = Number(page)
        }
      }
      this.$router.push({name: 'users-list', params: {page: this.params.page}})
    }
  },

  mounted() {
    this.params.page = this.$route.params.page
    this.loadUsersList(this.params)
    this.loadRoleList()
  },
  watch: {
    $route(to, from) {
      this.params.page = to.params.page
      this.loadUsersList(this.params)
    }
  }
}
</script>

<style scoped>

</style>