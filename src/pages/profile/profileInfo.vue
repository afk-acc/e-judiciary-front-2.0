<template>
  <div class="w-full max-lg:mt-16">
    <div class="flex gap-x-4 my-2">
      <h1 class="text-link font-bold text-2xl">{{ $t("Основная информация") }}</h1>
      <button v-if="getCurrentUser.role_name === 'user' " @click="send_request_lawyer(getCurrentUser.id)" class="text-white bg-primary_gr py-2 px-4 rounded-xl ">{{$t("Стать юристом")}}</button>
    </div>

    <div v-if="item = getCurrentUser.id" class="w-full mx-auto max-md:flex max-md:flex-col">
      <profile-info-item :item="getCurrentUser.name" :label="$t('ФИО')" />
      <profile-info-item :item="$t('Ташкент')" :label="$t('Узбекистан')" />
      <profile-info-item :item="getCurrentUser.phone" :label="$t('Телефон')" />
    </div>
    <div v-else>
      <profileInfoScelet></profileInfoScelet>
    </div>
  </div>
</template>

<script>
import ProfileInfoItem from "../../components/profile/profileInfoItem.vue";
import {mapActions, mapGetters} from "vuex";
import profileInfoScelet from "./sceleton/profileInfoScelet.vue";

export default {
  components: { ProfileInfoItem, profileInfoScelet },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  mounted() {},
  methods:{
    ...mapActions(['send_request_lawyer'])
  },
};
</script>

<style lang="scss" scoped></style>
