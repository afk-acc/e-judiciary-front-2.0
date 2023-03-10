<template>
  <div class="mx-6">
    <div class="flex justify-between items-center max-sm:flex-col mb-4 max-sm:mb-10 ">
      <div class="font-bold text-primary text-xl py-4 max-sm:text-center">
        {{ $t('Дополнительные ссылки на сайте') }}
      </div>
      <div class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 cursor-pointer rounded-xl py-2 px-2 max-sm:w-full max-sm:text-center" @click="show_add=true">{{ $t('Добавить') }}</div>
    </div>

    <div v-if="get_site_ref_list?.data?.length > 0">
      <div class="flex flex-col gap-y-2">
        <div class="cursor-pointer flex max-sm:flex-col max-sm:items-center justify-between"
             v-for="(item, i) in
        get_site_ref_list.data">
          <div class="border-b border-filter_gray border-opacity-30 w-full">
            {{ item.name }}
          </div>
          <div class="flex gap-x-2 max-sm:mt-2" v-if="can(getCurrentUser, 'site_ref.delete')">
            <button class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 cursor-pointer rounded-xl py-2 px-2" @click="show=true;current={...item};index=i">
              <svg data-v-f2b47a05="" width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path data-v-f2b47a05="" fill="#fff" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"></path><path data-v-f2b47a05="" fill="#fff" d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path></svg>
            </button>
            <button class="text-white bg-danger cursor-pointer rounded-xl py-2 px-2" @click="remove_site_ref({id:item.id, page:$route.params.page})">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-f2b47a05=""><path d="M10 12V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path><path d="M14 12V17" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path><path d="M4 7H20" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path><path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path><path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" data-v-f2b47a05=""></path></svg>
            </button>
           
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <UsersScelet/>
      <UsersScelet/>
      <UsersScelet/>
      <UsersScelet/>
      <UsersScelet/>
    </div>
    <div class="flex gap-x-[1px] flex-wrap my-10 " v-if="get_site_ref_list?.meta?.links?.length > 3">
      <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
           v-for="item in get_site_ref_list?.meta?.links"
           :class="{'bg-primary text-white rounded-full ':item.active}">
        {{ $t(item.label) }}
      </div>
    </div>
    <div class="text-center font-bold text-2xl" v-else-if="get_site_ref_list?.data?.length === 0">
      {{ $t('Ничего не найдено') }}
    </div>
    <v-modal v-if="show" @showModal="show=false;">
      <form action="" @submit.prevent="update_site_ref({...current, page:$route.params.page});show=false;
      current={}">
        <div class="font-bold text-primary text-center">{{ $t('Ссылки на сайте') }}</div>
        <div class="flex flex-col gap-y-4">
          <v-input :required="true" v-model:model-value="current.name_ru" :label="$t('Название')"/>
          <v-input :required="true" v-model:model-value="current.name_uz_l" :label="$t('Nomi')"/>
          <v-input :required="true" v-model:model-value="current.name_uz_c" :label="$t('Номи')"/>
          <v-input :required="true" v-model:model-value="current.ref" :label="$t('Ссылка')"/>
        </div>
        <div class="flex justify-center gap-x-4 mt-6">
          <button class="text-white bg-danger rounded-xl py-2 px-4" @click="show=false; current = {}">{{ $t("Отменить") }}</button>
          <button class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 rounded-xl py-2 px-4" type="submit">{{ $t("Сохранить") }}</button>
        </div>
      </form>

    </v-modal>
    <v-modal v-if="show_add" @showModal="show_add=false;">
      <form action=""
            @submit.prevent="create_site_ref({site_ref:new_ref, page:$route.params.page});show_add=false;faq={}">
        <div class="font-bold text-primary text-center">{{ $t("Добавить ссылку на сайт") }}</div>
        <div class="flex flex-col gap-y-4">
          <v-input :required="true" v-model:model-value="new_ref.name_ru" :label="$t('Название')"/>
          <v-input :required="true" v-model:model-value="new_ref.name_uz_l" :label="$t('Nomi')"/>
          <v-input :required="true" v-model:model-value="new_ref.name_uz_c" :label="$t('Номи')"/>
          <v-input :required="true" v-model:model-value="new_ref.ref" :label="$t('Ссылка')"/>
        </div>
        <div class="flex justify-center gap-x-4 mt-6">
          <button class="text-white bg-danger rounded-xl py-2 px-4" @click="show_add=false;">{{ $t("Отменить") }}</button>
          <button class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 rounded-xl py-2 px-4" type="submit">{{ $t("Добавить") }}</button>
        </div>
      </form>

    </v-modal>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import VModal from "../../components/UI/vModal.vue";
import VInput from "../../components/UI/vInput.vue";
import {canAccess} from "../../assets/functions.js";

export default {
  name: "FAQ",
  components: {VInput, VModal},
  data() {
    return {
      page: '',
      show: false,
      current: {},
      index: -1,
      show_add: false,
      new_ref: {}
    }
  },
  computed: {
    ...mapGetters(['get_site_ref_list', 'getCurrentUser'])
  },
  methods: {
    ...mapActions(['load_site_ref_list', 'update_site_ref', 'remove_site_ref', 'create_site_ref']),

    loadPage(page) {
      if (page === '<') {
        if (Number(this.page) > 1) {
          this.page -= 1;
        }
      } else if (page === '>') {
        if (Number(this.page) < this.get_site_ref_list.meta.last_page) {
          this.page = Number(this.page) + 1
        }
      } else {
        if (Number(page) <= this.get_site_ref_list.meta.last_page) {
          this.page = Number(page)
        }
      }
      this.$router.push({name: 'site_ref_list', params: {page: this.page}})
    },
    can(user, item) {
      return canAccess(user, item);
    },
  },
  mounted() {
    this.page = this.$route.params.page
    this.load_site_ref_list(this.page)
  },
  watch: {
    $route(to, from) {
      this.page = to.params.page
      this.load_site_ref_list(this.page)
    }
  }
}
</script>

<style scoped>
path{
  stroke: #fff
}
</style>