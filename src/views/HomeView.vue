<template>
  <div class="home-view">
    <SearchBar></SearchBar>
    <NavBar :items="items"></NavBar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      items: [
        {
          text: "关注",
          name: "concern",
        },
        {
          text: "推荐",
          name: "recommend",
        },
        {
          text: "热榜",
          name: "hot-list",
        },
        {
          text: "国际",
          name: "international",
        },
        {
          text: "小说",
          name: "novel",
        },
        {
          text: "大连",
          name: "dalian",
        },
        {
          text: "抗疫",
          name: "fighting-virus",
        },
        {
          text: "视频",
          name: "news-videos",
        },
        {
          text: "小视频",
          name: "short-videos",
        },
        {
          text: "问答",
          name: "qanda",
        },
        {
          text: "图片",
          name: "pictures",
        },
        {
          text: "娱乐",
          name: "entertainment",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.home-view {
  padding-top: 6.5rem;
  padding-bottom: 4rem;
}
</style>
