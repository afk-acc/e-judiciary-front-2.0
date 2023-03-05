<template>
  <div class="">
    <v-header class="bg-primary_gr"/>
    <div class="py-16 flex max-lg:flex-wrap max-xl::justify-center">
      <div class="w-9/12 bg-white mt-14 p-8 max-xl:w-full">
        <div class="userList-title">
          <h3 class="text-3xl w-[90%] font-bold">
            {{ get_appeal.title }}
          </h3>
          <p class="pt-4">
            <span class="font-bold">Тема обращения :</span> {{ get_appeal.appeal_type_text }}
          </p>
          <div class="">
            <p class="mt-10 font-bold pb-5">Описание</p>
            <p class="w-10/12">
              {{ get_appeal.description }}
            </p>
          </div>
          <div class="flex flex-col gap-y-2" v-if="get_appeal.files?.length > 0">
            <p class="mt-10 font-bold pb-5">Прикрипленные файлы</p>
            <span @click="getPdf(item.file, get_appeal.title)" v-for="item in get_appeal.files"
                  class="text-link cursor-pointer">{{ $t('Скачать прикрепленный файл') }}</span>
          </div>
        </div>
      </div>
      <div class="w-4/12 ml-4 max-lg:ml-0 h-full  mt-14 p-6  max-xl:w-full " v-if="get_appeal.id">
        <div class="appeal-response shadow-2xl USERS bg-white rounded-2xl py-2 px-4" v-if="show && lawyers.length !== 0">
          <h3 class="text-[28px] text-center font-bold mb-4 mx-auto pb-5 USERS ">Отклики</h3>
          <vAppealResponse @changeUser="changeUser" :item="item" v-for="item in lawyers"/>
          <v-modal v-if="open" @showModal="open = !open">
            <div :class="{'flex justify-center flex-wrap max-w-[400px] ' : open,'hidden' : !open}">
              <div class="flex gap-x-1 ">
                <div class="w-[67px] h-[67px] mr-10">
                  <img class=" rounded-full object-cover w-full" :src="getImage(changed_user?.image)" alt="">
                </div>
                <div class="flex justify-between items-center ">
                  <h3 class="text-2xl font-bold">{{ changed_user?.name }} </h3>
                  <div class="relative w-6 h-[1px] bg-filter_gray ml-6">
                  </div>
                  <p class="relative  text-filter_gray pl-8 text-xl">Юрист</p>
                </div>

              </div>
              <div class="w-full">
                <p class="font-bold text-xl">Общая информация</p>
                <span class="text-filter_gray">{{ changed_user?.bio }}</span>
              </div>

              <div class="mt-8 flex justify-between w-full">
                <v-button @click="change" class="m-0 px-0 py-0  cursor-pointer">Выбрать
                </v-button>
                <v-button @click="ignore"
                          mode="danger"
                          class="m-0 px-0 py-0   border-white_red border cursor-pointer">
                  Игнорировать
                </v-button>
              </div>
            </div>
          </v-modal>

        </div>

        <div class=" " v-else-if="get_appeal.lawyer_id !== null">
          <div class="appeal-response ADVOCATE  ">
            <div class="bg-footer_bg shadow-2xl text-black rounded-2xl py-2" v-if="get_appeal.applicant_id === getCurrentUser.id">
              <h3 class="text-[28px] text-center font-bold mx-auto pb-5 ADVOCATE ">Выбраный юрист</h3>
              <div class="flex justify-center items-center ">
                <img :src="getImage(get_appeal.lawyer_info?.image)" alt=""
                     class="w-[60px] rounded-full object-cover h-[60px]"/>
              </div>
              <div class="pl-4 flex gap-2 justify-center flex-wrap px-4">
                <p class="text-center font-bold w-full">{{ get_appeal.lawyer_info?.name }}</p>
                <p class="w-full text-justify">{{ get_appeal.lawyer_info?.bio?.slice(0, 100) }}...</p>
              </div>
            </div>
            <div class="bg-footer_bg shadow-2xl bg-opacity-50 rounded-2xl py-2" v-else>
              <h3 class="text-[28px] text-center font-bold mx-auto pb-5 ADVOCATE ">Пользователь</h3>
              <div class="flex justify-center items-center ">
                <img :src="getImage(get_appeal.applicant_info.image)" alt=""
                     class="rounded-full object-cover w-[60px] h-[60px]"/>
              </div>
              <div class="pl-4 flex gap-2 justify-center flex-wrap px-4">
                <p class="text-center font-bold w-full">{{ get_appeal.applicant_info?.name }}</p>
                <p class="w-full text-justify">{{ get_appeal.applicant_info?.bio?.slice(0, 100) }}...</p>
              </div>
            </div>
            <div class="" v-if="Number(get_appeal.status_id) !== 4 && getCurrentUser.role_name === 'lawyer'">
              <label for="file2" class="block cursor-pointer bg-white mt-10 rounded-2xl text-l_black">
                <h3 class="text-2xl py-2 text-center font-bold mx-auto ">Загрузить ответ</h3>
                <input type="file" id="file2" @change="file=$event.target.files[0]" class="hidden">
              </label>
              <div class="flex items-center justify-center my-4" v-if="file" @click="send">
                <button class="bg-primary_gr py-2 px-4 rounded-xl text-white">Отправить</button>
              </div>
            </div>
            <div class="" v-if="Number(get_appeal.status_id) === 4">
              <p class="mt-10 font-bold pb-5">Прикрипленные файлы</p>
              <div class="flex flex-col gap-y-2">
              <span @click="getPdf(item.file, get_appeal.title +' answer')" v-for="item in get_appeal.lawyer_files"
                    class="text-link cursor-pointer">{{ item.name }}</span>
              </div>
              <div class="my-4 w-full flex justify-center"
                   v-if="get_appeal.applicant_id === getCurrentUser.id && get_appeal.score === null">

                <button class="bg-primary_gr py-2 px-4 text-white rounded-xl" @click="showRating = true">Оценить Юриста
                </button>
                <v-modal v-if="showRating" @showModal="showRating =!showRating">
                   <div class="text-center flex justify-center flex-wrap gap-y-2">
                      <h3 class="text-3xl font-bold w-full">Оцените Юриста</h3>
                      <p class="relative text-base text-filter_gray pl-8"></p>
                      <star-rating :increment="0.5" active-color="#1B3D7E" v-model:rating="rating"/>
                      <div class="w-full mt-10 flex justify-center max-sm:flex-wrap">
                        <v-button @click="showRating=!showRating"
                                  class="w-[306px] h-[60px] bg-opacity-0 border border-filter_gray text-filter_gray">
                          Отменить
                        </v-button>
                        <v-button @click="sendRating" class="w-[306px] h-[60px] ml-4 max-sm:ml-0 max-sm:mt-4">Сохранить
                        </v-button>
                      </div>
                  </div>
                </v-modal>

              </div>
              <div class="font-bold text-2xl" v-else>
                <div> Результат работы</div>

                <star-rating :increment="0.5" active-color="#1B3D7E" read-only="true" v-model:rating="get_appeal.score"/>

              </div>
            </div>


          </div>


        </div>

        <div class="bg-white rounded-2xl py-2" v-else-if="show===false">
          <div class="ADVOCATE  border-filter_gray px-4">
            <div class="flex cursor-pointer flex-wrap gap-2 ">
              <div class="flex justify-center items-center w-full ">
                <img :src="getImage(get_appeal.applicant_info.image)" alt=""
                     class="w-[60px] h-[60px] rounded-full object-cover "/>
              </div>
              <div class="w-full">
                <p class="flex justify-center font-bold text-center w-full text-xl">{{
                    get_appeal.applicant_info?.name
                  }}</p>
                <p class="text-justify">{{ get_appeal.applicant_info?.bio?.slice(0, 100) }}...</p>
              </div>
            </div>
            <div class="mt-8 flex w-full justify-around ">
              <v-button
                  @click="send_response({appeal_id:get_appeal.id})"
                  class="w-11/12 cursor-pointer"
                  v-if="get_appeal.can_send">
                Оставить отклик
              </v-button>
              <v-button class="w-11/12 cursor-pointer" v-else>
                Вы уже откликнулись
              </v-button>

            </div>

          </div>
        </div>
      </div>
    </div>
    <v-footer/>
  </div>

