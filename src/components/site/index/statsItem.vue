<template>
  <div class="flex flex-col justify-center gap-y-6 items-center border-r border-gray last:border-none px-5  ">
    <div class="text-8xl font-bold text-[#AAAFB8]">
      <slot name="num"/>
    </div>
    <div class="text-2xl font-medium text-black">
      <slot name="text"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "statsItem"
}
</script>

<style scoped>

</style>