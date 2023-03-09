<template>
  <div class="">
    <div class="flex justify-between items-center">
      <div class="font-bold text-primary text-xl py-4">
        Вопросы ответы
      </div>
      <div class="" @click="show_add=true">добавить</div>
    </div>

    <div v-if="get_faq_list?.data?.length > 0">
      <div class="flex flex-col gap-y-2">
        <div class="border-b cursor-pointer flex justify-between"
             v-for="(item, i) in
        get_faq_list.data">
          <div class="" @click="show=true;current={...item};index=i">
            {{ item.question }}
          </div>
          <div class="" v-if="can(getCurrentUser, 'faq.delete')">
            <button @click="remove_faq({id:item.id, page:$route.params.page})">Удалить</button>
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
    <div class="flex gap-x-[1px] flex-wrap my-10 " v-if="get_faq_list?.meta?.links?.length > 3">
      <div class="px-4 py-2 cursor-pointer" @click="loadPage($t(item.label))"
           v-for="item in get_faq_list?.meta?.links"
           :class="{'bg-primary text-white rounded-full ':item.active}">
        {{ $t(item.label) }}
      </div>
    </div>
    <div class="text-center font-bold text-2xl" v-else-if="get_faq_list?.data?.length === 0">
      {{ $t('Ничего не найдено') }}
    </div>
    <v-modal v-if="show" @showModal="show=false;">

      <form action="" @submit.prevent="update_faq({...current, page:$route.params.page});show=false;
      current={}">
        <div class="font-bold text-primary text-center">FAQ</div>
        <div class="">
          <v-input :required="true" v-model:model-value="current.question_ru" label="Вопрос"/>
          <v-input :required="true" v-model:model-value="current.question_uz_l" label="Savol"/>
          <v-input :required="true" v-model:model-value="current.question_uz_c" label="Савол"/>

          <v-input :required="true" v-model:model-value="current.answer_ru" label="Ответ"/>
          <v-input :required="true" v-model:model-value="current.answer_uz_l" label="Javob"/>
          <v-input :required="true" v-model:model-value="current.answer_uz_c" label="Жавоб"/>
        </div>
        <div class="flex justify-center gap-x-4">
          <button @click="show=false; current = {}">Отменить</button>
          <button type="submit">Сохранить</button>
        </div>
      </form>

    </v-modal>
    <v-modal v-if="show_add" @showModal="show_add=false;">

      <form action=""
            @submit.prevent="create_faq({faq:faq, page:$route.params.page});show_add=false;faq={}">
        <div class="font-bold text-primary text-center">FAQ</div>
        <div class="">
          <v-input :required="true" v-model:model-value="faq.question_ru" label="Вопрос"/>
          <v-input :required="true" v-model:model-value="faq.question_uz_l" label="Savol"/>
          <v-input :required="true" v-model:model-value="faq.question_uz_c" label="Савол"/>

          <v-input :required="true" v-model:model-value="faq.answer_ru" label="Ответ"/>
          <v-input :required="true" v-model:model-value="faq.answer_uz_l" label="Javob"/>
          <v-input :required="true" v-model:model-value="faq.answer_uz_c" label="Жавоб"/>
        </div>
        <div class="flex justify-center gap-x-4">
          <button @click="show_add=false;">Отменить</button>
          <button type="submit">Добавить</button>
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
      faq: {}
    }
  },
  computed: {
    ...mapGetters(['get_faq_list', 'getCurrentUser'])
  },
  methods: {
    ...mapActions(['load_faq_list', 'update_faq', 'remove_faq', 'create_faq']),

    loadPage(page) {
      if (page === '<') {
        if (Number(this.params.page) > 1) {
          this.params.page -= 1;
        }
      } else if (page === '>') {
        if (Number(this.params.page) < this.getUsersList.meta.last_page) {
          this.params.page = Number(this.params.page) + 1
        }
      } else {
        if (Number(page) <= this.getUsersList.meta.last_page) {
          this.params.page = Number(page)
        }
      }
      this.$router.push({name: 'users-list', params: {page: this.params.page}})
    },
    can(user, item) {
      return canAccess(user, item);
    },
  },
  mounted() {
    this.page = this.$route.params.page
    this.load_faq_list(this.page)
  },
  watch: {
    $route(to, from) {
      this.page = to.params.page
      this.load_faq_list(this.page)
    }
  }
}
</script>

<style scoped>

</style>