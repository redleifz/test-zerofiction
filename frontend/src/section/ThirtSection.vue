<template lang="">
  <div class="bg-[#D9EF0C] w-full h-[900px] flex flex-col items-center">
    <div class="mt-[128px]">
      <span class="text-black font-bold text-[82px]">LOREM IPSUM</span>
    </div>
    <div class="flex justify-center gap-[24px] w-[90%] mt-[64px]">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </div>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "ThirtSection",
  components: {
    ProductCard,
  },
};
</script>
<style lang=""></style>
