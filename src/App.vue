<template>
  <header>
    <Header />
  </header>
  <main class="w-full h-full">
    <div class="w-full h-100 pt-15 px-5 flex">
      <div class="w-full">
        <h1 class="text-6xl">3D-Showcase</h1>
        <p class="text-2xl">von Leander List</p>
        <div class="flex justify-between items-center w-full mt-10 border-b">
          <div class="p-10">
            <h2 class="text-4xl">Booleans</h2>
            <p class="text-xl">
              Die Aufgabe Booleans war die letzte Aufgabe des 5. Jahrgangs.
              Die Aufgabenstellung bestand darin, eine Lootbox aus einem Videospiel in Maya zu modellieren.
              Die Lootbox sollte mithilfe von Booleans erstellt werden.
                
              Ich habe mich für einen Inkubator aus dem Spiel <b>Pokemon Go</b> entschieden.
              Dabei handelt es sich um eine Art Brutmaschine, die verwendet wird, um Eier auszubrüten.
              Das Modell wurde mit verschiedenen Texturen und Materialien versehen, um das passende Aussehen zu erzielen.
            </p>
          </div>
          <div>
            <ModelViewer model="incubator" />
          </div>
          
        </div>

        <ModelViewer model="minion" />
      </div>

    </div>
  </main>
</template>

<script lang="ts" setup>
import ModelViewer from './components/ModelViewer.vue';
</script>