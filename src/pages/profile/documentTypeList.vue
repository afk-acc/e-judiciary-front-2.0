<template>
  <div class="max-lg:mt-10 px-2">

    <div class="flex flex-col gap-y-4">
      <div class="flex justify-end" v-if="can(getCurrentUser, 'template.edit')">
        <button @click="showAdd = true"  class="text-white bg-primary_gr py-2 px-4 text-sm rounded-xl">
          {{ $t('Добавить') }}
        </button>
      </div>
      <div class="flex justify-between items-center " v-for="(item,index) in get_doc_type_list.data">

        <div class="font-medium">
          {{ item.title }}
        </div>
        <div class="flex gap-x-4 max-sm:text-sm max-sm:flex max-sm:flex-col max-sm:gap-y-2">
          <button @click="change= item;showEdit = true" v-if="can(getCurrentUser, 'template.edit')"
                  class="text-white bg-primary_gr rounded-xl py-2 px-4">
            {{ $t('Редактировать') }}
          </button>
          <button @click="change= item;delete_doc_type(item)" v-if="can(getCurrentUser, 'template.edit')" class="text-white bg-danger rounded-xl py-2 px-4">
            {{ $t('Удалить') }}
          </button>
        </div>
      </div>
    </div>
    <v-modal @showModal="showEdit = false" v-if="showEdit" class="w-full">
      <form @submit.prevent="update_doc_type(change);showEdit=false" class="">
        <div class="font-bold text-center">{{ $t('Редактирование') }}</div>
        <div class="flex flex-col gap-y-4 my-5">

          <input type="text" class="py-2 px-4 outline-none border-filter_gray border rounded-xl"
                 v-model="change.name_uz_l">
          <input type="text" class="py-2 px-4 outline-none border-filter_gray border rounded-xl"
                 v-model="change.name_uz_c">
          <input type="text" class="py-2 px-4 outline-none border-filter_gray border rounded-xl "
                 v-model="change.name_ru">
          <input type="text" class="py-2 px-4 outline-none border-filter_gray border rounded-xl "
                 v-model="change.sort_order">

        </div>
        <div class="flex gap-x-4">
          <button @click="showEdit = false;" class=" rounded-xl py-2 px-4">
            {{ $t('Отменить') }}
          </button>
          <button type="submit" class="text-white bg-primary_gr rounded-xl py-2 px-4">
            {{ $t('Сохранить') }}
          </button>
        </div>
      </form>
    </v-modal>
    <v-modal @showModal="showAdd = false" v-if="showAdd">
      <form action="" @submit.prevent="add_doc_type(new_type);showAdd=false;new_type={}">
        <p class="text-center font-medium my-2 px-4">{{$t("Добавить новый тип документа")}}</p>
        <v-input :label="$t('Название')" v-model:model-value="new_type.name_ru" required="true"/>
        <v-input :label="$t('Nomi')" v-model:model-value="new_type.name_uz_l" required="true"/>
        <v-input :label="$t('Номи')" v-model:model-value="new_type.name_uz_c" required="true"/>
        <v-input :label="$t('Порядок')" v-model:model-value="new_type.sort_order" required="true"/>

        <div class="flex gap-x-2 justify-center my-2">
          <button class="text-white text-sm bg-primary_gr rounded-xl py-2 px-4"
                  @click="showAdd = false;new_type = {}">{{$t('Отменить')
            }}</button>
          <button type="submit" class="text-white text-sm bg-primary_gr rounded-xl py-2 px-4">{{$t('Добавить')}}</button>
        </div>
      </form>
    </v-modal>
  </div>
</template>

<script>
import {canAccess} from "../../assets/functions.js";
import {mapActions, mapGetters} from "vuex";
import VModal from "../../components/UI/vModal.vue";
import VInput from "../../components/UI/vInput.vue";

export default {
  name: "documentTypeList",
  components: {VInput, VModal},
  data() {
    return {
      showEdit: false,
      showDel: false,
      change: {},
      showAdd: false,
      new_type: {
        name_uz_l:"",
        name_uz_c:"",
        name_ru:"",
        sort_order:-1
      },
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
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'get_doc_type_list'])
  },
  mounted() {
    if (this.getCurrentUser.id) {
      if (!canAccess(this.getCurrentUser, "template.read")) {
        this.$router.go(-1);
      }
      this.load_doc_type_list()
    }
  },
  watch: {
    getCurrentUser(val) {
      if (val.id) {
        if (!canAccess(val, "template.read")) {
          this.$router.go(-1);
        }
      }
      this.load_doc_type_list()
    },
  }
}
</script>

<style scoped>

</style>