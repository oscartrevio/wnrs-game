<template>
  <div
    class="flex flex-col h-56 w-96 justify-around bg-card-texture bg-cover items-center text-center rounded-[46px] shadow-xl font-main font-bold text-wnrs uppercase select-none relative touch-manipulation"
  >
    <div class="absolute top-4 text-xs mix-blend-multiply">{{ level }}</div>
    <div class="text-base p-4 mix-blend-multiply">{{ question }}</div>
    <div class="absolute bottom-4 text-xs mix-blend-multiply">
      WE'RE NOT REALLY STRANGERS
    </div>
    <div
      class="absolute h-60 w-60 inset-auto bg-white rounded-full -z-10 opacity-0"
    ></div>
    <div
      class="absolute h-56 w-56 inset-auto bg-wnrs rounded-full blur-xl -z-20 opacity-80 origin-[40%_50%] mix-blend-multiply animate-spin-slow"
    ></div>
    <div
      class="absolute h-56 w-56 inset-auto bg-[#DA4444] rounded-full blur-xl -z-20 opacity-80 origin-[60%_50%] animation-delay-1000 animate-spin-slow mix-blend-multiply"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
  },
};
</script>
