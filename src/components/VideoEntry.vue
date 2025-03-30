<template>
    <div class="flex justify-between items-center w-full py-10 border-b">
        <div v-if="props.direction === 'left'">
            <video width="320" height="240" class="h-100 w-full object-cover" controls>
                <source :src="`videos/${props.video}.mp4`" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="px-10 w-full">
            <h2 class="text-3xl">{{ props.title }} {{ props.video }}</h2>
            <p class="text-xl text-gray-400 mb-3">{{ props.subheading }}</p>
            <p class="text-xl">
                <slot></slot>
            </p>
        </div>
        <div v-if="props.direction !== 'left'">
            <video width="320" height="240" class="h-100 w-full object-cover" controls>
                <source :src="`videos/${props.video}.mp4`" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    direction: {
        type: String,
        required: true
    },
    video: {
        type: String,
        required: true
    },
    subheading: {
        type: String,
        required: true
    }
});

</script>