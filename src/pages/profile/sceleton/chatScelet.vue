<template>
  <div class="flex cursor-pointer relative w-full p-4 gap-x-2">
    <div class="">
      <animatedPlaceholder width="48px" height="48px" borderRadius="50%"></animatedPlaceholder>
    </div>
    <div class=" w-full">
      <animatedPlaceholder width="60px" height="10px"></animatedPlaceholder>
      <animatedPlaceholder class="mt-4" width="full" height="12px"></animatedPlaceholder>
    </div>
  </div>
</template>

<script>
import animatedPlaceholder from '../../../components/UI/animatedPlaceholder.vue';
export default {
  components: {
    animatedPlaceholder,
  },
  
};
</script>

<style lang="scss" scoped></style>
