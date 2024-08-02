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
  summary_bullet_points: string[];
  startDate: string;
  endDate: string;
  stillWorking: string;
};

const work_arr = computed(() => i18n.tm("work") as Work[]);
</script>
<template>
  <Section :title="$t('experience_title')">
    <ul class="experience-stack">
      <li v-for="{
        position,
        company,
        startDate,
        endDate,
        summary,
        summary_bullet_points,
        remote,
        remote_string,
        work_type,
        stillWorking,
      } in work_arr">
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
            <time :style="{ fontWeight: stillWorking ? 'bold' : '' }" class="no-print">
              {{ startDate }} -
              {{ !Boolean(stillWorking) ? endDate : stillWorking }}
            </time>
          </div>
          <time datetime="" class="print">
            <!-- start date month -->
            <span class="uppercase">
              {{
                Intl.DateTimeFormat(`${$i18n.locale}`, {
                  month: "long",
                }).format(new Date(startDate.split("/")[0]))
              }}
            </span>
            <!-- start date year -->
            {{ startDate.split("/")[1] }} -

            <!-- end date month -->
            <div class="inline" v-if="!Boolean(stillWorking)">
              <span class="uppercase">
                {{
                  Intl.DateTimeFormat(`${$i18n.locale}`, {
                    month: "long",
                  }).format(new Date(endDate.split("/")[0]))
                }}
              </span>

              <!-- end date year -->
              {{ endDate.split("/")[1] }}
            </div>

            <div class="inline" v-else>
              <span>{{ stillWorking }}</span>
            </div>
          </time>
          <h4 class="company-name">
            {{ company }}
          </h4>
          <p class="summary">
            {{ summary }}
          </p>
          <ul class="bullet-point-list" v-if="summary_bullet_points">
            <li class="bullet-point" v-for="bullet_points in summary_bullet_points">
              {{ bullet_points }}
            </li>
          </ul>
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

.experience-stack>* {
  margin-top: 0;
  margin-bottom: 0;
}

.experience-stack>*+* {
  margin-top: var(--gap);
}

/* article stack */
article {
  --gap: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

article>* {
  margin-top: 0;
  margin-bottom: 0;
}

article>*+* {
  margin-top: var(--gap);
}

article>.position {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.position>h3 {
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

h3>.remote-job {
  background: hsl(var(--terciary-color) / 0.8);
  border-radius: calc(var(--border-radius) / 3);
  padding-block: 2px;
  padding-inline: 6px;
  font-size: var(--size--2);
}

article>h4 {
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

span[class="remote-job"]:empty {
  display: none;
}

.bullet-point-list:empty {
  display: none;
}

.bullet-point-list {
  --indent: -1em;
  display: flex;
  flex-direction: column;
  margin-top: calc(var(--inner-stack-spacing) * 2);
  gap: var(--inner-stack-spacing);
  list-style-type: square;
  list-style-position: inside;
  text-indent: var(--indent);
  padding-left: calc(var(--indent)*-1);
  margin-left: calc(var(--indent)*-1);
  /* 10ch less than normal container */
  width: min(100%, 65ch);
}

.bullet-point {
  color: hsl(var(--description-color));
  font-size: 0.85rem;
}

.inline {
  display: inline;
}
</style>
