<script>
import vPreloader from "./components/UI/vPreloader.vue";
export default {
  components: {
    vPreloader,
  },
  mounted() {
    if (!localStorage.getItem("locale")) localStorage.setItem("locale", "ru");
    setTimeout(() => {
      this.show = true
    }, 3000);
  },
  data() {
    return {
      show:false,
    }
  },
};
</script>
<template>
  <div id="app">
    <RouterView v-if="show">
    </RouterView>
    <vPreloader v-else></vPreloader>
    
  </div>
</template>

<style>
._container {
  max-width: 1190px;
  margin: 0 auto;
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
  background-color: #2556b5;
  border-radius: 2px;
}
</style>
