<template>
    <div class="flex justify-between items-center w-full py-10 border-b">
        <div v-if="props.direction === 'left'">
            <img :src="`images/${props.images}.png`" :alt="`${props.subheading} image`"
                class="h-100 w-full object-cover" v-if="props.images.length === 1" />
            <figure class="diff h-100 w-100" tabindex="0" v-else>
                <div class="diff-item-1" role="img">
                    <img alt="daisy" :src="`images/${props.images[0]}.png`" />
                </div>
                <div class="diff-item-2" role="img" tabindex="0">
                    <img alt="daisy" :src="`images/${props.images[1]}.png`" />
                </div>
                <div class="diff-resizer"></div>
            </figure>
        </div>
        <div class="px-10 w-full">
            <h2 class="text-3xl">{{ props.title }}</h2>
            <p class="text-xl text-gray-400 mb-3">{{ props.subheading }}</p>
            <p class="text-xl">
                <slot></slot>
            </p>
        </div>
        <div v-if="props.direction !== 'left'">
            <img :src="`images/${props.images[0]}.png`" :alt="`${props.subheading} image`"
                class="h-100 w-full object-cover" v-if="props.images.length === 1" />
            <figure class="diff h-100 w-100" tabindex="0" v-else>
                ALARM
                <div class="diff-item-1" role="img">
                    <img alt="daisy" :src="`images/${props.images[0]}.png`" />
                </div>
                <div class="diff-item-2" role="img" tabindex="0">
                    <img alt="daisy" :src="`images/${props.images[1]}.png`" />
                </div>
                <div class="diff-resizer"></div>
            </figure>
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
    images: {
        type: Array<String>,
        required: true
    },
    subheading: {
        type: String,
        required: true
    }
});

</script>