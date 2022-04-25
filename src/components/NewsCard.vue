<template>
  <router-link
    class="news-card-container"
    :to="{ name: 'news-detail', params: { id: id } }"
  >
    <div class="title">{{ title }}</div>
    <div class="img-container">
      <img :src="imgUrl" />
    </div>
    <div class="news-info">
      <span>{{ from }}</span>
      <span>{{ commentNum }}评论</span>
      <span>{{ time }}</span>
    </div>
    <div class="break-line"></div>
  </router-link>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    id: String,
    title: String,
    imgUrl: String,
    from: String,
    commentNum: String,
    time: String,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.news-card-container {
  display: block;
  margin: 0.75rem 1rem;
  .title {
    font-size: 1rem;
    color: #222222;
    margin-bottom: 0.2rem;
    padding: 0.1rem;
  }
  .img-container {
    width: 100%;
    border-radius: 5px;
    height: 14rem;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .news-info {
    color: #5d5d5d;
    font-size: 0.85rem;
    margin-top: 0.25rem;
    span {
      padding-right: 0.25rem;
    }
  }
  .break-line {
    width: 100%;
    border-bottom: 1.5px solid #f6f6f6;
    margin-top: 0.5rem;
  }
}
</style>
