<template>
  <div class="bg-footer_bg py-10">
    <div class="_container flex justify-between flex-wrap">
      <div class="flex flex-col gap-y-5 max-w-[250px]">
        <div class="">
          <img src="/ejudiciary2.svg" alt="" class="w-[150px] h-[50px]">
        </div>
        <pre class="text-gray text-2xl">{{
            $t(`E-Judiciary
Электронная судебная система, предназначенная
для облегчения решений юридических вопросов.`)
          }}</pre>
      </div>
      <div class="flex flex-wrap gap-y-5 gap-x-10">
        <div class="">
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