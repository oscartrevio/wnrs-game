<template>
  <button
    class="w-2/4 h-14 rounded-xl font-bold font-main uppercase text-base border-2 border-blk focus:ring-4 focus:outline-none focus:ring-blk/50 select-none touch-manipulation inline-flex justify-center align-middle items-center shadow-lg"
    :class="{
      'bg-offwhite': digDeeperVisible == false,
      'text-blk': digDeeperVisible == false,
      'fill-blk': digDeeperVisible == false,
      'bg-blk': digDeeperVisible == true,
      'text-offwhite': digDeeperVisible == true,
      'fill-offwhite': digDeeperVisible == true,
    }"
  >
    Dig Deeper
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 ml-1"
      viewBox="0 0 384 512"
    >
      <path
        d="M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"
      />
    </svg>
  </button>
</template>
<script>
export default {
  props: {
    digDeeperVisible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
