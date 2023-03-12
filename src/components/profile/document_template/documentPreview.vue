<template>
  <div class="max-w-[700px] max-lg:w-[720p] my_class"
  >
    <span v-for="(content, index) in item.doc_content"
          class=""
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
        <span class="break-all" style="white-space: pre-line">
          {{ content.text }}&nbsp;
         </span>
          <span class="break-all" v-for="field in content.fields">
            <br v-if="Number(field.new_line) === 1"/>
            <span v-if="field.input_type_name === 'date'">
              {{getDate(field.value)}}&nbsp;
            </span>
            <span v-else  style="white-space: pre-line">
               {{ field.value }}&nbsp;
            </span>
            </span>

      </span>
    </span>
    <div class="flex w-full  justify-between mt-5">
      <div class="w-[150px]">Сана {{getDate(new Date())}}
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
  },
  methods:{
    getDate(date){
      if(date){
      let options = {  year: 'numeric', month: 'numeric', day: 'numeric' };
      let d = new Date(date);
        return d.toLocaleDateString("ru", options)
      }
      return '________'
    }
  }
}
</script>

<style>
.my_class {
  font-family: 'Times New Roman', Times, serif;
}
</style>