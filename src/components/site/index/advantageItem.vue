<template>
  <div class="transition-all duration-300 hover:-translate-y-4 flex flex-col items-center text-black bg-white rounded-2xl shadow-adventage px-5 py-4 max-w-[252px] min-h-[252px] justify-center gap-y-4">
    <div class="">
      <slot name="icon"/>
    </div>
    <div class="font-medium text-xl">
      <slot name="header"/>
    </div>
    <div class="text-gray text-sm font-medium text-center">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "advantageItem"
}
</script>

<style scoped>

</style>