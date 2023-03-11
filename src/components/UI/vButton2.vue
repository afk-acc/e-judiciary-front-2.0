<template>
  <button :type="type"
          :class="{'bg-danger':mode === 'danger', 'text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 cursor-pointer rounded-xl py-2 px-2':mode !== 'danger'}"
          class="rounded-[50px] text-white text-center px-9 py-2 max-sm:px-6 font-bold cursor-pointer ">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "vButton",
  props: {
    type: String,
    mode: String
  }
}
</script>

<style scoped>

</style>