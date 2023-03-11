<template>
  <form class="max-lg:mt-20 w-full"
        @submit.prevent="create_document_template(get_document_template);$router.push({name:'document_list', params:{page:1}})">
        <h1 class="mt-6 mb-10 text-center text-2xl font-bold">Создать свой документ</h1>
    <div class=" ">
      <div class="my-2 text-center text-base flex gap-x-4 max-md:flex-col max-md:gap-y-4 items-center justify-center">
      <label for="">{{ $t("Название документа") }}</label>
        <input type="text" v-model="get_document_template.name_ru" v-if="can(getCurrentUser, 'template.edit')"
               required
               placeholder="Название документа"
               class="p-2 rounded-md border border-filter_gray outline-none focus:border-borderFocus  focus:shadow-inputFocus">
        <p v-else>
          {{ get_document_template.name_ru }}
        </p>
        <input type="text" v-model="get_document_template.name_uz_l" v-if="can(getCurrentUser, 'template.edit')"
               required
               placeholder="Document nomi"
               class="p-2 rounded-md border border-filter_gray outline-none focus:border-borderFocus  focus:shadow-inputFocus">
        <p v-else>
          {{ get_document_template.name_uz_l }}
        </p>
        <input type="text" v-model="get_document_template.name_uz_c" v-if="can(getCurrentUser, 'template.edit')"
               required
               placeholder="Документ номи"
               class="p-2 rounded-md border border-filter_gray outline-none focus:border-borderFocus  focus:shadow-inputFocus">
        <p v-else>
          {{ get_document_template.name_uz_c }}
        </p>
      </div>
      <div class="flex items-center justify-between">
        <select
          required
          name="" class="px-4 p-2 my-4 outline-none focus:border-borderFocus border border-filter_gray border-opacity-30 focus:shadow-inputFocus rounded-md" id="" v-model="get_document_template.appeal_type_id">
        <option value="-1" disabled>{{ $t('Выберите тип') }}</option>
        <option :value="item.id" v-for="(item, index) in get_doc_type_list.data">
          {{ item.title }}
        </option>
        </select>
        
      </div>
    </div>
   
    <div class="flex max-lg:w-full  gap-x-2 max-lg:flex-col h-[500px] max-lg:h-full max-lg:items-center max-lg:gap-y-10 overflow-y-scroll overflow-x-scroll">
      <div class="w-[49%] max-lg:w-full max-lg:h-[500px] max-lg:border-b max-lg:border-opacity-60 max-lg:border-filter_gray overflow-y-scroll">
        <div class="">
          <div class="" v-if="can(getCurrentUser, 'template.edit')">
            <document-content
                @removeSection="(val)=>{get_document_template.doc_content[val].deleted = true}"
                :index="index" v-for="(item, index) in get_document_template.doc_content" :item="item" :key="index"/>
          </div>

        </div>
        <div class="my-5 ">
          <button
          type="button"
              @click="get_document_template.doc_content.push({fields:[], id:'new_id', document_template_id:get_document_template.id})"
              class="bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 ml-2 p-2 text-white rounded-xl ">{{ $t("Добавить секцию") }}
          </button>
        </div>
      </div>
      <div class="w-[50%] max-lg:w-full max-lg:h-[500px] overflow-y-scroll p-4 border border-opacity-60 border-filter_gray">
        <document-preview :item="get_document_template"/>
      <div class="flex justify-center gap-x-4 mt-10" v-if="can(getCurrentUser, 'template.create')">
      <button
          type="submit"
          class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 cursor-pointer rounded-xl py-2 px-2">
        {{ $t('Сохранить') }}
      </button>
    </div>
      </div>
      
    </div>
    
  </form>

</template>

<script>
import {canAccess} from "../../../assets/functions.js";
import {mapActions, mapGetters} from "vuex";
import DocumentContent from "../../../components/profile/document_template/documentContent.vue";
import DocumentPreview from "../../../components/profile/document_template/documentPreview.vue";

export default {
  name: "createDocumentTemplate",
  components: {DocumentContent, DocumentPreview},
  data() {
    return {
      get_document_template: {
        doc_content: [],
        appeal_type_id: 1
      },
    }

  },
  methods: {
    ...mapActions(['load_input_type_list', 'update_document_doc_template', 'create_document_template', 'load_doc_type_list', 'load_input_type_list']),
    can(user, item) {
      if (user.permissions) {
        return canAccess(user, item);
      }
      return false;
    },
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'get_doc_type_list', 'get_input_type_list']),
  },
  mounted() {
    if (this.getCurrentUser.id) {
      if (!canAccess(this.getCurrentUser, "template.create")) {
        this.$router.go(-1);
      }
      this.load_input_type_list()
      this.load_doc_type_list({page:1, limit:1000})
      // this.load_document_template_list(this.params)
    }
  },
  watch: {
    getCurrentUser(val) {
      if (val.id) {
        if (!canAccess(val, "template.create")) {
          this.$router.go(-1);
        }
        this.load_input_type_list()
        this.load_doc_type_list({page:1, limit:1000})
      }
      // this.load_document_template_list(this.params)
    },
  }
}
</script>

<style scoped>

</style>