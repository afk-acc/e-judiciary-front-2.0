<template>
  <div class="flex gap-x-4 items-center max-md:gap-y-10 max-md:flex-col max-md:border-b max-md:pb-6 last:border-0 ">
    <div class="">
      <img :src="item.image" alt="" class="rounded-full shadow-2xl w-[91px] h-[91px] object-cover">
    </div>
    <div class="flex flex-col max-w-[400px] text-lawyer_name">
      <p class="font-bold ">{{ item.name }}</p>
      <p class="font-medium"><strong>{{$t('Кол-во отзывов')}}:</strong> {{item.feedback_count}}</p>
      <p class="font-medium"><strong>{{$t('Кол-во выполненых обращений')}}:</strong> {{item.appeals_count}}</p>
      <p><strong>{{$t("Рейтинг")}}:</strong>{{ item.rating || '-' }}</p>
      <p><strong>{{$t("Стаж")}}:</strong>{{ item.work_experience || '-' }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "lawyerItem",
  props: {
    item: Object
  },

}

</script>

<style scoped>

</style>