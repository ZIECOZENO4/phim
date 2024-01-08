<script setup lang="ts">
import { UserProfile, useAuth } from 'vue-clerk'

import NavBar from '../../components/AppNavbar.vue'
const { isSignedIn } = useAuth()
</script>


<template>
<div class="bg-bg bg-no-repeat bg-cover text-white">
    <NavBar /> 
        <UserProfile v-if="isSignedIn" />
    </div>

</template>