<template>
  <div class="max-lg:mt-20">
    <v-inner/>
    <div class="_container ">
      <v-advantages/>
    </div>
    <v-documents-template/>
    <div class="_container max-lg:px-4 ">
      <v-stats/>
    </div>
    <v-info/>
  </div>
</template>

<script>
import userSceletTemplate from "./sceleton/userSceletTemplate.vue";

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
    userSceletTemplate 
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