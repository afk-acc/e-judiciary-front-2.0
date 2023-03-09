<template>
  <div class="flex justify-between items-center">
    <div class="flex flex-col">

      <div class="font-medium" @click="isOpen = !isOpen">
        {{ item.title }}
      </div>
      <div class="">
        <router-link :to="{name:'document_template_page', params:{id:item.id}}"
                     v-for="(doc, index) in item.document_list" :key="index">
          {{ doc.name }}
        </router-link>
      </div>
    </div>
    <div class="flex gap-x-4 max-sm:text-sm max-sm:flex max-sm:flex-col max-sm:gap-y-2">
      <button @click="$emit('docEdit', item )" v-if="can(getCurrentUser, 'template.edit')"
              class="text-white bg-primary_gr rounded-xl py-2 px-4">
        {{ $t('Редактировать') }}
      </button>
      <button @click=" $emit('docDel', item) " v-if="can(getCurrentUser, 'template.edit')"
              class="text-white bg-danger rounded-xl py-2 px-4">
        {{ $t('Удалить') }}
      </button>
    </div>
  </div>
</template>

<script>
import {canAccess} from "../../../assets/functions.js";
import {mapGetters} from "vuex";
import DocumentTemplateItem from "../../site/index/DocumentTemplateItem.vue";

export default {
  name: "DocTypeItem",
  components: {DocumentTemplateItem},
  props: {
    item: Object
  },
  data() {
    return {
      isOpen: false
    }

  },
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  methods: {
    can(user, item) {
      if (user.permissions) {
        return canAccess(user, item);
      }
      return false;
    },
  }
}
</script>

<style scoped>

</style>

