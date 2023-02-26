<template>
  <div class="flex max-sm:flex-col max-sm:items-center w-full text-brown_t font-bold  table_item">
    <div class="w-3/12 border-r max-sm:border-r-0 border-[#E7E7E7] p-3 max-sm:w-full max-sm:text-center ">
      {{ label }}
    </div>
    <div class="w-9/12 p-3 max-lg:w-full max-lg:text-end max-sm:text-center max-sm:border-b"  >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "profileInfoItem",
  props: {
    item: String,
    label: String
  }
}
</script>

<style >
.table_item:nth-child(2n+1){
  background: #EDEDED;

}

</style>