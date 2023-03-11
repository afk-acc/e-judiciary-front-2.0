<template>
  <div class="">
    <div class="_container flex mt-[4.75rem] ">
      <div
          class=" w-4/12 max-lg:fixed h-screen   max-lg:w-6/12 max-md:w-10/12 break-all z-50 transition-all bg-footer_bg px-8 pt-7 pb-[150px]"
          :class="{'max-lg:left-[-1000px]' : !openLeft, 'max-lg:left-0' : openLeft}"
      >
        <v-search v-model:model-value="params.query" @search="load_all_doc_list(this.params)"
                  :placeholder="$t('Поиск документов')"/>
        <div class="max-h-[85vh] overflow-y-auto h-screen">
          <v-dropdown/>
        </div>

      </div>
      <div class="fixed z-40 opacity-40 bg-black w-full h-screen"
           :class="{'hidden': !openLeft, 'block' : openLeft}"
           @click="openLeft = !openLeft"
      ></div>
      <div class="fill-black absolute hidden max-lg:block py-10 max-md:px-2 px-8">
        <svg class="cursor-pointer" width="40px" height="40px" viewBox="0 0 32 32" version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             @click="openLeft = !openLeft"
        >
          <path
              d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
        </svg>
      </div>
      <div class="w-full px-10 max-lg:px-10 max-lg:mt-16  ">
        <div class="text-lg text-black font-bold my-5">{{ $t('Выберите шаблон для документа') }}</div>
        <p class="font-medium text-lg text-black">{{ $t('Все') }}</p>
        <div class="max-h-[85vh] overflow-y-auto h-screen">

        <div v-if="get_all_doc_list.data" class="flex-col gap-y-5 flex ">
          <DocItem :item="item" v-for="(item, index) in get_all_doc_list.data" :key="index"/>
        </div>
        <div v-else>
          <UserSceletTemplate/>
          <UserSceletTemplate/>
          <UserSceletTemplate/>
          <UserSceletTemplate/>
          <UserSceletTemplate/>
          <UserSceletTemplate/>
          <UserSceletTemplate/>
        </div>
        <div class="flex gap-x-[1px] flex-wrap my-10" v-if="get_all_doc_list?.meta?.links">
          <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
               v-for="item in get_all_doc_list?.meta?.links"
               :class="{'bg-primary text-white rounded-full ':item.active}">
            {{ $t(item.label) }}
          </div>
        </div>
        </div>

      </div>
    </div>
    <v-info/>
  </div>
</template>

<script>
import VSearch from "../../components/UI/vSearch.vue";
import VDropdown from "../../components/site/service/vDropdown.vue";
import DocItem from "../../components/site/service/docItem.vue";
import VInfo from "../../components/site/index/vInfo.vue";
import {mapActions, mapGetters} from "vuex";
import UserSceletTemplate from "./sceleton/userSceletTemplate.vue";
import ServiceLeftPanel from "./sceleton/ServiceLeftPanel.vue"

export default {
  name: "service",
  components: {VInfo, DocItem, VDropdown, VSearch, UserSceletTemplate, ServiceLeftPanel},
  data() {
    return {
      params: {
        page: 1,
        query: "",
        limit: 10
      },
      openLeft: false
    }
  },
  computed: {
    ...mapGetters(['get_all_doc_list', 'get_doc_type_list'])
  },
  methods: {
    ...mapActions(['load_all_doc_list']),
    loadPage(page) {
      if (page === '<') {
        if (Number(this.params.page) > 1) {
          this.params.page -= 1;
        }
      } else if (page === '>') {
        if (Number(this.params.page) < this.get_all_doc_list.meta.last_page) {
          this.params.page = Number(this.params.page) + 1
        }
      } else {
        if (Number(page) <= this.get_all_doc_list.meta.last_page) {
          this.params.page = Number(page)
        }
      }
      this.$router.push({name: 'service', params: {page: this.params.page}})
      this.load_all_doc_list({page: 1, limit: 1000, query: this.params.query})
    }
  },
  mounted() {
    this.params.page = this.$route.params.page
    this.load_all_doc_list({page: 1, limit: 1000, query: this.params.query})
  },

}
</script>

<style scoped>

</style>