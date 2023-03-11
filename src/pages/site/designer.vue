<template>
  <div class="_container pt-10  ">
    <div class="flex items-center mx-10 gap-x-4 mt-14 text-base">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.4583 4.16666H4.16659C3.61405 4.16666 3.08415 4.38615 2.69345 4.77685C2.30275 5.16755 2.08325 5.69746 2.08325 6.24999V20.8333C2.08325 21.3859 2.30275 21.9158 2.69345 22.3065C3.08415 22.6972 3.61405 22.9167 4.16659 22.9167H18.7499C19.3025 22.9167 19.8324 22.6972 20.2231 22.3065C20.6138 21.9158 20.8333 21.3859 20.8333 20.8333V13.5417"
            stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M19.2708 2.60418C19.6852 2.18978 20.2472 1.95697 20.8333 1.95697C21.4193 1.95697 21.9814 2.18978 22.3958 2.60418C22.8102 3.01858 23.043 3.58063 23.043 4.16668C23.043 4.75273 22.8102 5.31478 22.3958 5.72918L12.4999 15.625L8.33325 16.6667L9.37492 12.5L19.2708 2.60418Z"
            stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      {{ get_fields.name }}
    </div>
    <form class="flex-wrap flex justify-between max-md:mx-4 text-sm  max-lg:items-center max-lg:flex-col">
      <div
          class="px-2 max-h-[500px] overflow-y-auto gap-y-1 flex flex-col text-sm w-4/12 max-lg:w-10/12 max-md:w-full max-lg:max-h-full py-5 "
          @submit.prevent="add">
        <v-input required="true" v-model:model-value="appeal.title" :label="$t('Заголовок')"/>
        <v-input required="true" v-model:model-value="appeal.description" type="text" :label="$t('Описание')"/>
        <div v-for="(item,index) in get_fields.doc_content" :key="index" class="flex flex-col gap-y-1">
          <designer-input
              v-model:model-value="field.value"
              v-for="(field, i) in item.fields" :item="field" :key="i"
          />
        </div>

      </div>
      <div
          class="w-7/12 max-h-[500px] overflow-y-auto doc_preview max-lg:my-16 max-lg:max-h-full max-sm:max-h-[570px] max-lg:w-10/12 max-md:w-full">
        <document_preview :item="get_fields"/>

      </div>
      <div class="flex justify-end w-full gap-y-5 my-5">
        <div class="w-6/12 flex justify-center">

        <v-button-2 class="text-sm" type="submit">{{ $t('Создать обращение') }}</v-button-2>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import DesignerInput from "../../components/site/designer/designerInput.vue";
import VButton2 from "../../components/UI/vButton2.vue";
import VInput from "../../components/UI/vInput.vue";
import Document_preview from "../../components/profile/document_template/documentPreview.vue";

export default {
  name: "designer",
  components: {Document_preview, VInput, VButton2, DesignerInput},
  data() {
    return {
      doc_fields_value: {},
      appeal: {
        title: "",
        description: "",
      },
    }
  },
  methods: {
    ...mapActions(['load_fields', 'load_preview', 'add_new_appeal']),
    ...mapMutations(['update_fields', 'update_send_appeal']),
    add() {
      if (localStorage.getItem('token')) {
        this.add_new_appeal({
          appeal: this.appeal, doc: {
            doc: this.get_fields.id,
            fields: this.get_fields
          }
        })
        this.update_fields([]);
        this.$router.push({name: 'info'})
      } else {
        this.$router.push({name: 'sign-in'})
        this.update_send_appeal({
          appeal: this.appeal, doc: {
            doc: this.get_fields.id,
            fields: this.get_fields
          }
        });
      }
    }
  },
  computed: {
    ...mapGetters(['get_fields', 'get_preview'])
  },
  mounted() {
    this.load_fields(Number(this.$route.params.name))
  },
  watch: {}
}
</script>

<style >
.doc_preview{
  border: 1px solid #ebebeb;
  box-shadow: 3px 3px 6px rgb(0 0 0 / 10%);
  padding-right: 10px;
  padding-left: 10px;
}
</style>