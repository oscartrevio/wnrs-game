<template>
  <div class="absolute bottom-0 w-full h-16 bg-offwhite shadow-nav">
    <ul class="h-full flex justify-around items-center gap-16">
      <li class="flex flex-col justify-center items-center">
        <router-link to="/about"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            class="fill-wnrs h-8"
          >
            <path
              d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
            /></svg
        ></router-link>
        <span class="absolute bottom-1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="fill-wnrs h-1.5"
            :class="{
              'opacity-0': activeTab != 'about',
            }"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg
        ></span>
      </li>
      <li
        class="absolute bottom-1/3 bg-wnrs rounded-full h-16 w-16 shadow-lg shadow-wnrs/50 flex flex-col justify-center items-center"
      >
        <button class="h-full w-full flex justify-center items-center">
          <router-link to="/"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="fill-offwhite h-8"
            >
              <path
                d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
              /></svg
          ></router-link>
        </button>
        <span class="absolute -bottom-1/3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="fill-wnrs h-1.5 mb-2"
            :class="{
              'opacity-0': activeTab != 'home',
            }"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg
        ></span>
      </li>
      <li class="flex flex-col justify-center items-center">
        <router-link to="/feedback"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            class="fill-wnrs h-8"
          >
            <path
              d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z"
            /></svg
        ></router-link>
        <span class="absolute bottom-1"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="fill-wnrs h-1.5"
            :class="{
              'opacity-0': activeTab != 'feedback',
            }"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg
        ></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    activeTab: {
      type: String,
      required: true,
    },
    levelId: {
      type: String,
      required: true,
    },
  },
};
</script>
