<template>
  <div class="flex gap-x-1 justify-between items-center border-b border-border_c px-4 ">
    <div class="py-5">
      {{ num }}
    </div>
    <router-link :to="{name:'appeal-info', params:{id:item.id}}" class="w-3/12 text-start text-link cursor-pointer">{{ item.title }}</router-link>
    <div class="">{{ get_date(item.started) }}</div>
    <div class="text-link cursor-pointer" @click="getPdf(item.files, item.title)">{{ $t('Скачать') }}</div>
    <div class="text-danger cursor-pointer" @click="$emit('showModal', item.id)">{{ $t('Удалить') }}</div>
  </div>
</template>

<script>
import {getDate, download_file} from "../../assets/functions.js";

export default {
  name: "appealItem",
  data() {
    return {}
  },
  props: {
    item: Object,
    num: Number
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
  }


}
</script>

<style scoped>

</style>