<template lang="html">
    <div>
           <!-- mobile menu start -->
        <nav id="navbar" class="hidden lg:hidden">
            <ul
                class="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]">
                <li v-for="(url,index) in urls" :key="index" @click="menuActiveChange(index,url)">
                                 <a :class="[index == menuActive?'mobile-menu-items-active':'','mobile-menu-items']">
                                    <span class="mr-2 text-xl">
                                        <i :class="url.icon"></i>
                                    </span> {{url.name}}</a></li>
            </ul>
        </nav>
        <!-- mobile menu end -->

    </div>
</template>
<script>
export default {
    name:"MobileNav",
    data() {
        return {
            menuActive: parseInt(localStorage.getItem("mobile-menu-active")) || 0,
            urls:[
                {name:"About", link:"/", icon:"fa-regular fa-user"},
                {name:"Resume", link:"/resume", icon:"fa-regular fa-file-lines"},
                {name:"Works", link:"/portifolio", icon:"fas fa-briefcase"},
                {name:"Contact", link:"/contact", icon:"fa-solid fa-address-book"},
            ]
        }
    },
    mounted() {
        if (localStorage.getItem("mobile-menu-active") == null) {
            localStorage.setItem("mobile-menu-active", 0);
        }
       

    },
    methods: {
        menuActiveChange(index,route) {
            localStorage.setItem("mobile-menu-active", index);
            this.menuActive = index;
            console.lo(route.link);
            this.$router.push(route.link);

        }
    }
}
</script>
<style lang="">
    
</style>