<script>
import MainSection from "./section/MainSection.vue";
import SecondSection from "./section/SecondSection.vue";
import ThirtSection from "./section/ThirtSection.vue";
import FourthSection from "./section/FourthSection.vue";



export default {
  name: "App",
  components: {
    MainSection,
    SecondSection,
    ThirtSection,
    FourthSection
  },
};
</script>

<template>
  <div class="max-w-[1920px] h-screen bg-black">
    <MainSection />
    <SecondSection />
    <ThirtSection />
    <FourthSection />
  </div>
</template>
