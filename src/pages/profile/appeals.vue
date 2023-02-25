<template>
  <div class="">
    <div class="max-h-[550px] overflow-auto">
      <v-search v-model:model-value="params.query" @search="loadAppealList(params)"/>
      <div class="flex justify-between">
        <div class="flex gap-x-4 my-5">
          <button @click="params.params='all'; params.page = 1;loadAppealList(params)"
                  class="rounded-2xl text-black font-bold text-xl px-4 py-2"
                  :class="{'bg-primary_gr text-white': params.params === 'all' }">{{ $t("Все") }}
          </button>
          <button @click="params.params='progress'; params.page = 1;loadAppealList(params)"
                  class="rounded-2xl text-black font-bold text-xl px-4 py-2"
                  :class="{'bg-primary_gr text-white': params.params === 'progress' }">{{ $t('В процессе') }}
          </button>
          <button @click="params.params='ended';params.page = 1; loadAppealList(params)"
                  class="rounded-2xl text-black font-bold text-xl px-4 py-2"
                  :class="{'bg-primary_gr text-white': params.params === 'ended' }">{{ $t("Завершенные") }}
          </button>
          <button @click="params.params='new'; params.page = 1;loadAppealList(params)" v-if="can(getCurrentUser, 'appeal.read')"
                  class="rounded-2xl text-black font-bold text-xl px-4 py-2"
                  :class="{'bg-primary_gr text-white': params.params === 'new' }">{{ $t("Новые") }}
          </button>

        </div>
        <div class="my-5 ">
          <router-link :to="{name:'service', params:{page:1}}"
                  class="rounded-2xl  font-bold  px-4 py-2 bg-primary_gr text-white"
                >{{ $t("Добавить обращение") }}
          </router-link>
        </div>
      </div>
      <appeal-item :item="item" v-for="(item, index) in get_appeal_list.data" :key="index"
                   @showModal="(id)=>{this.show_del = true; this.del_id = id }"
                   :num="(params.page - 1) * 10 + index +1"/>
    </div>
    <div class="flex gap-x-[1px] flex-wrap my-10 " v-if="get_appeal_list?.data?.length > 0">
      <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
           v-for="item in get_appeal_list?.meta?.links"
           :class="{'bg-primary text-white rounded-full ':item.active}">
        {{ $t(item.label) }}
      </div>
    </div>
    <div class="text-center font-bold text-2xl" v-else>
      {{$t('Ничего не найдено')}}
    </div>
    <v-modal v-if="show_del" @showModal="show_del = !show_del">
      <p class="text-center font-bold text-black text-3xl">{{ $t('Подтвердите удаление') }}</p>
      <div class="flex justify-center gap-x-4 my-5">
        <v-button @click="show_del = false">Отменить</v-button>
        <v-button mode="danger" @click="delete_appeal({del_id:del_id, params:params}); show_del=false">Удалить
        </v-button>
      </div>
    </v-modal>
  </div>

</template>

<script>
import AppealItem from "../../components/profile/appealItem.vue";
import {mapGetters, mapActions} from "vuex";
import VModal from "../../components/UI/vModal.vue";
import VButton from "../../components/UI/vButton2.vue";
import VSearch from "../../components/UI/vSearch.vue";
import {canAccess} from "../../assets/functions.js";

export default {
  name: "appeals",
  components: {VSearch, VButton, VModal, AppealItem},
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
      console.log(page)
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