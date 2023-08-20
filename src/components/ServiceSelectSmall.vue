<template>
  <div id="serviceSelectSmall">
    <div class="w-full rounded-2xl bg-home-background h-[70px] relative">
      <div class="absolute top-1/3 left-1/3 -translate-x-1/4 -translate-y-1/4 mt-0.5">
        <img width="55" :src="`img/uber/${image}.png`" alt="">
      </div>
    </div>
    <div class="text-xs text-center text-gray-900 mt-2">{{ text }}</div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps({
  text: String,
  image: String,
});

const { text, image } = toRefs(props);
</script>
