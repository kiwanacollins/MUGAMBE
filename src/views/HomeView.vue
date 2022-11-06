<template>
  <div>
      <layout title="Home">
          <div class="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                            <!-- about page title -->
                            <h2 class="after-effect after:left-52">About Me</h2>
                            <!-- personal info for mobile devices start -->
                            <mobile-sidebar/>
                            <!-- personal info for mobile devices end -->

                            <div class="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                                <div class="col-span-12 space-y-2.5">
                                    <div class="lg:mr-16">
                                        <p class="text-[#44566c] dark:text-color-910 leading-7"> I'm Creative software Developer
                                             from Kampala, Uganda, working in web , mobile and desktop app development. 
                                              I enjoy turning complex problems into simple, beautiful and
                                            intuitive solutions.</p>
                                        <p class="text-[#44566c] leading-7 mt-2.5 dark:text-color-910"> My aim is to
                                            bring across your message and identity in the most creative way. </p>
                                    </div>
                                    <div></div>
                                </div>
                            </div>

                        </div>



                           <!-- what i do section start -->
                        <div class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
                            <h3 class="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> What I do! </h3>
                            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                                <div class="about-box bg-[#fcf4ff] dark:bg-transparent">
                                    <img class="w-10 h-10 object-contain block" src="@/images/icons/icon5.png"
                                        alt="icon" />
                                    <div class="space-y-2">
                                        <h3 class="dark:text-white text-[22px] font-semibold"> Web Design </h3>
                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Under web designing, i can develop dynamic and static websites. </p>
                                    </div>
                                </div>

                                <div class="about-box bg-[#fefaf0] dark:bg-transparent">
                                    <img class="w-10 h-10 object-contain block" src="@/images/icons/icon1.png"
                                        alt="icon" />
                                    <div class="space-y-2">
                                        <h3 class="dark:text-white tekkxt-[22px] font-semibold"> App Development </h3>
                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> With mobile development i use flutter.</p>
                                    </div>
                                </div>

                                <div class="about-box bg-[#fcf4ff] dark:bg-transparent">
                                    <img class="w-10 h-10 object-contain block" src="@/images/icons/icon.png"
                                        alt="icon" />
                                    <div class="space-y-2">
                                        <h3 class="dark:text-white text-[22px] font-semibold"> Ui/Ux Design </h3>
                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> With Ui/Ux i use figma design tool to come up with mockups. </p>
                                    </div>
                                </div>

                            
                                <div class="about-box bg-[#fff0f8] dark:bg-transparent">
                                    <img class="w-10 h-10 object-contain block" src="@/images/icons/icon4.png"
                                        alt="icon" />
                                    <div class="space-y-2">
                                        <h3 class="dark:text-white text-[22px] font-semibold"> Desktop Applications </h3>
                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> I can develop desktop applications. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- what i do section start -->
                     
      </layout>
    </div>
</template>

<script>
// @ is an alias to /src
import Layout from "@/Layout/layout.vue";
import MobileSidebar from '@/components/sidebar/mobile-sidebar.vue';
export default {
  name: "HomeView",
  components: {
    Layout,
    MobileSidebar,
  },
};
</script>
