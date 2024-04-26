<template>
  <section>
    <h2>{{ props.title }}</h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
  },
});
</script>
