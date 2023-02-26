<template>
  <div class="flex flex-col gap-y-2 mt-20">
    <span>Кол-во файлов: {{get_user_docs?.meta?.total}}</span>
    <div class="flex flex-col gap-y-2 " v-for="(item, index) in get_user_docs.data" :key="index">
      <div @click="get_file(file.file, file.name)" class=" cursor-pointer flex gap-x-2" v-for="(file, i) in item.files" :key="i">
        <div>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4C4 3.44772 4.44772 3 5 3H14H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L19.7071 7.70711C19.8946 7.89464 20 8.149 20 8.41421V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4Z" stroke="#200E32" stroke-width="2" stroke-linecap="round"/>
            <path d="M20 8H15V3" stroke="#200E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.5 13H11V17H11.5C12.6046 17 13.5 16.1046 13.5 15C13.5 13.8954 12.6046 13 11.5 13Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.5 17V13L17.5 13" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 15H17" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 17L7 15.5M7 15.5L7 13L7.75 13C8.44036 13 9 13.5596 9 14.25V14.25C9 14.9404 8.44036 15.5 7.75 15.5H7Z" stroke="#200E32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="break-all  text-link">
        {{ file.name.slice(0, 10) + '.pdf' }}
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