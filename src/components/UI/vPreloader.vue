<template>
  <div class="w-full fixed left-0 top-0 z-50 h-screen flex-col px-10 bg-filter_gray  flex justify-center items-center">
    <div class="lds-ring "><div></div><div></div><div></div><div></div></div>
  </div> 

</template>

<style lang="scss">
.lds-ring {
  display: inline-block;
  position: relative;
  width: 150px;
  height: 150px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 150px;
  height: 150px;
  margin: 8px;
  border: 8px solid #007bff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #007bff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>