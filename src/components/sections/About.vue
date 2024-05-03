<script setup lang="ts">
import Section from "../Section.vue";
</script>
<template>
  <Section :title="$t('basics.about.title')">
    <p>
      {{ $t("basics.about.summary") }}
    </p>
  </Section>
</template>
<style scoped>
p {
  margin-top: calc(var(--inner-stack-spacing));
}
</style>
