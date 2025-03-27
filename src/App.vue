<template>
  <header>
    <Header />
  </header>
  <main class="w-full h-full">
    <div class="w-full h-100 pt-15 px-5 flex">
      <div class="w-full">
        <h1 class="text-6xl">3D-Showcase</h1>
        <p class="text-2xl">von Leander List</p>
        <ModelEntry title="Booleans" model="incubator" model_name="Pokemon GO: Inkubator" direction="right">
          Die Aufgabe Booleans war die letzte Aufgabe des 5. Jahrgangs.
          Die Aufgabenstellung bestand darin, eine Lootbox aus einem Videospiel in Maya zu modellieren.
          Die Lootbox sollte mithilfe von Booleans erstellt werden.

          Ich habe mich für einen Inkubator aus dem Spiel <b>Pokemon Go</b> entschieden.
          Dabei handelt es sich um eine Art Brutmaschine, die verwendet wird, um Eier auszubrüten.
          Das Modell wurde mit verschiedenen Texturen und Materialien versehen, um das passende Aussehen zu
          erzielen.
        </ModelEntry>
        <ModelEntry title="xGen" model="minion" :model_scaling="1.2" model_name="Minion" direction="left">
          alarm
        </ModelEntry>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import ModelEntry from './components/ModelEntry.vue';
</script>