<template>
  <div class="max-lg:mt-20">
    <v-inner/>
    <div class="_container ">
      <v-advantages/>
    </div>
    <v-documents-template/>
    <div class="_container max-lg:px-4 ">
      <v-stats/>
      <div id="indexForm" class="flex justify-center w-full mx-auto text-center flex-wrap">
      <div class="">
        <h1 class="text-2xl  text-center">{{ $t('Задайте вопрос юристу!') }}</h1>
        <div class="flex justify-center">

        <div class="w-[50px] h-[2px] mt-2 rounded-full bg-primary"></div>
        </div>
        <contactForm></contactForm>
      </div>
    </div>
    </div>
    <v-info/>
  </div>
</template>

<script>
import userSceletTemplate from "./sceleton/userSceletTemplate.vue";
import contactForm from "../../components/site/contacts/contactForm.vue";
import vInner from "../../components/site/index/vInner.vue"
import VAdvantages from "../../components/site/index/vAdvantages.vue";
import VDocumentsTemplate from "../../components/site/index/vDocumentsTemplate.vue";
import VStats from "../../components/site/index/vStats.vue";
import VInfo from "../../components/site/index/vInfo.vue";
import {mapActions} from "vuex";

export default {
  name: "index",
  components: {
    VInfo,
    VStats,
    VDocumentsTemplate,
    VAdvantages,
    vInner, 
    userSceletTemplate,
    contactForm
  },
  methods:{
    ...mapActions(['loadCurrentUser'])
  },
  mounted() {
    if(localStorage.getItem('token')){
      this.loadCurrentUser()
    }
  }

}
</script>

<style scoped>

</style>