
<script>
import Profile from './Profile.vue';
import Setting from "./setting.vue"
export default {
    data() {
        return {
            currentPage: 'Profile'
        };
    },
    methods: {
        goToPage(page) {
            this.currentPage = page;
        }
    },
    components: { Profile, Setting }
}
</script>

<template>
  <div class=" flex flex-row">
    <div class=" w-[20vw] sticky bg-slate-100 h-[100vh] ">
    <div class=" flex-col gap-10 text-black mt-5">

        <div  @click="goToPage('Profile')"  class=" flex justify-center items-center align-middle my-3 p-5 rounded-lg text-[4xl] mx-3 font-sans font-bold text-2xl hover:bg-slate-300 w-auto ">
Profile

      </div>

<div  @click="goToPage('Audio')"  class=" flex justify-center items-center align-middle my-3 p-5 rounded-lg text-[4xl] mx-3 font-sans font-bold text-2xl hover:bg-slate-300 w-auto">
 My Audios   
</div>
<div  @click="goToPage('Video')"  class=" flex justify-center items-center align-middle my-3 p-5 rounded-lg text-[4xl] mx-3 font-sans font-bold text-2xl hover:bg-slate-300 w-auto">
My Videos
</div>
<div  @click="goToPage('Record')"  class=" flex justify-center items-center align-middle my-3 p-5 rounded-lg text-[4xl] mx-3 font-sans font-bold text-2xl hover:bg-slate-300 w-auto">
My Records   
</div>
<div @click="$router.push('/signin')" class=" flex justify-center items-center align-middle my-3 p-5 rounded-lg text-[4xl] mx-3 font-sans font-bold text-2xl hover:bg-slate-300 w-auto">
 Login
</div>
<div  @click="goToPage('Setting')"  class=" flex justify-center items-center align-middle my-3 p-5 rounded-lg text-[4xl] mx-3 font-sans font-bold text-2xl hover:bg-slate-300 w-auto">
Settings 
</div>
<div   class=" flex justify-center items-center align-middle my-3 bg-red-300 p-5 rounded-lg text-[4xl] mx-3 font-sans font-bold text-xl hover:bg-red-800 w-auto">
 Log Out
</div>
</div>
  </div>
  <div class="h-auto text-white w-[80vw]">
    <p v-if="currentPage === 'Profile'"><Profile /></p>
    <p v-if="currentPage === 'Audio'">Audio Content</p>
    <p v-if="currentPage === 'Record '">Record Content</p>
    <p v-if="currentPage === 'Setting'"><Setting /></p>
    <p v-if="currentPage === 'Video'">Video Content</p>
    <p v-if="currentPage === 'Record'">Record Content</p>
  </div>
  </div>



</template>
