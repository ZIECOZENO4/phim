<script setup lang="ts">

import { ref } from 'vue';
import Audio from './AudioRec.vue';
import Video from "./VideoRec.vue";
import Screen from "./ScreenRec.vue";
import UserAccount from "./UserAccount.vue";
import DropDown from "./DropDown.vue"
const showAudio = ref(false);
const toggleAudio = () => {
 showAudio.value = !showAudio.value;
};

const showVideo = ref(false);
const toggleVideo = () => {
 showVideo.value = !showVideo.value;
};

const showScreen = ref(false);
const toggleScreen = () => {
 showScreen.value = !showScreen.value;
};
</script>
<template>
<div class="w-[100vw] z-50 text-gray-700 bg-opacity-80 dark-mode:text-gray-200 bg-gray-800  mx-3 py-2">
  <div  class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
    <div class="p-4 flex flex-row items-center justify-between">
      <button class=" hidden md:flex md:flex-row rounded-lg focus:outline-none focus:shadow-outline" >
        <img alt="Phim logo" class="z-10 rounded-full px-2" src="@/assets/nu.png" width="100" height="100" />
        <a href="#" class=" font-semibold tracking-widest text-gray-300 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline text-3xl fontbold font-serif">Phim</a>
      </button>
    </div>
    <nav  class="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end gap-3 md:flex-row">
      <button @click="toggleAudio" class="px-4 py-2 mt-2 font-semibold text-gray-900 bg-red-400 rounded-2xl dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-red-800 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-xl" href="#">Voice Rec</button>
      <button @click="toggleVideo" class="px-4 py-2 mt-2 font-semibold text-gray-900 bg-green-600 rounded-2xl dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-800 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-xl" href="#">Video Rec</button>
      <button @click="toggleScreen" class="px-4 py-2 mt-2 font-semibold text-gray-900 bg-slate-300 rounded-2xl dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-slate-600 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-xl" href="#">Screen Rec</button>
      <button class="px-4 py-2 mt-2 font-semibold text-gray-900 bg-red-700 rounded-2xl dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-red-900 focus:bg-gray-200 focus:outline-none focus:shadow-outline text-xl" href="#">Help</button>
      <div  class="relative">
        <UserAccount />
      </div>    
    </nav>
  </div>
  <Audio v-if="showAudio" />
  <Video v-if="showVideo" />
  <Screen v-if="showScreen" />
 <div class="md:hidden">
  <nav>
    <div  class="flex flex-row justify-between w-[100vw] mx-auto -mt-5">
    <div class=" flex justify-start align-middle ">
      <button class="  rounded-lg focus:outline-none focus:shadow-outline" >
        <a href="#" class=" font-semibold tracking-widest text-gray-300 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline text-2xl fontbold font-serif">Phim</a>
      </button>
    </div>
    <div class="ml-2 pl-3 flex flex-row gap-3 z-50">
      <UserAccount />
      <DropDown />
    </div>
    </div>
  </nav>
 </div>
</div>
</template>