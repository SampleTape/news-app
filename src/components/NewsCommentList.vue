<template>
  <div class="comment-list">
    <div class="news-info">
      <div class="left">评论 {{ commentsNum }}</div>
      <div class="right">{{ likeNum }} 赞 | {{ forwardNum }} 转发</div>
    </div>
    <NewsComment
      v-for="comment in commentsList"
      :key="comment.id"
      v-bind="comment"
    ></NewsComment>
  </div>
</template>

<script>
import NewsComment from "@/components/NewsComment.vue";
export default {
  name: "NewsCommentList",
  components: {
    NewsComment,
  },
  props: {
    newsId: String,
    commentsNum: Number,
    likeNum: Number,
    forwardNum: Number,
    commentsList: Array,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.comment-list {
  margin: 0 0.5rem 4rem;
  .news-info {
    height: 2rem;
    line-height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    .left {
      font-size: 1.15rem;
      font-weight: bold;
      color: #222222;
    }
    .right {
      font-size: 1rem;
      color: #999999;
    }
  }
}
</style>
