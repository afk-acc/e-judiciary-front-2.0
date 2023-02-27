<template>
  <form class="mt-6 text-sm w-9/12 mx-auto max-md:w-full">
    <input class="border border-opacity-20 border-primary w-full p-2 rounded-lg" type="text" name="" value="" :placeholder="$t('Имя')">
    <input class="border my-6 border-opacity-20 border-primary w-full p-2 rounded-lg" type="text" name="" value="" :placeholder="$t('Телефон')">
    <textarea class="border-opacity-20 h-[120px] border-primary border rounded-lg p-2 w-full resize-none"></textarea>
    <v-button>
      <div class="border-2 border-primary w-full text-center px-4 py-2 rounded-xl border-opacity-60"> Отправить </div>
    </v-button>
  </form>
</template>

<script>
  import vInput from '../../UI/vInput.vue';
  import vButton from '../../UI/vButton.vue'
  export default {
    components: {
      vInput,
      vButton
    }
  }
</script>

<style lang="scss" scoped>
  input,textarea { 
   outline: none;
   &:focus {
    border-color: #2c66d2;
    opacity: .7;
   }
  }
</style>