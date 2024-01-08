<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <div class="fixed flex flex-col top-14 mt-5 left-0 w-full h-full gap-6 items-center justify-center bg-white bg-opacity-90 pb-[10vh]">
 
        <a href="#" class="block px-4 py-2 font-bold font-sans rounded-xl text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" @click="router.push('/')">Profile</a>
            <a href="#" class="block px-4 py-2 font-bold font-sans rounded-xl  text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" >My Audios</a>
            <a href="#" class="block px-4 py-2  font-bold font-sans rounded-xl text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">My Videos</a>
            <a href="#" class="block px-4 py-2  font-bold font-sans rounded-xl text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">My Records</a>
            <a href="#" class="block px-4 py-2 font-bold font-sans rounded-xl  text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" @click="router.push('/setting')">My Setting</a>
            <a href="#" class="block px-4 py-2  font-bold font-sans rounded-xl text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" @click="router.push('/signin')">Sign In</a>
            <a href="#" class="block px-4 py-2  font-bold font-sans rounded-xl text-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Logout</a>

    </div>
 </template>