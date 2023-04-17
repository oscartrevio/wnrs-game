<template>
  <body class="h-screen w-screen overflow-y-hidden">
    <header>
      <PageTitle />
    </header>
    <div
      class="absolute flex justify-center items-center p-4 mx-4 my-20 text-sm text-green-800 rounded-xl bg-green-200/80"
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
      <div>
        <span class="font-medium">Success!</span> The message was sent
        succesfully.
      </div>
    </div>
    <main class="container h-full w-full bg-wnrs">
      <div class="flex justify-center align-middle items-center">
        <p class="text-xs text-offwhite font-main font-bold p-4 mt-16">
          Si algo no sirve, si algo no se ve bien en tu dispositivo, o si crees
          que algo puede mejorar, házmelo saber. Cualquier tipo de feedback me
          ayuda. :)
        </p>
      </div>
      <div
        class="absolute h-5/6 w-full top-[20%] mx-auto p-8 bg-offwhite flex flex-col justify-center items-center font-main font-bold text-blk uppercase rounded-xl shadow-xl"
      >
        <h2 class="text-center my-4 text-2xl text-wnrs">FEEDBACK</h2>
        <form
          class="h-full w-full flex flex-col items-center gap-2"
          @submit="handleSubmitFeedback"
        >
          <div class="flex flex-col w-full">
            <label for="name" class="mb-1">Name</label>
            <input
              type="text"
              id="name"
              class="block p-3 mb-4 w-full text-sm text-blk bg-gray-200 rounded-lg focus:ring-wnrs/50 focus:border-wnrs/50 placeholder-blk/80"
              v-model="name"
              required
            />
          </div>
          <div class="flex flex-col w-full">
            <label for="message" class="mb-1">Message</label>
            <textarea
              id="message"
              rows="5"
              class="block p-3 mb-4 w-full text-sm text-blk bg-gray-200 rounded-lg focus:ring-wnrs/50 focus:border-wnrs/50 placeholder-blk/80"
              v-model="message"
              required
            ></textarea>
          </div>
          <button
            @click=""
            type="submit"
            class="bg-wnrs text-offwhite hover:bg-wnrs/90 focus:ring-4 ring-wnrs/50 p-3 w-full rounded-xl uppercase shadow-lg shadow-wnrs/20"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
    <footer>
      <NavBar :activeTab="'feedback'"></NavBar>
    </footer>
  </body>
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
