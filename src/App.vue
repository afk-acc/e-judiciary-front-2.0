<script >
export default {
  mounted() {
    if (!localStorage.getItem('locale'))
      localStorage.setItem('locale', 'ru')
  },
}

</script>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style >
._container{
  max-width: 1190px;
  margin:0 auto;
  width: 100%;
}


* {
  scrollbar-width: thin;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 3px;
}

*::-webkit-scrollbar-track {
  background: #fff;
}

*::-webkit-scrollbar-thumb {
  background-color: #2556B5;
  border-radius: 2px;
}
</style>
