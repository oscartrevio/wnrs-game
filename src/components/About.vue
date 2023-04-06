<template>
  <header>
    <div class="z-50">
      <PageTitle />
    </div>
  </header>
  <main
    class="h-screen w-full my-auto absolute inset-y-1/2 -z-10 overflow-y-scroll select-none touch-manipulation"
  >
    <div
      class="h-min mx-1 absolute inset-y-1/2 my-auto p-2 bg-card-texture bg-cover flex flex-col justify-center font-main font-bold text-wnrs uppercase rounded-xl shadow-xl"
    >
      <h1 class="text-lg text-center">HOW TO PLAY</h1>
      <p class="text-blk text-sm text-left mb-2">
        Alternate asking and answering the questions, following the order of the
        levels, until the deck it complete.
      </p>
      <h2 class="text-center">PROCEED THROUGH THE LEVELS IN ORDER</h2>
      <div
        class="flex justify-center items-center border-2 border-wnrs rounded-lg px-1 mb-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="h-20 mx-4 stroke-blk"
        >
          <path
            d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
          />
        </svg>
        <div class="flex flex-col">
          <h3 class="text-sm">level 1</h3>
          <h4 class="text-[10px]">( perception )</h4>
          <p class="text-[10px] text-blk">
            This level is about gaining perspective and challenging the
            assumptions we make about others.
          </p>
        </div>
      </div>
      <div
        class="flex justify-center items-center border-2 border-wnrs rounded-lg px-1 mb-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="stroke-blk h-20 mx-4"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
        <div class="flex flex-col">
          <h3 class="text-sm">level 2</h3>
          <h4 class="text-[10px]">( connection )</h4>
          <p class="text-[10px] text-blk">
            This level is about asking the rarely asked questions and connecting
            on a deeper level.
          </p>
        </div>
      </div>
      <div
        class="flex justify-center items-center border-2 border-wnrs rounded-lg px-1 mb-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-20 stroke-blk mx-4"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
        <div class="flex flex-col">
          <h3 class="text-sm">level 3</h3>
          <h4 class="text-[10px]">( reflection )</h4>
          <p class="text-[10px] text-blk">
            Time to reflect on your game experience and what you have learned
            during the game.
          </p>
        </div>
      </div>
      <h2 class="text-center">DIG DEEPER CARDS</h2>
      <p class="text-blk text-sm mb-1">
        These cards are meant to encourage transparency if you want the person
        talking to dig deeper and share more.<br />*Can be used once per level.*
      </p>
      <h3 class="text-[10px] text-right">Hecho por Oscar Treviño</h3>
      <div
        class="absolute h-full w-full inset-0 bg-wnrs rounded-full blur-2xl -z-20 opacity-50 origin-[40%_50%] mix-blend-multiply animate-spin-slow"
      ></div>
      <div
        class="absolute h-full w-full inset-0 bg-[#DA4444] rounded-full blur-2xl -z-20 opacity-50 origin-[60%_50%] animation-delay-1000 animate-spin-slow mix-blend-multiply"
      ></div>
    </div>
  </main>
  <footer><NavBar></NavBar></footer>
</template>
<script>
import PageTitle from "./PageTitle.vue";
import NavBar from "./NavBar.vue";

export default {
  name: "About",
  components: {
    PageTitle,
    NavBar,
  },
};
</script>
