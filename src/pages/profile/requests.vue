<template>
  <div class="">
    <div class="">
      <request-item
          @showModal="(el)=>{show_info = true;active_user=el.user_info }"
          :item="item" v-for="(item, index) in get_request_list.data" :key="index"
          :num="(params.page-1) * 10 + index + 1"/>
    </div>
    <div class="flex gap-x-[1px] flex-wrap my-10 " v-if="get_request_list?.data?.length > 0">
      <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
           v-for="item in get_request_list?.meta?.links"
           :class="{'bg-primary text-white rounded-full ':item.active}">
        {{ $t(item.label) }}
      </div>
    </div>
    <div class="text-center font-bold text-2xl" v-else>
      {{ $t('Ничего не найдено') }}
    </div>
    <v-modal v-if="show_info" @showModal="show_info = !show_info">
      <div class="text-center font-bold text-primary text-2xl">{{ $t("Информация о пользователе") }}</div>
      <div class="flex justify-center my-2"><img :src="active_user?.image" alt=""
                                                 class="w-[100px] h-[100px] rounded-full object-cover "></div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Имя') }}:</span> {{ active_user.name }}</div>

      <div class="text-xl"><span class="font-bold text-black">{{ $t('О пользователе') }}:</span> {{ active_user.bio }}
      </div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Образование') }}:</span>
        {{ active_user.education_place || '-' }}
      </div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Телефон') }}:</span> {{ active_user.phone || '-' }}
      </div>
      <div class="text-xl"><span class="font-bold text-black">{{ $t('Рейтинг') }}:</span> {{
          active_user.rating || '-'
        }}
      </div>
      <div class="flex justify-center mt-1 gap-x-4">
        <v-button mode="danger" @click="show_info = false; change_request_lawyer({user_id:active_user.id,value:-1})">
          {{ $t("Отклонить") }}
        </v-button>
        <v-button @click="show_info = false; change_request_lawyer({user_id:active_user.id,value:1})">{{
            $t("Приянть")
          }}
        </v-button>
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

export default {
  name: "requests",
  components: {VButton, VModal, RequestItem},


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
    loadPage(page) {
      console.log(page)
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
    }

  },
  computed: {
    ...mapGetters(['get_request_list', 'getCurrentUser'])
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