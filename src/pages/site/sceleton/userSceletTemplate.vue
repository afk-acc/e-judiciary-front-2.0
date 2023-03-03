<template>
  <div class="flex items-center mb-10 opacity-90">
    <div class="w-1/12 mx-auto max-lg:mr-10">
      <animatedPlaceholder height="45px"  width="45px"/>
    </div>
    <div class="w-full ">
      <animatedPlaceholder height="full" width="full"></animatedPlaceholder>
    </div>
  </div>
</template>

<script >
import animatedPlaceholder from '../../../components/UI/animatedPlaceholder.vue';
export default {
  components: {
    animatedPlaceholder
  },
 
}

</script>

<style lang="scss" scoped>

</style>