<template>
  <div class="video-view">
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
          text: "关注",
          name: "video-concern",
        },
        {
          text: "推荐",
          name: "video-recommend",
        },
        {
          text: "热门",
          name: "video-hot-list",
        },
        {
          text: "小视频",
          name: "video-short-video",
        },
        {
          text: "影视",
          name: "movie",
        },
        {
          text: "直播",
          name: "live",
        },
        {
          text: "游戏",
          name: "games",
        },
        {
          text: "音乐",
          name: "music",
        },
        {
          text: "VLOG",
          name: "vlog",
        },
        {
          text: "综艺",
          name: "shows",
        },
        {
          text: "农人",
          name: "farm",
        },
        {
          text: "美食",
          name: "food",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.video-view {
  padding-top: 6.5rem;
  padding-bottom: 4rem;
}
</style>
