<script setup lang="ts">
import Section from "../Section.vue";
import { skills } from "@/locales/en.json";
import OtherSkills from "./OtherSkills.vue"


</script>
<template>
  <div style="page-break-inside: avoid">
    <Section :title="$t('skills_title')">
      <ul class="skills-cluster">
        <li class="list-item-box" v-for="skill in skills" :key="skill.name">
          {{ skill.name }}
        </li>
      </ul>
      <OtherSkills />
    </Section>
  </div>
</template>
<style scoped>
.skills-cluster {
  --space: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space);
  justify-content: flex-start;
  align-items: center;
  margin-top: calc(var(--inner-stack-spacing));
}

li.list-item-box {
  padding: 0.15rem 0.5rem;
  border-radius: calc(var(--border-radius) / 2);
  color: hsl(var(--faded-description-color));
  background: hsl(var(--accent-color) / 0.8);
  font-size: var(--size--2);
  cursor: default;
}

@media print {
  .skills-cluster {
    display: grid;
    gap: 0px;
    grid-template-columns: 1fr 1fr;
    list-style: disc inside;
  }

  li.list-item-box {
    color: hsl(0, 0%, 10%);
    background-color: transparent;
    line-height: 0.9;
  }

  li.list-item-box::marker {
    font-size: 1.2em;
  }
}
</style>
