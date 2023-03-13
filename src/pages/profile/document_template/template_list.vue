<template>
  <div class="max-lg:mt-10 px-2 h-full max-h-screen overflow-y-auto">
    <h1 class="font-bold text-xl my-4">{{ $t('Редактирование списков') }}</h1>
    <div class="flex flex-col gap-y-4">
      <div class="flex  gap-x-4">
        <button
            @click="showAdd = true"
            type="button"
            class="bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 p-2 rounded-md text-white">
          {{ $t('Добавить список') }}
        </button>
      </div>
      <div class="" v-if="get_template_list?.data">
        <template_item
            @showEdit="(el)=>{
              showEdit=!showEdit;
              change_list = {...el};
              change_list.list = {
                id:change_list.id,
                name: change_list.name
              }
            }"
            @deleteList="(el)=>{
              delete_template_list({...params, id:el.id});
            }"
            :index="params.limit * (params.page-1) + index+1"
            :item="item"
            v-for="(item,index) in get_template_list.data"
        />
      </div>
      <div v-else>
        <UsersScelet/>
        <UsersScelet/>
        <UsersScelet/>
        <UsersScelet/>
        <UsersScelet/>
      </div>
      <div class="flex gap-x-[1px] flex-wrap my-10 " v-if="get_template_list?.data?.length > 0">
        <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
             v-for="item in get_template_list?.meta?.links"
             :class="{'bg-primary text-white rounded-full ':item.active}">
          {{ $t(item.label) }}
        </div>
      </div>
      <div class="text-center font-bold text-2xl" v-else-if="get_template_list.data">
        {{ $t('Ничего не найдено') }}
      </div>
    </div>
    <v-modal v-if="showAdd" @showModal="showAdd=!showAdd">
      <div class="text-center font-bold">
        {{ $t('Добавление списка') }}
      </div>
      <form
          @submit.prevent="
          ()=>{

          new_list.template_list_value = new_list.template_list_value.filter(el=>{
            return el !=='__%deleted%__';
          });
          for(let i =0;i<new_list.template_list_value.length;i++){
            new_list.template_list_value[i] = new_list.template_list_value.filter(e=>{
              return e!=='__%deleted%__'
            })
          }
          add_template_list({...new_list, ...params});showAdd=false; new_list={template_list: '', template_list_value: []}
          }
        "
          class="">

        <v-input :label="$t('Название списка')" v-model:model-value="new_list.template_list"/>
        <div class="px-4 my-2 flex flex-col gap-y-2">
          <div class="">{{ $t('Список значений') }}</div>
          <div class="" v-for="(item, index) in new_list.template_list_value"
               :key="index">
            <div class="flex items-start justify-between gap-x-2 " v-if="item.value !=='__%deleted%__'">
              <div class="flex w-full flex-col gap-y-2">

                <v-input :label="$t('Значение')+' ' +(index +1)" class="w-full"
                         v-model:model-value="item.value"/>
                <div class="pl-6  " v-if="item.second_list?.length > 0">
                  <div v-for="(i, ind) in item.second_list"
                  >
                    <div class="flex gap-x-2" v-if="item.second_list[ind] !== '__%deleted%__'">

                      <v-input :label="$t('Значение')+' '+(index +1)+'-'+(ind +1)" class="w-full"
                               v-model:model-value="item.second_list[ind]"

                      />
                      <div class="mt-[26px]">
                        <button
                            type="button"
                            @click="item.second_list[ind] = '__%deleted%__'"
                            class="bg-danger p-2 rounded-md text-white ml-2">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                               data-v-f2b47a05="">
                            <path d="M10 12V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                                  data-v-f2b47a05=""></path>
                            <path d="M14 12V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                                  data-v-f2b47a05=""></path>
                            <path d="M4 7H20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                                  data-v-f2b47a05=""></path>
                            <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                                  stroke-width="1.2"
                                  stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path>
                            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                  stroke-width="1.2"
                                  stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="flex gap-x-1 mt-[26px]">
                <button
                    type="button"
                    @click="item.second_list.push('')"
                    class=" text-xl bg-[#28a745] hover:bg-[#419554] hover:border-[#419554] transition-all duration-300 py-2 px-2 rounded-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                       stroke="#fff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                          d="M12.75 11.25V5C12.75 4.80109 12.671 4.61032 12.5303 4.46967C12.3897 4.32902 12.1989 4.25 12 4.25C11.8011 4.25 11.6103 4.32902 11.4697 4.46967C11.329 4.61032 11.25 4.80109 11.25 5V11.25H5C4.80109 11.25 4.61032 11.329 4.46967 11.4697C4.32902 11.6103 4.25 11.8011 4.25 12C4.25 12.1989 4.32902 12.3897 4.46967 12.5303C4.61032 12.671 4.80109 12.75 5 12.75H11.25V19C11.2526 19.1981 11.3324 19.3874 11.4725 19.5275C11.6126 19.6676 11.8019 19.7474 12 19.75C12.1989 19.75 12.3897 19.671 12.5303 19.5303C12.671 19.3897 12.75 19.1989 12.75 19V12.75H19C19.1989 12.75 19.3897 12.671 19.5303 12.5303C19.671 12.3897 19.75 12.1989 19.75 12C19.7474 11.8019 19.6676 11.6126 19.5275 11.4725C19.3874 11.3324 19.1981 11.2526 19 11.25H12.75Z"
                          fill="#fff"></path>
                    </g>
                  </svg>
                </button>
                <button
                    type="button"
                    @click="item.value = '__%deleted%__'"
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
            </div>

          </div>

          <div class="flex justify-center mt-2 ">
            <div class="flex flex-col gap-y-2">

              <button
                  type="button"
                  @click="new_list.template_list_value.push({value:'',second_list:[]})"
                  class="text-white bg-[#28a745] hover:bg-[#419554] hover:border-[#419554] transition-all duration-300 py-2 px-4 text-sm rounded-md">
                {{ $t("Добавить") }}
              </button>

            </div>
          </div>
        </div>
        <button
            type="submit"
            class="w-full text-white bg-[#28a745] hover:bg-[#419554] hover:border-[#419554] transition-all duration-300 py-2 px-4 text-sm rounded-md">
          {{ $t("Сохранить") }}
        </button>
      </form>
    </v-modal>
    <v-modal v-if="showEdit" @showModal="showEdit=!showEdit">
      <div class="text-center font-bold">
        {{ $t('Редактирование списка') }}
      </div>
      <form @submit.prevent="update_template_list({...change_list, ...params});showEdit= false; change_list={};">
        <v-input :label="$t('Название списка')" v-model:model-value="change_list.list.name"/>
        <div class="px-4 my-2 flex flex-col gap-y-2">
          <div class="">{{ $t('Список значений') }}</div>
          <div class="" v-for="(item, index) in change_list.values"
               :key="index">
            <div class="flex items-start justify-between gap-x-2" v-if="!item.deleted">
              <div class="flex flex-col w-full">
                <v-input :label="$t('Значение') + ' '+ (index +1)" class="w-full"
                         v-model:model-value="item.value"/>
                <div class="pl-4 " v-for="(t, ind) in item.second_values">
                  <div class="items-center flex gap-x-1" v-if="!t.deleted">

                    <v-input :label="$t('Значение') + ' '+ (index +1) +'-'+(ind+1)" class="w-full"
                             v-model:model-value="t.value"/>
                    <div class="mt-[26px]">
                      <button
                          type="button"
                          @click="t.deleted = true"
                          class="bg-danger p-2 rounded-md text-white ml-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             data-v-f2b47a05="">
                          <path d="M10 12V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                                data-v-f2b47a05=""></path>
                          <path d="M14 12V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                                data-v-f2b47a05=""></path>
                          <path d="M4 7H20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                                data-v-f2b47a05=""></path>
                          <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                                stroke-width="1.2"
                                stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path>
                          <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                stroke-width="1.2"
                                stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
              <div class="mt-[26px] flex gap-x-1">
                <button
                    type="button"
                    @click="item.second_values.push({value:'',id:'new_id', template_value_list_id:item.id})"
                    class=" text-xl bg-[#28a745] hover:bg-[#419554] hover:border-[#419554] transition-all duration-300 py-2 px-2 rounded-md">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                       stroke="#fff">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                          d="M12.75 11.25V5C12.75 4.80109 12.671 4.61032 12.5303 4.46967C12.3897 4.32902 12.1989 4.25 12 4.25C11.8011 4.25 11.6103 4.32902 11.4697 4.46967C11.329 4.61032 11.25 4.80109 11.25 5V11.25H5C4.80109 11.25 4.61032 11.329 4.46967 11.4697C4.32902 11.6103 4.25 11.8011 4.25 12C4.25 12.1989 4.32902 12.3897 4.46967 12.5303C4.61032 12.671 4.80109 12.75 5 12.75H11.25V19C11.2526 19.1981 11.3324 19.3874 11.4725 19.5275C11.6126 19.6676 11.8019 19.7474 12 19.75C12.1989 19.75 12.3897 19.671 12.5303 19.5303C12.671 19.3897 12.75 19.1989 12.75 19V12.75H19C19.1989 12.75 19.3897 12.671 19.5303 12.5303C19.671 12.3897 19.75 12.1989 19.75 12C19.7474 11.8019 19.6676 11.6126 19.5275 11.4725C19.3874 11.3324 19.1981 11.2526 19 11.25H12.75Z"
                          fill="#fff"></path>
                    </g>
                  </svg>
                </button>
                <button
                    type="button"
                    @click="item.deleted = true "
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

            </div>

          </div>
          <div class="flex justify-center mt-2">

            <button
                type="button"
                @click="change_list.values.push({
                  value:'',
                  template_list_id:change_list.id,
                  id:'new_id'
                })"
                class="text-white bg-[#28a745] hover:bg-[#419554] hover:border-[#419554] transition-all duration-300 py-2 px-4 text-sm rounded-md">
              {{ $t("Добавить") }}
            </button>
          </div>
        </div>
        <button
            type="submit"
            class="w-full text-white bg-[#28a745] hover:bg-[#419554] hover:border-[#419554] transition-all duration-300 py-2 px-4 text-sm rounded-md">
          {{ $t("Сохранить") }}
        </button>
      </form>
    </v-modal>
  </div>
