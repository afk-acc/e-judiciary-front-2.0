<template>
  <div class="bg-primary_gr max-lg:px-4 pt-16 max-lg:pt-0 w-full relative z-20 drop-shadow-2xl "  >
    <img src="/img/inner2.png" alt="" class="absolute left-0 top-0 w-full z-10 h-full object-cover " style="filter: opacity(0.1);object-position: center">
    <v-header/>
      <div class="flex pt-14 justify-between _container max-lg:flex-col z-20 relative max-lg:items-center  ">
        <div class="w-[49%] max-lg:w-9/12 max-lg:max-w-full max-md:text-center text-white max-w-[430px] flex justify-center flex-col">
          <p class="text-3xl " v-html="$t('Найдите себе необходимый документ и заполните его без ошибок, <strong>выиграйте время</strong>.')"></p>
          <p class="my-6 font-medium text-sm">{{$t('Получите необходимый документ онлайн!')}}</p>
          <div class="flex justify-between w-full max-md:flex-wrap max-md:justify-center max-md:gap-x-4 max-md:gap-y-4">
            <v-button>{{$t('Задайте вопрос')}}</v-button>
            <v-button class="px-4">{{$t('Выберите юриста')}}</v-button>
          </div>
        </div>
        <div class="w-[49%] max-lg:w-9/12 max-lg:z-0 flex justify-end"><img src="/img/inner.png" alt=""></div>
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