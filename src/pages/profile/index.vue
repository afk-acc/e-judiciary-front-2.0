<template>
  <div class="flex  max-lg:gap-x-0">
    <v-header-admin/>
    <div class="pt-[50px] w-full overflow-hidden">
      <div class="w-full ">
        <div class="px-2 py-0 h-screen " :class="{ 'py-2': this.$route.name !== 'reports'  }">
          <router-view />
        </div>
      </div>
    </div>
      
  </div>  
</template>

<script>
import VFooter from "../../components/site/vFooter.vue";
import vHeaderAdmin from '../../components/site/vHeaderAdmin.vue'
import VInfo from "../../components/site/index/vInfo.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
    };
  },
  name: "index",
  components: { VInfo, vHeaderAdmin, VFooter },
  methods: {
    ...mapActions(["loadCurrentUser", "add_new_appeal"]),
  },
  computed: {
    ...mapGetters(["getCurrentUser", "get_send_appeal"]),
  },

 
};
</script>

<style scoped></style>
