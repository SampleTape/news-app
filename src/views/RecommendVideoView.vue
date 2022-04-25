<template>
  <div class="recommend-video-list">
    <ul>
      <li v-for="video in videoList" :key="video.id">
        <videoCard v-bind="video"></videoCard>
      </li>
    </ul>
  </div>
</template>
<script>
import VideoCard from "@/components/VideoCard.vue";
export default {
  components: {
    VideoCard,
  },
  data() {
    return {
      videoList: [
        {
          id: "v10001",
          author: "天津卫视",
          title: "2022天津卫视春晚：岳云鹏 孙越《我还行不行》",
          isFollow: false,
          avatarUrl:
            "https://sf3-cdn-tos.toutiaostatic.com/img/user-avatar/16a5ed6307ed6458da8a6f50bdf5e156~300x300.image",
          imgUrl: "",
          videoUrl:
            "https://assets.mixkit.co/videos/preview/mixkit-going-down-a-curved-highway-down-a-mountain-41576-large.mp4",
          isCollected: false,
          isLiked: false,
          commentNum: "301",
          likeNum: "100",
        },
        {
          id: "v10002",
          author: "天津卫视",
          title: "2022天津卫视春晚：岳云鹏 孙越《我还行不行》",
          isFollow: false,
          avatarUrl:
            "https://sf3-cdn-tos.toutiaostatic.com/img/user-avatar/16a5ed6307ed6458da8a6f50bdf5e156~300x300.image",
          imgUrl: "",
          videoUrl:
            "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4",
          isCollected: true,
          isLiked: true,
          commentNum: "301",
          likeNum: "100",
        },
        {
          id: "v10003",
          author: "天津卫视",
          title: "2022天津卫视春晚：岳云鹏 孙越《我还行不行》",
          isFollow: false,
          avatarUrl:
            "https://sf3-cdn-tos.toutiaostatic.com/img/user-avatar/16a5ed6307ed6458da8a6f50bdf5e156~300x300.image",
          imgUrl: "",
          videoUrl:
            "https://assets.mixkit.co/videos/preview/mixkit-clouds-and-blue-sky-2408-large.mp4",
          isCollected: false,
          isLiked: false,
          commentNum: "301",
          likeNum: "100",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
