<template>
  <div
      class="flex mx-10 max-[425px]:mx-2 max-[425px]:w-[400px] max gap-x-1  justify-between items-center border-b border-border_c px-4 py-2 ">
      <div class="flex max-lg:w-6/12 items-center gap-x-4">
        {{ num + '.' }}
      
        <p @click="$emit('showInfo', item)" class="text-sm transition-all duration-200 hover:underline hover:text-[#0069d9]">{{ item.name }}</p>
      </div>
    
    <div class="flex w-4/12 max-lg:w-6/12 max-md:flex-col max-md:items-end justify-between max-lg:justify-center max-lg:gap-x-6 text-sm">
      <div
          @click="$emit('showModal', item)"
          class="text-link cursor-pointer  max-lg:w-full max-sm:pl-10 ">
       <p>{{ item.role_locale }}</p>
      </div>
      <div class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 cursor-pointer rounded-xl py-2 px-2 max-md:w-[40px] "
           @click="$emit('showEdit', item)"
      >
        <svg data-v-f2b47a05="" width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path data-v-f2b47a05="" fill="#fff" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path><path data-v-f2b47a05="" fill="#fff" d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path></svg>
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