<template>
  <div class="flex max-md:w-[720px] max gap-x-1 justify-between items-center border-b border-border_c px-4 py-2 ">
    <div class="py-5">
      {{ num }}
    </div>
    <div class="w-4/12 max-md:break-all">{{item.name}}</div>
    <div class=""><img :src="item.image" alt="" class="w-[90px] h-[90px] rounded-full object-cover"></div>
     <div class="flex justify-between max-md:flex-col">
       <div class="text-link cursor-pointer w-2/12 max-sm:pl-10 max-sm:">{{ item.role_locale }}</div>
       <div class="text-link cursor-pointer w-2/12 max-sm:pl-10 max-sm:" @click="$emit('showModal', item)">{{ $t('Редактировать') }}</div>
     </div>

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