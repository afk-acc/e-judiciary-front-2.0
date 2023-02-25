<template>
  <div class="bg-primary_gr  w-full relative drop-shadow-2xl">
    <v-header/>
      <div class="flex pt-14 justify-between _container">
        <div class="w-[49%] text-white max-w-[430px] flex justify-center  flex-col">
          <p class="text-3xl" v-html="$t('Найдите себе необходимый документ и заполните его без ошибок, <strong>выиграйте время</strong>.')"></p>
          <p class="my-6 font-medium text-sm">{{$t('Получите необходимый документ онлайн!')}}</p>
          <div class="flex justify-between">
            <v-button>{{$t('Задайте вопрос')}}</v-button>
            <v-button>{{$t('Выберите юриста')}}</v-button>
          </div>
        </div>
        <div class="w-[49%] flex justify-end"><img src="/img/inner.png" alt=""></div>
      </div>
  </div>
</template>

<script>
import VHeader from "../vHeader.vue";
import vButton from "../../UI/vButton.vue"
export default {
  name: "vInner",
  components: {VHeader,vButton}
}
</script>

<style scoped>

</style>