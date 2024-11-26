<script setup lang="ts">
import { ElFooter } from "element-plus";
import Github from "./Github.vue";
import Mail from "./Mail.vue";
</script>

<template>
  <ElFooter class="border-t">
    <div class="intro">
      <div class="flex justify-between items-center">
        <section>
          <h2 class="text-2xl">P0PC0RN SU</h2>
          <p class="text-sm">Front-End Engineer</p>
        </section>
        <section class="flex gap-4">
          <a
            class="cursor-pointer"
            target="_blank"
            href="https://github.com/jssosoTo"
            ><Github
          /></a>
          <a
            class="cursor-pointer"
            target="_blank"
            href="mailTo:2982538245@qq.com"
            ><Mail
          /></a>
        </section>
      </div>
      <div class="text-center mt-4">© 2024 P0PC0RN SU</div>
    </div>
  </ElFooter>
</template>

<style scoped>
.intro {
  font-family: "Space Grotesk", sans-serif;
  padding: 2.6rem 2rem;
}
</style>
