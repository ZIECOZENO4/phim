<script setup lang="ts">

import NavBar from '../components/AppNavbar.vue'
import SideBar from '../components/SideBar.vue'
</script>

<template class=" w-[100vw] h-[100vh] overflow-hidden">
<div class=" bg-bg bg-no-repeat bg-cover w-[100vw] overflow-hidden">
  <nav class=" sticky z-10">
    <NavBar />
  </nav>

  <div class=" w-[100vw] p-0 m-0 bg-black bg-opacity-80 hidden md:flex md:flex-row">
<SideBar />
  </div>
  <div class=" ">
  </div>
</div>
 </template>
 
