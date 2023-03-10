<template>
  <div class="btn rounded-[50px] hover:bg-[#0069d9] hover:border-[#0062cc] px-9 py-4 font-bold cursor-pointer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vButton"
}
</script>

<style>
.btn {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
</style>