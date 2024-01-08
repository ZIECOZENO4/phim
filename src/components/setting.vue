<script setup lang="ts">
import { UserProfile, useAuth } from 'vue-clerk'

const { isSignedIn } = useAuth()
</script>

<template>
    <div class=" flex pl-24 rounded-[0px] m-0 h-[90vh] w-[80vw]">
        <UserProfile v-if="isSignedIn" />
    </div>

</template>