<template>
  <div class="flex flex-wrap max-lg:justify-center max-lg:gap-y-10  justify-center my-14"
       id="info-scroll">
    <stats-item :num="stats.lawyers_count">
      <template v-slot:text>{{ $t('Количество специалистов') }}</template>
    </stats-item>
    <stats-item :num="stats.appeals_count">
      <template v-slot:text>{{ $t('Количество вопросов') }}</template>
    </stats-item>
    <stats-item :num="stats.users_count">
      <template v-slot:text>{{ $t('Количество пользователей') }}</template>
    </stats-item>
  </div>
</template>

<script>
import StatsItem from "./statsItem.vue";
import axios from "../../../axios/index.js";

export default {
  name: "vStats",
  components: {StatsItem},
  data() {
    return {
      stats: {}
    }
  },
  methods: {
    load_stats() {
      axios.get('main-stats').then(res => {
        this.stats = res.data
      })
    }
  },
  mounted() {
    this.load_stats()
  }
}
</script>

<style scoped>

</style>