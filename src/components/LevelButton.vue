<template>
  <button
    class="flex flex-col items-center justify-center border-2 border-wnrs bg-offwhite rounded-xl font-main font-bold leading-none h-16 w-1/3 align-middle select-none touch-manipulation shadow-lg shadow-wnrs/10"
    :class="{
      'bg-wnrs': levelId === activeLevel,
      'text-offwhite': levelId === activeLevel,
      'text-blk': levelId != activeLevel,
    }"
  >
    <span class="text-base">{{ level }}</span>
    <span class="text-[10px]">{{ levelType }}</span>
  </button>
</template>
<script>
export default {
  props: {
    level: {
      type: String,
      required: true,
    },
    levelType: {
      type: String,
      required: true,
    },
    levelId: {
      type: String,
      required: true,
    },
    activeLevel: {
      type: String,
      required: true,
    },
  },
};
</script>
