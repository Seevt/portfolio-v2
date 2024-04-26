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
            <h3 class="print">
              {{ position }}, {{ company }} ({{ remote_string }})
            </h3>

            <h3 class="no-print">
              {{ position }} {{ " " }}
              <span class="remote-job">{{ work_type }}</span>
              <span v-if="remote" class="remote-job">{{ remote_string }}</span>
            </h3>
            <time class="no-print">
              {{ startDate }} -
              {{ endDate }}
            </time>
          </div>
          <time datetime="" class="print">
            <span class="uppercase">
              {{
                Intl.DateTimeFormat(`${$i18n.locale}`, {
                  month: "long",
                }).format(new Date(startDate.split("/")[0]))
              }}
            </span>
            {{ startDate.split("/")[1] }} -

            <span class="uppercase">
              {{
                Intl.DateTimeFormat(`${$i18n.locale}`, {
                  month: "long",
                }).format(new Date(endDate.split("/")[0]))
              }}
            </span>
            {{ endDate.split("/")[1] }}
          </time>
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

.position time {
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

h3.print {
  display: none;
}

time.print {
  display: none;
}

@media print {
  time.no-print {
    display: none;
  }

  time.print {
    display: block;
    font-size: var(--size--2);
    font-weight: 500;
  }

  .uppercase {
    text-transform: capitalize;
  }

  h3.print {
    display: block;
    font-size: var(--size--1);
    font-weight: 600;
  }

  .remote-job {
    display: none;
  }

  h3.no-print,
  h4 {
    display: none;
  }
}
</style>
