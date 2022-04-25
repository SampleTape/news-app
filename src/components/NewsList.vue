<template>
  <div class="news-list">
    <ul>
      <router-link
        class="news-item"
        v-for="(news, index) in newslist"
        :key="news.id"
        :to="{ name: 'news-detail', params: { id: news.id } }"
      >
        <div class="news-title">{{ news.title }}</div>
        <div>
          <span v-if="index < 3" class="tip">置顶</span>
          <span>{{ news.from }}</span>
          <span>{{ news.commentNum }}评论</span>
        </div>
      </router-link>
    </ul>
    <div class="break-line"></div>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  props: {
    newslist: Array,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.news-list {
  margin: 0.75rem 1rem;
  .news-item {
    display: block;
    margin: 0.15rem 0;
    span {
      padding-right: 12px;
      color: #9e9e9e;
      font-size: 0.75rem;
    }
    .news-title {
      font-size: 1rem;
      color: #222222;
    }
    .tip {
      color: #eb8783;
    }
  }
  .break-line {
    width: 100%;
    border-bottom: 1.5px solid #f6f6f6;
    margin-top: 0.5rem;
  }
}
</style>
