<script setup lang="ts">
import Section from "../Section.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const i18n = useI18n();

type Work = {
  position: string;
  company: string;
  remote: boolean;
  remote_string: string;
  work_type: string;
  summary: string;
  startDate: string;
  endDate: string;
};

const work_arr = computed(() => i18n.tm("work") as Work[]);
</script>
<template>
  <Section :title="$t('experience_title')">
    <ul class="experience-stack">
      <li
        v-for="{
          position,
          company,
          startDate,
          endDate,
          summary,
          remote,
          remote_string,
          work_type,
        } in work_arr"
      >
        <article>
          <div class="position">
            <h3>
              {{ position }} {{ " " }}
              <span class="remote-job">{{ work_type }}</span>
              <span v-if="remote" class="remote-job">{{ remote_string }}</span>
            </h3>
            <span aria-role="date"> {{ startDate }}-{{ endDate }} </span>
          </div>
          <h4>
            {{ company }}
          </h4>
          <p>
            {{ summary }}
          </p>
        </article>
      </li>
    </ul>
  </Section>
</template>
<style scoped>
.experience-stack {
  --gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: var(--inner-stack-spacing);
}

.experience-stack > * {
  margin-top: 0;
  margin-bottom: 0;
}

.experience-stack > * + * {
  margin-top: var(--gap);
}

/* article stack */
article {
  --gap: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

article > * {
  margin-top: 0;
  margin-bottom: 0;
}

article > * + * {
  margin-top: var(--gap);
}

article > .position {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.position > h3 {
  --space: 8px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space);
  font-size: var(--size-0);
  font-weight: 600;
  letter-spacing: 0.009px;
}

.position > span[aria-role="date"] {
  font-size: var(--size--2);
  font-weight: 400;
  opacity: 0.8;
  margin-left: 10px;
}

h3 > .remote-job {
  background: hsl(var(--terciary-color) / 0.8);
  border-radius: calc(var(--border-radius) / 3);
  padding-block: 2px;
  padding-inline: 6px;
  font-size: var(--size--2);
}

article > h4 {
  font-size: var(--size--2);
}
</style>
