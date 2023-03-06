<template>
  <div class="flex max-sm:flex-col max-sm:items-center w-full text-brown_t font-bold  table_item">
    <div class="w-3/12 border-r max-sm:border-r-0 border-[#E7E7E7] p-3 max-sm:w-full max-sm:text-center ">
      {{ label }}
    </div>
    <div class="w-9/12 p-3 cursor-pointer text-link max-lg:w-full max-lg:text-end max-sm:text-center max-sm:border-b"
         @click="getFile(item
    ,label)"
         v-if="isFile">
      {{$t("Скачать")}}
    </div>
    <div class="w-9/12 p-3 max-lg:w-full max-lg:text-end max-sm:text-center max-sm:border-b" v-else>
      {{ item }}
    </div>
  </div>
</template>

<script>
import {download_file} from "../../assets/functions.js";

export default {
  name: "profileInfoItem",
  props: {
    item: String,
    label: String,
    isFile: Boolean
  },
  methods: {
    getFile(pdf, name) {
      if (pdf) {

        const linkSource = pdf;
        const downloadLink = document.createElement("a");
        let ext = pdf.split('/')[1].split(';')[0]
        const fileName = name + "." + ext;
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
      }
    }
  },
}
</script>

<style>
.table_item:nth-child(2n+1) {
  background: #EDEDED;

}

</style>