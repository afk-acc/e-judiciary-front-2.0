<template>
  <div class="max-lg:overflow-x-scroll max-lg:h-full w-full max-lg:mt-20">
    <v-search v-model:model-value="params.query" @search="loadUsersList(params)"/>
    <div v-if="getUsersList?.data?.length > 0">
      <user-item
          @showInfo="(el)=>{show_info = true; change_user = {...el}}"
          @showModal="(el)=>{show_del = true;change_user = {...el} }"
          @showEdit="(el)=>{showEdit = true; edit = {...el}}"
          v-for="(item, index) in getUsersList.data"
          :item="item" :key="index" :num="(params.page - 1) * params.limit + index + 1"/>
    </div>
    <div v-else>
      <UsersScelet/>
      <UsersScelet/>
      <UsersScelet/>
      <UsersScelet/>
      <UsersScelet/>
    </div>
    <div class="flex gap-x-[1px] flex-wrap my-10 " v-if="getUsersList?.data?.length > 0">
      <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
           v-for="item in getUsersList?.meta?.links"
           :class="{'bg-primary text-white rounded-full ':item.active}">
        {{ $t(item.label) }}
      </div>
    </div>
    <div class="text-center font-bold text-2xl" v-else-if="getUsersList.data">
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
      <div class="text-xl text-justify"><span class="font-bold text-black ">{{ $t('О пользователе') }}:</span>
        {{ change_user.bio }}
      </div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Образование') }}:</span>
        {{ change_user.education_place || '-' }}
      </div>

      <div class="text-xl"><span class="font-bold text-black">{{ $t('Страна') }}:</span>
        {{ change_user.country || '-' }}
      </div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Город') }}:</span>
        {{ change_user.city || '-' }}
      </div>

      <div class="text-xl"><span class="font-bold text-black">{{ $t('Язык') }}:</span>
        {{ change_user.languages || '-' }}
      </div>


      <div class="text-xl"><span class="font-bold text-black">{{ $t('Телефон') }}:</span> {{ change_user.phone || '-' }}
      </div>
      <div class="text-xl flex flex-col" v-if="change_user.role_name === 'lawyer'">
        <div class="">
          <span class="font-bold text-black">{{ $t('Рейтинг') }}:</span> {{
            change_user.rating || '-'
          }}
        </div>
        <div class="">
          <span class="font-bold text-black ">{{ $t('Сертификат юриста') }}:</span>
          <span class="text-link" @click="getFile(change_user.lawyer_file, change_user.name)">{{
              $t("Скачать")
            }}</span>
        </div>
      </div>
      <div class="flex justify-center mt-1">
        <v-button @click="show_info = false">{{ $t("Закрыть") }}</v-button>
      </div>
    </v-modal>
    <v-modal v-if="showEdit" @showModal="showEdit = false">
      <form @submit.prevent="editProfile" enctype="multipart/form-data">
        <p class="mx-auto font-bold mt-10 flex justify-center
         text-xl   max-md:text-center ">{{
            $t('Редактирование пользователя')
          }}</p>
        <div class="px-2">
          <div class="">

            <p class="text-2xl font-medium mt-2">{{ $t('Описание о себе') }}</p>
            <v-input v-model:model-value="edit.bio"
                     label="Описание" type="textarea"/>
            <p class="text-xl font-medium mt-4 max-sm:text-center max-sm:mb-5 text-center">{{
                $t('Фотография профиля')
              }}</p>
            <div class="flex justify-center my-2" v-if="edit.image">

              <img class="rounded-full w-[150px] h-[150px] object-cover " :src="edit.image" alt="">
            </div>
            <div class="flex justify-center  my-4">
              <label for="file">
                <svg class="ml-2" width="90" height="90" viewBox="0 0 89 89" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M11.125 37.7799C11.125 28.9356 18.2947 21.7658 27.139 21.7658V21.7658C28.7632 21.7658 30.3267 21.1489 31.5132 20.0398L32.6333 18.9928C33.9864 17.728 34.663 17.0956 35.412 16.6008C36.651 15.7823 38.0472 15.2313 39.5114 14.9832C40.3964 14.8333 41.3225 14.8333 43.1747 14.8333H44.5H45.8253C47.6775 14.8333 48.6036 14.8333 49.4886 14.9832C50.9528 15.2313 52.349 15.7823 53.588 16.6008C54.337 17.0956 55.0136 17.728 56.3667 18.9928L57.4868 20.0398C58.6733 21.1489 60.2368 21.7658 61.861 21.7658V21.7658C70.7053 21.7658 77.875 28.9356 77.875 37.7799V51.9074C77.875 61.1516 77.875 65.7736 75.8089 69.1766C74.623 71.1299 72.9841 72.7688 71.0309 73.9546C67.6279 76.0208 63.0058 76.0208 53.7617 76.0208H35.2383C25.9942 76.0208 21.3721 76.0208 17.9691 73.9546C16.0159 72.7688 14.377 71.1299 13.1911 69.1766C11.125 65.7736 11.125 61.1516 11.125 51.9075V37.7799Z"
                      stroke="#8A92A6" stroke-width="3"/>
                  <circle cx="44.5" cy="51.9167" r="11.125" stroke="#8A92A6" stroke-width="3"/>
                  <path d="M59.334 33.3752H63.0423" stroke="#8A92A6" stroke-width="3" stroke-linecap="round"/>
                </svg>
              </label>
              <input type="file" id="file" @change="edit.new_image = $event.target.files[0]" class="hidden">
            </div>

            <div class="flex flex-col gap-y-2">

              <p class="text-xl font-medium max-sm:my-10 mt-4">{{ $t('Образование') }}</p>
              <v-input class="mb-2" v-model:model-value="edit.education_place" :label="$t('Учебное учреждение')"
                       type="text"/>
              <div class="flex flex-col gap-y-2">
                <v-input class="" min="0" v-model:model-value="edit.country" :label="$t('Страна проживания')"
                         type="text"/>
                <v-input class="" min="0" v-model:model-value="edit.city" :label="$t('Город проживания')"
                         type="text"/>
                <div class="text-gray text-sm font-medium">
                  <p>{{ $t("Основной язык") }}</p>
                  <select class="outline-none w-full p-2" name="" id="" v-model="edit.languages">
                    <option value="" disabled>{{ $t("Основной язык") }}</option>
                    <option value="русский">Русский</option>
                    <option value="o`zbek">O`zbek</option>
                    <option value="узбек">Узбек</option>
                    <option value="english">English</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
          <div class="flex justify-center my-2">

            <button type="submit" class="h-[50px] py-2 px-4 bg-primary_gr text-white rounded-xl">{{
                $t('Сохранить')
              }}
            </button>
          </div>

        </div>
      </form>

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
import VInput from "../../components/UI/vInput.vue";

export default {
  name: "users",
  components: {
    VInput,
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
      showEdit: false,
      edit: {},


    }
  },

  computed: {
    ...mapGetters(['getUsersList', 'getRoleList'])
  },
  methods: {
    ...mapActions(['loadUsersList', 'loadRoleList', 'changeUserRole', 'update_user']),
    changeUser() {
      this.changeUserRole({user_id: this.change_user.id, role: this.change_user.role_id, page: this.$route.params.page})
      this.show_del = false;
      this.change_user = {}
    },
    editProfile() {
      this.update_user(this.edit)
      this.showEdit = false
    },
    loadPage(page) {
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
    },
    getFile(pdf, name) {
      if (pdf) {
        const linkSource = pdf;
        const downloadLink = document.createElement("a");
        let ext = pdf.split('/')[1].split(';')[0]
        const fileName = name + "." + ext;
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
      }
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