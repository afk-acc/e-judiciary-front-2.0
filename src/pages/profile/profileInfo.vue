<template>
  <div class="w-full">
    <h1 class="text-link font-bold text-2xl">{{ $t('Основная информация') }}</h1>
    <div class="w-full">
      <profile-info-item :item="getCurrentUser.name" :label="$t('ФИО')" />
      <profile-info-item item="Ташкент" :label="$t('Узбекистан')" />
      <profile-info-item :item="getCurrentUser.phone" :label="$t('Телефон')" />
    </div>
  </div>
</template>

<script>
import ProfileInfoItem from "../../components/profile/profileInfoItem.vue";
import {mapGetters} from "vuex";

export default {
  components: {ProfileInfoItem},
  computed: {
    ...mapGetters(['getCurrentUser'])
  },
  mounted() {
  }


}
</script>

<style lang="scss" scoped>

</style>