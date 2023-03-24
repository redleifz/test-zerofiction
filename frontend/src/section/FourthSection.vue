<template lang="">
  <div>
    <div
      class="max-w-[1920px] h-[1003px] bg-black flex flex-col justify-center items-center"
    >
      <div class="w-[80%] h-[600px] flex items-center">
        <div class="w-[719px]">
          <img class="" src="../assets/Bicycle-PNG-Image 1.png" />
        </div>
        <div class="h-[540px] w-[540px] ml-[141px]">
          <form>
            <div class="flex flex-col">
              <span class="text-white font-bold text-[60px]">ติดต่อเรา</span>
              <input
                class="mt-[51px] bg-none text-[18px] bg-transparent text-white outline-0"
                placeholder="ชื่อ - นาสมกุล"
              />
              <hr class="mt-[12px] bg-[#F5F5F5]" />
              <input
                class="mt-[37px] bg-none text-[18px] bg-transparent text-white outline-0"
                placeholder="เบอร์ติดต่อ"
              />
              <hr class="mt-[12px] bg-[#F5F5F5]" />
              <input
                class="mt-[37px] bg-none text-[18px] bg-transparent text-white outline-0"
                type="email"
                placeholder="อีเมล์"
              />
              <hr class="mt-[12px] bg-[#F5F5F5]" />
              <div class="mt-[37px] w-full flex justify-between pr-5">
                <span class="text-[18px] bg-transparent text-gray-400 outline-0"
                  >วันที่
                </span>
                <span class="text-gray-400 text-[18px]">04/08/2022</span>
                <font-awesome-icon
                  icon="fa-solid fa-calendar-days"
                  style="color: #ffffff"
                />
              </div>
              <div><Calendar class="absolute ml-[275px] mt-[25px]" /></div>

              <hr class="mt-[12px] bg-[#F5F5F5]" />

              <span class="text-white text-[16px] mt-[32px]"
                >Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy
              </span>
              <span class="text-white text-[16px] mt-[10px]"
                >Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy
              </span>
              <button
                type="submit"
                class="text-[21px] w-[290px] h-[56px] text-black bg-gradient-to-b from-[#DEE34B] via-[#D9EF0C] to-[#87A30D] mt-[75px] rounded-[50px]"
              >
                lorem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Calendar from "../components/Calendar.vue";
export default {
  name: "FourthSection",
  components: {
    Calendar,
  },
};
</script>
<style lang=""></style>
