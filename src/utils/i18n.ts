import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

export const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  legacy: false,
  messages: {
    en: en,
    es: es,
  },
});
