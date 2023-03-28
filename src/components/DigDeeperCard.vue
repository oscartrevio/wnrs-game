<template>
  <div>
    <div
      class="textures absolute h-56 w-96 -rotate-[5deg] rounded-[46px] z-20 mix-blend-overlay"
    >
      <img
        src="/src/assets/fingerprint-overlay.jpg"
        alt=""
        class="absolute h-56 w-96 opacity-20 rounded-[46px]"
      />
      <img
        src="/src/assets/dust-overlay.png"
        alt=""
        class="absolute h-56 w-96 opacity-100 rounded-[46px]"
      />
    </div>
    <div
      class="flex flex-col h-56 w-96 -rotate-[5deg] justify-around items-center text-center rounded-[46px] font-main font-bold text-black uppercase select-none absolute z-10 backdrop-blur-[2px] border-2 border-digdeeperborder shadow-lg mix-blend-normal box-border"
    >
      <span class="absolute text-base p-4 z-30">DIG DEEPER</span>
      <span class="absolute bottom-4 text-xs z-30">
        WE'RE NOT REALLY STRANGERS
      </span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
