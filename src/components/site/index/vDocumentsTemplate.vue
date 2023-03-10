<template>
  <div class="bg-primary_gr py-10 text-white font-medium  max-lg:text-xl max-lg:px-10">
    <div class="_container  ">
      <p class="text-center mb-14">{{ $t('Образцы документов') }}</p>
      <div class="flex flex-wrap max-md:flex-col max-md:gap-y-15 justify-between gap-y-20 mt-10 relative max-md:static">
        <document-template-item :item="item" v-for="(item, index) in get_doc_type_list.data" :key="index"
                                class="min-h-[500px] max-lg:min-h-full max-md:border-r-0 max-lg:px-4 flex flex-col justify-between max-md:w-full w-[49%]"
                                :is-end="index % 2 !== 0" :class="{'border-dashed border-r ':index % 2 === 0}"/>
      </div>
      <div class="flex justify-center mt-10">
        <v-button>
          <router-link :to="{name:'service', params:{page:1}}"> {{ $t('Все образцы') }}</router-link>
        </v-button>

      </div>

    </div>

  </div>
</template>

<script>
import DocumentTemplateItem from "./DocumentTemplateItem.vue";
import VButton from "../../UI/vButton.vue";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "vDocumentsTemplate",
  components: {VButton, DocumentTemplateItem},
  computed: {
    ...mapGetters(['get_doc_type_list']),
  },
  methods: {
    ...mapActions(['load_doc_type_list'])

  },
  mounted() {
    this.load_doc_type_list()

  }
}
</script>

<style scoped>

</style>