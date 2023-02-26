<template>
  <div class="min-h-screen flex flex-col justify-between">
    <v-header class="bg-primary_gr"/>
    <router-view class="pt-14"/>
    <v-footer class=""/>
  </div>
</template>

<script>
import VHeader from "../../components/site/vHeader.vue";
import VFooter from "../../components/site/vFooter.vue";
import {mapActions} from "vuex";

export default {
  name: "base",
  components: {VFooter, VHeader},
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