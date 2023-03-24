<template lang="">
  <div class="bg-[#D9EF0C] w-full h-[900px] flex flex-col items-center">
    <div class="mt-[128px]">
      <span class="text-black font-bold text-[82px]">LOREM IPSUM</span>
    </div>
    <div class="flex justify-center gap-[24px] w-[90%] mt-[64px]">
      <div v-for="item in items" :key="item.title">
        <ProductCard :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "../components/ProductCard.vue";
import axios from "axios";

export default {
  name: "ThirtSection",
  components: {
    ProductCard,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios
      .get(`https://dummyjson.com/products?limit=3`)
      .then((response) => {
        this.items = response.data.products;
        console.log(this.items);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style lang=""></style>
