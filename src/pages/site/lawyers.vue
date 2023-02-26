<template>
  <div class="_container ">
    <div class="text-black  text-3xl pt-16 text-center font-bold uppercase">{{$t('Наша команда юристов')}}</div>
    <div class="text-center max-lg:px-10 max-md:text-base font-medium mb-5 text-black text-2xl">{{$t('Наша команда высококвалифицированных специалистов в сфере юридических консультаций готова помочь в решении ваших вопросов.Оставьте обращение, и мы ответим вам в скорейшее время.')}}</div>
    <div class="flex flex-wrap max-lg:px-10 max-lg:justify-center  w-full justify-between  gap-y-5">
      <lawyer-item class="max-w-[500px] w-full" v-for="(item,index) in get_lawyer_list.data" :key="index" :item="item"/>
    </div>
    <div class="flex gap-x-[1px] justify-center flex-wrap my-10 " v-if="get_lawyer_list?.data?.length > 0">
      <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
           v-for="item in get_lawyer_list?.meta?.links"
           :class="{'bg-primary text-white rounded-full ':item.active}">
        {{ $t(item.label) }}
      </div>
    </div>
    <div class="text-center font-bold text-2xl" v-else>
      {{$t('Ничего не найдено')}}
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import LawyerItem from "../../components/site/lawyers/lawyerItem.vue";

export default {
  name: "lawyers",
  components: {LawyerItem},

  data() {
    return {
      params: {
        page: 1,
        limit: 15
      }
    }
  },
  computed: {
    ...mapGetters(['get_lawyer_list']),
  },
  methods: {
    ...mapActions(['load_lawyer_list']),
    loadPage(page) {
      console.log(page)
      if (page === '<') {
        if (Number(this.params.page) > 1) {
          this.params.page -= 1;
        }
      } else if (page === '>') {
        if (Number(this.params.page) < this.get_lawyer_list.meta.last_page) {
          this.params.page = Number(this.params.page) + 1
        }
      } else {
        if (Number(page) <= this.get_lawyer_list.meta.last_page) {
          this.params.page = Number(page)
        }
      }
      this.$router.push({name: 'lawyers', params: {page: this.params.page}})
    }

  },
  mounted() {
    this.params.page = this.$route.params.page
    this.load_lawyer_list(this.params)
  },
  watch:{
    $route(to, from){
      this.params.page = to.params.page
      this.load_lawyer_list(this.params)
    }
  }
}
</script>

<style scoped>

</style>