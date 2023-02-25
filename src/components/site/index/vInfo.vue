<template>
  <div class="bg-secondary_gr p-10">
    <div class="_container">

      <p class="text-white font-bold text-3xl mb-5  text-center">{{
          $t(`Какие еще документы вы хотели бы иметь?
Ваше мнение очень важно для нас`)
        }}</p>
      <div class="flex justify-center">
        <v-button>
          {{ $t('Отправить') }}
        </v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "../../UI/vButton.vue";

export default {
  name: "vInfo",
  components: {VButton}
}
</script>

<style scoped>

</style>