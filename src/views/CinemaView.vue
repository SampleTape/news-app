<template>
  <div class="cinema-view">
    <SearchBar></SearchBar>
    <NavBar :items="items"></NavBar>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          text: "推荐",
          name: "cinema-recommend",
        },
        {
          text: "电影",
          name: "movie",
        },
        {
          text: "电视剧",
          name: "tvshows",
        },
        {
          text: "少儿",
          name: "child",
        },
        {
          text: "纪录片",
          name: "documentary",
        },
        {
          text: "综艺",
          name: "ciname-shows",
        },
        {
          text: "动漫",
          name: "anime",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.cinema-view {
  padding-top: 6.5rem;
  padding-bottom: 4rem;
}
</style>
