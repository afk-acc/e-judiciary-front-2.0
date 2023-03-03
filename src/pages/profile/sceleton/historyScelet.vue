<template>
  <div class="history-item flex w-full h-full mx-5 opacity-60 mb-10">
    <div class="history-icon w-2/12">
      <animatedPlaceholder width="50px" height="50px" borderRadius="100%"></animatedPlaceholder>
    </div>
    <div class="history-text w-8/12 flex justify-between">
      <div class="history-left flex flex-col gap-y-4" >
      <animatedPlaceholder borderRadius="5%" width="50px" height="15px"></animatedPlaceholder>
      <animatedPlaceholder  width="400px" height="20px"></animatedPlaceholder>
      </div>
      <div class="history-date w-2/12 flex gap-x-2 items-center">
      <animatedPlaceholder borderRadius="20%" width="30px" height="30px"></animatedPlaceholder>
      <animatedPlaceholder width="50px" height="10px"></animatedPlaceholder>
      </div>
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
