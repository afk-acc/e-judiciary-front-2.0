<template>
  <div class="text-sm">
    <label class="flex flex-col text-gray  font-medium gap-y-2"
           v-if="item.input_type_name === 'text' || item.input_type_name === 'date' || item.input_type_name === 'number' || item.input_type_name === 'select_from_request' ">
      {{ getText(item, 'name_') }}
      <textarea
          ref="textarea"
          v-if="item.input_type_name === 'text'"
          :value="modelValue"
          :required="Number(item.required) === 1"
          rows="1"
          class="border overflow-hidden border-footer_bg rounded-md focus:border-borderFocus focus:shadow-inputFocus border-footer_bg rounded-md outline-none px-4 py-2 resize-none"
          @input="$emit('update:modelValue', $event.target.value)"
      />
      <input v-else
             :value="modelValue"
             :required="Number(item.required) === 1"
             :type="item.input_type_name"
             class="border border-footer_bg rounded-md focus:border-borderFocus asdas focus:shadow-inputFocus border-footer_bg rounded-md outline-none px-4 py-2"
             @input="$emit('update:modelValue', $event.target.value)"
      >
    </label>
    <label v-if="item.input_type_name === 'select'" class="flex flex-col text-gray font-medium gap-y-2">
      {{ getText(item, 'name_') }}
      <select
          value="-1"
          class="border border-footer_bg rounded-md p-2 outline-none border border-filter_gray rounded-xl"
          :required="Number(item.required) === 1"
          v-model="temp"
          name="" id="">
        <option value="-1" disabled>{{ $t("Выберите") }}</option>
        <option :value="val.id" v-if="item.option_list" v-for="val in item.option_list">{{ val.value }}</option>
        <option v-else :value="option" v-for="(option, i) in JSON.parse(item.option)['uz_l']">{{ option }}</option>
      </select>
      <select
          class="border border-footer_bg rounded-md p-2 outline-none border border-filter_gray rounded-xl"
          v-if="temp"
          :required="Number(item.required) === 1"
          @input="$emit('update:modelValue', $event.target.value)"
          name="" id="">
        <option value="" selected disabled>{{$t("Выберите")}}</option>
        <option :value="i.value" v-for="i in item.option_list.filter(el=>{
          return el.id === temp
        })[0].second_values">{{ i.value }}
        </option>
      </select>
    </label>
    <label v-if="item.input_type_name === 'select_text'"
           class="flex flex-col text-gray  font-medium">
      {{ item.label }}
      <select
          :required="!modelValue.length"
          class="border border-footer_bg rounded-xl outline-none px-4 py-2"
          @input="$emit('update:modelValue', $event.target.value)"
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
      >
    </label>
    <label for="" v-if="item.input_type_name === 'comment'">
      {{ item.label }}
    </label>
    <label for="" v-else-if="item.input_type_name==='multi_select_text'" class="flex flex-col text-gray  font-medium">
      {{ item.label }}
      <select
          :required="!modelValue.length"
          multiple
          class="border border-footer_bg rounded-xl outline-none px-4 py-2"
          @input="$emit('update:modelValue', $event.target.value)"
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
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "designerInput",
  data() {
    return {
      temp: ''
    }
  },
  props: {
    item: Object, modelValue: String,
  },
  methods: {
    getText(temp, name) {
      if (localStorage.getItem('locale') === 'ru')
        return temp[name + 'uz_c'];
      return temp[name + localStorage.getItem('locale')]
    }
  },
  mounted() {
    if (this.item.input_type_name === 'text') {
      this.$refs.textarea.addEventListener("keydown", e => {
        let scHeight = e.target.scrollHeight;
        this.$refs.textarea.style.height = `${scHeight}px`;
      });
    }
  }
}
</script>

<style >


</style>