<template>
  <div class="flex gap-x-1 justify-around items-center border-b border-border_c px-4 py-2 ">
    <div class="py-5">
      {{ num + '.' }}
    </div>
    <div  class="w-3/12 max-md:w-2/12 break-all text-start text-link cursor-pointer">{{
        item.user_info.name
      }}
    </div>
    <div class=""><img :src="get_server_domain+item.user_info.image" alt="" class="w-[90px] h-[90px] rounded-full object-cover"></div>
    <div class="text-link cursor-pointer w-2/12 text-center">{{ item.user_info.education_place === 'null'?'- ':item.user_info.education_place }}</div>
    <div class="text-primary font-bold cursor-pointer" @click="change_request_lawyer({user_id:item.user_info.id, value:1})">{{ $t("Принять") }}</div>
    <div class="text-danger font-medium cursor-pointer" @click="change_request_lawyer({user_id:item.user_info.id, value:0})">{{ $t("Отклонить") }}</div>
    <div class="text-link cursor-pointer" @click="$emit('showModal', item)">{{ $t('Подробно') }}</div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: "requestItem",
  props: {
    item: Object,
    num: Number
  },
  methods: {
    ...mapActions(['change_request_lawyer'])
  },
  computed:{
    ...mapGetters(['get_server_domain'])
  },
}
</script>

<style scoped>

</style>