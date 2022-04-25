<template>
  <div class="hot-news-list-container">
    <div class="news-item" v-if="topNews">
      <span class="number red">
        <font-awesome-icon :icon="['fas', 'up-long']"></font-awesome-icon>
      </span>
      <span class="title">{{ topNews.title }}</span>
      <span v-if="topNews.tag > 0" class="tag">{{ tagText(topNews.tag) }}</span>
    </div>
    <ul>
      <li class="news-item" v-for="(news, index) in newsList" :key="news.id">
        <router-link :to="{ name: 'news-detail', params: { id: news.id } }">
          <span class="number" :class="{ red: index < 3 }">{{
            index + 1
          }}</span>
          <span class="title">{{ news.title }}</span>
          <span v-if="news.tag > 0" class="tag">{{ tagText(news.tag) }}</span>
        </router-link>
      </li>
    </ul>
    <div class="news-item show-more">
      <span> 展开更多 </span>
      <span>
        <font-awesome-icon :icon="['fas', 'sort-down']"></font-awesome-icon>
      </span>
    </div>
  </div>
</template>

<script>
const tagList = ["", "热", "新"];
export default {
  name: "HotNewsList",
  props: {
    topNews: Object,
    newsList: Array,
  },

  data() {
    return {};
  },

  computed: {
    tagText() {
      return (tag) => {
        return tagList[tag];
      };
    },
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.hot-news-list-container {
  background-color: #ffffff;
  padding: 0 0.65rem;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .news-item {
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #fafafa;
    padding: 0 0.5rem;
    .number {
      margin-right: 0.25rem;
      padding: 0 1rem;
      display: inline-block;
      font-weight: bold;
      display: inline-block;
      width: 1rem;
      text-align: center;
      &.red {
        color: #de554a;
      }
    }
    .title {
      margin-right: 0.25rem;
      padding: 0 0.25rem;
      display: inline-block;
    }
    .tag {
      box-sizing: border-box;
      padding: 0.25rem;
      display: inline-block;
      width: 1.65rem;
      height: 1.65rem;
      line-height: 1.25rem;
      color: #db494e;
      border: 1px solid #db494e;
      border-radius: 4px;
      text-align: center;
    }
  }
  .show-more {
    text-align: center;
    color: #989898;
  }
}
</style>
