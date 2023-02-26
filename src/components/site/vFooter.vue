<template>
  <div class="bg-footer_bg py-10 max-lg:px-4">
    <div class="_container flex justify-between max-lg:text-center max-lg:justify-center flex-wrap">
      <div class="flex flex-col gap-y-5  justify-center">
        <div class="max-lg:mx-auto max-lg:pl-16">
          <img src="/ejudiciary2.svg" alt="" class="">
        </div>
        <pre class="text-gray max-lg:hidden text-2xl ">{{
            $t(`E-Judiciary
Электронная судебная система, предназначенная
для облегчения решений юридических вопросов.`)
          }}</pre>
        <h3 class="text-gray max-lg:w-8/12 max-lg:font-bold max-lg:mx-auto hidden max-lg:block text-2xl max-lg:text-xl max-md:text-lg w-full">{{
            $t(`E-Judiciary
Электронная судебная система, предназначенная
для облегчения решений юридических вопросов.`)
          }}</h3>

      </div>
      <div class="flex flex-wrap gap-y-5 gap-x-10">
        <div class=" max-lg:my-10">
          <p class="text-primary font-bold text-2xl cursor-pointer"> {{ $t('Навигация по системе') }}</p>
          <ul class="text-gray text-xl flex flex-col gap-y-3 mt-3">
            <router-link :to="{name:'service', params:{page:1}}" class="cursor-pointer">{{
                $t('Создание обращения')
              }}
            </router-link>
            <router-link :to="{name:'info'}" class="cursor-pointer" v-if="login()">{{ $t('Личный кабинет') }}</router-link>
            <router-link :to="{name:'sign-in'}" class="cursor-pointer" v-else>{{ $t('Личный кабинет') }}</router-link>
            <router-link :to="{name:'service', params:{page:1}}" class="cursor-pointer">{{ $t('Услуги') }}</router-link>
          </ul>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "vFooter",
  methods:{
    login(){
      return localStorage.getItem('token')?.length > 1
    }
  }
}
</script>

<style scoped>

</style>