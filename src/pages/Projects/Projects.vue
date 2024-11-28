<script setup lang="ts">
import Card from "./Card.vue";

const list = [
  {
    src: "./../../../src/assets/google_calendar.png",
    title: "Google Calendar",
    desc: [
      `Developed a web application connecting calendar enthusiasts with tasks and activities.`,
      `Remind you of the tasks that will end today.`,
      `Click a date will show a visual modal with your tasks and activities.`,
    ],
    github: "https://github.com/jssosoTo/calendar-google",
    preview: "https://calendar-google.vercel.app/",
  },
  {
    src: "./../../../src/assets/list_talk.png",
    title: "List Talk",
    desc: [
      `Build a PC web application to improve efficiency`,
      `You can add a task that includes an expiration date, title, details, and priority.`,
      `Classifying your tasks that will make you more efficient.`,
    ],
    github: "https://github.com/jssosoTo/ListTalk_Vue",
    preview: "https://list-talk-vue.vercel.app/",
  },
  {
    src: "./../../../src/assets/tomato.png",
    title: "T00Mato",
    desc: [
      `A tool website that combines tomato clock time working method to help you focus.`,
      `Visualized data allows you to have a clearer understanding of your efficiency.`,
      `Countdown, music playback function, target card, and full screen function allow you to focus on your goals.`,
    ],
    github: "https://github.com/jssosoTo/T00Mato_v2",
    preview: "https://t00-mato-v2-theta.vercel.app/",
  },
  {
    src: "./../../../src/assets/blog.png",
    title: "P0PC0RN-STATION",
    desc: [
      `My personal blog website is used to gain a better understanding of my experiences.`,
      `Friendly bilingual translation button and night mode switching function.`,
    ],
    github: "https://github.com/jssosoTo/Blog_vue",
    preview: "https://blog-vue-delta.vercel.app/",
  },
];
</script>

<template>
  <div class="px-32 projects">
    <h2 class="text-center text-4xl mt-16 mb-8">PROJECTS</h2>
    <div class="grid grid-cols-3 gap-8 content">
      <Card v-for="item in list" v-bind="item" />
    </div>
  </div>
</template>

<style scoped>
.projects {
  font-family: "Edu AU VIC WA NT Arrows", cursive;
  padding-bottom: 8vh;
}

.content {
  font-family: "Space Grotesk", sans-serif;
}

.taskLi {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.taskLi li {
  border-left: 3px solid rgb(64, 158, 255);
  padding-left: 0.2rem;
}
</style>
