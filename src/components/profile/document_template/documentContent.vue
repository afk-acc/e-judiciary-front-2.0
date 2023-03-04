<template>
  <div class="w-full flex flex-col gap-y-4"
       v-if="!(item.deleted) "
  >
    <div class="my-2 w-full">
      <v-textarea v-model:model-value="item.text" required></v-textarea>
    </div>
    <div class="">
      <div class="flex gap-x-2 my-2">
        <div class="cursor-pointer"
             @click="item.align ='start'"

             :class="{'bg-primary_gr':item.align === 'start'}"
        >
          <svg :fill="item.align === 'start'?'#fff':'#000'" width="20px" height="20px" viewBox="0 0 42 30"
               version="1.1"
               xmlns="http://www.w3.org/2000/svg">
            <title>align-left</title>
            <path
                d="M4 4.75h12c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-12c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM28 27.25h-24c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h24c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM4 20.75h12c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-12c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM4 12.75h24c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-24c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0z"></path>
          </svg>
        </div>
        <div class="cursor-pointer flex justify-center pl-1"
             @click="item.align ='center'"
             :class="{'bg-primary_gr':item.align === 'center'}"
        >
          <svg :fill="item.align === 'center'?'#fff':'#000'" width="20px" height="20px" viewBox="0 0 42 30"
               version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>align-center</title>
            <path
                d="M10 4.75h12c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-12c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM28 27.25h-24c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h24c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM10 19.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h12c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM4 12.75h24c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-24c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0z"></path>
          </svg>
        </div>
        <div class="cursor-pointer "
             @click="item.align ='end'"
             :class="{'bg-primary_gr':item.align === 'end'}"
        >

          <svg width="20px" height="20px" viewBox="0 0 24 24" stroke-width="1px" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <title>align-end</title>
            <path
                d="M20 10.75H10C9.80109 10.75 9.61032 10.671 9.46967 10.5303C9.32902 10.3897 9.25 10.1989 9.25 10C9.25 9.80109 9.32902 9.61032 9.46967 9.46967C9.61032 9.32902 9.80109 9.25 10 9.25H20C20.1989 9.25 20.3897 9.32902 20.5303 9.46967C20.671 9.61032 20.75 9.80109 20.75 10C20.75 10.1989 20.671 10.3897 20.5303 10.5303C20.3897 10.671 20.1989 10.75 20 10.75Z"
                :fill="item.align === 'end'?'#fff':'#000'"/>
            <path
                d="M20.07 6.75H4.07001C3.8711 6.75 3.68033 6.67098 3.53968 6.53033C3.39903 6.38968 3.32001 6.19891 3.32001 6C3.32001 5.80109 3.39903 5.61032 3.53968 5.46967C3.68033 5.32902 3.8711 5.25 4.07001 5.25H20.07C20.2689 5.25 20.4597 5.32902 20.6003 5.46967C20.741 5.61032 20.82 5.80109 20.82 6C20.82 6.19891 20.741 6.38968 20.6003 6.53033C20.4597 6.67098 20.2689 6.75 20.07 6.75Z"
                :fill="item.align === 'end'?'#fff':'#000'"/>
            <path
                d="M20.07 14.75H4.07001C3.8711 14.75 3.68033 14.671 3.53968 14.5303C3.39903 14.3897 3.32001 14.1989 3.32001 14C3.32001 13.8011 3.39903 13.6103 3.53968 13.4697C3.68033 13.329 3.8711 13.25 4.07001 13.25H20.07C20.2689 13.25 20.4597 13.329 20.6003 13.4697C20.741 13.6103 20.82 13.8011 20.82 14C20.82 14.1989 20.741 14.3897 20.6003 14.5303C20.4597 14.671 20.2689 14.75 20.07 14.75Z"
                :fill="item.align === 'end'?'#fff':'#000'"/>
            <path
                d="M20 18.75H10C9.80109 18.75 9.61032 18.671 9.46967 18.5303C9.32902 18.3897 9.25 18.1989 9.25 18C9.25 17.8011 9.32902 17.6103 9.46967 17.4697C9.61032 17.329 9.80109 17.25 10 17.25H20C20.1989 17.25 20.3897 17.329 20.5303 17.4697C20.671 17.6103 20.75 17.8011 20.75 18C20.75 18.1989 20.671 18.3897 20.5303 18.5303C20.3897 18.671 20.1989 18.75 20 18.75Z"
                :fill="item.align === 'end'?'#fff':'#000'"/>
          </svg>
        </div>
        <div class="cursor-pointer"
             @click="item.weight = item.weight === 'bold'?'regular':'bold'"
             :class="{'bg-primary_gr':item.weight === 'bold'}"
        >
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>font-bold</title>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14.3333 2.5H6.5C5.94772 2.5 5.5 2.94771 5.5 3.5V20.5C5.5 21.0523 5.94772 21.5 6.5 21.5H15.3077C16.7253 21.5 18.058 20.8888 19.0208 19.8458C19.9798 18.8069 20.5 17.4217 20.5 16C20.5 14.5783 19.9798 13.1931 19.0208 12.1542C18.802 11.9172 18.5642 11.7025 18.3106 11.5122C19.0848 10.5188 19.5 9.27337 19.5 8C19.5 6.58139 18.9846 5.19744 18.0318 4.15799C17.0749 3.11416 15.7478 2.5 14.3333 2.5ZM14.3333 10.5C14.8638 10.5 15.4019 10.2713 15.8203 9.81484C16.2428 9.35401 16.5 8.70312 16.5 8C16.5 7.29688 16.2428 6.64599 15.8203 6.18516C15.4019 5.7287 14.8638 5.5 14.3333 5.5H8.5V10.5H14.3333ZM8.5 13.5V18.5H15.3077C15.8486 18.5 16.3942 18.2683 16.8163 17.811C17.2422 17.3497 17.5 16.7001 17.5 16C17.5 15.2999 17.2422 14.6503 16.8163 14.189C16.3942 13.7317 15.8486 13.5 15.3077 13.5H8.5Z"
                  :fill="item.weight === 'bold'?'#fff':'#000'"
            />
          </svg>
        </div>
        <div class="cursor-pointer"
             @click="item.new_line = Number(item.new_line) === 1?0:1"

             :class="{'bg-primary_gr':Number(item.new_line) === 1}"
        >
          <svg fill="none" width="20px" height="20px" viewBox="0 0 32 32" id="icon"
               xmlns="http://www.w3.org/2000/svg">

            <title>new-line</title>
            <path
                :fill="Number(item.new_line) === 1 ?'#fff':'#000'"
                d="M20.5859,14.4141,24.1719,18H6V8H4V18a2.0024,2.0024,0,0,0,2,2H24.1719L20.586,23.5859,22,25l6-6-6-6Z"/>
            <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32"
                  height="32"/>
          </svg>
        </div>
      </div>
      <div class="flex flex-col gap-y-2" v-if="item.fields.length > 0">
        <div class="font-bold mt-2">{{ $t("Поля для ввода") }}</div>
        <div class="flex flex-col gap-y-2 pl-10">
          <document-field @removeField="(val)=>{item.fields[val].deleted = true}" :item="field"

                          v-for="(field, index) in item.fields" :key="index" :index="index"/>
        </div>
      </div>
      <div class="">
        <button @click="item.fields.push({id:'new_id', document_content_id:item.id, input_type_id:1})"
                class="bg-primary_gr p-2 rounded-xl text-white">{{ $t("Добавить поле для ввода") }}
        </button>
      </div>
    </div>
    <div class="">
      <button
          @click="$emit('removeSection', index)"
          class="bg-danger p-2 text-white rounded-xl px-4">
        {{ $t('Удалить секцию') }}
      </button>
    </div>
  </div>
</template>

<script>
import DocumentField from "./documentField.vue";
import VTextarea from "./vTextarea.vue";

export default {
  name: "documentContent",
  components: {VTextarea, DocumentField},

  props: {
    item: Object,
    index: Number
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>