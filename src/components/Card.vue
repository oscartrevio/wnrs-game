<template>
  <div
    class="flex flex-col h-56 w-96 justify-around items-center text-center bg-card-texture bg-center bg-no-repeat bg-cover rounded-[46px] shadow-xl font-main font-bold text-wnrs uppercase select-none relative"
  >
    <div class="absolute top-4 text-xs">{{ level }}</div>
    <div class="text-base p-4 z-10">{{ question }}</div>
    <div class="absolute bottom-4 text-xs">WE'RE NOT REALLY STRANGERS</div>
    <div
      class="absolute h-60 w-60 inset-auto bg-wnrs rounded-full blur-2xl -z-10"
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
