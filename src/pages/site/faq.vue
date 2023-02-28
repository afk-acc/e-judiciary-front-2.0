<template>
  <div class="text-white pt-[170px] pb-[270px] relative text-center overflow-hidden before:absolute before:-z-10 before:left-0 before:top-[-17%] before:w-full before:-skew-y-[2.5deg] before:h-full before:bg-bg-one before:bg-left max-lg:before:bg-bottom before:bg-no-repeat before:bg-cover">
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
export default {
    component: { FaqItem },
    computed: {
        list() {
            return [
                {
                    header: this.$t("Могу ли я создать петицию, даже если я не юрист?"),
                    content: this.$t("Вам не нужно быть юристом, чтобы использовать систему. Главное-знать, из какого вопроса исходит спор, и излагать свое требование исходя из него"),
                },
                {
                    header: this.$t("Как отправить обращение после его создания?"),
                    content: this.$t("<a href='https://my.sud.uz'>https://my.sud.uz</a>зайдя на сайт <a href='https://cabinet.sud.uz/sign-in'> https://cabinet.sud.uz/sign-in</a> его можно отправить в соответствующий суд через страницу"),
                },
                {
                    header: this.$t("Автоматически ли апелляция направляется в соответствующий суд после ее создания?"),
                    content: this.$t("Система создает обращение однако отправка обращения происходит в указанном выше порядке"),
                },
                {
                    header: this.$t("Как узнать, к какому суду относится мое дело?"),
                    content: this.$t("Для этого задайте вопрос: \"какой суд ? вам нужно будет выбрать страницу\"."),
                },
            ];
        },
    },
    components: { FaqItem }
};
</script>

<style lang="scss" scoped></style>
