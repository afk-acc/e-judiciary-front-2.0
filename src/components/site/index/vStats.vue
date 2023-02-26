<template>
  <div class="flex flex-wrap max-lg:justify-center max-lg:gap-y-10  justify-center my-14">
      <stats-item>
        <template v-slot:num>250</template>
        <template v-slot:text>{{$t('Количество специалистов')}}</template>
      </stats-item>

    <stats-item>
      <template v-slot:num>250</template>
      <template v-slot:text>{{$t('Количество вопросов')}}</template>
    </stats-item>
    <stats-item>
      <template v-slot:num>250</template>
      <template v-slot:text>{{$t('Количество специалистов')}}</template>
    </stats-item>
  </div>
</template>

<script>
import StatsItem from "./statsItem.vue";
export default {
  name: "vStats",
  components: {StatsItem}
}
</script>

<style scoped>

</style>