<template>
  <div class="">

    <div class="flex flex-wrap " :class="{'justify-end':isEnd}">
      <div class="flex items-center gap-x-5 pl-5 font-bold text-2xl " :class="{'w-full text-left':isEnd}"
      @click="open = !open">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5.5" cy="5.5" r="5.5" fill="white"/>
        </svg>
        {{ item.title }}
      </div>
      <ul class="flex flex-col gap-y-5 w-full mt-5 transition-all duration-400  "
        :class="{'max-md:max-h-0 max-md:overflow-hidden' : !open, 'max-md:max-h-screen ' : open}"
      >
        <router-link  :to="{name:'constructor', params:{name:child.id}}" v-for="child in item.document_list.slice(0,5)" class="flex items-center gap-x-4 font-medium cursor-pointer">
          <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="white"/>
          </svg>
          <span class="border-white border-b break-all" :class="{' text-left':isEnd}">
            {{ child.name }}
          </span>
        </router-link>
      </ul>
    </div>
    <div class="border-b border-dashed absolute w-full left-0 -mt-12" v-if="isEnd">


    </div>
  </div>

</template>

<script>
export default {
  name: "DocumentTemplateItem",
  props: {item: Object, isEnd: Boolean},
  data(){
    return {
      open: false
    }
  }
}
</script>

<style scoped>

</style>