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
        <span class="break-all" style="white-space: pre-line" v-if="content.text">
          {{ content.text }}&nbsp;
         </span>
         <span v-if="Number(content.new_line) === 1"><br></span>
          <span class="break-all h-max" v-for="field in content.fields">
            <span v-if="isAdmin" class="text-filter_gray italic" :class="{
      'text-justify':field.align === 'start',
      'text-center ':field.align === 'center',
      'text-end':field.align === 'end',
      'font-bold':field.weight === 'bold',
      'block w-full ':Number(field.new_line) === 1,

      'italic':field.italic

    }">{{ field.name_uz_l }}</span>
            <span v-if="field.input_type_name === 'date'">
              {{ getDate(field.value) }}&nbsp;
            </span>
            <span v-else-if="!isAdmin" style="white-space: pre-line"
                  class="h-max"
                  :class="{
      'text-justify':field.align === 'start',
      'text-center ':field.align === 'center',
      'text-end':field.align === 'end',
      'font-bold':field.weight === 'bold',
      'block w-full ':Number(field.new_line) === 1,

      'italic':field.italic

    }">
               {{ field.value }}&nbsp;

            </span>
            </span>

      </span>
    </span>
    <div class="flex w-full  justify-between mt-5">
      <div class="w-[150px]">Сана {{ getDate(new Date()) }}
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
    item: Object,
    isAdmin: Boolean
  },
  methods: {
    getDate(date) {
      if (date) {
        let options = {year: 'numeric', month: 'numeric', day: 'numeric'};
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