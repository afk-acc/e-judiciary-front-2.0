<template>
  <label class="flex flex-col text-gray text-sm font-medium gap-y-2">
    {{ label }}
    <textarea name="" id="" cols="30" rows="10" v-if="type==='textarea'"
              @input="$emit('update:modelValue', $event.target.value)"
              :required="required"
              :value="modelValue"
              class="resize-none  focus:border-borderFocus focus:shadow-inputFocus border border-footer_bg rounded-md outline-none px-4 py-2"
              :placeholder="label"
    ></textarea>
    <input v-else
           :value="modelValue"
           :required="required"
           :type="type" class="border focus:border-borderFocus focus:shadow-inputFocus border-footer_bg rounded-md outline-none px-4 py-2"
           :placeholder="label"
           @input="$emit('update:modelValue', $event.target.value)">
  </label>
</template>

<script>
export default {
  name: "vInput",
  props: {
    item: Object, modelValue: String, label: String, type: String, required: Boolean
  }
}
</script>

<style scoped>

</style>