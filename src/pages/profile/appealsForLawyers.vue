<template>
  <div class="w-full  max-md:mt-14">
    <div class="max-h-[500px] max-lg:w-[1024px] overflow-x-scroll">
      <v-search v-model:model-value="params.query" @search="loadAppealList(params)"/>
      <div class="flex justify-between">
        <div class="flex gap-x-4 my-5 text-sm">
          <button @click="params.params='all'; params.page = 1;loadAppealList(params)"
                  class="rounded-2xl text-black font-bold  px-4 py-2"
                  :class="{'bg-[#0069d9] text-white': params.params === 'all' }">{{ $t("Все") }}
          </button>
          <button @click="params.params='progress'; params.page = 1;loadAppealList(params)"
                  class="rounded-2xl text-black font-bold  px-4 py-2"
                  :class="{'bg-[#0069d9] text-white': params.params === 'progress' }">{{ $t('В процессе') }}
          </button>
          <button @click="params.params='ended';params.page = 1; loadAppealList(params)"
                  class="rounded-2xl text-black font-bold  px-4 py-2"
                  :class="{'bg-[#0069d9] text-white': params.params === 'ended' }">{{ $t("Завершенные") }}
          </button>
          <button @click="params.params='new'; params.page = 1;loadAppealList(params)" v-if="can(getCurrentUser, 'appeal.read')"
                  class="rounded-2xl text-black font-bold  px-4 py-2"
                  :class="{'bg-[#0069d9] text-white': params.params === 'new' }">{{ $t("Новые") }}
          </button>

        </div>
      </div>
     <div v-if="get_appeal_list.data?.length > 0">
      
      <appeal-item :item="item" v-for="(item, index) in get_appeal_list.data" :key="index"
       @showModal="(id)=>{this.show_del = true; this.del_id = id }"
       :num="(params.page - 1) * 10 + index +1"/>
       
    </div>
     <div v-else-if="!get_appeal_list.data" class="overflow-hidden">
        <AppealsScelet></AppealsScelet>
        <AppealsScelet></AppealsScelet>
        <AppealsScelet></AppealsScelet>
        <AppealsScelet></AppealsScelet>
        <AppealsScelet></AppealsScelet>
     </div>
     <div class="text-center font-bold text-2xl" v-else>
      {{$t('Ничего не найдено')}}
    </div>
    </div>
    <div class="flex gap-x-[1px] flex-wrap my-10 " v-if="get_appeal_list?.meta?.links?.length > 0">
        <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
             v-for="item in get_appeal_list?.meta?.links"
             :class="{'bg-primary text-white rounded-full ':item.active}">
          {{ $t(item.label) }}
        </div>
    </div>
   

  </div>

</template>

<script>
import AppealItem from "../../components/profile/appealItem.vue";
import {mapGetters, mapActions} from "vuex";
import VModal from "../../components/UI/vModal.vue";
import VButton from "../../components/UI/vButton2.vue";
import VSearch from "../../components/UI/vSearch.vue";
import {canAccess} from "../../assets/functions.js";
import AppealsScelet from "./sceleton/appealsScelet.vue";

export default {
  name: "appeals",
  components: {VSearch, VButton, VModal, AppealItem, AppealsScelet},
  data() {
    return {
      show_del: false,
      del_id: '',
      params: {
        params: "all",
        page: 1,
        limit: 16,
        query: '',
        sort: 'desc',
        par: 'num',
        parametr:'lawyer'
      },
    }
  },
  computed: {
    ...mapGetters(['get_appeal_list', 'getCurrentUser']),
  },
  methods: {
    ...mapActions(['loadAppealList', 'delete_appeal']),
    can(user, item){
      return canAccess(user, item)
    },
    changeParams(par) {
      this.params.params = par;
      this.params.page = 1;
      this.params.query = '';
      this.params.sort = 'asc';
      this.params.par = 'num';
      this.loadAppealList(this.params)
    },
    loadPage(page) {
      if (page === '<') {
        if (Number(this.params.page) > 1) {
          this.params.page -= 1;
        }
      } else if (page === '>') {
        if (Number(this.params.page) < this.get_appeal_list.meta.last_page) {
          this.params.page = Number(this.params.page) + 1
        }
      } else {
        if (Number(page) <= this.get_appeal_list.meta.last_page) {
          this.params.page = Number(page)
        }
      }
      this.$router.push({name: 'appeals', params: {page: this.params.page}})
    }

  },
  mounted() {
    if (this.getCurrentUser.permissions) {
      this.loadAppealList(this.params)
    }
  },
  watch: {
    getCurrentUser(val) {
      this.loadAppealList(this.params)
    },
    $route(to, from){
      this.params.page = to.params.page
      this.loadAppealList(this.params)
    }
  }

}
</script>

<style scoped>

</style>