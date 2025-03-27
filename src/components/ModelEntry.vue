<template>
    <div class="flex justify-between items-center w-full mt-10 border-b">
        <div v-if="props.direction === 'left'">
            <ModelViewer :model="props.model" :scaling="model_scaling"/>
        </div>
        <div class="px-10 w-full">
            <h2 class="text-4xl">{{ props.title }}</h2>
            <p class="text-xl text-gray-400 mb-3">{{ props.model_name }}</p>
            <p class="text-xl">
                <slot></slot>
            </p>
        </div>
        <div v-if="props.direction !== 'left'">
            <ModelViewer :model="props.model" :scaling="model_scaling"/>
        </div>
    </div>
</template>

<script lang="ts" setup>

import ModelViewer from './ModelViewer.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    direction: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    model_scaling: {
        type: Number,
        required: false
    },
    model_name: {
        type: String,
        required: true
    }
});

</script>