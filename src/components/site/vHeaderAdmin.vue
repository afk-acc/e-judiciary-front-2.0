<template>
  <div class="flex ">
    <div
        :class="{'bg-primary_gr': showBg(), 'w-[70px] max-lg:w-0' : !openMenu, 'w-[300px] ' : openMenu}"
        class="transition-all h-full max-lg:fixed relative overflow-y-scroll py-6 duration-300 top-0 left-0 border-b-[0.5px] border-white z-40"
    >
      <div class="flex flex-col h-full p-3">
        <div class="">
          <div
              class="pb-2 cursor-pointer border-b flex justify-between items-center border-white text-white border-opacity-40 transition-all">
            <div class="flex items-center" @click="this.$router.push('/')">
              <img src="/ejudiciary.svg" alt="" class="">
              <p :class="{'hidden' : !openMenu, 'block' : openMenu}">E-judicary</p>
            </div>
            <div @click="openMenu = !openMenu" class="hidden max-lg:block">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.7188 18.3906L13.325 12.0004L19.7188 5.65714C20.0392 5.28603 20.0219 4.72911 19.679 4.37894C19.3361 4.02878 18.7832 4.00341 18.4101 4.32073L11.9976 10.6169L5.69734 4.27367C5.33275 3.90878 4.74392 3.90878 4.37933 4.27367C4.20236 4.45039 4.10282 4.69094 4.10282 4.94188C4.10282 5.19282 4.20236 5.43337 4.37933 5.61008L10.6703 11.9439L4.2765 18.2777C4.09954 18.4544 4 18.695 4 18.9459C4 19.1969 4.09954 19.4374 4.2765 19.6141C4.45291 19.7903 4.69172 19.8885 4.94018 19.887C5.18409 19.8885 5.41891 19.794 5.59452 19.6235L11.9976 13.2709L18.4101 19.7271C18.5865 19.9032 18.8253 20.0014 19.0738 20C19.319 19.9989 19.554 19.9009 19.7281 19.7271C19.9039 19.5491 20.0017 19.3078 20 19.0569C19.9982 18.8059 19.897 18.5661 19.7188 18.3906Z"
                    fill="#fff"></path>
              </svg>
            </div>
          </div>
          <div @click="this.$router.push({name: 'info'})"
               class="flex py-4 cursor-pointer border-white border-opacity-40 border-b items-center gap-x-2 no-underline">
            <div class="w-[35px] h-[35px] ml-1">
              <img :src="getCurrentUser.image" class="w-full h-full rounded-full" alt="">
            </div>
            <div class="text-sm text-white" :class="{'hidden' : !openMenu, 'block' : openMenu}">{{
                getCurrentUser.name
              }}
            </div>
          </div>
        </div>
        <div class="flex flex-col  mt-4 text-white">
          <div class="Link-to-Pages" :class="{'profile-hoverFill' : !openMenu}"
               @click="showDropDown = showDropDown === 'home' ? '' : 'home'  "
          >
            <div class="flex justify-between transition-all items-center cursor-pointer font-bold ">
              <div class="flex gap-x-2 "
                   :class="{'hover:bg-white px-2 py-2 hover:pl-3 rounded-md' : !openMenu, 'ml-0' : openMenu}" @click="()=>{
                if(!openMenu){
                  $router.push('/')

                }
              }">
                <svg width="20px" height="20px" viewBox="0 0 1024 1024" fill="#fff" class="icon" version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M972 520.8c-6.4 0-12-2.4-16.8-7.2L530.4 86.4c-4.8-4.8-11.2-8-18.4-8-6.4 0-12.8 2.4-18.4 8L68.8 512c-4.8 4.8-10.4 7.2-16.8 7.2s-12-2.4-16-6.4c-4.8-4-7.2-8.8-7.2-15.2-0.8-7.2 2.4-14.4 7.2-19.2L458.4 52.8c14.4-14.4 32.8-22.4 52.8-22.4s38.4 8 52.8 22.4L988.8 480c4.8 4.8 7.2 11.2 7.2 18.4 0 7.2-4 13.6-8.8 17.6-4.8 3.2-10.4 4.8-15.2 4.8z"/>
                  <path
                      d="M637.6 998.4v-33.6h-33.6V904c0-51.2-41.6-92-92-92-51.2 0-92 41.6-92 92v60.8h-33.6v33.6H196.8c-40.8 0-73.6-32.8-73.6-73.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 14.4 11.2 25.6 25.6 25.6h175.2v-45.6c0-77.6 63.2-140 140-140s140 63.2 140 140v45.6h175.2c14.4 0 25.6-11.2 25.6-25.6V509.6c0-13.6 10.4-24 24-24s24 10.4 24 24v415.2c0 40.8-32.8 73.6-73.6 73.6H637.6z"/>
                  <path d="M604 998.4v-48h48v48h-48z m-232 0v-48h48v48h-48z"/>
                </svg>
                <p :class="{'hidden' : !openMenu, 'block ' : openMenu}">

                  {{ $t('Главная') }}
                </p>
              </div>
              <div class="transition-all duration-300"
                   :class="{'-rotate-90' : showDropDown === 'home' , 'rotate-0' : showDropDown !== 'home' , 'hidden' : !openMenu, 'block' : openMenu}">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 9L10.3003 11.6997V11.6997C10.1344 11.8656 10.1344 12.1344 10.3003 12.3003V12.3003L13 15"
                        stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <ul class="flex flex-col max-h-0 overflow-hidden pl-4 text-sm transition-all duration-500"
                :class="{'max-h-screen' : showDropDown === 'home', 'hidden' : !openMenu, 'block' : openMenu}"
            >
              <router-link :to="{name:'main'}"
                           class="cursor-pointer flex gap-x-2 items-center profile-hover profile-hoverFill">
                <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                  <g id="tab-previous">
                  	<g>
                  		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                  	</g>
                  </g>
                </svg>
                {{ $t('Вернуться') }}
              </router-link>
              <router-link :to="{name:'service', params:{page:1}}"
                           class="cursor-pointer flex gap-x-2 items-center profile-hover profile-hoverFill">
                <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                  <g id="tab-previous">
                  	<g>
                  		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                  	</g>
                  </g>
                </svg>
                {{ $t('Услуги') }}
              </router-link>
              <router-link :to="{name: 'faq'}">
                <li class="cursor-pointer flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                  <g id="tab-previous">
                  	<g>
                  		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                  	</g>
                  </g>
                </svg>
                  {{ $t('Вопросы') }}
                </li>
              </router-link>
              <router-link :to="{name:'lawyers', params:{page:1}}"
                           class="cursor-pointer flex gap-x-2 items-center profile-hover profile-hoverFill">
                <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                  <g id="tab-previous">
                  	<g>
                  		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                  	</g>
                  </g>
                </svg>
                {{ $t('Юристы') }}
              </router-link>
              <router-link :to="{name: 'contacts'}">
                <li class="cursor-pointer flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                  <g id="tab-previous">
                  	<g>
                  		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                  	</g>
                  </g>
                </svg>
                  {{ $t('Контакты') }}
                </li>
              </router-link>
            </ul>
          </div>
          <div class="Link-to-Pages profile-hover my-6">
            <div @click="this.$router.push({name: 'info'})"
                 class="hover:bg-white hover:text-primary flex gap-x-2 items-center rounded-md hover:pl-4 transition-all ease-in cursor-pointer font-bold py-2 "
                 :class="{' pl-2 mx-auto  hover:pl-3' : !openMenu, 'ml-0' : openMenu}">
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p :class="{'hidden' : !openMenu, 'block ' : openMenu}">{{ $t('Основная информация') }}</p>
            </div>
          </div>
          <div class="Link-to-Pages transition-all mb-4" :class="{'profile-hover' : !openMenu}"
               v-if="can(getCurrentUser, 'logs.read') || can(getCurrentUser, 'users.profile.read') || can(getCurrentUser, 'role.read') || can(getCurrentUser, 'request.read') || can(getCurrentUser, 'template.read') || can(getCurrentUser, 'faq.create') || can(getCurrentUser, 'site_ref.create')"
               @click="()=> {
              showDropDown = showDropDown === 'admins' ? '' : 'admins'
              if(!openMenu) {
                $router.push({name: 'users-list', params:{page: 1}})
              }
             }">
            <div class="flex justify-between items-center  transition-all cursor-pointer font-bold py-2"

                 :class="{'hover:bg-white pl-2 hover:pl-3 rounded-md' : !openMenu, 'ml-0' : openMenu}">
              <div class="flex gap-x-2">
                <svg class="" width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M11 3H13C13.5523 3 14 3.44772 14 4V4.56879C14 4.99659 14.2871 5.36825 14.6822 5.53228C15.0775 5.69638 15.5377 5.63384 15.8403 5.33123L16.2426 4.92891C16.6331 4.53838 17.2663 4.53838 17.6568 4.92891L19.071 6.34312C19.4616 6.73365 19.4615 7.36681 19.071 7.75734L18.6688 8.1596C18.3661 8.46223 18.3036 8.92247 18.4677 9.31774C18.6317 9.71287 19.0034 10 19.4313 10L20 10C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H19.4312C19.0034 14 18.6318 14.2871 18.4677 14.6822C18.3036 15.0775 18.3661 15.5377 18.6688 15.8403L19.071 16.2426C19.4616 16.6331 19.4616 17.2663 19.071 17.6568L17.6568 19.071C17.2663 19.4616 16.6331 19.4616 16.2426 19.071L15.8403 18.6688C15.5377 18.3661 15.0775 18.3036 14.6822 18.4677C14.2871 18.6318 14 19.0034 14 19.4312V20C14 20.5523 13.5523 21 13 21H11C10.4477 21 10 20.5523 10 20V19.4313C10 19.0034 9.71287 18.6317 9.31774 18.4677C8.92247 18.3036 8.46223 18.3661 8.1596 18.6688L7.75732 19.071C7.36679 19.4616 6.73363 19.4616 6.34311 19.071L4.92889 17.6568C4.53837 17.2663 4.53837 16.6331 4.92889 16.2426L5.33123 15.8403C5.63384 15.5377 5.69638 15.0775 5.53228 14.6822C5.36825 14.2871 4.99659 14 4.56879 14H4C3.44772 14 3 13.5523 3 13V11C3 10.4477 3.44772 10 4 10L4.56877 10C4.99658 10 5.36825 9.71288 5.53229 9.31776C5.6964 8.9225 5.63386 8.46229 5.33123 8.15966L4.92891 7.75734C4.53838 7.36681 4.53838 6.73365 4.92891 6.34313L6.34312 4.92891C6.73365 4.53839 7.36681 4.53839 7.75734 4.92891L8.15966 5.33123C8.46228 5.63386 8.9225 5.6964 9.31776 5.53229C9.71288 5.36825 10 4.99658 10 4.56876V4C10 3.44772 10.4477 3 11 3Z"
                      stroke-width="1.5" stroke="#fff"/>
                  <path
                      d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                      stroke-width="1.5" stroke="#fff"/>
                </svg>
                <p :class="{'hidden' : !openMenu, 'block ' : openMenu}">{{ $t('Настройки') }}</p>
              </div>
              <div class="transition-all duration-300"
                   :class="{'-rotate-90' : showDropDown === 'admins', 'rotate-0' : showDropDown !== 'admins', 'hidden' : !openMenu, 'block' : openMenu}">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 9L10.3003 11.6997V11.6997C10.1344 11.8656 10.1344 12.1344 10.3003 12.3003V12.3003L13 15"
                        stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div
                class="z-30 transition-all max-h-0 overflow-hidden"
                :class="{'max-h-screen' : showDropDown === 'admins', 'hidden' : !openMenu, 'block' : openMenu}"
            >
              <profile-link-items
                  route="users-list"
                  :params="{ page: 1 }"
                  v-if="can(getCurrentUser, 'users.profile.read')"
                  class="">
                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                <g id="tab-previous">
                	<g>
                		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                	</g>
                </g>
              </svg>
                  {{ $t("Пользователи") }}
                </div>
              </profile-link-items>
              <profile-link-items
                  route="roles"
                  :params="{ page: 1 }"
                  v-if="can(getCurrentUser, 'role.read')"
              >
                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                <g id="tab-previous">
                	<g>
                		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                	</g>
                </g>
              </svg>
                  {{ $t("Роли") }}
                </div>
              </profile-link-items>
              <profile-link-items
                  route="history"
                  :params="{ page: 1 }"
                  v-if="can(getCurrentUser, 'logs.read')"
              >
                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                <g id="tab-previous">
                	<g>
                		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                	</g>
                </g>
              </svg>
                  {{ $t("История действий") }}
                </div>
              </profile-link-items>
              <profile-link-items
                  route="requests"
                  :params="{ page: 1 }"
                  v-if="can(getCurrentUser, 'request.read')"
              >
                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                <g id="tab-previous">
                	<g>
                		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                	</g>
                </g>
              </svg>
                  {{ $t("Заявки стать юристом") }}
                </div>
              </profile-link-items>
              <!-- <profile-link-items
                route="reports"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'report.read')"
              >
                {{ $t("Жалобы") }}
              </profile-link-items> -->
              <!-- <profile-link-items
                route="requests"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'request.read')"
              >
                {{ $t("Завки стать юристом") }}
              </profile-link-items>
              <profile-link-items route="appeals" :params="{ page: 1 }">
                {{ $t("Мои вопросы") }}
              </profile-link-items>
              <profile-link-items
                route="lawyer-appeals"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'appeal.read')"
              >
                {{ $t("Обращение пользователей") }}
              </profile-link-items>
              <profile-link-items route="documents" :params="{ page: 1 }">
                {{ $t("Мои документы") }}
              </profile-link-items>
              <profile-link-items route="service" :params="{ page: 1 }">
                {{ $t("Добавить обращение") }}
              </profile-link-items>
              <profile-link-items route="chat" :params="{ page: 1 }">
                {{ $t("Чаты с юристами") }}
              </profile-link-items> -->
              <profile-link-items
                  route="document_list"
                  :params="{ page: 1 }"
                  v-if="can(getCurrentUser, 'template.read')"
              >
                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                <g id="tab-previous">
                	<g>
                		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                	</g>
                </g>
              </svg>
                  {{ $t("Шаблоны документов") }}
                </div>
              </profile-link-items>
              <profile-link-items
                  :params="{ page: 1 }"
                  route="faq_list"
                  v-if="can(getCurrentUser, 'faq.create')"
              >
                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                    <g id="tab-previous">
                    	<g>
                    		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                    	</g>
                    </g>
                  </svg>
                  {{ $t("FAQ") }}
                </div>
              </profile-link-items>
              <profile-link-items
                  :params="{ page: 1 }"
                  route="site_ref_list"
                  v-if="can(getCurrentUser, 'site_ref.create')"
              >

                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                <g id="tab-previous">
                	<g>
                		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                	</g>
                </g>
              </svg>
                  {{ $t("Дополнительные ссылки на сайте") }}
                </div>
              </profile-link-items>
            </div>
          </div>
          <div class="Link-to-Pages transition-all mb-4" :class="{'profile-hoverFill' : !openMenu}"
               @click="()=> {
              showDropDown = showDropDown === 'systems' ? '' : 'systems'
              if(!openMenu) {
                $router.push({name: 'appeals', params:{page: 1}})
              }
             }"
          >
            <div class="flex items-center justify-between cursor-pointer font-bold py-2"
                 :class="{'hover:bg-white pl-2 hover:pl-3 rounded-md' : !openMenu, 'ml-0' : openMenu}">
              <div class="flex gap-x-2">
                <svg fill="white" width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M469.333 341.333c0-23.564 19.102-42.667 42.667-42.667s42.667 19.103 42.667 42.667v128h128c23.565 0 42.667 19.102 42.667 42.667s-19.102 42.667-42.667 42.667h-128v128c0 23.565-19.102 42.667-42.667 42.667s-42.667-19.102-42.667-42.667v-128h-128c-23.564 0-42.667-19.102-42.667-42.667s19.103-42.667 42.667-42.667h128v-128z"/>
                  <path
                      d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512c282.769 0 512-229.231 512-512S794.769 0 512 0zM85.333 512C85.333 276.358 276.358 85.333 512 85.333c235.639 0 426.667 191.025 426.667 426.667 0 235.639-191.027 426.667-426.667 426.667C276.358 938.667 85.333 747.64 85.333 512z"/>
                </svg>
                <p :class="{'hidden' : !openMenu, 'block ' : openMenu}">{{ $t('Cистема') }}</p>
              </div>
              <div class="transition-all duration-300"
                   :class="{'-rotate-90' : showDropDown === 'systems', 'rotate-0' : showDropDown !== 'systems', 'hidden' : !openMenu, 'block' : openMenu}">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 9L10.3003 11.6997V11.6997C10.1344 11.8656 10.1344 12.1344 10.3003 12.3003V12.3003L13 15"
                        stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div
                class="z-30 transition-all max-h-0 overflow-hidden"
                :class="{'max-h-screen' : showDropDown === 'systems' , 'hidden' : !openMenu, 'block' : openMenu}"
            >
              <!-- <profile-link-items
                route="users-list"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'users.profile.read')"
              >
                {{ $t("Пользователи") }}
              </profile-link-items>
              <profile-link-items
                route="roles"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'role.read')"
              >
                {{ $t("Роли") }}
              </profile-link-items>
              <profile-link-items
                route="history"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'logs.read')"
              >
                {{ $t("История действий") }}
              </profile-link-items>
              <profile-link-items
                route="reports"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'report.read')"
              >
                {{ $t("Жалобы") }}
              </profile-link-items> -->
              <!-- <profile-link-items
                route="requests"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'request.read')"
              >
                {{ $t("Завки стать юристом") }}
              </profile-link-items> -->
              <profile-link-items route="appeals" :params="{ page: 1 }">
                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                    <g id="tab-previous">
                    	<g>
                    		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                    	</g>
                    </g>
                  </svg>
                  {{ $t("Мои вопросы") }}
                </div>
              </profile-link-items>
              <profile-link-items
                  route="lawyer-appeals"
                  :params="{ page: 1 }"
                  v-if="can(getCurrentUser, 'appeal.read')"
              >
                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                    <g id="tab-previous">
                    	<g>
                    		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                    	</g>
                    </g>
                  </svg>
                  {{ $t("Обращение пользователей") }}
                </div>
              </profile-link-items>
             
              <profile-link-items route="service" :params="{ page: 1 }">
                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                    <g id="tab-previous">
                    	<g>
                    		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                    	</g>
                    </g>
                  </svg>
                  {{ $t("Добавить обращение") }}
                </div>
              </profile-link-items>
              <!-- <profile-link-items route="chat" :params="{ page: 1 }">
                {{ $t("Чаты с юристами") }}
              </profile-link-items>
              <profile-link-items
                  route="document_list"
                  :params="{ page: 1 }"
                  v-if="can(getCurrentUser, 'template.read')"
              >
                {{ $t("Шаблоны документов") }}
              </profile-link-items> -->
            </div>
          </div>
          <div class="Link-to-Pages transition-all mb-4" :class="{'profile-hoverFill' : !openMenu}"
               @click="()=> {
              showDropDown = showDropDown === 'rest' ? '' : 'rest'
              if(!openMenu) {
                $router.push({name: 'reports', params:{page: 1}})
              }
             }"
          >
            <div class="flex items-center transition-all justify-between cursor-pointer font-bold py-2 ">
              <div class="flex gap-x-2 py-2 "
                   :class="{'hover:bg-white px-2 hover:pl-3 rounded-md' : !openMenu, 'ml-0' : openMenu}">
                <svg fill="white" height="20px" width="20px" version="1.1" id="Layer_1"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                     viewBox="0 0 512 512" xml:space="preserve">
                    <g>
            			<g>
            				<g>
            					<path d="M469.333,64H256H42.667C19.109,64,0,83.109,0,106.667v298.667C0,428.891,19.109,448,42.667,448H256h213.333
            						C492.891,448,512,428.891,512,405.333V106.667C512,83.109,492.891,64,469.333,64z M240.915,283.582
            						c-4.001,4.001-6.248,9.427-6.248,15.085v106.667h-192V106.667h192v106.667c0,5.658,2.248,11.084,6.248,15.085L268.497,256
            						L240.915,283.582z M469.333,405.333h-192v-97.83l36.418-36.418c8.331-8.331,8.331-21.839,0-30.17l-36.418-36.418v-97.83h192
            						V405.333z"/>
                      <path d="M85.333,192h85.333c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333H85.333
            						c-11.782,0-21.333,9.551-21.333,21.333C64,182.449,73.551,192,85.333,192z"/>
                      <path d="M170.667,320H85.333C73.551,320,64,329.551,64,341.333c0,11.782,9.551,21.333,21.333,21.333h85.333
            						c11.782,0,21.333-9.551,21.333-21.333C192,329.551,182.449,320,170.667,320z"/>
                      <path d="M192,234.667h-85.333c-11.782,0-21.333,9.551-21.333,21.333s9.551,21.333,21.333,21.333H192
            						c11.782,0,21.333-9.551,21.333-21.333S203.782,234.667,192,234.667z"/>
                      <path d="M320,192h85.333c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333H320
            						c-11.782,0-21.333,9.551-21.333,21.333C298.667,182.449,308.218,192,320,192z"/>
                      <path d="M405.333,320H320c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h85.333
            						c11.782,0,21.333-9.551,21.333-21.333C426.667,329.551,417.115,320,405.333,320z"/>
                      <path d="M362.667,234.667c-11.782,0-21.333,9.551-21.333,21.333s9.551,21.333,21.333,21.333h64
            						c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333H362.667z"/>
            				</g>
            			</g>
            		</g>
            </svg>
                <p :class="{'hidden' : !openMenu, 'block ' : openMenu}">{{ $t('Остальное') }}</p>
              </div>
              <div class="transition-all duration-300"
                   :class="{'-rotate-90' : showDropDown === 'rest', 'rotate-0' : showDropDown !== 'rest', 'hidden' : !openMenu, 'block' : openMenu}">
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 9L10.3003 11.6997V11.6997C10.1344 11.8656 10.1344 12.1344 10.3003 12.3003V12.3003L13 15"
                        stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <div
                class="z-30 transition-all max-h-0 overflow-hidden"
                :class="{'max-h-screen' : showDropDown === 'rest' , 'hidden' : !openMenu, 'block' : openMenu}"
            >
              <!-- <profile-link-items
                route="users-list"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'users.profile.read')"
              >
                {{ $t("Пользователи") }}
              </profile-link-items>
              <profile-link-items
                route="roles"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'role.read')"
              >
                {{ $t("Роли") }}
              </profile-link-items>
              <profile-link-items
                route="history"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'logs.read')"
              >
                {{ $t("История действий") }}
              </profile-link-items> -->
              <profile-link-items
                  route="reports"
                  :params="{ page: 1 }"
                  v-if="can(getCurrentUser, 'report.read')"
              >
                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                    <g id="tab-previous">
                    	<g>
                    		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                    	</g>
                    </g>
                  </svg>
                  {{ $t("Жалобы") }}
                </div>
              </profile-link-items>
              <!-- <profile-link-items
                route="requests"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'request.read')"
              >
                {{ $t("Завки стать юристом") }}
              </profile-link-items>
              <profile-link-items route="appeals" :params="{ page: 1 }">
                {{ $t("Мои вопросы") }}
              </profile-link-items>
              <profile-link-items
                route="lawyer-appeals"
                :params="{ page: 1 }"
                v-if="can(getCurrentUser, 'appeal.read')"
              >
                {{ $t("Обращение пользователей") }}
              </profile-link-items>
              <profile-link-items route="documents" :params="{ page: 1 }">
                {{ $t("Мои документы") }}
              </profile-link-items>
              <profile-link-items route="service" :params="{ page: 1 }">
                {{ $t("Добавить обращение") }}
              </profile-link-items> -->
              <profile-link-items route="chat" :params="{ page: 1 }">
                <div class="flex gap-x-2 items-center profile-hover profile-hoverFill">
                  <svg fill="#fff" height="10px" width="10px" version="1.1" id="XMLID_57_"
                       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                       viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
                    <g id="tab-previous">
                    	<g>
                    		<path d="M20,23.1L4.2,12L20,0.9V23.1z M7.7,12L18,19.2V4.8L7.7,12z"/>
                    	</g>
                    </g>
                  </svg>
                  {{ $t("Чаты с юристами") }}
                </div>
              </profile-link-items>
              <!-- <profile-link-items
                  route="document_list"
                  :params="{ page: 1 }"
                  v-if="can(getCurrentUser, 'template.read')"
              >
                {{ $t("Шаблоны документов") }}
              </profile-link-items> -->
            </div>
          </div>
          <div class="btn-to-logout cursor-pointer flex font-bold gap-x-2  " @click="logout"
               :class="{'ml-2' : !openMenu, 'ml-0' : openMenu}">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10 12H18M18 12L15.5 9.77778M18 12L15.5 14.2222M18 7.11111V5C18 4.44772 17.5523 4 17 4H7C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V16.8889"
                  stroke="#EB5757" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p class="text-danger pb-10" :class="{'hidden' : !openMenu, 'block ' : openMenu}">
              {{ $t("Выход") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="cursor-pointer absolute z-30 m-4 left-16 max-lg:left-0 transition-all duration-300"
         :class="{'left-16' : !openMenu, 'left-[300px]' : openMenu}" @click="openMenu = !openMenu">
      <svg data-v-8c5b6cc0="" fill="#fff" width="30px" height="30px" viewBox="0 0 32 32" version="1.1"
           xmlns="http://www.w3.org/2000/svg">
        <path data-v-8c5b6cc0=""
              d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
      </svg>
    </div>
    <div class="bg-header_gr  w-full absolute z-30 h-[50px]">
      <div class="flex justify-end text-white items-center ">
        <div class="header-icons flex items-center ">
          <div
              class="min-w-[200px] relative max-sm:w-[200px] max-[375px]:w-[130px] py-4 pr-8 mt-[-12px] max-lg:py-4 text-sm">
            <input
                v-model="params.query"
                @keyup.enter="load_all_doc_list(this.params); isActive = true"
                type="text"
                :class="{'search_active':search_active}"
                class=" outline-none text-sm  border-b border-white header__search"
                style="background: none;"
            >
            <div @click="search_active = !search_active" class="cursor-pointer  header__search-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 17.5L13.875 13.875" stroke="white" stroke-width="2" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
            </div>
            <div class=" absolute p-4 z-50  top-full bg-primary_gr flex flex-col gap-y-2 left-0"
                 v-if="isActive && get_all_doc_list?.data?.length > 0 && search_active">
              <div @click="isActive = false;$router.push({name:'constructor', params:{name:item.id}});"
                   v-for="(item, index) in get_all_doc_list?.data" :key="index" class="underline cursor-pointer">
                {{ item.name.slice(0, 45) }}
              </div>
            </div>

          </div>
          <select
              v-model="lang"
              class="select text-sm appearance-none text-center w-[50px] h-[50px]  focus:outline-none text-white"
              style="background: none">
            <option value="ru">Ру</option>
            <option value="uz_l">Uz</option>
            <option value="uz_c">Уз</option>
          </select>
          <div class="notification relative flex items-center">
            <div class="">
              <div class="relative">
                <div @click="show_notification=!show_notification" class="cursor-pointer">
                  <svg class="mx-4 cursor-pointer" width="18" height="20"
                       viewBox="0 0 18 20" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.7695 9.64534C16.039 8.79229 15.7071 8.05305 15.7071 6.79716V6.37013C15.7071 4.73354 15.3304 3.67907 14.5115 2.62459C13.2493 0.986993 11.1244 0 9.04423 0H8.95577C6.91935 0 4.86106 0.941671 3.577 2.5128C2.71333 3.58842 2.29293 4.68822 2.29293 6.37013V6.79716C2.29293 8.05305 1.98284 8.79229 1.23049 9.64534C0.676907 10.2738 0.5 11.0815 0.5 11.9557C0.5 12.8309 0.787226 13.6598 1.36367 14.3336C2.11602 15.1413 3.17846 15.6569 4.26375 15.7466C5.83505 15.9258 7.40634 15.9933 9.0005 15.9933C10.5937 15.9933 12.165 15.8805 13.7372 15.7466C14.8215 15.6569 15.884 15.1413 16.6363 14.3336C17.2118 13.6598 17.5 12.8309 17.5 11.9557C17.5 11.0815 17.3231 10.2738 16.7695 9.64534Z"
                        fill="#fff"/>
                    <path opacity="0.7"
                          d="M11.0088 17.2285C10.5088 17.1217 7.46266 17.1217 6.96275 17.2285C6.53539 17.3272 6.07324 17.5568 6.07324 18.0604C6.09809 18.5408 6.37935 18.9648 6.76895 19.2337L6.76795 19.2347C7.27184 19.6275 7.86319 19.8773 8.48236 19.9669C8.81232 20.0122 9.14825 20.0102 9.49014 19.9669C10.1083 19.8773 10.6997 19.6275 11.2036 19.2347L11.2026 19.2337C11.5922 18.9648 11.8734 18.5408 11.8983 18.0604C11.8983 17.5568 11.4361 17.3272 11.0088 17.2285Z"
                          fill="#fff"/>
                  </svg>
                  <span class=" absolute -bottom-1 text-sm right-2" v-if="Number(this.get_notifications.length) > 0">
            <span class="flex h-4 w-4 relative">
              <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
              <span
                  class="relative text-[10px]   px-2 py-2 items-center justify-center text-white inline-flex rounded-full h-3 w-3 bg-danger">
                  {{ this.get_notifications.length }}</span>
            </span>
          </span>
                </div>
              </div>
              <div
                  v-if="show_notification && get_notifications.length > 0"
                  class="absolute shadow-2xl top-10 right-0 z-30  max-md:px-6 max-md:mx-4 max-md:flex-wrap max-h-[400px] overflow-scroll max-w-[400px] w-screen bg-white py-5 flex flex-col gap-y-4">
                <v-notification :item="item" v-for="(item,index) in get_notifications" :key="index"/>
              </div>
            </div>
            <div @click="mes=0, this.$router.push({name: 'chat'})" class="relative">
              <div class="relative">
                <svg class="mx-4 cursor-pointer" width="20" height="18" viewBox="0 0 20 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.7"
                        d="M20 12.94C20 15.73 17.76 17.99 14.97 18H14.96H5.05C2.27 18 0 15.75 0 12.96V12.95C0 12.95 0.006 8.524 0.014 6.298C0.015 5.88 0.495 5.646 0.822 5.906C3.198 7.791 7.447 11.228 7.5 11.273C8.21 11.842 9.11 12.163 10.03 12.163C10.95 12.163 11.85 11.842 12.56 11.262C12.613 11.227 16.767 7.893 19.179 5.977C19.507 5.716 19.989 5.95 19.99 6.367C20 8.576 20 12.94 20 12.94Z"
                        fill="#fff"/>
                  <path
                      d="M19.4759 2.67351C18.6099 1.04151 16.9059 -0.000488281 15.0299 -0.000488281H5.04988C3.17388 -0.000488281 1.46988 1.04151 0.603884 2.67351C0.409884 3.03851 0.501884 3.49351 0.824884 3.75151L8.24988 9.69051C8.76988 10.1105 9.39988 10.3195 10.0299 10.3195C10.0339 10.3195 10.0369 10.3195 10.0399 10.3195C10.0429 10.3195 10.0469 10.3195 10.0499 10.3195C10.6799 10.3195 11.3099 10.1105 11.8299 9.69051L19.2549 3.75151C19.5779 3.49351 19.6699 3.03851 19.4759 2.67351Z"
                      fill="#fff"/>
                </svg>
              </div>
              <span class=" absolute -bottom-1 right-2" v-if="Number(mes) > 0">
            <span class="flex h-4 w-4 relative">
              <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-danger opacity-75"></span>
              <span
                  class="relative text-[10px] px-1 py-1 items-center justify-center text-white inline-flex rounded-full h-3 w-3 bg-danger">
                {{ mes }}
              </span>
           </span>
         </span>

              <!--          <span-->
              <!--              class="w-[8px] animate-ping h-[8px] absolute bottom-0 right-2 z-10 text-[8px] bg-l_secondary rounded-full flex items-center justify-center text-white">-->
              <!--          {{ this.mes }}-->
              <!--        </span>-->

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";
import {useI18n} from "vue-i18n";
import VNotification from "../profile/vNotification.vue";
import navScelet from '../../pages/profile/sceleton/navScelet.vue'
import ProfileLinkItems from "../../components/profile/profileLinkItems.vue";
import {canAccess} from "../../assets/functions";
import {toast} from "vue3-toastify";

export default {
  name: "vHeader",
  components: {VNotification, navScelet, ProfileLinkItems},
  data() {
    return {
      search_active: false,
      mes: 0,
      scrollPosition: null,
      show_notification: false,
      openMenu: true,
      openAdmin: false,
      showDropDown: '',
      lang: "",
      params: {
        query: "",
        page: 1,
        limit: 5,
      },
      isActive: false,
    }
  },
  setup() {
    const {locale, t} = useI18n({useScope: "global"});
    localStorage.setItem("locale", "" + locale.value);
    return {
      switchLanguage: () => {
        locale.value = localStorage.getItem('locale')
      },
    };
  },
  computed: {
    ...mapGetters(['getCurrentUser', 'get_notifications', 'get_base_url', 'get_all_doc_list']),

  },
  methods: {
    ...mapActions(['load_notifications', 'load_all_doc_list', 'loadCurrentUser']),
    ...mapMutations(['update_all_doc_list']),
    show() {
      return localStorage.getItem('token')
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    showBg() {
      if (this.$route.name === 'main')
        return this.scrollPosition > 150
      return true
    },
    can(user, item) {
      return canAccess(user, item);
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
  mounted() {
    this.mes = this.getCurrentUser.notify
    this.lang = localStorage.getItem('locale')
    window.addEventListener("scroll", this.updateScroll);
    if (localStorage.getItem("token")) {
      this.loadCurrentUser();
    } else {
      this.$router.push("/");
    }
  },
  watch: {
    $route() {
      this.isActive = false
    },
    getCurrentUser(val) {
      this.mes = this.getCurrentUser.notify
      if (this.mes === undefined)
        this.mes = 0;
      let channel = this.$pusher.subscribe('private-notification.' + val.id)
      channel.bind('notify', notify => {
        toast.info(this.$t('Новое уведомление'), {autoClose: 2000})
        this.mes = Number(this.mes) + 1
      })
      this.load_notifications()
      channel.bind('notification', notify => {
        toast.info(this.$t('Новое уведомление'), {autoClose: 2000})
        this.add_notification(notify.notification)
      })
      if (val.id) {
        if (this.get_send_appeal) {
          this.add_new_appeal(this.get_send_appeal);
        }
      }
    },
    lang(val) {
      localStorage.setItem('locale', val)
      this.switchLanguage()
    }
  },

}
</script>

<style lang="scss" scoped>

.search_active {
  right: 0px !important;
  width: 100% !important;

}

.search_active + .header__search-icon {
  right: 100%;
  justify-content: start;
}

.header__search {
  position: absolute;
  top: 10px;
  margin-left: 0;
  width: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
}


.header__search-icon {
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 50%;
  transform: translateY(-25%);
  right: 0;
}

a.router-link-active {
  text-decoration-color: white;
}

.el-hover path {
  transition: all 0.3s;
}

.el-hover:hover path {
  stroke: #2556B5 !important;
}

.select option {
  background: #2556B5;
}

a:hover {
  background: rgba(255, 255, 255, 0.9);
  fill: #2556B5;
  transition: .3s all ease;
  color: #2556B5;
  border-radius: 6px;
  padding-left: 20px;
}

a {
  padding: 6px 10px;
  margin-top: 6px;
}

.Link-to-Pages svg path {
  stroke: white;
  transition: .3s all ease;
}

// .Link-to-Pages:hover svg path{
//     stroke: #2556B5;
//     fill: white;
// }

.profile-hover:hover svg path {
  stroke: #2556B5;
  border-radius: 0.375rem;
}

.profile-hoverFill:hover svg path {
  fill: #2556B5;
  border-radius: 0.375rem;
}

a {

}
</style>