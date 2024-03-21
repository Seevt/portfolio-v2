<script setup lang="ts">
import { RouterView } from 'vue-router'
import LangPicker from "@/components/LangPicker.vue"
import { i18n } from "@/utils/i18n";


import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter()


onMounted(() => {
  router.push(`/${i18n.global.fallbackLocale.value}`)
})
</script>

<template>
  <RouterView />
  <LangPicker />
</template>

<style scoped></style>
