<template>
  <textarea
            :required="required"
            rows="1" class="w-9/12 resize-none h-max px-2 py-2 outline-none rounded-md border border-filter_gray"
            ref="textarea" name="" spellcheck="false" id="" :value="modelValue?.replaceAll('<br>', '\n')"
            @keyup="$emit('update:modelValue', $event.target.value.replaceAll('\n','<br>'))"></textarea>
</template>

<script>
export default {
  name: "vTextarea",
  props: {
    modelValue: String,
    required:Boolean
  },
  mounted() {
    this.$refs.textarea.addEventListener("keyup", e => {
      let scHeight = e.target.scrollHeight;
      this.$refs.textarea.style.height = `${scHeight}px`;
    });
  }
}
</script>

<style scoped>

</style>