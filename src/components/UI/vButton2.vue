<template>
  <button :type="type"
          :class="{'bg-danger':mode === 'danger', 'bg-primary_gr':mode !== 'danger'}"
          class="rounded-[50px] text-white text-center px-9 py-4 max-sm:px-6 font-bold cursor-pointer ">
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