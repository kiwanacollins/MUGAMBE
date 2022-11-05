<template lang="html">
       <!-- footer start -->
                        <footer class="overflow-hidden rounded-b-2xl" style="background: transparent">
                            <p class="text-center py-6 text-gray-lite dark:text-color-910"> © {{year}} All Rights Reserved | 
                                 <a class="hover:text-[#FA5252] duration-300 transition"
                                    href="#" target="_blank"
                                    rel="noopener noreferrer"> Mugamba Bruno M.H</a>.</p>
                        </footer>
</template>
<script>
export default {
    name:"VFooter",
      data() {
        return {
            year:new Date().getFullYear()
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>