<template>
  <ul class="w-full">
    <router-link
      class="w-full"
      :to="{ name: route, params: params }"
      :class="{ 'active-block block ': this.$route.name === route }"
    >
      <li class="py-4 px-8 cursor-pointer border-b border-opacity-20 border-filter_gray">
        <slot></slot>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: { route: String, params: Object },
  async setup() {
    const getMovie = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
    };
    await getMovie();
  },
};
</script>

<style lang="scss" scoped>
.active-block {
  color: #fff;
  background-color: #1d438c;
}
</style>
