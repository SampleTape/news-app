<template>
  <van-loading type="spinner" v-if="isLoading" class="loading-icon" />
  <NewsList :newslist="newslist" v-else></NewsList>
  <NewsCard
    v-for="newsCard in newsCardList"
    :key="newsCard.id"
    v-bind="newsCard"
  ></NewsCard>
</template>
<script>
import NewsList from "@/components/NewsList.vue";
import NewsCard from "@/components/NewsCard.vue";
import { getApi } from "@/util/api.js";
export default {
  components: {
    NewsList,
    NewsCard,
  },
  data() {
    return {
      newslist: [],
      newsCardList: [],
      isLoading: true,
    };
  },
  mounted() {
    getApi("/newslist").then((res) => {
      this.newslist = res.data;
      this.isLoading = false;
    });
    getApi("/newscardlist").then((res) => {
      this.newsCardList = res.data;
    });
  },
};
</script>
<style lang="scss" scoped>
.loading-icon {
  text-align: center;
  margin: 20px auto;
}
</style>
