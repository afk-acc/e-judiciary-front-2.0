<template>
  <div class="" v-if="!(item.deleted) ">
    <div class="flex flex-col gap-y-2">
      <div class="font-medium">{{ $t('Название поля') }}</div>
      <div class="flex gap-x-4 items-center">
        {{ $t("Uz") }}
        <input type="text"
               required
               class="outline-none p-2 rounded-xl border border-filter_gray" v-model="item.name_uz_l">
      </div>
      <div class="gap-x-4 flex items-center">
        {{ $t("Уз") }}
        <input type="text"
               required
               class="outline-none p-2 rounded-xl border border-filter_gray" v-model="item.name_uz_c">
      </div>
      <div class="">
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
          <div class="pl-10 max-sm:pl-2 flex flex-col gap-y-2">
            <div class="" v-for="(val,index) in list.uz_l" :key="index">
              <input type="text" class="p-2 outline-none rounded-xl border border-filter_gray"
                     required
                     v-model="list.uz_l[index]">
              <button @click="remove(index)"
                      class="bg-danger p-2 rounded-xl text-white ml-2">{{ $t("Удалить") }}
              </button>
            </div>
            <div class="my-2">
              <button class="bg-primary_gr rounded-xl p-2 text-white" @click="list.uz_l.push('')">{{
                  $t('Добавить значение')
                }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <button @click="$emit('removeField', index)" class="bg-danger p-2 my-2 rounded-xl text-white ">
          {{ $t("Удалить поле для ввода") }}
        </button>

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