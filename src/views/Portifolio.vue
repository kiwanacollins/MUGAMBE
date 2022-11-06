<template>
  <layout>
        <section id="portfolio" class="bg-white   lg:rounded-2xl dark:bg-[#111111]">
                    <div class="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
                    <!-- responsive navigator -->
                      <div class="py-12 ">
                            <h2 class="after-effect after:left-48 lg:mt-0">Portfolio</h2>
                            <!-- fillter button group -->
                            <!-- fillter group buttons -->
                            <ul
                                class="button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium">
                                <li class="fillter-btn mr-4 md:mx-4 is-checked" data-filter="*">All</li>
                                <li class="fillter-btn mr-4 md:mx-4" data-filter=".dev">Mobile Apps</li>
                                <li class="fillter-btn mr-4 md:mx-4" data-filter=".plugin"> Web Design</li>
                                <li class="fillter-btn mr-4 md:mx-4" data-filter=".branding"> Desktop</li>
                                <!-- <li class="fillter-btn mr-4 md:mx-4" data-filter=".custom">Graphic Design</li> -->
                            </ul>
                        </div>
                         <div id="" class="mymix portfolio_list-two  two-col ">
                            <div class="grid-sizer"></div>
                            <!-- item -->
                            <div class="portfolio_list-two-items isotop-item plugin custom" v-for="(i,index) in items" :key="index">
                                <div
                                    class="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]">
                                    <div class="overflow-hidden rounded-lg">
                                        <a href="#portfiloOne" rel="modal:open">
                                            <img class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                                                :src="[i.img]" alt="portfolio image" />
                                        </a>
                                    </div>
                                    <span
                                        class="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]">{{i.type}}</span>
                                    <h2
                                        class="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        <a target="_blank" :href="[i.link]" rel="modal:open">{{i.name}}</a>
                                    </h2>
                                </div>
                            </div>
                    <!-- end of item -->

                      <!-- modal start for item one  -->
                      
                            <!--  -->
                        </div>

                    </div>
                    <!-- end of responsive navigator -->
        </section>
  </layout>
</template>

<script>
import Layout from '@/Layout/layout.vue'
export default {
    name: "Portifolio",
    data() {
      return {
        items:[
          {name:"Lw Ziki Amp",type:"Web App",link:"https://lw-web.netlify.app/",img:"@/images/work_images/small/1.jpg"},
          {name:"Lw Amp",type:"Desktop App",link:"https://snapcraft.io/lw-ziki-amp",img:"https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_819,h_460/https://dashboard.snapcraft.io/site_media/appmedia/2021/10/Screenshot_from_2021-10-04_19-39-35_Vfk4oaZ.png"},
          {name:"Culchr App",type:"Mobile App",link:"",img:"@/images/work_images/small/2.jpg"},
          {name:"PostMan App",type:"Mobile App",link:"",img:"@/images/work_images/small/1.jpg"},
        ]
      }
    },
    components: {
        Layout
    },
}
</script>

<style>

</style>