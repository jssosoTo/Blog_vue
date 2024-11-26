<script setup lang="ts">
import { ElCollapse, ElCollapseItem, ElTag } from "element-plus";
import { ref } from "vue";
import Experience from "./Experience.vue";

const activeNames = ref(["1", "2", "3", "4"]);
</script>

<template>
  <section class="desc py-16">
    <h2 class="text-4xl text-center mb-2">ABOUT</h2>
    <p class="intro">
      Hey there!👋 I'm P0PC0RN SU, a Front-End Developer with over 1 years of
      work experience, I have been studying Front-End skills for 2 years.
    </p>
    <p class="intro">
      <span class="text-amber-300">JavaScript</span> fuel my passion and it's my
      favorite programming language.<br />
      I'm looking for a job as a front-end engineer.
      <a class="underline text-cyan-400" href="mailTo:2982538245@qq.com"
        >contact me by email</a
      >
    </p>

    <section>
      <h4 class="text-4xl mt-4">Skills</h4>
      <ElCollapse v-model="activeNames" class="w-full">
        <ElCollapseItem title="Language" name="1">
          <div class="flex gap-2">
            <ElTag type="danger">HTML</ElTag>
            <ElTag type="success">CSS</ElTag>
            <ElTag>Dart</ElTag>
            <ElTag type="warning">JavaScript</ElTag>
            <ElTag>TypeScript</ElTag>
          </div>
        </ElCollapseItem>
        <ElCollapseItem title="Framework" name="2">
          <div class="flex gap-2">
            <ElTag>React</ElTag>
            <ElTag type="success">Vue3</ElTag>
            <ElTag>Flutter</ElTag>
          </div>
        </ElCollapseItem>
        <ElCollapseItem title="Backend" name="3">
          <div class="flex gap-2">
            <ElTag>Node.js</ElTag>
            <ElTag type="danger">Nest.js</ElTag>
          </div>
        </ElCollapseItem>
        <ElCollapseItem title="Component Library" name="4">
          <div class="flex gap-2">
            <ElTag>Ant Design</ElTag>
            <ElTag type="success">Element Plus</ElTag>
          </div>
        </ElCollapseItem>
      </ElCollapse>
    </section>

    <section>
      <Experience />
    </section>
  </section>
</template>

<style scoped>
.desc {
  font-family: "Space Grotesk", sans-serif;

  width: 42rem;
}

.intro {
  text-indent: 2em;
  font-size: 1.2rem;
}
</style>
