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
    <v-footer/>
  </div>
</template>

<script>
import vInner from "../../components/site/index/vInner.vue"
import VAdvantages from "../../components/site/index/vAdvantages.vue";
import VDocumentsTemplate from "../../components/site/index/vDocumentsTemplate.vue";
import VStats from "../../components/site/index/vStats.vue";
import VInfo from "../../components/site/index/vInfo.vue";
import VFooter from "../../components/site/vFooter.vue";
import {mapActions} from "vuex";

export default {
  name: "index",
  components: {
    VFooter,
    VInfo,
    VStats,
    VDocumentsTemplate,
    VAdvantages,
    vInner
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