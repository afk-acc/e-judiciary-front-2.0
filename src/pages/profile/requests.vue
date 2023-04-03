<template>
  <div class="w-full overflow-x-scroll">
    <div class="overflow-x-scroll max-md:w-[720px] text-sm">
      <div v-if="get_request_list?.data?.length > 0">
        <request-item
            @showModal="(el)=>{show_info = true;active_user=el.user_info }"
            :item="item" v-for="(item, index) in get_request_list.data" :key="index"
            :num="(params.page-1) * 10 + index + 1"/>
      </div>
      <div v-else-if="!get_request_list.data">
        <usersScelet></usersScelet>
      </div>
      <div class="text-center font-bold text-2xl" v-else>
        {{ $t('Ничего не найдено') }}
      </div>
    </div>
    <div class="flex gap-x-[1px] flex-wrap my-10  overflow-x-scroll" v-if="get_request_list?.data?.length > 0">
      <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
           v-for="item in get_request_list?.meta?.links"
           :class="{'bg-primary text-white rounded-full ':item.active}">
        {{ $t(item.label) }}
      </div>
    </div>
    <v-modal v-if="show_info" @showModal="show_info = !show_info">
      <div class="text-center font-bold text-primary text-2xl">{{ $t("Информация о пользователе") }}</div>
      <div class="flex justify-center my-2"><img :src="get_server_domain+active_user.image" alt=""
                                                 class="w-[100px] h-[100px] rounded-full object-cover "></div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Имя') }}:</span> {{ active_user.name }}</div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Роль') }}:</span> {{ active_user.role_locale }}
      </div>
      <div class="text-xl text-justify"><span class="font-bold text-black ">{{ $t('О пользователе') }}:</span>
        {{ active_user.bio }}
      </div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Образование') }}:</span>
        {{ active_user.education_place || '-' }}
      </div>

      <div class="text-xl"><span class="font-bold text-black">{{ $t('Страна') }}:</span>
        {{ active_user.country || '-' }}
      </div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Город') }}:</span>
        {{ active_user.city || '-' }}
      </div>

      <div class="text-xl"><span class="font-bold text-black">{{ $t('Язык') }}:</span>
        {{ active_user.languages || '-' }}
      </div>


      <div class="text-xl"><span class="font-bold text-black">{{ $t('Телефон') }}:</span> {{ active_user.phone || '-' }}
      </div>
      <div class="text-xl flex flex-col" v-if="active_user.role_name ">
        <div class="">
          <span class="font-bold text-black">{{ $t('Рейтинг') }}:</span> {{
            active_user.rating || '-'
          }}
        </div>
        <div class="">
          <span class="font-bold text-black  ">{{ $t('Сертификат юриста') }}:</span>
          <span class="text-link cursor-pointer ml-4" @click="getFile(active_user.lawyer_file, active_user.name)">{{
              $t("Скачать")
            }}</span>
        </div>
      </div>
      <div class="flex justify-center mt-1">
        <v-button @click="show_info = false">{{ $t("Закрыть") }}</v-button>
      </div>
    </v-modal>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {canAccess} from "../../assets/functions.js";
import RequestItem from "../../components/profile/requestItem.vue";
import VModal from "../../components/UI/vModal.vue";
import VButton from "../../components/UI/vButton2.vue";
import usersScelet from "./sceleton/usersScelet.vue";

export default {
  name: "requests",
  components: {VButton, VModal, RequestItem, usersScelet},


  data() {
    return {
      loadPrev: false,
      loadNext: true,
      isActive: false,
      active_user: {},
      show_info: false,
      info: {},
      params: {
        page: 1,
        limit: 15,
        locale: localStorage.getItem('locale'),
        query: "",
      },
    }
  },
  methods: {
    ...mapActions(['load_request_list', 'change_request_lawyer']),
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
    },
    loadPage(page) {
      if (page === '<') {
        if (Number(this.params.page) > 1) {
          this.params.page -= 1;
        }
      } else if (page === '>') {
        if (Number(this.params.page) < this.get_request_list.meta.last_page) {
          this.params.page = Number(this.params.page) + 1
        }
      } else {
        if (Number(page) <= this.get_request_list.meta.last_page) {
          this.params.page = Number(page)
        }
      }
      this.$router.push({name: 'requests', params: {page: this.params.page}})
    },
    

  },
  computed: {
    ...mapGetters(['get_request_list', 'getCurrentUser', 'get_server_domain'])
  },
  mounted() {
    this.params.page = this.$route.params.page
    this.loadPrev = Number(this.params.page) > 1
    this.load_request_list(this.params)
    if (this.getCurrentUser.id) {
      if (!canAccess(this.getCurrentUser, 'request.read')) {
        this.$router.go(-1)
      }
    }
  },
  watch: {
    $route(to, from) {
      this.params.page = to.params.page
      this.load_request_list(this.params)
    },
    getCurrentUser(val) {
      if (!canAccess(val, 'request.read')) {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style scoped>

</style>