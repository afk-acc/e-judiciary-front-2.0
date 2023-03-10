<template>
  <div class="" v-if="!(item.deleted) ">
    <div class="flex flex-col gap-y-2 relative border border-filter_gray border-opacity-30 p-2">
      <div class="absolute right-2 top-0">
          <button @click="$emit('removeField', index)" class="bg-danger p-2 my-2 rounded-xl text-white ">
            <svg data-v-31f1ac2d="" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-31f1ac2d="" d="M19.7188 18.3906L13.325 12.0004L19.7188 5.65714C20.0392 5.28603 20.0219 4.72911 19.679 4.37894C19.3361 4.02878 18.7832 4.00341 18.4101 4.32073L11.9976 10.6169L5.69734 4.27367C5.33275 3.90878 4.74392 3.90878 4.37933 4.27367C4.20236 4.45039 4.10282 4.69094 4.10282 4.94188C4.10282 5.19282 4.20236 5.43337 4.37933 5.61008L10.6703 11.9439L4.2765 18.2777C4.09954 18.4544 4 18.695 4 18.9459C4 19.1969 4.09954 19.4374 4.2765 19.6141C4.45291 19.7903 4.69172 19.8885 4.94018 19.887C5.18409 19.8885 5.41891 19.794 5.59452 19.6235L11.9976 13.2709L18.4101 19.7271C18.5865 19.9032 18.8253 20.0014 19.0738 20C19.319 19.9989 19.554 19.9009 19.7281 19.7271C19.9039 19.5491 20.0017 19.3078 20 19.0569C19.9982 18.8059 19.897 18.5661 19.7188 18.3906Z" fill="#fff"></path></svg>
          </button>
      </div>
      <div class="font-medium">{{ $t('Название поля') }}</div>
      <div class="flex gap-x-4 max-sm:mt-4 items-center">
        {{ $t("Uz") }}
        <input type="text"
               required
               class="outline-none p-2 rounded-xl max-sm:w-full border border-filter_gray" v-model="item.name_uz_l">
      </div>
      <div class="gap-x-4 flex items-center">
        {{ $t("Уз") }}
        <input type="text"
               required
               class="outline-none p-2 rounded-xl max-sm:w-full border border-filter_gray" v-model="item.name_uz_c">
      </div>
      <div class="mt-10 mb-10">
        <div class="font-medium">{{ $t("Тип поля") }}</div>
        <div class="">
          <select name="" id="" class="outline-none p-2 border border-filter_gray rounded-xl"
                  required
                  @change="item.input_type_name = get_input_type_list.filter(el=>{return el.id === item.input_type_id})[0].name;list={uz_l:[]}"
                  v-model="item.input_type_id">
            <option value="" disabled>Выберите тип поля</option>
            <option :value="option.id" v-for="(option, index) in get_input_type_list">{{ option.name }}</option>
          </select>
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
        <div class="" v-if="Number(item.input_type_id) === 2">
          <div class="font-medium">{{ $t("Список возможных значений:") }}</div>
          <div class="pl-10 max-sm:pl-0 flex flex-col max-sm:items-center gap-y-2">
            <div class="mx-auto" v-for="(val,index) in list.uz_l" :key="index">
              <input type="text" class="p-2 outline-none rounded-xl border border-filter_gray"
                     required
                     v-model="list.uz_l[index]">
              <button @click="remove(index)"
                class="bg-danger p-2 rounded-xl text-white ml-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f2b47a05=""><path d="M10 12V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path><path d="M14 12V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path><path d="M4 7H20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path></svg>
              </button>
            </div>
            <div class="my-2">
              <button class="bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 rounded-xl p-2 text-white" @click="list.uz_l.push('')">{{
                  $t('Добавить значение')
                }}
              </button>
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
    }

  },
  computed: {
    ...mapGetters(['get_input_type_list', 'get_document_template']),
  },
  methods: {
    remove(index) {
      this.list = this.list.filter(el => {
        return el !== this.list[index]
      })
    }
  },
  mounted() {
    if (this.item.input_type_name === 'select') {
      this.list = JSON.parse(this.item.option)
    }
  },
  watch: {
    list(val) {
      this.item.option = val
    }
  }
}
</script>

<style scoped>
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