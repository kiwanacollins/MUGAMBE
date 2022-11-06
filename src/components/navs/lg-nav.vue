<template lang="html">
<div>
    <header class="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
                    <nav class="hidden lg:block">
                        <ul class="flex">
                            <li v-for="(url,index) in urls" :key="index" @click="menuActiveChange(index)">
                                 <a :class="[index == menuActive?'menu-active':'','menu-item']" :href="[url.link]">
                                    <span class="text-xl mb-1">
                                        <i :class="url.icon"></i>
                                    </span> {{url.name}}</a></li>
                        </ul>
                    </nav>
                </header>
</div>
      
</template>
<script>
export default {
    name:"LgNav",
    data() {
        return {
            menuActive: parseInt(localStorage.getItem("menu-active")) || 0,
            urls:[
                {name:"About", link:"/", icon:"fa-regular fa-user"},
                {name:"Resume", link:"/resume", icon:"fa-regular fa-file-lines"},
                {name:"Works", link:"/portifolio", icon:"fas fa-briefcase"},
                {name:"Contact", link:"/contact", icon:"fa-solid fa-address-book"},
            ]
        }
    },
    mounted() {
        if (localStorage.getItem("menu-active") == null) {
            localStorage.setItem("menu-active", 0);
        }
       

    },
    methods: {
        menuActiveChange(index) {
            localStorage.setItem("menu-active", index);
            this.menuActive = index;
        }
    }

}
</script>
<style lang="scss">
    
</style>