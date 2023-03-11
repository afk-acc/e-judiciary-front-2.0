<template>
  <div class="flex flex-col justify-center gap-y-6 items-center border-r  max-lg:border-none border-gray last:border-none px-5  ">
    <div class="text-8xl font-bold text-[#AAAFB8]">
      <number
          animationPaused
          ref="number"
          :from="0"
          :to="num"
          :format="theFormat"
          :duration="5"
          easing="Power1.easeOut"
      />
    </div>
    <div class="text-2xl font-medium text-black">
      <slot name="text"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "statsItem",
  props:{
    num:Number
  },
  data(){
    return{
      scrollPosition: null,
      maxScroll: null,
      played: false,
    }
  },
  methods:{
    theFormat(number) {
      return number.toFixed(0);
    },
    playAnimation() {
      if(!this.played)
      this.$refs.number.play();
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.played === false) {
        if (this.scrollPosition > this.maxScroll + 300) {
          this.playAnimation();
          this.played = true;
        }
      }
    },

  },
  mounted() {
    this.maxScroll = document.querySelector("#info-scroll").offsetTop ;
    window.addEventListener("scroll", this.updateScroll);
    this.scrollPosition = window.scrollY;

  }
}
</script>

<style scoped>

</style>