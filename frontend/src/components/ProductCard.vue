<template lang="">
  <div class="w-[416px] h-[443px] rounded-[4px] bg-white shadow-xl">
    <div class="w-full h-[216px] bg-red-300 object-cover">
      <img class="w-full h-full" :src="item.images[0]" />
      <!-- {{ item.images[0] }} -->
    </div>
    <div class="flex flex-col">
      <div class="w-full px-[26px] pt-[33px] pb-[15px]">
        <span class="font-bold text-[26px]">{{ item.title }}</span>
      </div>
      <div class="w-full px-[26px]">
        <span class="text-[18px]"> {{ item.description }}</span>
      </div>
    </div>

    <!-- <h2>{{ items.title }}</h2>
    <p>{{ items.description }}</p> -->
    <!-- <img src="{{item.image}}" /> -->
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Array,
      required: true,
    },
  },
};
</script>
