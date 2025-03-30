<template>
  <header>
    <Header />
  </header>
  <main class="w-full h-full">
    <div class="w-full h-100 pt-15 px-5 flex">
      <div class="w-full">
        <h1 class="text-6xl">3D-Showcase</h1>
        <p class="text-2xl">von Leander List</p>
        <div v-for="section, index in sections" :key="section.title">
          <h2 class="text-4xl mt-10" :ref="numberToString">{{ section.title }}</h2>
          <div v-for="entry, index in section.entries" :key="entry.title">
            <ModelEntry :title="entry.title" :model_scaling="entry.model_scaling" :model="entry.path[0]"
              :subheading="entry.subheading" :direction="index % 2 === 0 ? 'right' : 'left'"
              v-if="entry.type === 'model'">
              {{ entry.description }}
            </ModelEntry>
            <ImageEntry :title="entry.title" :images="entry.path" :subheading="entry.subheading"
              :direction="index % 2 === 0 ? 'right' : 'left'" v-if="entry.type === 'image'">
              {{ entry.description }}
            </ImageEntry>
            <VideoEntry :title="entry.title" :video="entry.path[0]" :subheading="entry.subheading"
              :direction="index % 2 === 0 ? 'right' : 'left'" v-if="entry.type === 'video'">
              {{ entry.description }}
            </VideoEntry>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import ModelEntry from './components/ModelEntry.vue';
import ImageEntry from './components/ImageEntry.vue';
import VideoEntry from './components/VideoEntry.vue';
import Header from './components/Header.vue';

import entryData from "@/assets/projects.json";
import type { Section } from "@/types/entries";
import { ref } from 'vue';

const sections: Section[] = entryData;

const one = ref<HTMLElement | null>(null);
const two = ref<HTMLElement | null>(null);
const three = ref<HTMLElement | null>(null);

function scrollToHeading(heading: string) {
  console.log(heading);
  switch (heading) {
    case "one":
      if (one.value)
        one.value.scrollIntoView({ behavior: "smooth" });
      break;
    case "two":
      if (two.value)
        two.value.scrollIntoView({ behavior: "smooth" });
      break;
    case "three":
      if (three.value)
        three.value.scrollIntoView({ behavior: "smooth" });
      break;
    default:
      break;
  }
}


function numberToString(num: number): string {
  switch (num) {
    case 3:
      return "three";
    case 4:
      return "four";
    case 5:
      return "five";
    default:
      return "zero";
  }
}
</script>