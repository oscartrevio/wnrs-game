<template>
  <router-view />
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Feedback from "./components/Feedback.vue";

export default {
  name: "App",
  components: {
    Home,
    About,
    Feedback,
  },
};
</script>
