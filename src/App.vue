<script setup lang="ts">
import {
  ElAvatar,
  ElCol,
  ElConfigProvider,
  ElHeader,
  ElRow,
  ElSwitch,
} from "element-plus";
import { useLanguageStore } from "./stores/language";
import Logo from "./assets/popcorn.png";
import TranslateIcon from "./components/TranslateIcon.vue";
import { MoonNight, Sunrise } from "@element-plus/icons-vue";
import { useThemeStore } from "./stores/theme";
import { RouterLink, RouterView } from "vue-router";
const languageStore = useLanguageStore();
const themeStore = useThemeStore();
const translator = languageStore.translator;
</script>

<template>
  <ElConfigProvider :locale="languageStore.locale">
    <div class="flex flex-col min-h-screen">
      <ElHeader
        class="flex items-center border-b sticky top-0 z-10 backdrop-blur-[0.5rem] bg-opacity-90"
        :class="themeStore.isLight ? 'bg-white' : 'bg-neutral-900'"
      >
        <ElRow class="w-full" :align="'middle'">
          <ElCol :span="8">
            <div class="flex items-center gap-2 pl-8">
              <ElAvatar :src="Logo" class="border border-cyan-600" />
              <span class="text-cyan-600">P0PC0RN-STATION</span>
            </div>
          </ElCol>
          <ElCol :span="16">
            <div class="flex items-center gap-4 justify-end pr-8">
              <RouterLink
                to="/"
                :class="[$route.path === '/' && 'activeLink']"
                >{{ translator.routers.home }}</RouterLink
              >
              <RouterLink
                to="/projects"
                :class="[$route.path === '/projects' && 'activeLink']"
                >{{ translator.routers.projects }}</RouterLink
              >
              <!-- <RouterLink
                to="/contact"
                :class="[$route.path === '/contact' && 'activeLink']"
                >{{ translator.routers.contact }}</RouterLink
              > -->

              <ElSwitch
                v-model="themeStore.isLight"
                :active-action-icon="Sunrise"
                :inactive-action-icon="MoonNight"
              />
              <TranslateIcon
                class="icon"
                @click="languageStore.switchLanguage"
              />
            </div>
          </ElCol>
        </ElRow>
      </ElHeader>
      <main class="flex-1"><RouterView /></main>
    </div>
  </ElConfigProvider>
</template>

<style scoped>
.icon {
  cursor: pointer;
  font-size: 1.65rem;
}

.activeLink {
  color: #409eff;
}

.activeLink:hover {
  color: #79bbff;
}
</style>
