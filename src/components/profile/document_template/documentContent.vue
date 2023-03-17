<template>
  <div class="flex flex-col gap-y-4 border border-filter_gray border-opacity-30 p-4 m-2 mb-2"
       v-if="!(item.deleted) "
  >
    <div class="my-2 w-full max-md:w-8/12 max-sm:w-full">
      <v-textarea class="w-full focus:border-borderFocus focus:shadow-inputFocus" v-model:model-value="item.text"
                  :placeholder="$t('Введите текст')"></v-textarea>
    </div>
    <div class="">
      <div class="flex gap-x-2 my-2 w-full">
        <div class="cursor-pointer p-1"
             @click="item.align ='start'"
             :class="{'bg-[#dbeafe] text-[#2563eb] svgStroke':item.align === 'start'}"
        >
          <svg width="20" height="20" viewBox="0 0 18 18" :fill="item.align === 'start'?'#fff':'#000'">
            <line stroke="#000" x1="3" x2="15" y1="9" y2="9"></line>
            <line stroke="#000" x1="3" x2="13" y1="14" y2="14"></line>
            <line stroke="#000" x1="3" x2="9" y1="4" y2="4"></line>
          </svg>
        </div>
        <div class="cursor-pointer p-1 flex justify-center"
             @click="item.align ='center'"
             :class="{'bg-[#dbeafe] text-[#2563eb] svgStroke':item.align === 'center'}"
        >
          <svg width="20" height="20" viewBox="0 0 18 18">
            <line stroke="#000" x1="15" x2="3" y1="9" y2="9"></line>
            <line stroke="#000" x1="14" x2="4" y1="14" y2="14"></line>
            <line stroke="#000" x1="12" x2="6" y1="4" y2="4"></line>
          </svg>
        </div>
        <div class="cursor-pointer p-1 "
             @click="item.align ='end'"
             :class="{'bg-[#dbeafe] text-[#2563eb] svgStroke':item.align === 'end'}"
        >
          <svg width="20" height="20" viewBox="0 0 18 18">
            <line stroke="#000" x1="15" x2="3" y1="9" y2="9"></line>
            <line stroke="#000" x1="15" x2="5" y1="14" y2="14"></line>
            <line stroke="#000" x1="15" x2="9" y1="4" y2="4"></line>
          </svg>
        </div>
        <div class="cursor-pointer p-1"
             @click="item.weight = item.weight === 'bold'?'regular':'bold'"
             :class="{'bg-[#dbeafe] text-[#2563eb] svgStroke':item.weight === 'bold'}"
        >
          <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>font-bold</title>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M14.3333 2.5H6.5C5.94772 2.5 5.5 2.94771 5.5 3.5V20.5C5.5 21.0523 5.94772 21.5 6.5 21.5H15.3077C16.7253 21.5 18.058 20.8888 19.0208 19.8458C19.9798 18.8069 20.5 17.4217 20.5 16C20.5 14.5783 19.9798 13.1931 19.0208 12.1542C18.802 11.9172 18.5642 11.7025 18.3106 11.5122C19.0848 10.5188 19.5 9.27337 19.5 8C19.5 6.58139 18.9846 5.19744 18.0318 4.15799C17.0749 3.11416 15.7478 2.5 14.3333 2.5ZM14.3333 10.5C14.8638 10.5 15.4019 10.2713 15.8203 9.81484C16.2428 9.35401 16.5 8.70312 16.5 8C16.5 7.29688 16.2428 6.64599 15.8203 6.18516C15.4019 5.7287 14.8638 5.5 14.3333 5.5H8.5V10.5H14.3333ZM8.5 13.5V18.5H15.3077C15.8486 18.5 16.3942 18.2683 16.8163 17.811C17.2422 17.3497 17.5 16.7001 17.5 16C17.5 15.2999 17.2422 14.6503 16.8163 14.189C16.3942 13.7317 15.8486 13.5 15.3077 13.5H8.5Z"
                  :fill="item.weight === 'bold'?'#2563eb':'#000'"
            />
          </svg>
        </div>
        <div class="cursor-pointer p-1"
             @click="item.italic = !item.italic"
             :class="{'bg-[#dbeafe] text-[#2563eb] svgStroke' : item.italic}"
        >
          <svg width="20" height="20" fill="#000" viewBox="0 0 18 18">
            <line stroke="#000" x1="7" x2="13" y1="4" y2="4"></line>
            <line stroke="#000" x1="5" x2="11" y1="14" y2="14"></line>
            <line stroke="#000" x1="8" x2="10" y1="14" y2="4"></line>
          </svg>
        </div>
        <div class="cursor-pointer p-1"
             @click="item.new_line = Number(item.new_line) === 1?0:1"

             :class="{'bg-[#dbeafe] text-[#2563eb] svgStroke ':Number(item.new_line) === 1}"
        >
          <svg fill="none" width="20px" height="20px" viewBox="0 0 32 32" id="icon"
               xmlns="http://www.w3.org/2000/svg">
            <title>new-line</title>
            <path
                :fill="Number(item.new_line) === 1 ?'#2563eb':'#000'"
                d="M20.5859,14.4141,24.1719,18H6V8H4V18a2.0024,2.0024,0,0,0,2,2H24.1719L20.586,23.5859,22,25l6-6-6-6Z"/>
            <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-1" width="32"
                  height="32"/>
          </svg>
        </div>
        <div class="cursor-pointer p-1"
             @click="item.is_date = Number(item.is_date) === 1?0:1"
             :class="{'bg-[#dbeafe] text-[#2563eb] svgStroke ':Number(item.is_date) === 1}"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
            <path
                :fill="Number(item.is_date) === 1 ?'#2563eb':'#000'"
                d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
          </svg>
        </div>
      </div>
      <div class="flex flex-col relative gap-y-2 my-10 max-md:w-full " v-if="item.fields.length > 0">
        <div class="font-bold mt-2 " @click="openField = !openField">{{ $t("Поля для ввода") }}</div>

        <div class="flex flex-col gap-y-2  max-sm:pl-0 ">
          <document-field
              @updatePositionBottom="(it, index)=>{
                  if(index !== item.fields.length - 1){
                    item.fields[index + 1].position -=1;
                    item.fields[index].position = Number(item.fields[index+1].position) +1;
                  }
                }"
              @updatePositionTop="(it, index)=>{
                  if(index > 0){
                    item.fields[index - 1].position = Number(item.fields[index-1].position) +1;
                    item.fields[index].position -=1;
                  }
                }"
              @removeField="(val)=>{item.fields[val].deleted = true}" :item="field"
                          v-for="(field, index) in item.fields.sort((a, b)=>a.position - b.position - 1)" :key="index" :index="index"/>
        </div>
      </div>
      <div class="flex gap-x-4 mt-10 ">

        <div class="p-2 arrow_icon"
             @click="$emit('updatePositionBottom', item, index)"
        >
          <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fill="#000000"
                    d="M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"></path>
            </g>
          </svg>
        </div>
        <div class="p-2 arrow_icon" @click="$emit('updatePositionTop', item,index)">
          <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path fill="#000000"
                    d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div class="flex gap-x-4 mt-10">
        <button
            type="button"
            @click="item.fields.push({id:'new_id', document_content_id:item.id, input_type_id:1, position:item.fields.length || 0})"
            class="bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 p-1 rounded-md text-white">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z"
                stroke="#fff" stroke-width="1" stroke-linecap="round"/>
          </svg>
        </button>
        <button
            type="button"
            @click="$emit('removeSection', index)"
            class="bg-danger p-1 text-white rounded-md ">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
               data-v-f2b47a05="">
            <path d="M10 12V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                  data-v-f2b47a05=""></path>
            <path d="M14 12V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                  data-v-f2b47a05=""></path>
            <path d="M4 7H20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                  data-v-f2b47a05=""></path>
            <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.2"
                  stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path>
            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.2"
                  stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path>
          </svg>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import DocumentField from "./documentField.vue";
import VTextarea from "./vTextarea.vue";

export default {
  name: "documentContent",
  components: {VTextarea, DocumentField},
  data() {
    return {
      openField: false
    }
  },
  props: {
    item: Object,
    index: Number,
    max: Number,
  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
.svgStroke svg line {
  stroke: #2563eb;
}

.arrow_icon {
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
  cursor: pointer;
  path{
    transition: all 0.3s ease-in-out;

  }

  &:hover {
    background: #dbeafe;

    path {

      fill: #2563eb;
    }
  }

}
</style>