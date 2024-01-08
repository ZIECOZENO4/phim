<script setup lang="ts">
import { SignUp } from 'vue-clerk'
</script>

<template>
<div class="bg-black">
<div class="h-[100vh] w-[100vw] flex">
          <div class="hidden lg:flex w-full lg:w-1/2 bg-bg bg-no-repeat bg-cover
          justify-around items-center">
            <div 
                  class=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
                  >

                  </div>
            <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 class="text-white font-bold text-4xl font-sans">Phim App</h1>
              <p class="text-white mt-1">The Best Recording Site</p>
              <div class="flex justify-center lg:justify-start mt-6">
                  <a href="#" class="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</a>
              </div>
            </div>
          </div>
          <div class="flex w-full lg:w-1/2 justify-center items-center bg-slate-900 space-y-8 ">
            <div class="w-full px-8 md:px-32 lg:px-24">
            <form class="bg-white rounded-md shadow-2xl p-5">
              <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Welcome to Phim</h1>
              <p class="text-sm font-normal text-gray-600 mb-3">Please Sign Up to use Phim</p>

              <SignUp after-sign-up-url="/" class="w-auto md:h-[70vh] h-full flex justify-center"/>
            </form>
            </div>
            
          </div>
      </div>

</div>

</template>

