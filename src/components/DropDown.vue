<script>
import DropDownContent from "./dropDownContent.vue"

export default {
    components: {
        DropDownContent
    },
    data() {
        return {
            showComponent: false
        }
    },
    methods: {
        toggleComponent() {
            this.showComponent = !this.showComponent;
        }
    }
}
</script>
<template>
    <div>
        <div class="mx-2" @click="toggleComponent">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" class="w-14 h-10">
                <path d="M8 2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
        </div>
        <DropDownContent v-show="showComponent" />
    </div>
 </template>
 