</template>

<script>
import vAppealResponse from "../../components/profile/vAppealResponse.vue";
import vButton from '../../components/UI/vButton2.vue'
import {mapActions, mapGetters, mapMutations} from "vuex";

import StarRating from 'vue-star-rating'
import VModal from "../../components/UI/vModal.vue";
import VHeader from "../../components/site/vHeader.vue";
import VFooter from "../../components/site/vFooter.vue";

export default {
  components: {
    VFooter,
    VHeader,
    VModal,
    vAppealResponse,
    vButton,
    StarRating
  },
  computed: {
    ...mapGetters(['get_appeal', 'get_base_url', 'getCurrentUser']),
    lawyers() {
      return [...this.get_appeal.lawyers]
    },

  },
  data() {
    return {
      open: false,
      changed_user: {},
      show: false,
      show_file: false,
      file: "",
      showRating: false,
      rating: '',
      show_response_modal: false,
      message: ""
    }
  },
  methods: {
    ...mapActions(['load_appeal', 'send_response', 'ignore_lawyer', 'change_lawyer', 'send_file', 'send_rating', 'loadCurrentUser']),
    ...mapMutations(['update_appeal']),
    changeUser(user) {
      this.open = true

      this.changed_user = user
    },
    sendResponse() {

    },
    responseModal() {
      this.open = true
    },
    ignore() {

      this.ignore_lawyer({appeal_id: this.$route.params.id, lawyer_id: this.changed_user.id});
      this.open = false;
    },
    change() {
      this.change_lawyer({appeal_id: this.$route.params.id, lawyer_id: this.changed_user.id});
      this.open = false;
    },
    send() {
      this.send_file({appeal_id: this.$route.params.id, file: this.file})
      this.file = ''

    },
    sendRating() {
      this.send_rating({appeal_id: this.$route.params.id, rating: this.rating})
      this.showRating = false;
    },
    getImage(image) {
      return image
    },
    getPdf(pdf, name) {
      const linkSource = pdf;
      const downloadLink = document.createElement("a");
      let ext = pdf.split('/')[1].split(';')[0]
      const fileName = name + "." + ext;
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }
  },
  mounted() {
    this.load_appeal({id: this.$route.params.id})
    this.loadCurrentUser();
  },
  watch: {
    get_appeal(val) {
      if (this.getCurrentUser.id !== undefined) {
        this.show = (this.getCurrentUser.id === val.applicant_id && !val.lawyer_id)
      } else {
      }
    },
    getCurrentUser(val) {
      if (this.get_appeal.applicant_id !== undefined) {
        this.show = (val.id === this.get_appeal.applicant_id && !this.get_appeal.lawyer_id)
      }
    },
    $route(old, n) {
      this.update_appeal({})
    },

  },

  props: {}
};
</script>

<style>
.vue-star-rating-rating-text {
  display: none;
}
</style>
