<template>
  <div class="flex mb-10 opacity-90">
    <div class="w-full flex mx-auto">
      <div class="w-full flex gap-x-10 max-md:flex-col max-md:items-center max-md:gap-y-5 mt-6">
        <animatedPlaceholder borderRadius="100%" height="91px" width="91px"></animatedPlaceholder>
        <animatedPlaceholder height="100px" width="250px"></animatedPlaceholder>
      </div>
    </div>
  </div>
</template>

<script>
import animatedPlaceholder from "../../../components/UI/animatedPlaceholder.vue";
export default {
  components: {
    animatedPlaceholder,
  },
};
</script>

<style lang="scss" scoped></style>
