<template>
  <span>
    <span v-for="(i, index) in works" :key="index">
      <div
        class="rounded-lg bg-[#fff0f0] p-4 m-3 dark:bg-transparent dark:border-[2px] border-[#212425]"
      >
        <div class="overflow-hidden rounded-lg">
          <a :href="[i.link]" target="_blank" rel="modal:open">
            <img
              class="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
              :src="[i.img]"
              alt="portfolio image"
            />
          </a>
        </div>
        <span
          class="pt-5 text-[16px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
          >{{ i.type }}</span
        >
        <h5
          class="cursor-pointer lg:text-[25px] md:text-[18px] font-bold duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
        >
          <a target="_blank" :href="[i.link]">{{ i.name }}</a>
        </h5>
      </div>
    </span>
  </span>
</template>
<script type="text/javascript">
export default {
  name: "WorkCard",
  props: {
    works: Object,
  },
};
</script>
<style lang="scss">
</style>