<template>
  <div>
    <div
      @click="setActive()"
      class="border border-l_black_text relative max-w-[800px] my-4 py-4 px-7 cursor-pointer"
    >
      <div
        class="w-[10px] h-[10px] bg-l_black_text left-[-5px] top-1/2 absolute rounded-full -translate-y-1/2">
      </div>
      <p class=" text-l_black_text relative pb-2 border-b border-opacity-25 border-black">
        <span v-if="isActive">
        {{ item.question }}
        </span>
        <span v-else>
        {{ item.question.slice(0, 53) }}<span v-if="item.question.length > 53">...</span>
        </span>
        <span
          class="absolute -right-2 top-1/2 -translate-y-1/2 transition-all duration-300"
          :class="{ 'rotate-180': isActive }"><img src="" alt="" class="w-full"/>
          <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L11.7874 14.7874V14.7874C11.9048 14.9048 12.0952 14.9048 12.2126 14.7874V14.7874L18 9" stroke="#323232" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </p>
      <div
        class="overflow-hidden transition-all duration-500  mt-2"
        v-html="item.answer"
        :class="getClass()">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    setActive() {
      this.isActive = !this.isActive;
    },
    getClass() {
      if (this.isActive) return "max-h-screen";
      return "max-h-0";
    },
  },
};
</script>

<style lang="scss" scoped></style>
