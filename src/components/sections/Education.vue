<script setup lang="ts">
import Section from "../Section.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

type Education = {
  institution: string;
  studyType?: string;
  area: string;
  endDate: string;
  startDate: string;
  url?: string;
};

const i18n = useI18n();

const education_arr = computed(() => i18n.tm("education") as Education[]);
</script>
<template>
  <Section :title="$t('education_title')">
    <ul class="education-stack">
      <li
        v-for="{
          institution,
          studyType,
          area,
          startDate,
          endDate,
          url,
        } in education_arr"
        style="page-break-inside: avoid"
      >
        <article>
          <div class="title">
            <h3>
              <a
                class="url"
                :href="url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ institution }}
              </a>
            </h3>

            <time class="no-print">{{ endDate }}</time>
          </div>
          <time datetime="" class="print">
            <span class="uppercase">
              {{
                Intl.DateTimeFormat(`${$i18n.locale}`, {
                  month: "long",
                }).format(new Date(endDate.split("/")[0]))
              }}
            </span>
            {{ endDate.split("/")[1] }}
          </time>
          <h4>{{ studyType }}</h4>
          <p>
            {{ area }}
          </p>
        </article>
      </li>
    </ul>
  </Section>
</template>
<style scoped>
.education-stack {
  --gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: var(--inner-stack-spacing);
}

.education-stack > * {
  margin-top: 0;
  margin-bottom: 0;
}

.education-stack > * + * {
  margin-top: var(--gap);
}

/* article stack */
article {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: var(--inner-stack-spacing);
}

article > * {
  margin-block: 0;
}

article > * + * {
  margin-top: calc(var(--inner-stack-spacing) * 2);
}

article > .title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title > h3 {
  font-size: var(--size-0);
  font-weight: 600;
  letter-spacing: 0.009px;
}

.title > time.no-print {
  font-size: var(--size--2);
  font-weight: 400;
  opacity: 0.8;
}

article > h4 {
  font-size: var(--size--2);
}

a.url:hover {
  text-decoration: underline;
  cursor: pointer;
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
}
</style>
