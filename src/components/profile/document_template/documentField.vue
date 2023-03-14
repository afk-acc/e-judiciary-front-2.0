<template>
  <div class="" v-if="!(item.deleted) ">
    <div class="flex flex-col gap-y-2 relative border border-filter_gray border-opacity-30 p-2">
      <div class="absolute right-2 top-0">
        <button
            type="button"

            @click="$emit('removeField', index)" class="bg-danger p-2 my-2 rounded-md text-white ">
          <svg data-v-31f1ac2d="" width="20" height="20" viewBox="0 0 24 24" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path data-v-31f1ac2d=""
                  d="M19.7188 18.3906L13.325 12.0004L19.7188 5.65714C20.0392 5.28603 20.0219 4.72911 19.679 4.37894C19.3361 4.02878 18.7832 4.00341 18.4101 4.32073L11.9976 10.6169L5.69734 4.27367C5.33275 3.90878 4.74392 3.90878 4.37933 4.27367C4.20236 4.45039 4.10282 4.69094 4.10282 4.94188C4.10282 5.19282 4.20236 5.43337 4.37933 5.61008L10.6703 11.9439L4.2765 18.2777C4.09954 18.4544 4 18.695 4 18.9459C4 19.1969 4.09954 19.4374 4.2765 19.6141C4.45291 19.7903 4.69172 19.8885 4.94018 19.887C5.18409 19.8885 5.41891 19.794 5.59452 19.6235L11.9976 13.2709L18.4101 19.7271C18.5865 19.9032 18.8253 20.0014 19.0738 20C19.319 19.9989 19.554 19.9009 19.7281 19.7271C19.9039 19.5491 20.0017 19.3078 20 19.0569C19.9982 18.8059 19.897 18.5661 19.7188 18.3906Z"
                  fill="#fff"></path>
          </svg>
        </button>
      </div>
      <div class="font-medium">{{ $t('Название поля') }}</div>
      <div class="flex flex-col gap-y-2">
        <div class="flex gap-x-4 max-sm:mt-4 items-center">
          {{ $t("Uz") }}
          <input type="text"
                 required
                 class="outline-none p-2 rounded-md max-sm:w-full border border-filter_gray focus:border-borderFocus focus:shadow-inputFocus"
                 v-model="item.name_uz_l">
        </div>
        <div class="gap-x-4 flex items-center">
          {{ $t("Уз") }}
          <input type="text"
                 required
                 class="outline-none p-2 rounded-md max-sm:w-full border border-filter_gray focus:border-borderFocus focus:shadow-inputFocus"
                 v-model="item.name_uz_c">
        </div>
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
        </div>
      </div>

      <div class="mt-10 mb-10">
        <div class="">
          <div class="flex items-center gap-x-4  max-md:flex-col max-md:gap-y-4 max-md:items-center">
            <div class="">

              <div class="font-medium">{{ $t("Тип поля") }}</div>
              <select name="" id=""
                      class="w-full max-w-[200px] outline-none p-2 border focus:border-borderFocus focus:shadow-inputFocus border-filter_gray rounded-md"
                      required
                      @change="item.input_type_name = get_input_type_list.filter(el=>{return el.id === item.input_type_id})[0].name;list={uz_l:[]}"
                      v-model="item.input_type_id">
                <option value="" disabled>{{ $t("Выберите тип поля") }}</option>
                <option :value="option.id" v-for="(option, index) in get_input_type_list">{{ option.name }}</option>
              </select>
            </div>
            <div class="" v-if="Number(item.input_type_id) === 2">

              <div class=""><p>{{ $t("Выберите список") }}</p></div>
              <select
                  v-model="item.template_list_id"
                  @change="current = get_template_list?.data?.filter(e=>{
                    return e.id === item.template_list_id
                  })[0]"
                  class="w-full max-w-[200px] outline-none p-2 border focus:border-borderFocus focus:shadow-inputFocus border-filter_gray rounded-md"
                  name="" id="">
                <option value="null" disabled>{{ $t('Выберите из списка') }}</option>
                <option :value="val.id" v-for="val in get_template_list.data">
                  {{ val.name }}
                </option>
