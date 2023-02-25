<template>
  <label class="flex flex-col text-gray text-xl font-medium">
    {{ item.label }}
    <input
        :required="Number(item.is_required) === 1"
        :type="item.type" class="border border-footer_bg rounded-xl outline-none px-4 py-2"
           @input="$emit('update:modelValue', $event.target.value)" @focusout="$emit('loadPreview')" >
  </label>
</template>

<script>
export default {
  name: "designerInput",
  props: {
    item: Object, modelValue: String,
  }
}
</script>

<style scoped>

</style>