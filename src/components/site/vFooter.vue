<template>
  <div class="bg-footer_bg py-10 max-lg:px-4">
    <div class="_container flex justify-between max-lg:text-center max-lg:justify-center ">
      <div class="flex flex-col gap-y-5  justify-center">
        <div class="max-lg:mx-auto max-lg:pl-16">
          <img src="/ejudiciary2.svg" alt="" class="">
        </div>

        <h3 class="text-gray max-lg:w-8/12 max-lg:font-bold max-lg:mx-auto w-[400px] max-lg:block text-2xl max-lg:text-xl max-md:text-lg ">
          {{
            $t(`E-Judiciary
Электронная судебная система, предназначенная
для облегчения решений юридических вопросов.`)
          }}</h3>

      </div>
      <div class="flex flex-wrap gap-y-5 gap-x-10">
        <div class=" max-lg:my-10 max-w-[150px]">
          <p class="text-primary font-bold  cursor-pointer"> {{ $t('Навигация по системе') }}</p>
          <ul class="text-gray  flex flex-col gap-y-3 mt-3">
            <router-link :to="{name:'service', params:{page:1}}" class="cursor-pointer">{{
                $t('Создание обращения')
              }}
            </router-link>
            <router-link :to="{name:'info'}" class="cursor-pointer" v-if="login()">{{
                $t('Личный кабинет')
              }}
            </router-link>
            <router-link :to="{name:'sign-in'}" class="cursor-pointer" v-else>{{ $t('Личный кабинет') }}</router-link>
            <router-link :to="{name:'service', params:{page:1}}" class="cursor-pointer">{{ $t('Услуги') }}</router-link>
          </ul>
        </div>
        <div class=" max-lg:my-10 max-w-[150px]">
          <p class="text-primary font-bold  cursor-pointer"> {{ $t('Навигация по системе') }}</p>
          <ul class="text-gray  flex flex-col gap-y-3 mt-3">
            <router-link :to="{name:'service', params:{page:1}}" class="cursor-pointer">{{
                $t('Создание обращения')
              }}
            </router-link>
            <router-link :to="{name:'info'}" class="cursor-pointer" v-if="login()">{{
                $t('Личный кабинет')
              }}
            </router-link>
            <router-link :to="{name:'sign-in'}" class="cursor-pointer" v-else>{{ $t('Личный кабинет') }}</router-link>
            <router-link :to="{name:'service', params:{page:1}}" class="cursor-pointer">{{ $t('Услуги') }}</router-link>
          </ul>
        </div>
        <div class=" max-lg:my-10 max-w-[150px]">
          <p class="text-primary font-bold  cursor-pointer"> {{ $t('Навигация по системе') }}</p>
          <ul class="text-gray  flex flex-col gap-y-3 mt-3">
            <router-link :to="{name:'service', params:{page:1}}" class="cursor-pointer">{{
                $t('Создание обращения')
              }}
            </router-link>
            <router-link :to="{name:'info'}" class="cursor-pointer" v-if="login()">{{
                $t('Личный кабинет')
              }}
            </router-link>
            <router-link :to="{name:'sign-in'}" class="cursor-pointer" v-else>{{ $t('Личный кабинет') }}</router-link>
            <router-link :to="{name:'service', params:{page:1}}" class="cursor-pointer">{{ $t('Услуги') }}</router-link>
          </ul>
        </div>

        <div class=" max-lg:my-10 flex justify-center flex-col">
          <div class="relative">
            <input type="text" class="w-full py-2 px-4 rounded-xl" :placeholder="$t('Подписаться')">
            <div class="absolute -right-2 top-0">
              <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 19C0 8.50659 8.50659 0 19 0H20C30.4934 0 39 8.50659 39 19C39 29.4934 30.4934 38 20 38H19C8.50659 38 0 29.4934 0 19Z"
                    fill="#1B3D7E"/>
                <path d="M13 19L27 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20 12L27 19L20 26" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </div>

          </div>
          <p class="mt-2 font-bold  cursor-pointer font-medium text-[#71787E]"> {{ $t('Введите свой email:') }}</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "vFooter",
  methods: {
    login() {
      return localStorage.getItem('token')?.length > 1
    }
  }
}
</script>

<style scoped>

</style>