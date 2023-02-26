<template>
  <div class="my-10 ">
    <p class="text-center font-medium text-3xl text-black">{{$t('Преимущества')}}</p>
    <div class="flex max-lg:flex-wrap max-lg:justify-center justify-center gap-5 mt-10">
      <advantage-item >
          <template v-slot:icon><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.5833 30.0083V32.5C59.58 38.3403 57.6889 44.023 54.1919 48.7007C50.695 53.3784 45.7797 56.8004 40.1791 58.4564C34.5784 60.1123 28.5926 59.9134 23.1142 57.8895C17.6358 55.8655 12.9584 52.1248 9.77967 47.2253C6.60092 42.3259 5.09109 36.5301 5.47536 30.7025C5.85964 24.8748 8.11743 19.3275 11.912 14.8879C15.7066 10.4482 20.8346 7.35412 26.5313 6.06702C32.2281 4.77992 38.1882 5.36879 43.5229 7.74579" stroke="#2250A7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M59.5833 10.8334L32.5 37.9438L24.375 29.8188" stroke="#2250A7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </template>
          <template v-slot:header>{{$t('Выберите юриста')}}</template>
          <template v-slot:content>{{$t('Найдите и выберите нужный вам документ')}}</template>
        </advantage-item>
      <advantage-item >
        <template v-slot:icon><svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.25 10.8334H11C9.54131 10.8334 8.14236 11.4041 7.11091 12.4199C6.07946 13.4357 5.5 14.8135 5.5 16.25V54.1667C5.5 55.6033 6.07946 56.981 7.11091 57.9969C8.14236 59.0127 9.54131 59.5834 11 59.5834H49.5C50.9587 59.5834 52.3576 59.0127 53.3891 57.9969C54.4205 56.981 55 55.6033 55 54.1667V35.2084" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M50.875 6.77088C51.969 5.69344 53.4528 5.08813 55 5.08813C56.5472 5.08813 58.031 5.69344 59.125 6.77088C60.219 7.84832 60.8336 9.30964 60.8336 10.8334C60.8336 12.3571 60.219 13.8184 59.125 14.8959L33 40.625L22 43.3334L24.75 32.5L50.875 6.77088Z" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </template>
        <template v-slot:header>{{$t('Заполните документ')}}</template>
        <template v-slot:content>{{$t('Найдите и выберите нужный вам документ')}}</template>
      </advantage-item>
      <advantage-item >
        <template v-slot:icon><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.9166 5.41663H16.25C14.8134 5.41663 13.4356 5.98731 12.4198 7.00313C11.404 8.01895 10.8333 9.3967 10.8333 10.8333V54.1666C10.8333 55.6032 11.404 56.981 12.4198 57.9968C13.4356 59.0126 14.8134 59.5833 16.25 59.5833H48.75C50.1866 59.5833 51.5643 59.0126 52.5801 57.9968C53.596 56.981 54.1666 55.6032 54.1666 54.1666V21.6666L37.9166 5.41663Z" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M37.9167 5.41663V21.6666H54.1667" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M43.3334 35.2084H21.6667" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M43.3334 46.0416H21.6667" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M27.0834 24.375H24.375H21.6667" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        </template>
        <template v-slot:header>{{$t('Скачайте')}}</template>
        <template v-slot:content>{{$t('Загрузите документ в той форме, которую вы предпочитаете')}}</template>
      </advantage-item>
    </div>
  </div>
</template>

<script>
import AdvantageItem from "./advantageItem.vue";
export default {
  name: "vAdvantages",
  components: {AdvantageItem}
}
</script>

<style scoped>

</style>