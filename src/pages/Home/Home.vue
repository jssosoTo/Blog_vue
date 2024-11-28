<script setup lang="ts">
import { Bottom } from "@element-plus/icons-vue";
import { ElAvatar, ElIcon } from "element-plus";
import About from "./About.vue";
import Footer from "../../components/Footer.vue";
</script>

<template>
  <div class="max-h-full bg-gradient">
    <section
      class="flex flex-col items-center animate__animated animate__fadeInDown"
    >
      <div class="wave-animation-fast border-white border-2 avatar-container">
        <ElAvatar
          class="header-avatar animate__bounceIn wave-animation"
          :src="'https://avatars.githubusercontent.com/u/101981442?v=4'"
        />
      </div>
      <h2 class="hi">Hi, I'm <span class="hi-name">P0PC0RN SU</span></h2>
      <h4 class="job">Frontend Developer</h4>
    </section>
    <div
      class="absolute bottom-4 left-1/2 -translate-x-1/2 text-4xl text-white hint-arrow"
    >
      <ElIcon><Bottom /></ElIcon>
    </div>
  </div>
  <div class="flex justify-center"><About /></div>
  <Footer></Footer>
</template>

<style scoped>
@keyframes extendText {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes fadeBG {
  from {
    background-position: 0;
  }
  to {
    background-position: 400%;
  }
}

@keyframes translate-text {
  from {
    margin-bottom: 1rem;
  }
  to {
    margin-bottom: 0;
  }
}

@keyframes wave {
  0%,
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 40% 60% 70% 30% / 40% 70% 30% 60%;
  }
}

.wave-animation-fast {
  animation: wave 5s ease-in infinite;

  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation-delay: 1s;
}

.wave-animation {
  animation: wave 5s ease-out infinite;
  overflow-clip-margin: content-box;
  overflow: clip;
}

.hint-arrow {
  animation: translate-text 1s linear infinite alternate;
}

.bg-gradient {
  background-image: linear-gradient(
    90deg,
    rgb(30, 101, 0),
    rgb(21, 62, 0),
    #348300,
    rgb(30, 101, 0)
  );
  height: 94vh;
  background-size: 400%;
  background-position: 0%;
  animation: fadeBG 12s linear infinite;
}

.bg-gradient::after,
.bg-gradient::before {
  content: "";
  clear: both;
}

.avatar-container {
  margin-top: 20vh;
}

.header-avatar {
  width: 15rem;
  height: 15rem;
}

.hi {
  margin-top: 0.4rem;
  color: white;
  font-size: 3rem;
  font-family: "Edu AU VIC WA NT Arrows", cursive;
}
.hi-name {
  color: #409eff;
}

.job {
  color: white;
  font-size: 1.2rem;
  font-style: italic;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: underline double #409eff;
}
</style>
