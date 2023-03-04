<template>
  <div class="flex  mx-auto max-md:w-[720px] max gap-x-1 justify-between items-center border-b border-border_c px-4 py-2 ">
    <div class="w-1/12">
      {{ num + '.' }}
    </div>
    <div class=" ml-2 w-3/12 max-md:break-all text-sm"><p>{{item.name}}</p></div>
    <div class=" max-md:w-2/12 w-3/12"><img :src="item.image" alt="" class="w-[90px] h-[90px] rounded-full object-cover"></div>
   <div class="flex w-4/12 justify-between max-md:flex-col text-sm">
       <div class="text-link cursor-pointer  max-lg:w-5/12 max-sm:pl-10 ">
        {{ item.role_locale }}
       </div>
       <div class="text-link cursor-pointer  max-lg:w-5/12 max-sm:pl-10 "
       @click="$emit('showModal', item)">
       {{ $t('Редактировать') }}
       </div>
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
  },
 
}
</script>

<style scoped>

</style>