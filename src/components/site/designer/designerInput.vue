<template>
  <div class="">
    <label class="flex flex-col text-gray text-xl font-medium">
      {{ item.label }}
      <input
          v-if="item.type === 'text' || item.type === 'date' || item.type === 'number' || item.type === 'select_from_request' "
          :required="Number(item.is_required) === 1"
          :type="item.type === 'select_from_request'?'text':item.type"
          class="border border-footer_bg rounded-xl outline-none px-4 py-2"
          @input="$emit('update:modelValue', $event.target.value)"
          @focusout="$emit('loadPreview')"
      >
    </label>

    <label v-if="item.type === 'select_text'"
           class="flex flex-col text-gray text-xl font-medium">
      {{ item.label }}
      <select
          :required="!modelValue.length"
          class="border border-footer_bg rounded-xl outline-none px-4 py-2"
          @input="$emit('update:modelValue', $event.target.value)"
          @focusout="$emit('loadPreview')"
      >
        <option :value="op.label" v-for="op in item[localStorage.getItem('locale')]">
          {{ op.label }}
        </option>
      </select>
      <input
          :required="!modelValue.length"
          type="text"
          class="border border-footer_bg rounded-xl outline-none px-4 py-2"
          @input="$emit('update:modelValue', $event.target.value)"
          @focusout="$emit('loadPreview')"
      >
    </label>
    <label for="" v-if="item.type === 'comment'">
      {{ item.label }}
    </label>
    <label for="" v-else-if="item.type==='multi_select_text'" class="flex flex-col text-gray text-xl font-medium">
      {{ item.label }}
      <select
          :required="!modelValue.length"
          multiple
          class="border border-footer_bg rounded-xl outline-none px-4 py-2"
          @input="$emit('update:modelValue', $event.target.value)"
          @focusout="$emit('loadPreview')"
      >
        <option :value="op.label" v-for="op in item[localStorage.getItem('locale')]">
          {{ op.label }}
        </option>
      </select>
      <input
          :required="!modelValue.length"
          type="text"
          class="border border-footer_bg rounded-xl outline-none px-4 py-2"
          @input="$emit('update:modelValue', $event.target.value)"
          @focusout="$emit('loadPreview')"
      >
    </label>
  </div>
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