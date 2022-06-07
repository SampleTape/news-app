<template>
  <div class="recommend-cinema-view">
    <MovieFilterBar></MovieFilterBar>
    <van-loading type="spinner" v-if="isLoading" class="loading-icon" />
    <lazy-component v-else>
      <MovieCard
        v-for="movie in movieList"
        :key="movie.id"
        v-bind="movie"
      ></MovieCard>
    </lazy-component>
  </div>
</template>
<script>
import MovieCard from "@/components/MovieCard.vue";
import MovieFilterBar from "@/components/MovieFilterBar.vue";
import { getApi } from "@/util/api.js";
export default {
  components: {
    MovieCard,
    MovieFilterBar,
  },
  data() {
    return {
      movieList: [],
      isLoading: true,
    };
  },
  mounted() {
    getApi("/movielist").then((res) => {
      this.movieList = res.data;
      this.isLoading = false;
    });
  },
};
</script>
<style lang="scss" scoped>
.recommend-cinema-view {
  padding: 0.5rem 1rem;
}
.loading-icon {
  text-align: center;
  margin: 20px auto;
}
</style>
