<script setup lang="ts">
import Section from "../Section.vue";
import { computed } from "vue";
import { basics } from "@/locales/en.json";

import { useI18n } from "vue-i18n";

const i18n = useI18n();

type Project = {
  name: string;
  url?: string;
  isActive: boolean;
  description: string;
  highlights: string[];
};

const projects = computed(() => i18n.tm("projects") as Project[]);
</script>
<template>
  <Section :title="$t('projects_title')">
    <h3 class="print">
      {{ $t("projects_description") }}
      <span>
        {{ basics.url }}
      </span>
    </h3>
    <ul class="grid">
      <li v-for="project in projects">
        <article>
          <h3>
            <template v-if="project.isActive">
              <a
                :title="`Visitar ${project.name}`"
                class="url"
                :href="project.url!"
                target="_blank"
              >
                {{ project.name }}
              </a>
              <span style="color: #22c55e; margin-left: 5px">&bull;</span>
            </template>

            <template v-else>{{ project.name }}</template>
          </h3>
          <p>
            {{ project.description }}
          </p>
          <ul class="tags" role="list">
            <li v-for="tag in project.highlights">
              <span>
                {{ tag }}
              </span>
            </li>
          </ul>
        </article>
      </li>
    </ul>
  </Section>
</template>
<style scoped>
.grid {
  --space: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: var(--space);
  margin-top: var(--inner-stack-spacing);
}

.grid > li {
  padding: 0.8rem;
  border: 1.5px solid hsl(var(--terciary-color) / 0.8);
  border-radius: calc(var(--border-radius) / 1.4);
}

article {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
}

article > * {
  margin-block: 0;
}

article > * + * {
  margin-top: calc(var(--inner-stack-spacing) * 2);
}

article > :nth-child(3) {
  box-sizing: content-box;
  padding-top: calc(var(--inner-stack-spacing) * 4);
  margin-block-start: auto;
}

article > h3 {
  font-size: var(--size-0);
  font-weight: 600;
  letter-spacing: 0.009px;
  /* prevent word overflow */

  overflow-wrap: break-word;
  min-width: 0;
}

article > p {
  font-size: var(--size--2);
}

ul.tags {
  --space: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space);
}

ul.tags > li {
  padding-block: 5px;
  padding-inline: 8px;
  background: hsl(var(--terciary-color) / 0.8);
  font-size: var(--size--3);
  height: fit-content;
  width: fit-content;
  border-radius: calc(var(--border-radius) / 3);
}

ul.tags > li > span {
  font-size: var(--size--3);
  color: var(--secondary-color);
  font-weight: 600;
}

a.url:hover {
  text-decoration: underline;
  cursor: pointer;
}

.print {
  display: none;
}

h3.print {
  font-size: var(--size--1);
  margin-bottom: 15px;
  margin-top: 5px;
  color: hsl(var(--description-color));
}

h3.print > span {
  text-decoration: underline;
}

@media print {
  h3.print {
    display: block;
  }

  .grid {
    row-gap: 10px;
    column-gap: 10px;
  }
  /* .grid > :nth-child(-n + 3) {
    margin-bottom: 0px;
    background-color: red;
  } */

  ul.tags {
    display: none;
  }
}
</style>
