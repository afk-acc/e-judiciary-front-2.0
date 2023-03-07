<template>
  <div class="w-full max-lg:mt-16 px-1">
    <div class="flex gap-x-4 my-2 item-center max-md:flex-col max-md:justify-center">
      <h1 class="text-link font-bold text-2xl max-md:text-center">{{ $t("Основная информация") }}</h1>
      <div class="flex gap-x-4 item-center max-md:mx-auto">
        <button @click="showEdit = true; edit={...getCurrentUser}"
                class="text-white bg-primary_gr py-2 px-4 rounded-xl max-md:py-2">{{ $t("Редактировать профиль") }}
        </button>
        <button v-if="getCurrentUser.role_name === 'user' " @click="send_request_lawyer(getCurrentUser.id)"
                class="text-white bg-primary_gr py-2 px-4 rounded-xl ">{{ $t("Стать юристом") }}
        </button>
      </div>

    </div>

    <div v-if="item = getCurrentUser.id" class="w-full mx-auto max-md:flex max-md:flex-col ">
      <profile-info-item :item="getCurrentUser.name" :label="$t('ФИО')"/>
      <profile-info-item :item="getCurrentUser.bio || '-'" :label="$t('О себе')"/>
      <profile-info-item :item="getCurrentUser.country" :label="$t('Страна')"/>
      <profile-info-item :item="getCurrentUser.city || '-'" :label="$t('Город')"/>
      <profile-info-item :item="getCurrentUser.phone || '-'" :label="$t('Телефон')"/>
    </div>
    <div v-else>
      <profileInfoScelet></profileInfoScelet>
    </div>
    <div class="" >
      <div class="flex gap-x-4 my-2">
        <h1 class="text-link font-bold text-2xl">{{ $t("Информация о юристе") }}</h1>
      </div>

      <div v-if="item = getCurrentUser.id" class="w-full mx-auto max-md:flex max-md:flex-col ">
        <profile-info-item :item="getCurrentUser.languages || '-'" :label="$t('Знание языков')"/>
        <profile-info-item :item="getCurrentUser.education_place || '-'" :label="$t('Образование')"/>
        <profile-info-item :item="getCurrentUser.education_start || '-'" :label="$t('Начала обучения')"/>
        <profile-info-item :item="getCurrentUser.education_end || '-'" :label="$t('Конец обучения')"/>
        <profile-info-item :item="getCurrentUser.work_experience || '-'" :label="$t('Стаж работы')"/>
        <profile-info-item :item="getCurrentUser.rating || '-'" :label="$t('Рейтинг')"/>
        <profile-info-item :item="getCurrentUser.lawyer_file" :isFile="true" :label="$t('Сертификат юриста')"/>

      </div>
      <div v-else>
        <profileInfoScelet></profileInfoScelet>
      </div>
    </div>
    <v-modal v-if="showEdit" @showModal="showEdit = false">
      <form @submit.prevent="editProfile" enctype="multipart/form-data" >

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
              <label for="" class="font-medium text-black ">{{ $t('Дата обучения') }}</label>
              <div class="flex max-md:flex-col justify-between maxsm:flex-col gap-x-2">
                <div class="w-full flex gap-x-2  items-center">
                  <label for="">{{ $t('от') }}</label>
                  <input
                      :placeholder="$t('от')"
                      type="date"
                      v-model="edit.education_start"
                      class="bg-[#F7F8F9] w-full rounded-xl border border-[#DBDBDB] outline-none px-5 py-1 ">
                </div>
                <div class="w-full flex gap-x-2 maxsm:py-4 items-center my-2">
                  <label for="">{{ $t("до") }}</label>
                  <input
                      :placeholder="$t('до')"
                      type="date"
                      v-model="edit.education_end"
                      class="bg-[#F7F8F9] w-full rounded-xl border border-[#DBDBDB] outline-none px-5 py-1 ">
                </div>

              </div>
              <div class="flex flex-col gap-y-2">
                <v-input class="" min="0" v-model:model-value="edit.work_experience" :label="$t('Стаж работы')"
                         type="number"/>

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
                <div class="text-gray text-sm font-medium">
                  <p>{{ $t("Документ подтверждающий что вы юрист") }}</p>
                  <label for="lawyer_file" class="text-primary py-2"> Выберите файл</label>
                  <input type="file" id="lawyer_file" @change="edit.new_lawyer_file = $event.target.files[0]"
                         class="hidden">
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
import ProfileInfoItem from "../../components/profile/profileInfoItem.vue";
import {mapActions, mapGetters} from "vuex";
import profileInfoScelet from "./sceleton/profileInfoScelet.vue";
import VModal from "../../components/UI/vModal.vue";
import VInput from "../../components/UI/vInput.vue";

export default {
  components: {VInput, VModal, ProfileInfoItem, profileInfoScelet},
  data() {
    return {
      showEdit: false,
      edit: {},
    }
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  mounted() {
  },
  methods: {
    ...mapActions(['send_request_lawyer', 'update_user']),
    editProfile() {
      this.update_user(this.edit)
      this.showEdit = false
    },
  },
};
</script>

<style lang="scss" scoped></style>
