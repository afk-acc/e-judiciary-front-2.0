<template>
  <form class="max-lg:mt-20 w-full overflow-hidden"
        @submit.prevent="create_document_template(get_document_template);$router.push({name:'document_list', params:{page:1}})">
    <div class="">
      <div class="my-2 text-center text-xl flex max-lg:flex-col max-lg:gap-y-4 overflow-hidden gap-x-4 justify-center">
        <input type="text" v-model="get_document_template.name_ru" v-if="can(getCurrentUser, 'template.edit')"
               required
               placeholder="Название документа"
               class="p-2 rounded-xl border border-filter_gray outline-none">
        <p v-else>
          {{ get_document_template.name_ru }}
        </p>
        <input type="text" v-model="get_document_template.name_uz_l" v-if="can(getCurrentUser, 'template.edit')"
               required
               placeholder="Document nomi"
               class="p-2 rounded-xl border border-filter_gray outline-none">
        <p v-else>
          {{ get_document_template.name_uz_l }}
        </p>
        <input type="text" v-model="get_document_template.name_uz_c" v-if="can(getCurrentUser, 'template.edit')"
               required
               placeholder="Документ номи"
               class="p-2 rounded-xl border border-filter_gray outline-none">
        <p v-else>
          {{ get_document_template.name_uz_c }}
        </p>
      </div>
      <select
          required
          name="" class="px-4 p-2 outline-none" id="" v-model="get_document_template.appeal_type_id">
        <option value="-1" disabled>{{ $t('Выберите тип') }}</option>
        <option :value="item.id" v-for="(item, index) in get_doc_type_list.data">
          {{ item.title }}
        </option>
      </select>
    </div>
    <div class="my-2 text-center text-xl">


    </div>
    <div class="flex gap-x-2 h-[500px] overflow-y-scroll  overflow-x-scroll max-lg:w-screen">
      <div class="w-[49%] max-lg:w-[720px]">
        <div class="">

          <div class="" v-if="can(getCurrentUser, 'template.edit')">
            <document-content
                @removeSection="(val)=>{get_document_template.doc_content[val].deleted = true}"
                :index="index" v-for="(item, index) in get_document_template.doc_content" :item="item" :key="index"/>
          </div>

        </div>

        <div class="my-5 ">
          <button
              @click="get_document_template.doc_content.push({fields:[], id:'new_id', document_template_id:get_document_template.id})"
              class="bg-primary_gr p-2 text-white rounded-xl ">{{ $t("Добавить секцию") }}
          </button>
        </div>
      </div>
      <div class="w-[50%] max-lg:w-[720px] max-lg:mx-4 h-[500px] left-[60%]   border-[0.5px] px-2 border-filter_gray">
        <document-preview :item="get_document_template"/>
      </div>
    </div>
    <div class="flex justify-center gap-x-4 mt-10" v-if="can(getCurrentUser, 'template.create')">
      <button
          type="submit"
          class="bg-primary_gr p-2 text-white rounded-xl px-4">
        {{ $t('Сохранить') }}
      </button>
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
        appeal_type_id: -1
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
      this.load_doc_type_list()
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
        this.load_doc_type_list()
      }
      // this.load_document_template_list(this.params)
    },
  }
}
</script>

<style scoped>

</style>