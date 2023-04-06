<template>
  <header>
    <PageTitle></PageTitle>
  </header>
  <main class="h-screen w-full">
    <div
      class="flex justify-center items-center p-4 m-4 text-sm text-green-800 rounded-xl bg-green-200/80 -z-50"
      role="alert"
      v-show="openAlert"
    >
      <svg
        aria-hidden="true"
        class="flex-shrink-0 inline w-6 h-6 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Success!</span> The message was sent
        succesfully.
      </div>
    </div>
    <div
      class="h-96 w-96 absolute inset-x-0 inset-y-1/2 mx-auto my-auto p-4 bg-card-texture bg-cover flex flex-col justify-center items-center font-main font-bold text-wnrs uppercase rounded-xl shadow-xl"
    >
      <h2 class="text-center mb-2 text-xl">FEEDBACK</h2>
      <form class="h-full w-full" @submit="handleSubmitFeedback">
        <div class="flex flex-col">
          <label for="name" class="mb-2">Your name</label>
          <input
            type="text"
            id="name"
            class="block p-3 mb-4 w-full text-sm text-blk bg-offwhite rounded-lg border border-gray-400 focus:ring-wnrs/50 focus:border-wnrs/50 placeholder-blk/80"
            placeholder="Name"
            v-model="name"
            required
          />
        </div>
        <div class="flex flex-col">
          <label for="message" class="mb-2">Your message</label>
          <textarea
            id="message"
            rows="5"
            class="block p-3 mb-4 w-full text-sm text-blk bg-offwhite rounded-lg border border-gray-400 focus:ring-wnrs/50 focus:border-wnrs/50 placeholder-blk/80"
            placeholder="Leave a message..."
            v-model="message"
            required
          ></textarea>
        </div>
        <button
          @click=""
          type="submit"
          class="bg-wnrs text-offwhite hover:bg-wnrs/90 focus:ring-4 ring-wnrs/50 p-3 w-24 rounded-xl uppercase shadow-lg"
        >
          Submit
        </button>
      </form>
      <div
        class="absolute h-96 w-96 bg-wnrs inset-auto rounded-full blur-xl -z-20 opacity-60 origin-[40%_50%] mix-blend-multiply animate-spin-slow"
      ></div>
      <div
        class="absolute h-96 w-96 bg-[#DA4444] inset-auto rounded-full blur-xl -z-20 opacity-60 origin-[60%_50%] animation-delay-1000 animate-spin-slow mix-blend-multiply"
      ></div>
    </div>
  </main>
  <footer>
    <NavBar></NavBar>
  </footer>
</template>
<script>
import PageTitle from "./PageTitle.vue";
import NavBar from "./NavBar.vue";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "Feedback",
  components: {
    PageTitle,
    NavBar,
  },
  data() {
    return {
      name: "",
      message: "",
      openAlert: false,
    };
  },
  methods: {
    handleSubmitFeedback() {
      addDoc(collection(db, "userMessages"), {
        name: this.name,
        message: this.message,
      });
      this.openAlert = true;
    },
  },
};
</script>
