<template>
    <v-header />
    <router-view></router-view>
    <v-footer class="" />
</template>

<script>
import VHeader from "../../components/site/vHeader.vue";
import VFooter from "../../components/site/vFooter.vue";

import { mapActions } from "vuex";

export default {
  name: "base",
  components: { VFooter, VHeader},
  methods: {
    ...mapActions(["loadCurrentUser"]),
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.loadCurrentUser();
    }
  },

}
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5 ease-out;
}
</style>
