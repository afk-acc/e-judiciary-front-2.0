<template>
  <div class="my-10 ">
    <p class="text-center font-medium text-3xl text-black">{{$t('Преимущества')}}</p>
    <div class="flex w-10/12 flex-wrap mx-auto max-lg:flex-wrap max-lg:justify-center justify-center gap-5 mt-10">
      <advantage-item >
          <template v-slot:icon><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.5833 30.0083V32.5C59.58 38.3403 57.6889 44.023 54.1919 48.7007C50.695 53.3784 45.7797 56.8004 40.1791 58.4564C34.5784 60.1123 28.5926 59.9134 23.1142 57.8895C17.6358 55.8655 12.9584 52.1248 9.77967 47.2253C6.60092 42.3259 5.09109 36.5301 5.47536 30.7025C5.85964 24.8748 8.11743 19.3275 11.912 14.8879C15.7066 10.4482 20.8346 7.35412 26.5313 6.06702C32.2281 4.77992 38.1882 5.36879 43.5229 7.74579" stroke="#2250A7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M59.5833 10.8334L32.5 37.9438L24.375 29.8188" stroke="#2250A7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </template>
          <template v-slot:header>{{$t('Выберите юриста')}}</template>
          <template v-slot:content>{{$t('Найдите и выберите нужный вам документ')}}</template>
      </advantage-item>
      <advantage-item >
        <template v-slot:icon><svg width="66" height="65" viewBox="0 0 66 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.25 10.8334H11C9.54131 10.8334 8.14236 11.4041 7.11091 12.4199C6.07946 13.4357 5.5 14.8135 5.5 16.25V54.1667C5.5 55.6033 6.07946 56.981 7.11091 57.9969C8.14236 59.0127 9.54131 59.5834 11 59.5834H49.5C50.9587 59.5834 52.3576 59.0127 53.3891 57.9969C54.4205 56.981 55 55.6033 55 54.1667V35.2084" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M50.875 6.77088C51.969 5.69344 53.4528 5.08813 55 5.08813C56.5472 5.08813 58.031 5.69344 59.125 6.77088C60.219 7.84832 60.8336 9.30964 60.8336 10.8334C60.8336 12.3571 60.219 13.8184 59.125 14.8959L33 40.625L22 43.3334L24.75 32.5L50.875 6.77088Z" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </template>
        <template v-slot:header>{{$t('Заполните документ')}}</template>
        <template v-slot:content>{{$t('Найдите и выберите нужный вам документ')}}</template>
      </advantage-item>
      <advantage-item >
        <template v-slot:icon><svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.9166 5.41663H16.25C14.8134 5.41663 13.4356 5.98731 12.4198 7.00313C11.404 8.01895 10.8333 9.3967 10.8333 10.8333V54.1666C10.8333 55.6032 11.404 56.981 12.4198 57.9968C13.4356 59.0126 14.8134 59.5833 16.25 59.5833H48.75C50.1866 59.5833 51.5643 59.0126 52.5801 57.9968C53.596 56.981 54.1666 55.6032 54.1666 54.1666V21.6666L37.9166 5.41663Z" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M37.9167 5.41663V21.6666H54.1667" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M43.3334 35.2084H21.6667" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M43.3334 46.0416H21.6667" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M27.0834 24.375H24.375H21.6667" stroke="#224EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        </template>
        <template v-slot:header>{{$t('Скачайте')}}</template>
        <template v-slot:content>{{$t('Загрузите документ в той форме, которую вы предпочитаете')}}</template>
      </advantage-item>
      <advantage-item >
        <template v-slot:icon>
          <svg height="65" width="65" version="1.1" id="Layer_1" 
          		xmlns="http://www.w3.org/2000/svg" 
          		xmlns:xlink="http://www.w3.org/1999/xlink" 
          			 viewBox="0 0 300.16 300.16" xml:space="preserve">
          		<g>
          			<g>
          				<path style="fill:#224EA4;" d="M250.023,48.414h11.406V24.207h-96.826h-3.776c2.319-2.576,3.776-5.95,3.776-9.683
          					c0.001-8.007-6.516-14.523-14.523-14.523s-14.524,6.516-14.524,14.524c0,3.733,1.457,7.107,3.776,9.683h-3.776H38.73v24.206
          					h11.406l-49.7,109.345l8.811,4.004l44.007-96.806l44.007,96.811l8.811-4.004l-49.7-109.35h79.184v211.525
          					c-5.258,2.508-9.876,6.303-13.28,11.174H82.302c-13.347,0-24.206,10.859-24.206,24.206v4.841h183.969v-4.841
          					c0-13.347-10.859-24.206-24.206-24.206h-39.974c-3.403-4.87-8.022-8.666-13.28-11.174V48.414h79.184l-49.701,109.345l8.811,4.004
          					l44.007-96.806l44.007,96.811l8.811-4.004L250.023,48.414z M150.08,9.684c2.668,0,4.841,2.174,4.841,4.841
          					s-2.174,4.841-4.841,4.841c-2.668,0-4.841-2.174-4.841-4.841S147.412,9.684,150.08,9.684z M48.413,38.731V33.89h87.143v4.841
          					H48.413z M171.038,278.38l1.399,2.416h45.421c6.313,0,11.697,4.047,13.696,9.683H68.606c1.999-5.635,7.383-9.683,13.696-9.683
          					h45.421l1.399-2.416c4.318-7.47,12.35-12.108,20.958-12.108C158.688,266.271,166.719,270.909,171.038,278.38z M150.08,256.589
          					c-1.636,0-3.249,0.155-4.841,0.387V33.89h9.683v223.086C153.328,256.744,151.716,256.589,150.08,256.589z M164.604,33.89h87.143
          					v4.841h-87.143V33.89z"/>
          				<path style="fill:#224EA4;" d="M82.302,183.969H24.206C10.859,183.969,0,173.111,0,159.762v-4.841h106.508v4.841
          					C106.508,173.111,95.649,183.969,82.302,183.969z"/>
          				<path style="fill:#224EA4;" d="M275.953,183.969h-58.095c-13.347,0-24.206-10.859-24.206-24.206v-4.841H300.16v4.841
          					C300.16,173.111,289.301,183.969,275.953,183.969z"/>
          			</g>
          		</g>
          </svg>
        </template>
        <template v-slot:header>{{$t('Выгода')}}</template>
        <template v-slot:content>{{$t('Абсолютно бесплатное предоставление услуг')}}</template>
      </advantage-item>
      <advantage-item >
        <template v-slot:icon>
          <svg width="65px" height="65px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="icomoon-ignore">
            </g>
            <path d="M16 3.205c-7.066 0-12.795 5.729-12.795 12.795s5.729 12.795 12.795 12.795 12.795-5.729 12.795-12.795c0-7.066-5.729-12.795-12.795-12.795zM16 27.729c-6.467 0-11.729-5.261-11.729-11.729s5.261-11.729 11.729-11.729 11.729 5.261 11.729 11.729c0 6.467-5.261 11.729-11.729 11.729z" fill="#224EA4">

            </path>
            <path d="M16 17.066h-6.398v1.066h7.464v-10.619h-1.066z" fill="#224EA4">

            </path>
          </svg>
        </template>
        <template v-slot:header>{{$t('Экономьте время')}}</template>
        <template v-slot:content>{{$t('Экономьте свое драгоценное время ')}}</template>
      </advantage-item>
      <advantage-item >
        <template v-slot:icon>
          <svg fill="#224EA4" width="65" height="65" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M16 20a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1zM2.5 17h25c.277 0 .5.223.5.5s-.223.5-.5.5h-25c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-1-14C.678 3 0 3.678 0 4.5v17c0 .822.678 1.5 1.5 1.5H12v3H9.5c-.277 0-.5.223-.5.5s.223.5.5.5h11c.277 0 .5-.223.5-.5s-.223-.5-.5-.5H18v-3h10.5c.822 0 1.5-.678 1.5-1.5v-17c0-.822-.678-1.5-1.5-1.5zm0 1h27c.286 0 .5.214.5.5v17c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-17c0-.286.214-.5.5-.5zM13 23h4v3h-4z"/></svg>
        </template>
        <template v-slot:header>{{$t('Удобство для Вас')}}</template>
        <template v-slot:content>{{$t('Вы создаете обращение не выходя из дома')}}</template>
      </advantage-item>
    </div>
  </div>
</template>

<script>
import AdvantageItem from "./advantageItem.vue";
export default {
  name: "vAdvantages",
  components: {AdvantageItem}
}
</script>

<style scoped>

</style>