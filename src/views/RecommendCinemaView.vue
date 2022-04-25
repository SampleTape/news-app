<template>
  <div class="recommend-cinema-view">
    <MovieFilterBar></MovieFilterBar>
    <MovieCard
      v-for="movie in movieList"
      :key="movie.id"
      v-bind="movie"
    ></MovieCard>
  </div>
</template>
<script>
import MovieCard from "@/components/MovieCard.vue";
import MovieFilterBar from "@/components/MovieFilterBar.vue";
export default {
  components: {
    MovieCard,
    MovieFilterBar,
  },
  data() {
    return {
      movieList: [
        {
          id: "m1000001",
          title: "故宫100——看见看不见的紫禁城",
          desc: "超越时空的影像博物馆 韩涛/陈曼曼",
          imgUrl:
            "https://mixkit.imgix.net/videos/preview/mixkit-homeless-gray-kitten-is-walking-on-the-street-32304-0.jpg?q=80&auto=format%2Ccompress&w=460",
          videoUrl:
            "https://assets.mixkit.co/videos/preview/mixkit-homeless-gray-kitten-is-walking-on-the-street-32304-large.mp4",
          isCollected: false,
          tags: ["文化", "历史"],
        },
        {
          id: "m1000002",
          title: "国史演义：大话明朝系列",
          desc: "朱元璋的逆袭奇迹",
          imgUrl:
            "https://mixkit.imgix.net/videos/preview/mixkit-waves-coming-to-the-beach-5016-0.jpg?q=80&auto=format%2Ccompress&w=460",
          videoUrl:
            "https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4",
          isCollected: true,
          tags: ["文化"],
        },
        {
          id: "m1000003",
          title: "故宫100——看见看不见的紫禁城",
          desc: "超越时空的影像博物馆 韩涛/陈曼曼",
          imgUrl:
            "https://mixkit.imgix.net/videos/preview/mixkit-homeless-gray-kitten-is-walking-on-the-street-32304-0.jpg?q=80&auto=format%2Ccompress&w=460",
          videoUrl:
            "https://assets.mixkit.co/videos/preview/mixkit-homeless-gray-kitten-is-walking-on-the-street-32304-large.mp4",
          isCollected: false,
          tags: ["文化", "历史"],
        },
        {
          id: "m1000004",
          title: "故宫100——看见看不见的紫禁城",
          desc: "超越时空的影像博物馆 韩涛/陈曼曼",
          imgUrl:
            "https://mixkit.imgix.net/videos/preview/mixkit-homeless-gray-kitten-is-walking-on-the-street-32304-0.jpg?q=80&auto=format%2Ccompress&w=460",
          videoUrl:
            "https://assets.mixkit.co/videos/preview/mixkit-homeless-gray-kitten-is-walking-on-the-street-32304-large.mp4",
          isCollected: false,
          tags: ["文化", "历史"],
        },
        {
          id: "m1000005",
          title: "故宫100——看见看不见的紫禁城",
          desc: "超越时空的影像博物馆 韩涛/陈曼曼",
          imgUrl:
            "https://mixkit.imgix.net/videos/preview/mixkit-homeless-gray-kitten-is-walking-on-the-street-32304-0.jpg?q=80&auto=format%2Ccompress&w=460",
          videoUrl:
            "https://assets.mixkit.co/videos/preview/mixkit-homeless-gray-kitten-is-walking-on-the-street-32304-large.mp4",
          isCollected: false,
          tags: ["文化", "历史"],
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.recommend-cinema-view {
  padding: 0.5rem 1rem;
}
</style>
