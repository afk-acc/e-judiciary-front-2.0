<template>
  <div>
    <div v-if="get_doc_type_list.data">
    <dropdown-item :item="item" v-for="(item, index) in get_doc_type_list.data" :key="index"/>
     </div>
    <ServiceLeftPanel v-else></ServiceLeftPanel>
  </div>
</template>

<script>
import DropdownItem from "./dropdownItem.vue";
import ServiceLeftPanel from "../../../pages/site/sceleton/ServiceLeftPanel.vue"

import {mapActions, mapGetters} from  'vuex'
export default {
  name: "vDropdown",
  components: { DropdownItem ,ServiceLeftPanel},
  computed: {
    ...mapGetters(['get_doc_type_list']),
  },
  methods:{
    ...mapActions(['load_doc_type_list'])
  },
  mounted() {
    
    this.load_doc_type_list({page:1, limit:1000})
  },
  watch:{
   
  }
 
}
</script>

<style scoped>

</style>