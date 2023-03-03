<template>
  <div class="w-full max-lg:mt-16 opacity-60">
    <div class="w-full mx-auto max-md:flex max-md:flex-col">
      <div class="flex max-sm:flex-col max-sm:items-center w-full text-brown_t font-bold table_item">
        <div class="w-3/12 border-r max-sm:border-r-0 border-[#E7E7E7] p-3 max-sm:w-full max-sm:text-center">
          <animatedPlaceholder></animatedPlaceholder>
        </div>
        <div class="w-9/12 p-3 max-lg:w-full max-lg:text-end max-sm:text-center max-sm:border-b">
          <animatedPlaceholder></animatedPlaceholder>
        </div>
      </div>
      <div class="flex max-sm:flex-col max-sm:items-center w-full text-brown_t font-bold table_item">
        <div class="w-3/12 border-r max-sm:border-r-0 border-[#E7E7E7] p-3 max-sm:w-full max-sm:text-center">
          <animatedPlaceholder></animatedPlaceholder>
        </div>
        <div class="w-9/12 p-3 max-lg:w-full max-lg:text-end max-sm:text-center max-sm:border-b">
          <animatedPlaceholder></animatedPlaceholder>
        </div>
      </div>
      <div class="flex max-sm:flex-col max-sm:items-center w-full text-brown_t font-bold table_item">
        <div class="w-3/12 border-r max-sm:border-r-0 border-[#E7E7E7] p-3 max-sm:w-full max-sm:text-center">
          <animatedPlaceholder></animatedPlaceholder>
        </div>
        <div class="w-9/12 p-3 max-lg:w-full max-lg:text-end max-sm:text-center max-sm:border-b">
          <animatedPlaceholder></animatedPlaceholder>
        </div>
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