</template>

<script>
import UsersScelet from "../sceleton/usersScelet.vue";
import {mapActions, mapGetters} from "vuex";
import {canAccess} from "../../../assets/functions.js";
import Template_item from "../../../components/profile/document_template/template_item.vue";
import VModal from "../../../components/UI/vModal.vue";
import VInput from "../../../components/UI/vInput.vue";
import VButton from "../../../components/UI/vButton.vue";

export default {
  name: "template_list",
  components: {VButton, VInput, VModal, Template_item, UsersScelet},
  data() {
    return {
      showAdd: false,
      showEdit: false,
      change_list: {},
      params: {
        page: 1,
        limit: 10
      },
      new_list: {
        template_list: '',
        template_list_value: [],
      }
    }
  },
  methods: {
    ...mapActions(['load_template_list', 'delete_template_list', 'add_template_list', 'update_template_list']),
    can(user, item) {
      if (user.permissions) {
        return canAccess(user, item);
      }
      return false;
    },
    loadPage(page) {
      if (page === '<') {
        if (Number(this.params.page) > 1) {
          this.params.page -= 1;
        }
      } else if (page === '>') {
        if (Number(this.params.page) < this.get_template_list.meta.last_page) {
          this.params.page = Number(this.params.page) + 1
        }
      } else {
        if (Number(page) <= this.get_template_list.meta.last_page) {
          this.params.page = Number(page)
        }
      }
      this.$router.push({name: 'template_list', params: {page: this.params.page}})
    },
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'get_template_list'])
  },
  mounted() {
    if (this.getCurrentUser.id) {
      if (!canAccess(this.getCurrentUser, "template.edit")) {
        this.$router.go(-1);
      }
      this.params.page = this.$route.params.page
      this.load_template_list(this.params)
    }
  },
  watch: {
    getCurrentUser(val) {
      if (val.id) {
        if (!canAccess(val, "template.edit")) {
          this.$router.go(-1);
        }
      }
      this.load_template_list(this.params)
    },
    $route(to, from) {
      this.params.page = to.params.page
      this.load_template_list(this.params)
    }
  }

}
</script>

<style>

</style>