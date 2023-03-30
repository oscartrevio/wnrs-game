<template>
  <div
    class="flex flex-col h-56 w-96 justify-around items-center text-center bg-card-texture bg-center bg-no-repeat bg-cover rounded-[46px] shadow-xl font-main font-bold text-wnrs uppercase select-none relative touch-manipulation"
  >
    <div class="absolute top-4 text-xs">{{ level }}</div>
    <div class="text-base p-4">{{ question }}</div>
    <div class="absolute bottom-4 text-xs">WE'RE NOT REALLY STRANGERS</div>
    <div
      class="absolute h-60 w-60 inset-auto bg-white rounded-full -z-10 opacity-0"
    ></div>
    <div
      class="absolute h-60 w-60 inset-auto bg-wnrs rounded-full blur-2xl -z-20 opacity-80 animate-spin-slow origin-[45%_55%] mix-blend-normal"
    ></div>
    <div
      class="absolute h-60 w-60 inset-auto bg-orange-600 rounded-full blur-2xl -z-20 opacity-80 animate-spin-slow origin-[55%_45%] mix-blend-normal"
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
