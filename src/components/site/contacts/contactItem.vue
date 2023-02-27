<template>
  <div class="contact-block w-6/12 max-md:w-full max-lg:mt-10 max-lg:first:mt-0 bg-white flex gap-x-4 shadow-lg p-4">
        <div>
          <slot name="contactSvg"></slot>
        </div>
        <div class="">
          <h3 class="text-lg font-bold pb-4"><slot name="contactTitle"></slot></h3>
          <p class="text-[#827c7e] text-sm"><slot name="contactInfo"></slot></p>
        </div>
      </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>