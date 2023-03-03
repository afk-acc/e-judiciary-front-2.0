<template>
  <div class="history-item flex justify-center w-full h-full mx-5 opacity-60 mb-10">
    <div class="history-text w-full flex justify-evenly">
      <div class="history-left flex flex-colml-10" >
      <animatedPlaceholder  width="100px" height="20px"></animatedPlaceholder>
      </div>
      <div class="history-left flex justify-between flex-col gap-y-4" >
      <animatedPlaceholder  width="100px" height="20px"></animatedPlaceholder>
      </div>
      <div class="history-left flex justify-between flex-col gap-y-4" >
      <animatedPlaceholder  width="100px" height="20px"></animatedPlaceholder>
      </div>
      <div class="history-left flex justify-between flex-col gap-y-4" >
      <animatedPlaceholder  width="100px" height="20px"></animatedPlaceholder>
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
