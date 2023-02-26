<template>
  <teleport to="body">
    <div class="fixed left-0 top-0 h-screen w-screen flex justify-center items-center z-50">
      <div class="bg-black opacity-40 absolute left-0 top-0 w-screen h-screen" @click="$emit('showModal')"></div>
      <div class="bg-white max-lg:rounded-none w-6/12 max-md:w-9/12 max-sm:w-11/12 max-h-[70%] max-lg:max-h-full max-w-max  relative overflow-y-scroll p-5 " >
        <slot/>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "vModal"
}
</script>

<style scoped>

</style>