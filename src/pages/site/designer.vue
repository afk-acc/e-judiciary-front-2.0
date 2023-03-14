<template>
  <form class="pt-10 flex flex-wrap gap-x-4 _container justify-between" @submit.prevent="add">
    <div class="flex w-full justify-between mt-14 mb-10 max-lg:flex-col max-lg:items-center max-lg:p-4 max-lg:gap-y-4  ">
      <div class="flex items-center gap-x-1 text-base max-md:text-sm font-bold text-[#253858]">
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
      <div class="flex items-center gap-x-6">
        <div class="">

          <v-button-2 class="text-sm pt-3 pb-3" type="button" @click="openModal = !openModal">{{
              $t('Предпросмотр')
            }}
          </v-button-2>
        </div>
        <div class="flex justify-center flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
            <g id="doc-icon" transform="translate(-10.023 .098)">
              <path id="Path_9" data-name="Path 9"
                    d="M24.959 0h-9.745A2.166 2.166 0 0013 2.114v19.87a2.166 2.166 0 002.214 2.116h15.06a2.166 2.166 0 002.214-2.114V7.187H28.06z"
                    transform="translate(-.294 -.098)" fill="#d7dadd"></path>
              <path id="Path_10" data-name="Path 10" d="M40 0v6.558a2.733 2.733 0 002.733 2.733l4.558-2z"
                    transform="translate(-15.214)" fill="#a8adba"></path>
              <path id="Path_13" data-name="Path 13"
                    d="M0 24.536A1.536 1.536 0 011.536 23H20.48a1.536 1.536 0 011.536 1.536v9.216a1.536 1.536 0 01-1.536 1.536H1.536A1.536 1.536 0 010 33.752z"
                    transform="translate(10.023 -12.288)" fill="#175bc1"></path>
              <path id="Path_14" data-name="Path 14"
                    d="M9.195 31.3h1.791a2.472 2.472 0 011.132.248 1.794 1.794 0 01.766.687 2.084 2.084 0 010 2.072 1.831 1.831 0 01-.766.693 2.524 2.524 0 01-1.132.242H9.195zm1.745 3.193a1.322 1.322 0 00.941-.326 1.168 1.168 0 00.355-.9 1.15 1.15 0 00-.355-.89 1.309 1.309 0 00-.937-.332h-.836v2.445z"
                    transform="translate(5.517 -16.332)" fill="#fff"></path>
              <path id="Path_15" data-name="Path 15"
                    d="M19.955 35.245a2.317 2.317 0 01-1.11-.265 2 2 0 01-.771-.727 2.022 2.022 0 01-.276-1.048 1.963 1.963 0 011.048-1.774 2.317 2.317 0 011.11-.265 2.285 2.285 0 011.1.265 1.984 1.984 0 01.771.732 2.036 2.036 0 01-.771 2.816 2.285 2.285 0 01-1.101.266zm0-.777a1.269 1.269 0 00.631-.158 1.152 1.152 0 00.436-.451 1.388 1.388 0 000-1.309 1.113 1.113 0 00-.436-.445 1.3 1.3 0 00-1.262 0 1.152 1.152 0 00-.445.445 1.432 1.432 0 000 1.309 1.192 1.192 0 00.445.451 1.269 1.269 0 00.63.158z"
                    transform="translate(1.3 -16.268)" fill="#fff"></path>
              <path id="Path_16" data-name="Path 16"
                    d="M29.214 35.245a2.3 2.3 0 01-1.091-.259 2.008 2.008 0 01-.766-.727 2.036 2.036 0 01-.276-1.053 2 2 0 01.276-1.048 1.953 1.953 0 01.766-.727 2.431 2.431 0 012.022-.084 1.85 1.85 0 01.7.518l-.586.541a1.259 1.259 0 00-.991-.462 1.3 1.3 0 00-.654.164 1.141 1.141 0 00-.451.445 1.432 1.432 0 000 1.309 1.181 1.181 0 00.451.451 1.335 1.335 0 00.654.158 1.254 1.254 0 00.99-.471l.586.541a1.826 1.826 0 01-.7.524 2.317 2.317 0 01-.931.177z"
                    transform="translate(-3.247 -16.268)" fill="#fff"></path>
            </g>
          </svg>
          <button class="text-link cursor-pointer" type="submit">{{ $t('Скачать') }}</button>
        </div>
      </div>
    </div>
    <div
        class="px-2 max-h-[500px] overflow-y-auto gap-y-1 flex flex-col text-sm w-[40%] max-lg:w-10/12 max-md:w-full max-lg:max-h-full py-5 "
    >
      <div v-for="(item,index) in get_fields.doc_content" :key="index" class="flex flex-col gap-y-1">
        <designer-input
            v-model:model-value="field.value"
            v-for="(field, i) in item.fields" :item="field" :key="i"
        />
      </div>

    </div>
    <div
        class="w-7/12 max-h-[500px] overflow-y-auto border rounded border-filter_gray border-opacity-30 p-4 max-lg:my-16 max-lg:h-[600px] max-sm:max-h-[570px] max-lg:w-10/12 max-md:w-full  shadow-md">
      <document_preview :item="get_fields"/>
    </div>
    <div class="flex justify-end w-full gap-y-5 my-5">
      <div class="w-full flex justify-end">
        <div class="w-7/12 flex justify-center">

        </div>
      </div>
      <div>
        <v-modal v-if="openModal" @showModal="openModal = !openModal">
          <div class="w-full flex justify-center">
            <document_preview :item="get_fields"/>
          </div>
        </v-modal>
      </div>
    </div>
  </form>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import DesignerInput from "../../components/site/designer/designerInput.vue";
import VButton2 from "../../components/UI/vButton2.vue";
import VInput from "../../components/UI/vInput.vue";
import vModal from '../../components/UI/vModal.vue'
import Document_preview from "../../components/profile/document_template/documentPreview.vue";
import axios from "../../axios/index.js";

export default {
  name: "designer",
  components: {Document_preview, VInput, VButton2, DesignerInput, vModal},
  data() {
    return {
      openModal: false,
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
      axios.post(`generate-doc-word`, {
            doc: this.get_fields.id,
            fields: this.get_fields
          },
          {
            responseType: 'blob'
          }
      ).then(response => {
        console.log(response.data)
        const href = URL.createObjectURL(response.data);
        // create "a" HTML element with href to file & click
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', 'file.docx'); //or any other extension
        document.body.appendChild(link);
        link.click();

        // clean up "a" element & remove ObjectURL
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      })
      // this.add_new_appeal({
      //   appeal: this.appeal, doc: {
      // doc: this.get_fields.id,
      // fields: this.get_fields
      // }
      // })
      // this.update_fields([]);
      // this.$router.push({name: 'info'})
      // }
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

<style>

</style>