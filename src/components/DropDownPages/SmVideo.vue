<script  setup lang="ts">
import NavBar from '../AppNavbar.vue'
import { ref } from 'vue';
import SmVideoRec from "./SmVideoRec.vue"
let showComponent = ref(false);

function toggleComponent() {
 showComponent.value = !showComponent.value;
}
</script>
<template>
    <div class=" m-0 p-o w-full">
        <nav class=" sticky z-10">
    <NavBar />
  </nav>
<div class=" bg-bg bg-no-repeat bg-cover w-[100vw] overflow-hidden h-screen flex items-center justify-center p-3">
    <div class="w-full max-w-md p-9 bg-white rounded-lg shadow-lg">
        <h1 class="text-center text-2xl sm:text-2xl font-semibold mb-4 text-gray-800">No Video Yet</h1>
        <div @click="toggleComponent"  class="bg-gray-100 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md" id="dropzone">
            <label for="fileInput" class="cursor-pointer flex flex-col items-center space-y-2">
                <svg class="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <span class="text-gray-600">Click To Add </span>
                <span class="text-gray-500 text-sm">(Video Now)</span>
            </label>
        </div>
        <SmVideoRec v-if="showComponent" />
    </div>
  </div>
 
    </div>
</template>