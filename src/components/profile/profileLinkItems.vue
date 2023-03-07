<template>
  <ul class="w-full">
    <router-link
      class="w-full"
      :to="{ name: route, params: params }"
      :class="{ 'active-block block ': this.$route.name === route }"
    >
      <li class="py-[6px] text-sm my-2 pl-10 hover:pl-12 transition-all ease-in hover:bg-white hover:text-primary px-6 cursor-pointer rounded-md">
        <slot></slot>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: { route: String, params: Object },
};
</script>

<style lang="scss" scoped>
.active-block {
  color: #fff;
  background-color: #1d438c;
}
</style>
