import { en, zhCn } from "element-plus/es/locales.mjs";
import { zh, en as En } from "./../../public/translation/index.js";
import { defineStore } from "pinia";
import { computed, ref, toValue } from "vue";

export const useLanguageStore = defineStore("language", () => {
  const LSLanguage = (localStorage.getItem("language") || "zh-cn") as
    | "zh-cn"
    | "en";
  const language = ref<"zh-cn" | "en">(LSLanguage);
  const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));
  const translator = computed(() => (language.value === "zh-cn" ? zh : En));

  const switchLanguage = () => {
    const oldLanguage = toValue(language);
    language.value = oldLanguage === "zh-cn" ? "en" : "zh-cn";
    localStorage.setItem("language", language.value);
    window.location.reload();
  };

  return {
    locale,
    translator,
    switchLanguage,
  };
});
