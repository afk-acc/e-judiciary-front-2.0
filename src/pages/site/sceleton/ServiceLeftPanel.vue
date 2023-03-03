<template>
    <div class="w-full mx-auto gap-y-6 mt-4 flex flex-col opacity-40">
      <animatedPlaceholder height="30px"  width="full"/>
      <animatedPlaceholder height="30px"  width="full"/>
      <animatedPlaceholder height="30px"  width="full"/>
      <animatedPlaceholder height="30px"  width="full"/>
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