<!--                <option value="null">{{ $t('Использовать свой') }}</option>-->
              </select>
            </div>
          </div>
        </div>
        <div class="">
          <div class="flex gap-x-2 my-2">
            <span>{{ $t("Обязательное поле") }}</span>
            <label class="checkbox-green">
              <input type="checkbox" v-model="item.required"
              >
              <span class="checkbox-green-switch" :data-label-on="$t('Да')" :data-label-off="$t('Нет')"></span>
            </label>
          </div>
        </div>
        <div class="" v-if="Number(item.input_type_id) === 2 && item.template_list_id == 'null' ">
          <div class="font-medium">{{ $t("Список возможных значений:") }}</div>
          <div class="pl-10 max-sm:pl-0 flex flex-col max-sm:items-center gap-y-2">
            <div class="mx-auto" v-for="(val,index) in list.uz_l" :key="index">
              <input type="text"
                     class="p-2 outline-none rounded-md border border-filter_gray focus:border-borderFocus focus:shadow-inputFocus"
                     required
                     v-model="list.uz_l[index]">
              <button @click="remove(index)"
                      type="button"
                      class="bg-danger p-2 rounded-md text-white ml-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
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
            <div class="my-2">
              <button type="button"
                      class="bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 rounded-md p-2 text-white"
                      @click="list.uz_l.push('')">{{
                  $t('Добавить значение')
                }}
              </button>
            </div>
          </div>
        </div>
        <div class="" v-else-if="Number(item.input_type_id) === 2">
          <div class="font-medium">{{ $t("Список возможных значений:") }} {{current?.name}}</div>
          <div class="pl-4">
            <div class="border-t  first:border-t-0 last:border-b border-filter_gray py-1 mt-2" v-for="(val,index) in current?.values" :key="index">
              {{val.value}}
              <div class="pl-6 ">
                <p class="border-t first:border-t-0 last:border-b border-filter_gray py-1 mt-1" v-for="(temp, ind) in val?.second_values">{{temp.value}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "documentField",
  props: {
    item: Object,
    index: Number
  },
  data() {
    return {
      list: {
        uz_l: []
      },
      current: [],
    }

  },
  computed: {
    ...mapGetters(['get_input_type_list', 'get_document_template', 'get_template_list']),
  },
  methods: {
    remove(index) {
      this.list.uz_l = this.list.uz_l.filter(el => {
        return el !== this.list.uz_l[index]
      })
    }
  },
  mounted() {
    if (this.item.input_type_name === 'select') {
      this.list = JSON.parse(this.item.option)

      this.current = this.get_template_list?.data?.filter(e=>{
        return e.id === this.item.template_list_id
      })[0]
    }
  },
  watch: {
    list(val) {
      this.item.option = val
    },
    get_template_list(val){
      this.current = val?.data?.filter(e=>{
        return e.id === this.item.template_list_id
      })[0]
    }
  }
}
</script>

<style scoped>
path {
  stroke: #fff;
}

.checkbox-green {
  display: inline-block;
  height: 28px;
  line-height: 28px;
  margin-right: 10px;
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  user-select: none;
}

.checkbox-green .checkbox-green-switch {
  display: inline-block;
  height: 28px;
  width: 90px;
  box-sizing: border-box;
  position: relative;
  border-radius: 2px;
  background: #848484;
  transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);
}

.checkbox-green .checkbox-green-switch:before {
  content: attr(data-label-on);
  display: inline-block;
  box-sizing: border-box;
  width: 45px;
  padding: 0 12px;
  position: absolute;
  top: 0;
  left: 45px;
  text-transform: uppercase;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: 10px;
  line-height: 28px;
}

.checkbox-green .checkbox-green-switch:after {
  content: attr(data-label-off);
  display: inline-block;
  box-sizing: border-box;
  width: 44px;
  border-radius: 1px;
  position: absolute;
  top: 1px;
  left: 1px;
  z-index: 5;
  text-transform: uppercase;
  text-align: center;
  background: white;
  line-height: 26px;
  font-size: 10px;
  color: #777;
  transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);
}

.checkbox-green input[type="checkbox"] {
  display: block;
  width: 0;
  height: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.checkbox-green input[type="checkbox"]:checked + .checkbox-green-switch {
  background-image: linear-gradient(83.23deg, #132852 15.54%, rgba(13, 59, 147, 0.92) 100.82%);
}

.checkbox-green input[type="checkbox"]:checked + .checkbox-green-switch:before {
  content: attr(data-label-off);
  left: 0;
}

.checkbox-green input[type="checkbox"]:checked + .checkbox-green-switch:after {
  content: attr(data-label-on);
  color: #1D438C;
  transform: translate3d(44px, 0, 0);
}

/* Hover */
.checkbox-green input[type="checkbox"]:not(:disabled) + .checkbox-green-switch:hover {
  cursor: pointer;
}

.checkbox-green input[type="checkbox"]:not(:disabled) + .checkbox-green-switch:hover:after {
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
}

/* Disabled */
.checkbox-green input[type=checkbox]:disabled + .checkbox-green-switch {
  opacity: 0.6;
  filter: grayscale(50%);
}

/* Focus */
.checkbox-green.focused .checkbox-green-switch:after {
  box-shadow: inset 0px 0px 4px #ff5623;
}
</style>