<template>
  <form @submit.prevent="send" class="">

    <div class=" h-[500px] overflow-scroll">
      <div class="my-2 text-center text-xl flex gap-x-4 justify-center">
        <input type="text" v-model="get_document_template.name_ru" v-if="can(getCurrentUser, 'template.edit')"
               required
               class="p-2 rounded-xl border border-filter_gray outline-none">
        <p v-else>
          {{ get_document_template.name_ru }}
        </p>
        <input type="text" v-model="get_document_template.name_uz_l" v-if="can(getCurrentUser, 'template.edit')"
               required
               class="p-2 rounded-xl border border-filter_gray outline-none">
        <p v-else>
          {{ get_document_template.name_uz_l }}
        </p>
        <input type="text" v-model="get_document_template.name_uz_c" v-if="can(getCurrentUser, 'template.edit')"
               required
               class="p-2 rounded-xl border border-filter_gray outline-none">
        <p v-else>
          {{ get_document_template.name_uz_c }}
        </p>
      </div>
      <div class="flex gap-x-4">
        <select name="" class="px-4 p-2 outline-none" id="" required
                v-model="get_document_template.appeal_type_id">
          <option :value="item.id" v-for="(item, index) in get_doc_type_list.data">{{ item.title }}</option>
        </select>
      </div>

      <div class="flex gap-x-2">

        <div class="w-[49%]">
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
        <div class="w-[50%] h-[500px] left-[60%] overflow-scroll  border-[0.5px] px-2 border-filter_gray">
          <document-preview :item="get_document_template"/>
        </div>
      </div>
    </div>
    <div class="flex justify-center gap-x-4" v-if="can(getCurrentUser, 'template.edit')">
      <button
          type="submit"
          @click="params = 'save'"
          class="bg-primary_gr p-2 text-white rounded-xl px-4">
        {{ $t('Сохранить') }}
      </button>
      <button
          type="submit"
          class="bg-primary_gr p-2 text-white rounded-xl px-4">
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
      params: ''
    }
  },
  methods: {
    ...mapActions(['load_document_template', 'load_input_type_list', 'update_document_doc_template', 'load_doc_type_list']),
    ...mapMutations(['update_document_template']),
    can(user, item) {
      if (user.permissions) {
        return canAccess(user, item);
      }
      return false;
    },
    send() {
      if (this.params === 'save') {
        this.update_document_doc_template(this.get_document_template);
        this.$router.push({name: 'document_list', params: {page: 1}})
      } else {
        this.get_document_template.deleted = true;
        this.update_document_doc_template(this.get_document_template);
        this.$router.push({name: 'document_list', params: {page: 1}})
      }
    }
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
      this.load_doc_type_list()
      this.load_input_type_list()
    }
  },
  watch: {
    getCurrentUser(val) {
      if (val.id) {
        if (!canAccess(val, "template.read")) {
          this.$router.go(-1);
        }
      }
      this.load_document_template({id: this.$route.params.id})
      this.load_doc_type_list()
      this.load_input_type_list()
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