<template>
  <div class="flex gap-x-1 justify-around items-center border-b border-border_c px-4 py-2 ">
    <div class="py-5">
      {{ num + '.' }}
    </div>
    <div  class="w-3/12 max-md:w-2/12 break-all text-start text-link cursor-pointer">{{
        item.user_info.name
      }}
    </div>
    <div class=""><img :src="item.user_info.image" alt="" class="w-[90px] h-[90px] rounded-full object-cover"></div>
    <div class="text-link cursor-pointer w-2/12 text-center">{{ item.user_info.education_place || '- ' }}</div>
    <div class="text-link cursor-pointer" @click="$emit('showModal', item)">{{ $t('Подробно') }}</div>
  </div>
</template>

<script>
export default {
  name: "requestItem",
  props: {
    item: Object,
    num: Number
  },
  
}
</script>

<style scoped>

</style>