<template>
  <div class="flex justify-between  items-center border-filter_gray border-opacity-30 border-b ">
    <div class="flex flex-col  w-11/12  border-spacing-x-10	 ">
      <div class="font-medium cursor-pointer flex justify-between">
        <div class="flex gap-x-2  items-center hover:text-link transition-all duration-300"
             @click="$emit('showEdit', item)">
          <p class="">{{ index }}</p>
          <p class="">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="flex gap-x-4 max-sm:text-sm max-sm:flex  my-2 gap-y-2 ">
      <div @click="$emit('showEdit', item )"
           class="text-white bg-[#007bff] hover:bg-[#0069d9] hover:border-[#0062cc] transition-all duration-300 cursor-pointer rounded-md py-2 px-2">
        <svg width="25px" height="25px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff"
                d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"/>
          <path fill="#fff"
                d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"/>
        </svg>
      </div>
      <div @click=" $emit('deleteList', item) "
           class="text-white bg-danger cursor-pointer rounded-md py-2 px-2">
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12V17" stroke-width="1.2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 12V17" stroke-width="1.2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4 7H20" stroke-width="1.2" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke-width="1.2"
                stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="1.2" stroke="#fff"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "template_item",
  props: {
    item: Object,
    index: Number
  },
  methods:{
  },
}
</script>

<style scoped>

</style>