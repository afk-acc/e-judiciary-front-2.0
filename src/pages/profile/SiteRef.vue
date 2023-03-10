<template>
  <div class="">
    <div class="flex justify-between items-center">
      <div class="font-bold text-primary text-xl py-4">
        {{ $t('Дополнительные ссылки на сайте') }}
      </div>
      <div class="" @click="show_add=true">добавить</div>
    </div>

    <div v-if="get_site_ref_list?.data?.length > 0">
      <div class="flex flex-col gap-y-2">
        <div class="border-b cursor-pointer flex justify-between"
             v-for="(item, i) in
        get_site_ref_list.data">
          <div class="" @click="show=true;current={...item};index=i">
            {{ item.name }}
          </div>
          <div class="" v-if="can(getCurrentUser, 'site_ref.delete')">
            <button @click="remove_site_ref({id:item.id, page:$route.params.page})">Удалить</button>
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
        <div class="">
          <v-input :required="true" v-model:model-value="current.name_ru" :label="$t('Название')"/>
          <v-input :required="true" v-model:model-value="current.name_uz_l" :label="$t('Nomi')"/>
          <v-input :required="true" v-model:model-value="current.name_uz_c" :label="$t('Номи')"/>
          <v-input :required="true" v-model:model-value="current.ref" :label="$t('Ссылка')"/>
        </div>
        <div class="flex justify-center gap-x-4">
          <button @click="show=false; current = {}">{{ $t("Отменить") }}</button>
          <button type="submit">{{ $t("Сохранить") }}</button>
        </div>
      </form>

    </v-modal>
    <v-modal v-if="show_add" @showModal="show_add=false;">

      <form action=""
            @submit.prevent="create_site_ref({site_ref:new_ref, page:$route.params.page});show_add=false;faq={}">
        <div class="font-bold text-primary text-center">{{ $t("Добавить ссылку на сайт") }}</div>
        <div class="">
          <v-input :required="true" v-model:model-value="new_ref.name_ru" :label="$t('Название')"/>
          <v-input :required="true" v-model:model-value="new_ref.name_uz_l" :label="$t('Nomi')"/>
          <v-input :required="true" v-model:model-value="new_ref.name_uz_c" :label="$t('Номи')"/>
          <v-input :required="true" v-model:model-value="new_ref.ref" :label="$t('Ссылка')"/>
        </div>
        <div class="flex justify-center gap-x-4">
          <button @click="show_add=false;">{{ $t("Отменить") }}</button>
          <button type="submit">{{ $t("Добавить") }}</button>
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

</style>