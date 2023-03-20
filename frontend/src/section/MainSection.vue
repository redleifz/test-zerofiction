<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "MainSection",
  components: {
    Navbar: Navbar,
  },
};
</script>

<template lang="">
  <Navbar />
  <div class="h-screen w-full flex justify-center">
    <div class="w-[65%] flex justify-center pt-[328px]">
      <div class="flex flex-col w-[552px] w-[40%]">
        <span class="uppercase text-[96px] font-bold text-white">Lorem</span>
        <span class="uppercase text-[96px] font-bold text-[#D9EF0C]"
          >IPSUM</span
        >
        <div class="w-[440px] pt-20 flex flex-col">
          <div>
            <span class="text-[20px] text-white font-bold"
              >Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is
              simply</span
            >
          </div>
          <div class="pt-5">
            <span class="text-[18px] text-white"
              >Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </span>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-start w-[60%]">
        <div><img  src="../assets/Bicycle-PNG-Image 1.png" /></div>
      </div>
    </div>
  </div>
</template>

<style lang=""></style>
