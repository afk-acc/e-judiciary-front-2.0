<template>
 <div class="flex justify-between py-1 max-md:w-[600px] opacity-70 ">
    <div class="w-10/12">
     <animatedPlaceholder width="100px" height="15px"></animatedPlaceholder>
    </div>
    <div class="w-2/12">
    <animatedPlaceholder width="100px" height="15px"></animatedPlaceholder>
    </div>
    <div class="w-2/12">
    <animatedPlaceholder width="100px" height="15px"></animatedPlaceholder>
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
