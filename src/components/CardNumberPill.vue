<template>
  <div
    class="flex h-max w-max px-3 py-1 rounded-full justify-center align-middle items-center text-center bg-wnrs text-offwhite font-main font-bold text-xs select-none"
  >
    {{ card }} / {{ length }}
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Number,
      required: true,
    },
    length: {
      type: Number,
      required: true,
    },
  },
};
</script>
