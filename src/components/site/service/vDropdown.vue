<template>
  <div class="">
    <dropdown-item :item="item" v-for="(item, index) in get_doc_type_list" :key="index"/>
  </div>
</template>

<script>
import DropdownItem from "./dropdownItem.vue";
import {mapActions, mapGetters} from  'vuex'
export default {
  name: "vDropdown",
  components: {DropdownItem},
  computed: {
    ...mapGetters(['get_doc_type_list']),
  },
  methods:{
    ...mapActions(['load_doc_type_list'])
  },
  mounted() {
    this.load_doc_type_list()
  }

}
</script>

<style scoped>

</style>