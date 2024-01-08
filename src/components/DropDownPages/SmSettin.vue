<script setup lang="ts">
import { UserProfile, useAuth } from 'vue-clerk'

import NavBar from '../../components/AppNavbar.vue'
const { isSignedIn } = useAuth()
</script>

<template>
  <div
    class="bg-bg bg-no-repeat bg-cover text-white flex justify-center items-center flex-col w-[100vw] overflow-hidden"
  >
    <NavBar />
    <UserProfile v-if="isSignedIn" />
  </div>
</template>
