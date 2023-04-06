import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Feedback from "./components/Feedback.vue";

// Routes
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/feedback", component: Feedback },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// App
const app = createApp(App);
app.use(router);

app.mount("#app");
