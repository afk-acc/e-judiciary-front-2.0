<template>
  <div class="max-w-[1000px] w-full max-lg:w-[720p] my_class"
  >
    <div v-for="(content, index) in item.doc_content"
         class="w-full inline-block "
         :class="{
      'text-start':content.align === 'start',
      'text-center':content.align === 'center',
      'text-end':content.align === 'end',
      'font-bold':content.weight === 'bold',

    }"
    >
      <div
          v-if="!(content.deleted) "
      >
        <br v-if="Number(content.new_line) === 1">
        <span class="break-all">
        {{ content.text }}
      </span>
        <p class="break-all" v-for="field in content.fields">
          {{field.value}}
        </p>

      </div>
    </div>
    <div class="flex justify-between mt-5">
      <div class="w-[150px]">{{ $t("Дата") }}
        <hr class="ml-12"/>
      </div>
      <div class="w-[150px] ">{{ $t('Подпись') }}
        <hr class="ml-20"/>
      </div>
    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "document_preview",
  mounted() {

  },
  computed: {},
  props: {
    item: Object
  }
}
</script>

<style >
.my_class {
  font-family: 'Times New Roman', Times, serif;
}
</style>