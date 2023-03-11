<template>
  <div class="max-w-[700px] max-lg:w-[720p] my_class"
  >
    <span v-for="(content, index) in item.doc_content"
          class=" inline-block "
          :class="{
      'text-justify':content.align === 'start',
      'text-center':content.align === 'center',
      'text-end':content.align === 'end',
      'font-bold':content.weight === 'bold',
      'block w-full ':Number(content.new_line) === 1,
      'italic':content.italic

    }"
    >
      <span
          v-if="!(content.deleted) "
      >
          <br v-if="Number(content.new_line) === 1"/>
        <div class="break-all" style="white-space: pre-line">
          {{content.text}}
         </div>
          <span class="break-all" v-for="field in content.fields">
               {{ field.value }}
          </span>

      </span>
    </span>
    <div class="flex w-full  justify-between mt-5">
      <div class="w-[150px]">Сана
        <hr class="ml-12"/>
      </div>
      <div class="w-[150px] ">Имзо
        <hr class="ml-12"/>
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

<style>
.my_class {
  font-family: 'Times New Roman', Times, serif;
}
</style>