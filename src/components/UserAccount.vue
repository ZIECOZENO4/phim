<script setup lang="ts">
import { useUser } from 'vue-clerk'

const { isLoaded, isSignedIn, user } = useUser()
</script>

<template>
  <div class=" flex flex-row mx-2">
      <img v-if="isLoaded && isSignedIn && user" :src="user.imageUrl" class=" h-[50px] w-[50px] rounded-full mx-3 " />
      <h1 class="hidden md:flex  md:flex-col text-xl font-serif font-bold text-yellow-50 mt-2" v-if="isLoaded && isSignedIn && user">Hello, {{ user.firstName }}</h1>
      <h1 class="md:hidden text-xl font-serif font-bold text-yellow-50 mt-2" v-if="isLoaded && isSignedIn && user"> {{ user.firstName }}</h1>
  </div>
</template>