<template>
  <div class="">
    <div class="py-4 pr-3 flex justify-between text-sm items-center border-b border-border_c" @click="isActive = !isActive">
      <p> {{ item.title }}</p>
      <div :class="{'rotate-0':!isActive, '-rotate-90':isActive}" class="transition-all duration-300">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#586069" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

    </div>
    <div class=" transition-all duration-300 overflow-y-scroll h-full" :class="{'max-h-screen border-l border-primary':isActive, 'max-h-0':!isActive}">

      <div class="pt-5  text-sm pb-4 border-b border-border_c" :class="{'active-left':activeItem === index}" v-for="(doc, index) in item.document_list" :key="index" @click="activeItem = index">
        <router-link  :to="{name:'constructor', params:{name:doc.id}}" class="pl-5 block">
          {{ doc.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdownItem",
  data(){
    return {
      isActive:false,
      activeItem:-1

    }
  },
  props: {
    item: Object
  }
  
}
</script>

<style >
.active-left{
  position: relative;

}
.active-left::after{
  content: "";
  left:0;
  top: 0;
  width: 8px;
  height: 100%;
  background: #2556B5;
  position: absolute;
}
</style>