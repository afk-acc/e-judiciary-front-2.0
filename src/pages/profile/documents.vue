<template>
  <div class="flex flex-col gap-y-2">
    <div class="flex flex-col gap-y-2 " v-for="(item, index) in get_user_docs.data" :key="index">
      <div @click="get_file(file.file, file.name)" class=" cursor-pointer flex gap-x-2" v-for="(file, i) in item.files" :key="i">
        <span class="text-black font-bold">{{ (params.page - 1) * params.limit + index + 1 }}</span>
        <span class="break-all  text-link">
        {{ file.name }}
        </span>
      </div>

    </div>
    <div class="flex gap-x-[1px] flex-wrap my-10 " v-if="get_user_docs?.data?.length > 0">
      <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
           v-for="item in get_user_docs?.meta?.links"
           :class="{'bg-primary text-white rounded-full ':item.active}">
        {{ $t(item.label) }}
      </div>
    </div>
    <div class="text-center font-bold text-2xl" v-else>
      {{$t('Ничего не найдено')}}
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {download_file} from "../../assets/functions.js";

export default {
  name: "documents",
  data() {
    return {
      params: {
        page: 1,
        limit: 10
      },
    }
  },
  methods: {
    ...mapActions(['load_doc_list']),
    get_file(file, name){
      download_file(file, name)
    },
    loadPage(page) {
      if (page === '<') {
        if (Number(this.params.page) > 1) {
          this.params.page -= 1;
        }
      } else if (page === '>') {
        if (Number(this.params.page) < this.get_user_docs.meta.last_page) {
          this.params.page = Number(this.params.page) + 1
        }
      } else {
        if (Number(page) <= this.get_user_docs.meta.last_page) {
          this.params.page = Number(page)
        }
      }
      this.$router.push({name: 'documents', params: {page: this.params.page}})
    }

  },
  computed: {
    ...mapGetters(['get_user_docs'])
  },
  mounted() {
    this.params.page = this.$route.params.page
    this.load_doc_list(this.params)
  },
  watch:{
    $route(to, from){
      this.params.page = to.params.page
      this.load_doc_list(this.params)
    }
  }
}
</script>

<style scoped>

</style>