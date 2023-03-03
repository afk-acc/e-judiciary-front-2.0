<template>
  <div class="flex w-10/12 mx-auto mb-8 opacity-60">
    <div class="flex max-sm:gap-x-10 w-full justify-between items-center ">
      <div class="cursor-pointer w-5/12">
        <animatedPlaceholder width="150px" height="20px"></animatedPlaceholder>
      </div>
      <div class="cursor-pointer w-4/12">
        <animatedPlaceholder borderRadius="100%" width="100px" height="100px"></animatedPlaceholder>
      </div>
      <div class="cursor-pointer w-2/12">
        <animatedPlaceholder width="100px" height="20px"></animatedPlaceholder>
      </div>
      <div class="cursor-pointer w-2/12">
        <animatedPlaceholder width="100px" height="20px"></animatedPlaceholder>
      </div>
    </div>
  </div>
</template>

<script>
import animatedPlaceholder from '../../../components/UI/animatedPlaceholder.vue'
export default {
  components: {
    animatedPlaceholder,
  },
  props: {
    item: Object,
    num: Number
  },
};
</script>

<style lang="scss" scoped></style>
