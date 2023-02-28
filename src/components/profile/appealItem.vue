<template>
  <div class="flex gap-x-1 text-sm justify-evenly items-center border-b border-border_c px-4 ">
    <div class="py-5">
      {{ num }}
    </div>
    <router-link :to="{name:'appeal-info', params:{id:item.id}}" class="w-2/12 text-start text-link cursor-pointer">{{ item.title }}</router-link>
    <div class="">{{ get_date(item.started) }}</div>
    <div v-if="item.files.length > 0" class="text-link cursor-pointer" @click="getPdf(item.files, item.title)">{{ $t('Скачать') }}</div>
    <div class="" v-else>{{ $t('Без файла') }}</div>
    <div v-if="item.applicant_info.id === getCurrentUser.id" class="text-danger cursor-pointer" @click="$emit('showModal', item.id)">{{ $t('Удалить') }}</div>
  </div>
</template>

<script>
import {getDate, download_file} from "../../assets/functions.js";
import {mapGetters} from "vuex";

export default {
  name: "appealItem",
  data() {
    return {}
  },
  props: {
    item: Object,
    num: Number
  },
  computed:{
    ...mapGetters(['getCurrentUser'])
  },
  methods: {
    get_date(date) {
      return getDate(date)
    },
    getPdf(files, name) {
      files.forEach(e => {
        download_file(e.file, name)
      })
    }
  },
  mounted() {

  }


}
</script>

<style scoped>

</style>