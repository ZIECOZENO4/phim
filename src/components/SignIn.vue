<script setup lang="ts">
import { SignIn } from 'vue-clerk'
</script>

<template>
<div class="bg-black">
<div class="h-[100vh] w-[100vw] flex">
          <div class="hidden lg:flex w-full lg:w-1/2 login_img_section
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
              <h1 class="text-white font-bold text-4xl font-sans">Phim</h1>
              <p class="text-white mt-1">Your Best Recording App</p>
              <div class="flex justify-center lg:justify-start mt-6">
                  <a href="#" class="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</a>
              </div>
            </div>
          </div>
          <div class="flex w-full lg:w-1/2 justify-center items-center bg-slate-900 space-y-8 ">
            <div class="w-full px-8 md:px-32 lg:px-24">
            <form class="bg-white rounded-md shadow-2xl p-5">
              <h1 class="text-gray-800 font-bold text-2xl mb-1">Welcome Back!</h1>
              <p class="text-sm font-normal text-gray-600 mb-3">Please Sign In to use Phim</p>

              <SignIn after-sign-in-url="/" class="w-auto h-[70vh] md:h-[70vh] flex justify-center"/>
            </form>
            </div>
            
          </div>
      </div>

</div>

</template>

