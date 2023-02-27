<template>
<div class="text-white pt-[170px] pb-[270px]   relative text-center overflow-hidden before:absolute before:-z-10 before:left-0 before:top-[-17%] before:w-full before:h-full  before:-skew-y-[2.5deg] before:h-full before:bg-primary">
  <div class="_container mt-10">
    <div>
      <h1 class="text-4xl uppercase font-bold">{{$t('Новости')}}</h1>
    </div>
  </div>
</div>
<div class="_container mb-10">
  <v-button class="text-2xl" @click="openModal = !openModal">{{$t('Добавить')}}</v-button>
  <v-modal v-if="openModal" @showModal="openModal = !openModal">
    <div class="text-center">
      <h1 class="text-2xl">Добавить новость</h1>
      <div class="flex my-10">
        <div class="pr-6">
          <p>Заглавная:</p>
          <input type="text">
        </div>
        <div>
          <p>Заглавная:</p>
          <input type="text">
        </div>
      </div>
      <div class="flex">
        <div class="pr-6">
          <p>Заглавная:</p>
          <input type="text">
        </div>
        <div>
          <p>Заглавная:</p>
          <input type="text">
        </div>
      </div>

    </div>
  </v-modal>
  <blog-item route="main"></blog-item>
  <blog-item route="sign-in"></blog-item>
  <blog-item></blog-item>
  <blog-item></blog-item>
  <blog-item></blog-item>
</div>

</template>

<script>
import blogItem from "../../components/site/blog/blogItem.vue";
import VButton from "../../components/UI/vButton.vue";
import VModal from "../../components/UI/vModal.vue";
export default {
  components: {
    VModal,
    VButton,
    blogItem
  },
  data() {
    return {
      openModal: false
    }
  },
  methods: {
    addToNews() {

    }
  }
}
</script>

<style scoped>

</style>