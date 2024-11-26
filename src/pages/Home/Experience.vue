<script setup lang="ts">
import { ElCard, ElTimeline, ElTimelineItem } from "element-plus";
</script>

<template>
  <h4 class="text-4xl mt-4 mb-4">Experience</h4>
  <ElTimeline class="experience">
    <ElTimelineItem center timestamp="2024-10 - Present" placement="top">
      <ElCard>
        <h4 class="text-xl">Junior Frontend Developer</h4>
        <p class="text-lime-600">XiaMen YiCai</p>
        <ul>
          <li>
            Build Backend projects with React, Ant Design, Ant Charts and Umi.js
          </li>
          <li>Build Client projects with Flutter, Dart</li>
        </ul>
      </ElCard>
    </ElTimelineItem>
    <ElTimelineItem center timestamp="2023-07 - 2023-06" placement="top">
      <ElCard>
        <h4 class="text-xl">Frontend Developer(intern)</h4>
        <p class="text-lime-600">Fuzhou Tastien</p>
        <ul>
          <li>Build Backend projects with React, Ant Design and Umi.js</li>
          <li>Build Mini-Programme projects with React, Ant Design Mobile</li>
          <li>Build Company official website with HTML, CSS and JavaScript</li>
        </ul>
      </ElCard>
    </ElTimelineItem>
    <ElTimelineItem center timestamp="2023-07 - 2023-06" placement="top">
      <ElCard>
        <h4 class="text-xl">Freelancer Frontend Developer</h4>
        <p class="text-lime-600">Self-employed</p>
        <ul>
          <li>
            Studied frontend development independently, focusing on Javascript,
            HTML, CSS, jQuery, Bootstrap, and Vue.js.
          </li>
        </ul>
      </ElCard>
    </ElTimelineItem>
  </ElTimeline>
</template>

<style scoped>
.experience ul {
  list-style-type: disc;
  padding-left: 1rem;
}
</style>
