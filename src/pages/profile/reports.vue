<template>
  <div class="bg-white flex relative h-screen text-sm">
    <div class="hidden max-lg:block max-lg:absolute top-20 left-4" @click="open=!open">
      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer w-8 h-8" fill="none" viewBox="0 0 24 24"
           stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path>
      </svg>
    </div>
    <v-complaints-left @show="openModal" @reportChange="changeReport" :report="report" :open="open"></v-complaints-left>
    <v-complaints-right @show="openModal" :report="report"></v-complaints-right>
  </div>
</template>

<script>
import {canAccess} from "../../assets/functions.js";
import {mapGetters} from "vuex";
import vComplaintsLeft from "../../components/profile/report/vComplaintsLeft.vue";
import vComplaintsRight from "../../components/profile/report/vComplaintsRight.vue";

export default {
  name: "reports",
  components: {vComplaintsLeft, vComplaintsRight},
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  data() {
    return {
      open: false,
      report: {}
    }
  },
  methods: {
    openModal() {
      this.open = !this.open
    },
    changeReport(item) {
      this.report = item
    }
  },
  mounted() {
    if (this.getCurrentUser.id) {
      if (!canAccess(this.getCurrentUser, 'report.read')) {
        this.$router.go(-1)
      }
    }
  },
  watch: {
    getCurrentUser(val) {
      if (!canAccess(val, 'report.read')) {
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style scoped>

</style>