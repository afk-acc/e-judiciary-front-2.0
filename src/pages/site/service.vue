<template>
  <div class="">
    <div class="_container flex">
      <div class="w-4/12 bg-footer_bg px-8 pt-7">
        <v-search v-model:model-value="params.query" @search="load_all_doc_list(this.params)" :placeholder="$t('Поиск документов')"/>
        <v-dropdown/>
      </div>
      <div class="px-10 pt-9 ">
        <div class="text-2xl text-black font-bold my-5">{{$t('Выберите шаблон для документа')}}</div>

        <p class="font-medium text-xl text-black">{{ $t('Все') }}</p>
        <div class="flex-col gap-y-5 flex">
          <doc-item :item="item" v-for="(item, index) in get_all_doc_list.data" :key="index"/>
        </div>

        <div class="flex gap-x-[1px] flex-wrap my-10 ">
          <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
               v-for="item in get_all_doc_list?.meta?.links"
               :class="{'bg-primary text-white rounded-full ':item.active}">
            {{ $t(item.label) }}
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

export default {
  name: "service",
  components: {VInfo, DocItem, VDropdown, VSearch},
  data() {
    return {
      params: {
        page: 1,
        query:""
      }
    }
  },
  computed: {
    ...mapGetters(['get_all_doc_list'])
  },
  methods: {
    ...mapActions(['load_all_doc_list']),
    loadPage(page) {
      console.log(page)
      if (page === '<') {
        if (Number(this.params.page) > 1) {
          this.params.page -= 1;
        }
      } else if (page === '>') {
        if (Number(this.params.page) < this.get_all_doc_list.meta.last_page) {
          this.params.page = Number(this.params.page) + 1
        }
      }
      else{
        if (Number(page) <= this.get_all_doc_list.meta.last_page) {
          this.params.page = Number(page)
        }
      }
      this.$router.push({name:'service', params:{page:this.params.page}})
      this.load_all_doc_list(this.params)
    }
  },
  mounted() {
    this.params.page = this.$route.params.page
    this.load_all_doc_list(this.params)
  }
}
</script>

<style scoped>

</style>