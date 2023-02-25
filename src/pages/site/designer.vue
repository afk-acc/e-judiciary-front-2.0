<template>
  <div class="_container">
    <div class="flex items-center gap-x-4 pt-7">
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
    <div class="flex justify-between">
      <form class="flex flex-col w-4/12 py-5 overflow-auto max-h-[570px]" @submit.prevent="add">
        <v-input required="true" v-model:model-value="appeal.title" :label="$t('Заголовок')"/>
        <v-input required="true" v-model:model-value="appeal.description" type="textarea" :label="$t('Описание')"/>
        <designer-input @loadPreview="load_preview({doc:get_fields.doc_name,fields:doc_fields_value })"
                        v-for="item in get_fields.doc_fields" :item="item"
                        v-model:model-value="doc_fields_value[item.key]"/>
        <div class="flex flex-col gap-y-5 mt-5">
          <v-button-2 type="button" @click="load_preview({doc:get_fields.doc_name,fields:doc_fields_value })">
            {{ $t('Предпросмотр') }}
          </v-button-2>
          <v-button-2 type="submit">{{ $t('Создать обращение') }}</v-button-2>

        </div>
      </form>
      <div class="w-[566px] overflow-auto max-h-[570px]">
        <div class="" v-html="get_preview"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import DesignerInput from "../../components/site/designer/designerInput.vue";
import VButton2 from "../../components/UI/vButton2.vue";
import VInput from "../../components/UI/vInput.vue";

export default {
  name: "designer",
  components: {VInput, VButton2, DesignerInput},
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
            doc: this.get_fields.doc_name,
            fields: this.doc_fields_value
          }
        })
        this.update_fields([]);
      }else{
        this.$router.push({name:'sign-in'})
        this.update_send_appeal({
          appeal: this.appeal, doc: {
            doc: this.get_fields.doc_name,
            fields: this.doc_fields_value
          }
        });
      }
    }
  },
  computed: {
    ...mapGetters(['get_fields', 'get_preview'])
  },
  mounted() {
    this.load_fields(this.$route.params.name)
  },
  watch: {
    get_fields(val) {
      this.load_preview({doc: val.doc_name})
    }
  }
}
</script>

<style scoped>

</style>