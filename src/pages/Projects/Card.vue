<script setup lang="ts">
import { ElButton } from "element-plus";

const { src, title, desc, github, preview } = defineProps<{
  src: string;
  title: string;
  desc: Array<string>;
  github: string;
  preview: string;
}>();

function handleToPage(location: string) {
  location = location.startsWith("http") ? location : "https://";
  window.open(location, "_blank");
}
</script>

<template>
  <div
    style="height: 60vh"
    class="flex flex-col rounded-2xl overflow-hidden border"
  >
    <img
      class="w-full h-2/5 transition-all duration-300 object-fill hover:scale-110"
      :src="src"
    />
    <div style="padding: 14px" class="flex-1 flex flex-col justify-between">
      <h4 class="text-3xl">{{ title }}</h4>
      <ul class="taskLi">
        <li v-for="item in desc">{{ item }}</li>
      </ul>
      <div>
        <ElButton type="primary" plain @click="handleToPage(github)"
          >Github</ElButton
        >
        <ElButton type="primary" plain @click="handleToPage(preview)"
          >Preview</ElButton
        >
      </div>
    </div>
  </div>
</template>
