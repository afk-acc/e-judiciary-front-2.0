<template>
  <div class="bg-white px-12 py-7 rounded-xl max-md:px-4 w-full max-sm:mt-[50px] max-lg:mt-20">
    <div class="">
      <div class="text-[#333437] text-2xl max-sm:flex-col max-sm:items-center max-sm:gap-y-4 max-sm:mb-10 font-medium flex justify-between">
        <p>
          {{ $t('Список ролей') }}
        </p>
        <button
            v-if="can(getCurrentUser, 'role.create')"
            @click="show_add = true"
            class="text-white text-base max-sm:w-full bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 cursor-pointer rounded-xl py-2 px-2">
            {{$t('Добавить роль')}}
        </button>
      </div>
      <div class="flex justify-between items-center py-4 w-full max-md:w-11/12 max-sm:w-full max text-l_title font-bold text-base">
        <div class="">
          <p class="">{{ $t("Роли") }}</p>
        </div>
        <div class="flex gap-x-6 max-md:gap-x-14 max-md:flex-col max-md:items-center max-sm:ml-[120px] ">
          <p class="" v-if="can(getCurrentUser, 'role.permission.edit')">{{ $t("Редактирование") }}</p>
          <p class="" v-if="can(getCurrentUser, 'role.delete')">{{ $t("Удаление") }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-y-6 ">
         <div v-if="get_roles.data">
          <role-item v-for="(item, index) in get_roles.data" :key="index" :item="item"
           @showRead="(el)=>{current_role = el; show_read = true; load_permission(item.id)}"
           @changeCurrentRole="(el)=>{ current_role = el; show_info=true; load_permission(item.id)}"
           @del="(el)=>{ current_role = el; show_del=true;}"/>
         </div>
         <div v-else>
           <RolesScelet></RolesScelet>
           <RolesScelet></RolesScelet>
           <RolesScelet></RolesScelet>
           <RolesScelet></RolesScelet>
           <RolesScelet></RolesScelet>
         </div>
      </div>
      <v-modal v-if="show_info" @showModal="show_info = !show_info">
        <div class=" overflow-x-hidden">
          <div class="text-center font-bold uppercase text-base max-md:text-base">{{ current_role.role_name }}</div>
          <p>{{ $t('Права доступа') }}</p>
          <div class="flex flex-col gap-y-4 ">
            <label v-for="item in get_permissions">
              <input type="checkbox" :checked="Number(item.value) === 1"
                     @change="item.value = $event.target.checked?1:0">
              {{ item.permission_name }}
            </label>
          </div>
          <div class="flex gap-x-4 mt-4 justify-center ">
            <button @click="show_info = false"
                    class="text-white bg-danger rounded-xl py-2 px-4">
              {{ $t('Отменить') }}
            </button>
            <button @click="update_permission({role_id:current_role.id, permissions:get_permissions});show_info = false" class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 rounded-xl py-2 px-4">
              {{ $t('Сохранить') }}
            </button>
          </div>
        </div>
      </v-modal>
      <v-modal v-if="show_del" @showModal="show_del = !show_del">
        <div class="px-4 py-4 rounded-2xl overflow-x-hidden">
          <div class="text-center font-bold uppercase my-4 text-base">{{ current_role.role_name }}</div>
          <p class="text-center text-bold text-xl">{{ $t('Вы дейстивительно хотите удалить роль?') }}</p>
          <div class="flex gap-x-4 mt-4 justify-center">
            <button @click="show_del = false"
                    class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 rounded-xl py-2 px-4">
              {{ $t('Отменить') }}
            </button>
            <button @click="del_role({role_id:current_role.id});show_del = false"
                    class="text-white bg-danger rounded-xl py-2 px-4">
              {{ $t('Удалить') }}
            </button>
          </div>
        </div>
      </v-modal>
      <v-modal v-if="show_add" @showModal="show_add = !show_add">
        <div class="px-4 py-4 rounded-2xl overflow-x-hidden">
          <div class="text-center font-bold uppercase my-4 text-base">{{ $t('Добавить роль') }}</div>
          <div class="flex flex-col gap-y-4 w-10/12 max-md:w-full mx-auto">
            <input required type="text" v-model="name.name_ru"
                   class="w-full focus:border-borderFocus focus:shadow-inputFocus px-4 py-2 text-sm max-sm:text-[12px] text-l_title outline-none border border-filter_gray rounded-xl"
                   :placeholder="$t('Название роли (на русском)')">
            <input required type="text" v-model="name.name_uz_l"
                   class="w-full focus:border-borderFocus focus:shadow-inputFocus px-4 py-2 text-sm max-sm:text-[12px] text-l_title outline-none border border-filter_gray rounded-xl"
                   :placeholder="$t('Название роли (на узбекском латиница)')">
            <input required type="text" v-model="name.name_uz_c"
                   class="w-full focus:border-borderFocus focus:shadow-inputFocus px-4 py-2 text-sm max-sm:text-[12px] text-l_title outline-none border border-filter_gray rounded-xl"
                   :placeholder="$t('Название роли (на узбекском кириллица)')">
          </div>
          <div class="flex gap-x-4 mt-4 justify-center">
            <button @click="show_add = false"
                    class="text-white bg-danger rounded-xl py-2 px-4">
              {{ $t('Отменить') }}
            </button>
            <button @click="add_role({...name});show_add = false"
                    class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 rounded-xl py-2 px-4">
              {{ $t('Добавить') }}
            </button>
          </div>
        </div>
      </v-modal>
      <v-modal v-if="show_read" @showModal="show_read = !show_read">
        <div class="px-4 py-4 rounded-2xl overflow-x-hidden">
          <div class="text-center font-bold uppercase my-4 text-base">{{ current_role.role_name }}</div>
          <p>{{ $t('Права доступа') }}</p>
          <div class="flex flex-col gap-y-4">
            <label v-for="item in get_permissions">
              <input type="checkbox"
              :checked="Number(item.value) === 1"
               @change="$event.target.checked=item.value">
              {{ item.permission_name }}
            </label>
          </div>
          <div class="flex gap-x-4 mt-4 justify-center">

            <button @click="show_read = false"
                    class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 rounded-xl py-2 px-4">
              {{ $t('Закрыть') }}
            </button>
          </div>
        </div>
      </v-modal>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import VModal from "../../components/UI/vModal.vue";
import roleItem from "../../components/profile/roleItem.vue";
import {canAccess} from "../../assets/functions.js";
import RolesScelet from "./sceleton/rolesScelet.vue";

export default {
  name: "RoleList",
  components: {
    VModal,
    roleItem,
    RolesScelet
},
  data() {
    return {
      show_add: false,
      name: {
        name_ru: '',
        name_uz_l: '',
        name_uz_c: '',
      }, show_info: false,
      show_del: false,
      current_role: {},
      show_read: false
    }
  },

  computed: {
    ...mapGetters(['get_roles', 'get_permissions', 'getCurrentUser'])
  },
  methods: {
    ...mapActions(['load_roles', 'load_permission', 'update_permission', 'del_role', 'add_role']),
    can(user, item) {
      if (user.permissions) {
        return canAccess(user, item)
      }
      return false
    }
  },
  mounted() {
    this.load_roles()
    if (this.getCurrentUser.id) {
      if (!canAccess(this.getCurrentUser, 'role.read')) {
        this.$router.go(-1)
      }
    }
  },
  watch: {
    getCurrentUser(val) {
      if (!canAccess(val, 'role.read')) {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style scoped>

</style>