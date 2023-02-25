<template>
  <ul class="w-full">
    <router-link class="w-full" :to="{name: route, params: params}"
                 :class="{'active-block block ' : this.$route.name === route}">
      <li class="py-4 px-8 text-xl cursor-pointer border-b border-gray">
        <slot ></slot>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: {route:String, params: Object}
}
</script>

<style lang="scss" scoped>
.active-block {
  color: #fff;
  background-color: #1D438C;
}
</style>