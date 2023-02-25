<template>
  <div class="relative">
    <input
        @focusout="$emit('search')"
        @keyup.enter="$emit('search')"
        @input="$emit('update:modelValue', $event.target.value)"
        type="text" class="pl-5 w-full pr-10 py-2 outline-none rounded-xl border border-footer_bg bg-white"
        :placeholder="placeholder">
    <div class="absolute right-1 top-2/4 -translate-x-1/2 -translate-y-1/2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
            stroke="#0263D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5 17.5L13.875 13.875" stroke="#0263D1" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>


    </div>
  </div>
</template>

<script>
export default {
  name: "vSearch",
  props: {
    placeholder: String,
    modelValue: String
  }
}
</script>

<style scoped>

</style>