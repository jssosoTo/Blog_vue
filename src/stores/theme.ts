import { defineStore } from "pinia";
import { ref, toValue, watch } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const isLight = ref<boolean>(true);

  const switchTheme = () => {
    isLight.value = !toValue(isLight);
  };

  watch(
    isLight,
    () => {
      document.querySelector(".page-theme")?.classList.toggle("dark");
    },
    { flush: "post" }
  );

  return {
    switchTheme,
    isLight,
  };
});
