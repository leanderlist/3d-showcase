<template>
    <div class="flex justify-between items-center w-full py-10 border-b">
        <div v-if="props.direction === 'left'">
            <img :src="`images/${props.image}.png`" :alt="`${props.subheading} image`" class="h-100 w-full object-cover" />
        </div>
        <div class="px-10 w-full">
            <h2 class="text-3xl">{{ props.title }}</h2>
            <p class="text-xl text-gray-400 mb-3">{{ props.subheading }}</p>
            <p class="text-xl">
                <slot></slot>
            </p>
        </div>
        <div v-if="props.direction !== 'left'">
            <img :src="`images/${props.image}.png`" :alt="`${props.subheading} image`" class="h-100 w-full object-cover" />
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
    image: {
        type: String,
        required: true
    },
    subheading: {
        type: String,
        required: true
    }
});

</script>