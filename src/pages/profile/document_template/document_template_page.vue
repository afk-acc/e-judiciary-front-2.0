<template>
  <form @submit.prevent="send" class="">

    <div class=" h-full overflow-scroll pl-1">
      <div class="my-2 text-center text-base flex gap-x-4 max-md:flex-col max-md:gap-y-4 justify-center">
        <input type="text" v-model="get_document_template.name_ru" v-if="can(getCurrentUser, 'template.edit')"
               required
               class="p-2 rounded-md border border-filter_gray outline-none focus:border-borderFocus focus:shadow-inputFocus">
        <p v-else>
          {{ get_document_template.name_ru }}
        </p>
        <input type="text" v-model="get_document_template.name_uz_l" v-if="can(getCurrentUser, 'template.edit')"
               required
               class="p-2 rounded-md border border-filter_gray outline-none focus:border-borderFocus focus:shadow-inputFocus">
        <p v-else>
          {{ get_document_template.name_uz_l }}
        </p>
        <input type="text" v-model="get_document_template.name_uz_c" v-if="can(getCurrentUser, 'template.edit')"
               required
               class="p-2 rounded-md border border-filter_gray outline-none focus:border-borderFocus focus:shadow-inputFocus">
        <p v-else>
          {{ get_document_template.name_uz_c }}
        </p>
      </div>
      <div class="flex gap-x-4">
        <select name="" class="px-4 p-2 outline-none focus:border-borderFocus focus:shadow-inputFocus rounded-md" id=""
                required
                v-model="get_document_template.appeal_type_id">
          <option :value="item.id" v-for="(item, index) in get_doc_type_list.data">{{ item.title }}</option>
        </select>
      </div>
      <div
          class="flex max-lg:w-full  gap-x-2 max-lg:flex-col h-[500px] max-lg:h-full max-lg:items-center max-lg:gap-y-10 overflow-y-scroll overflow-x-scroll">
        <div
            class="w-[49%] max-lg:w-full max-lg:h-[500px] max-lg:border-b max-lg:border-opacity-60 max-lg:border-filter_gray overflow-y-scroll">
          <div class="">
            <div class="" v-if="can(getCurrentUser, 'template.edit') && doc_content">
              <document-content
                  @updatePositionBottom="(item, index)=>{
                  if(index !== doc_content.length - 1){
                    doc_content[index + 1].position -=1;
                    doc_content[index].position = Number(doc_content[index+1].position) +1;
                    doc_content = doc_content.sort((a, b) => a.position - b.position - 1)
                  }
                }"
                  @updatePositionTop="(item, index)=>{
                  if(index > 0){
                    doc_content[index - 1].position = Number(doc_content[index-1].position) +1;
                    doc_content[index].position -=1;
                    doc_content = doc_content.sort((a, b) => a.position - b.position - 1)
  }
                }"
                  @removeSection="(val)=>{doc_content[val].deleted = true}"
                  :index="index" v-for="(item, index) in doc_content" :item="item" :key="index"/>
            </div>
          </div>

          <div class="my-5 ">
            <button
                type="button"
                @click="doc_content.push({fields:[], id:'new_id', document_template_id:get_document_template.id, text:'', position:doc_content.length})"
                class="bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 rounded-md p-2 text-white">
              {{ $t("Добавить секцию") }}
            </button>
          </div>
        </div>
        <div
            class="w-[50%] max-lg:w-full max-lg:h-[500px] overflow-y-scroll p-4 border border-opacity-60 border-filter_gray">
          <document-preview :is-admin="true" :item="get_document_template"/>
        </div>
      </div>
    </div>
    <div class="flex justify-center gap-x-4" v-if="can(getCurrentUser, 'template.edit')">
      <button
          type="submit"
          @click="params = 'save'"
          class="bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 rounded-md p-2 text-white">
        {{ $t('Сохранить') }}
      </button>
      <button
          type="submit"
          class="bg-danger p-2 text-white rounded-md px-4">
        {{ $t('Удалить документ') }}
      </button>
    </div>
  </form>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import {canAccess} from "../../../assets/functions.js";
import DocumentContent from "../../../components/profile/document_template/documentContent.vue";
import DocumentPreview from "../../../components/profile/document_template/documentPreview.vue";

export default {
  name: "document_template_page",
  components: {DocumentContent, DocumentPreview},
  data() {
    return {
      params: '',
      page: 1,
      doc_content: [],
    }
  },
  methods: {
    ...mapActions(['load_document_template', 'load_input_type_list', 'update_document_doc_template', 'load_doc_type_list', 'load_template_list']),
    ...mapMutations(['update_document_template']),
    can(user, item) {
      if (user.permissions) {
        return canAccess(user, item);
      }
      return false;
    },
    send() {
      this.get_document_template.doc_content = this.doc_content
      if (this.params === 'save') {

        this.update_document_doc_template(this.get_document_template);
        this.$router.push({name: 'document_list', params: {page: 1}})
      } else {
        this.get_document_template.deleted = true;
        this.update_document_doc_template(this.get_document_template);
        this.$router.push({name: 'document_list', params: {page: 1}})
        this.load_doc_type_list({page: 1, limit: 1000})
      }
    },

  },


  computed: {
    ...mapGetters(['getCurrentUser', 'get_document_template', 'get_doc_type_list'])
  },

  mounted() {
    if (this.getCurrentUser.id) {
      if (!canAccess(this.getCurrentUser, "template.read")) {
        this.$router.go(-1);
      }
      this.load_document_template({id: this.$route.params.id})
      this.load_doc_type_list({page: 1, limit: 1000})
      this.load_input_type_list()
      this.load_template_list({page: 1, limit: 10000})
    }
  },
  watch: {
    get_document_template(val) {
      if (val?.doc_content?.length > 0) {
        console.log("3")
        this.doc_content = val.doc_content.sort((a, b) => a.position - b.position - 1)
        for (let i = 0; i < this.doc_content.length; i++) {
          this.doc_content[i].fields = this.doc_content[i].fields.sort((a, b) => a.position - b.position - 1)
        }
        this.get_document_template.doc_content = this.doc_content
        console.log("4")

      }
    },
    getCurrentUser(val) {
      if (val.id) {
        if (!canAccess(val, "template.read")) {
          this.$router.go(-1);
        }
      }
      console.log("1");
      this.load_document_template({id: this.$route.params.id})
      this.load_doc_type_list({page: 1, limit: 1000})
      this.load_input_type_list()
      this.load_template_list({page: 1, limit: 10000})
      console.log("2");
      // this.load_document_template_list(this.params)
    },
    $route(from, to) {
      this.update_document_template([])

    }
  }
}
</script>

<style scoped>

</style>
