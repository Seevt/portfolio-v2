<script setup lang="ts">
import About from "@/components/sections/About.vue";
import Education from "@/components/sections/Education.vue";
import Experience from "@/components/sections/Experience.vue";
import Hero from "@/components/sections/Hero.vue";
import Proyects from "@/components/sections/Proyects.vue";
import Skills from "@/components/sections/Skills.vue";
</script>

<template>
  <main class="box-wrapper">
    <div class="center-wrapper">
      <div class="stack-wrapper">
        <Hero />
        <About />
        <Proyects />
        <Skills />
        <Experience />
        <Education />
      </div>
    </div>
  </main>
</template>

<style scoped>
.box-wrapper {
  padding-inline: 1rem;
  padding-block: 2rem;
}

.center-wrapper {
  width: min(100%, 70ch);
  margin-inline: auto;
}

.stack-wrapper {
  --gap: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.stack-wrapper > * {
  margin-top: 0;
  margin-bottom: 0;
}

.stack-wrapper > * + * {
  margin-top: var(--gap);
}
</style>
