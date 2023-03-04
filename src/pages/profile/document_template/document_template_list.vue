<template>
  <div class="">

    <div class="flex flex-col gap-y-4" v-if="get_document_template_list?.data">
      <div class="flex gap-x-4">
        <router-link :to="{name:'create_document_template'}" class="bg-primary_gr p-2 rounded-xl text-white">{{$t('Добавить документ')}}</router-link>
        <router-link :to="{name:'document_type_list'}" class="bg-primary_gr p-2 rounded-xl text-white">{{$t('Типы документов')}}</router-link>
      </div>
      <router-link :to="{name:'document_template_page', params:{id:item.id}}" v-for="(item, index) in get_document_template_list?.data" :key="index">
        <doc-template-item :item="item"/>
      </router-link>
    </div>
    <div class="" v-else>
      <user-scelet-template/>
      <user-scelet-template/>
      <user-scelet-template/>
    </div>
    <div class="flex gap-x-[1px] flex-wrap my-10" v-if="get_document_template_list?.meta?.links?.length > 3">
      <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
           v-for="item in get_document_template_list?.meta?.links"
           :class="{'bg-primary text-white rounded-full ':item.active}">
        {{ $t(item.label) }}
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import DocItem from "../../../components/site/service/docItem.vue";
import DocTemplateItem from "../../../components/site/service/docTemplateItem.vue";
import UserSceletTemplate from "../../site/sceleton/userSceletTemplate.vue";
import {canAccess} from "../../../assets/functions.js";

export default {
  name: "document_template_list",
  components: {UserSceletTemplate, DocTemplateItem},
  data() {
    return {
      params: {
        page: '',
        limit: 15,
        appeal_type_id: '-'
      }
    }
  },
  methods: {
    ...mapActions(['load_document_template_list']),
    loadPage(page) {
      console.log(page)
      if (page === '<') {
        if (Number(this.params.page) > 1) {
          this.params.page -= 1;
        }
      } else if (page === '>') {
        if (Number(this.params.page) < this.get_all_doc_list.meta.last_page) {
          this.params.page = Number(this.params.page) + 1
        }
      }
      else{
        if (Number(page) <= this.get_all_doc_list.meta.last_page) {
          this.params.page = Number(page)
        }
      }
      this.$router.push({name:'service', params:{page:this.params.page}})
      this.load_all_doc_list(this.params)
    },
    can(user, item) {
      if (user.permissions) {
        return canAccess(user, item);
      }
      return false;
    },
  },
  computed: {
    ...mapGetters(['get_document_template_list', 'getCurrentUser'])
  },
  mounted() {
    this.params.page = this.$route.params.page
    if (this.getCurrentUser.id) {
      if (!canAccess(this.getCurrentUser, "template.read")) {
        this.$router.go(-1);
      }
      this.load_document_template_list(this.params)
    }
  },
  watch:{
    getCurrentUser(val) {
      if (val.id) {
        if (!canAccess(val, "template.read")) {
          this.$router.go(-1);
        }
      }
      this.load_document_template_list(this.params)
    },
  }
}
</script>

<style scoped>

</style>