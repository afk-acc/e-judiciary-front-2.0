<template>
  <div class="flex w-full text-brown_t font-bold  table_item">
    <div class="w-3/12 border-r border-[#E7E7E7] p-3">
      {{ label }}
    </div>
    <div class="w-9/12 p-3">
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