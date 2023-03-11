<template>
  <div class="max-lg:mt-10 px-2 h-full">
    <h1 class="font-bold text-xl my-4">{{ $t('Редактирование документов')}}</h1>
    <div class="flex flex-col gap-y-4">
      <div class="flex gap-x-4">
      
        <router-link :to="{name:'create_document_template'}" class="bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 p-2 rounded-md text-white">
          {{ $t('Добавить документ') }}
        </router-link>

        <div class="flex justify-end" v-if="can(getCurrentUser, 'template.edit')">
          <button @click="showAdd = true" class="text-white bg-[#28a745] hover:bg-[#419554] hover:border-[#419554] transition-all duration-300 py-2 px-4 text-sm rounded-md">
            {{ $t('Добавить тип документа') }}
          </button>
        </div>
      </div>
      <div class="" v-if="get_doc_type_list?.data?.length > 0">
        <doc-type-item :item="item" v-for="(item,index) in get_doc_type_list.data"
                       @docEdit="(val)=>{change=val;showEdit = true}"
                       @docDel="(val)=>{change= val;delete_doc_type(val)}"
        />
      </div>
      <div v-else>
      <UsersScelet/>
      <UsersScelet/>
      <UsersScelet/>
      <UsersScelet/>
      <UsersScelet/>
    </div>
    <div class="flex gap-x-[1px] flex-wrap my-10 " v-if="get_doc_type_list?.data?.length > 0">
      <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
           v-for="item in get_doc_type_list?.meta?.links"
           :class="{'bg-primary text-white rounded-full ':item.active}">
        {{ $t(item.label) }}
      </div>
    </div>
    <div class="text-center font-bold text-2xl" v-else-if="get_doc_type_list.data">
      {{ $t('Ничего не найдено') }}
    </div>
    </div>
    <v-modal @showModal="showEdit = false" v-if="showEdit" class="w-full">
      <form @submit.prevent="update_doc_type(change);showEdit=false" class="">
        <div class="font-bold text-center">{{ $t('Редактирование') }}</div>
        <div class="flex flex-col gap-y-4 my-5">
          <p>{{ $t('Наименование') + ':' }}</p>
          <input type="text" class="py-2 px-4 outline-none border-filter_gray border rounded-md"
                 v-model="change.name_uz_l">
          <input type="text" class="py-2 px-4 outline-none border-filter_gray border rounded-md"
                 v-model="change.name_uz_c">
          <input type="text" class="py-2 px-4 outline-none border-filter_gray border rounded-md "
                 v-model="change.name_ru">
           <p>{{ $t('Порядок') + ':' }}</p>
          <input type="text" class="py-2 px-4 outline-none border-filter_gray border rounded-md "
                 v-model="change.sort_order" >
        </div>
        <div class="flex gap-x-4 justify-center">
          <button @click="showEdit = false;" class="text-white bg-danger rounded-md py-2 px-4">
            {{ $t('Отменить') }}
          </button>
          <button type="submit" class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 rounded-md py-2 px-4">
            {{ $t('Сохранить') }}
          </button>
        </div>
      </form>
    </v-modal>
    <v-modal @showModal="showAdd = false" v-if="showAdd">
      <form action="" @submit.prevent="add_doc_type(new_type);showAdd=false;new_type={}">
        <p class="text-center font-medium my-2 px-4">{{ $t("Добавить новый тип документа") }}</p>
        <v-input :label="$t('Название')" v-model:model-value="new_type.name_ru" required="true"/>
        <v-input :label="$t('Nomi')" v-model:model-value="new_type.name_uz_l" required="true"/>
        <v-input :label="$t('Номи')" v-model:model-value="new_type.name_uz_c" required="true"/>
        <v-input :label="$t('Порядок')" v-model:model-value="new_type.sort_order" required="true"/>

        <div class="flex gap-x-2 justify-center my-2">
          <button class="text-white text-sm bg-danger rounded-md py-2 px-4"
                  @click="showAdd = false;new_type = {}">{{
              $t('Отменить')
            }}
          </button>
          <button type="submit" class="text-white text-sm  bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] rounded-md py-2 px-4">{{ $t('Добавить') }}
          </button>
        </div>
      </form>
    </v-modal>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {canAccess} from "../../../assets/functions.js";
import VInput from "../../../components/UI/vInput.vue";
import VModal from "../../../components/UI/vModal.vue";
import DocTypeItem from "../../../components/profile/document_template/DocTypeItem.vue";

export default {
  name: "documentTypeList",
  components: {DocTypeItem, VInput, VModal},
  data() {
    return {
      showEdit: false,
      showDel: false,
      change: {},
      showAdd: false,
      new_type: {
        name_uz_l: "",
        name_uz_c: "",
        name_ru: "",
        sort_order: -1
      },
      params:{
        page:1,
        limit:10,
      }
    }
  },
  methods: {
    ...mapActions(['load_doc_type_list', 'update_doc_type', 'delete_doc_type', 'add_doc_type']),
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
        if (Number(this.params.page) < this.get_doc_type_list.meta.last_page) {
          this.params.page = Number(this.params.page) + 1
        }
      } else {
        if (Number(page) <= this.get_doc_type_list.meta.last_page) {
          this.params.page = Number(page)
        }
      }
      this.$router.push({name: 'document_list', params: {page: this.params.page}})
    },
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'get_doc_type_list'])
  },
  mounted() {
    if (this.getCurrentUser.id) {
      if (!canAccess(this.getCurrentUser, "template.read")) {
        this.$router.go(-1);
      }
      this.params.page = this.$route.params.page
      this.load_doc_type_list(this.params )
    }
  },
  watch: {
    getCurrentUser(val) {
      if (val.id) {
        if (!canAccess(val, "template.read")) {
          this.$router.go(-1);
        }
      }
      this.load_doc_type_list(this.params)
    },
    $route(to, from) {
      this.params.page = to.params.page
      this.load_doc_type_list(this.params)
    }
  }
}
</script>

<style scoped>

</style>