<template>
  <form class=" text-sm my-10 w-9/12 mx-auto max-md:w-full " @submit.prevent="add">
    <input
        required
        v-model="appeal.title" class="border border-opacity-20 border-primary w-full p-2 rounded-lg" type="text"
           name="" :placeholder="$t('Заголовок')">
    <textarea v-model="appeal.description"
              required
              class=" my-4 border-opacity-20 h-[120px] border-primary border rounded-lg p-2 w-full resize-none"
              :placeholder="$t('Описание')"></textarea>
      <button type="submit" class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 cursor-pointer rounded-xl py-4 px-6 max-sm:w-full ">
        Отправить
      </button>
  </form>
</template>

<script>
import vInput from '../../UI/vInput.vue';
import vButton from '../../UI/vButton.vue'
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  components: {
    vInput,
    vButton
  },
  data() {
    return {
      appeal: {
        title: "",
        description: "",
      },
    }
  },
  methods: {
    ...mapActions(['add_new_appeal']),
    ...mapMutations(['update_send_appeal']),
    add() {
      if (localStorage.getItem('token')) {
        this.add_new_appeal({
          appeal: this.appeal
        })
      } else {
        this.$router.push({name: 'sign-in'})
        this.update_send_appeal({
          appeal: this.appeal
        });
      }
      this.appeal.title = ''
      this.appeal.description = ''
    }
  },
  computed: {},


}
</script>

<style lang="scss" scoped>
input, textarea {
  outline: none;

  &:focus {
    border-color: #2c66d2;
    opacity: .7;
  }
}
</style>