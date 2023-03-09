<template>
  <div
      class="text-white pt-[170px] pb-[270px] relative text-center overflow-hidden before:absolute before:-z-10 before:left-0 before:top-[-17%] before:w-full before:-skew-y-[2.5deg] before:h-full before:bg-bg-one before:bg-left max-lg:before:bg-bottom before:bg-no-repeat before:bg-cover">
    <div>
      <h1 class="text-4xl uppercase font-bold">{{ $t('Часто задаваемые вопросы') }}</h1>
    </div>
  </div>

  <div class="_container px-10 max-sm:px-4 flex flex-wrap justify-center gap-5 grid-cols-2  grid">
    <FaqItem v-for="(item, index) in list" :key="index" :item="item"/>
  </div>
</template>

<script>
import FaqItem from '../../components/site/faq/faqItem.vue';
import axios from "../../axios/index.js";

export default {
  component: {FaqItem},
  data() {
    return {
      list: []
    }
  },
  computed: {},
  components: {FaqItem},
  methods: {},
  mounted() {
    axios.get(`get-site-faq?limit=1000`).then(res => {
      this.list = res.data.data
    })
  }
};
</script>

<style lang="scss" scoped></style>
