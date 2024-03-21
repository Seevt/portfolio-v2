import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { RouterView } from "vue-router";
import { i18n } from "@/utils/i18n";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:locale",
      // multiple routes
      component: RouterView,
      children: [
        {
          path: "",
          component: HomeView,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  let locale = to.params
    .locale as (typeof i18n.global.availableLocales)[number];
  if (locale) {
    i18n.global.locale.value = locale;
    document.documentElement.lang = locale;
  } else {
    next({ path: `/${i18n.global.fallbackLocale.value}` });
    return;
  }
  next();
});

export default router;
