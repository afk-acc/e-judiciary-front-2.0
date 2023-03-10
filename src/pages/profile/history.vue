<template>
  <div class="max-lg:mt-20 z-50 max-md:w-full">
    <v-history-search v-model="params" :params="params"></v-history-search>
    <div class="bg-white h-[500px] overflow-y-scroll max-lg:overflow-x-scroll rounded-[24px] z-0">
      <div v-if="getCurrentHistory.data" class="history-items relative z-0 max-lg:w-[720px]">
        <v-history-line class="top-0 left-[47px]" />
        <v-history-content
          v-for="(elem, index) in getCurrentHistory.data"
          :elem="elem"
          :key="index"
        />
      </div>
      <div v-else>
        <historyScelet></historyScelet>
        <historyScelet></historyScelet>
        <historyScelet></historyScelet>
        <historyScelet></historyScelet>
      </div>
    </div>
    <div
      class="flex gap-x-[1px] flex-wrap mb-10 mt-5"
      v-if="getCurrentHistory?.data?.length > 0"
    >
      <div
        class="px-4 py-2 cursor-pointer"
        @click="loadPage($t(item.label))"
        v-for="item in getCurrentHistory?.meta?.links"
        :class="{ 'bg-primary text-white rounded-full ': item.active }"
      >
        {{ $t(item.label) }}
      </div>
    </div>
    <div class="text-center font-bold text-2xl" v-else-if="getCurrentHistory.data">
      {{ $t("Ничего не найдено") }}
    </div>
  </div>
</template>
<script>
import vHistorySearch from "../../components/profile/history/vHistorySearch.vue";
import vHistoryContent from "../../components/profile/history/vHistoryContent.vue";
import vHistoryLine from "../../components/profile/history/vHistoryLine.vue";

import { mapActions, mapGetters } from "vuex";
import { canAccess } from "../../assets/functions.js";
import historyScelet from "./sceleton/historyScelet.vue";

export default {
  name: "history-item",

  components: {
    vHistorySearch,
    vHistoryContent,
    vHistoryLine,
    historyScelet
},
  data() {
    return {
      loadBack: false,
      loadNext: true,
      params: {
        limit: 7,
        locale: localStorage.getItem("locale"),
        query: "",
        sort: "desc",
        date: "",
        category: "all",
      },
    };
  },
  computed: {
    ...mapGetters(["getCurrentHistory", "getCurrentUser"]),
  },
  methods: {
    ...mapActions(["loadHistoryLists"]),
    can(user, item) {
      if (user.permissions) {
        return canAccess(user, item);
      }
      return false;
    },
    loadPage(page) {
      if (page === "<") {
        if (Number(this.params.page) > 1) {
          this.params.page -= 1;
        }
      } else if (page === ">") {
        if (Number(this.params.page) < this.getCurrentHistory.meta.last_page) {
          this.params.page = Number(this.params.page) + 1;
        }
      } else {
        if (Number(page) <= this.getCurrentHistory.meta.last_page) {
          this.params.page = Number(page);
        }
      }
      this.$router.push({ name: "history", params: { page: this.params.page } });
    },
  },
  mounted() {
    this.params.page = this.$route.params.page;
    this.loadBack = Number(this.params.page) > 1;
    if (this.getCurrentUser.id) {
      if (!canAccess(this.getCurrentUser, "logs.read")) {
        this.$router.go(-1);
      }
      this.loadHistoryLists(this.params);
    }
  },
  watch: {
    getCurrentUser(val) {
      if (val.id) {
        if (!canAccess(val, "logs.read")) {
          this.$router.go(-1);
        }
      }
      this.loadHistoryLists(this.params);
    },
    $route(to, from) {
      this.params.page = to.params.page;
      this.loadHistoryLists(this.params);
    },
  },
};
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from:nth-child(2n),
.list-leave-to:nth-child(2n) {
  opacity: 0;
  transform: translateX(-100%);
}

.list-enter-from:nth-child(2n + 1),
.list-leave-to:nth-child(2n + 1) {
  opacity: 0;
  transform: translateX(100%);
}

.list-move {
  transition: all 0.6s ease;
}

.list-move:nth-child(2n + 1),
.list-move:nth-child(2n + 1) {
  transition: all 0.6s linear;
  opacity: 0;
  transform: translateY(25%);
}

.list-move:nth-child(2n),
.list-move:nth-child(2n) {
  transition: all 0.6s linear;
  opacity: 0;
  transform: translateY(-25%);
}
</style>
