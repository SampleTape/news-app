<template>
  <div class="news-comment">
    <div class="avatar">
      <img :src="avatar" />
    </div>
    <div>
      <div class="row-1">
        <div class="user-name">{{ userName }}</div>
        <div class="like-info" :class="{ 'is-like': isLike }">
          <span v-if="isLike">
            <font-awesome-icon :icon="['fas', 'thumbs-up']"></font-awesome-icon>
          </span>
          <span v-else>
            <font-awesome-icon :icon="['far', 'thumbs-up']"></font-awesome-icon>
          </span>
          <span class="like-num">{{ likeNum }}</span>
        </div>
      </div>
      <div
        class="row-2 comment-content"
        style="white-space: pre-line"
        v-html="content"
      ></div>
      <div class="row-3">
        <span class="reply-button">回复 &gt;</span>
        <span class="comment-info">{{ time }} · {{ location }}</span>
        <span class="others-button"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsComment",
  props: {
    id: String,
    userId: String,
    newsId: String,
    userName: String,
    avatar: String,
    isLike: Boolean,
    likeNum: Number,
    content: String,
    time: String,
    location: String,
  },
  data() {
    return {};
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.news-comment {
  margin: 0.5rem 0 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .avatar {
    margin: 0 1rem 0 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .row-1 {
    width: 18.5rem;
    height: 2.75rem;
    line-height: 2.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-name {
      width: 9rem;
      font-size: 1rem;
      color: #222222;
      font-weight: bold;
    }
    .like-info {
      span {
        padding: 0.2rem;
      }
      &.is-like {
        color: #ef0505;
      }
    }
  }
  .comment-content {
    margin: 0.5rem 0 1rem;
    line-height: 1.5rem;
    font-size: 1.25rem;
    color: #222222;
    width: 14rem;
  }
  .row-3 {
    font-size: 0.85rem;
    color: #999999;
    height: 1.8rem;
    line-height: 1.8rem;
    .reply-button {
      display: inline-block;
      width: 3rem;
      height: 1.8rem;
      line-height: 1.8rem;
      border-radius: 0.9rem;
      background-color: #f5f5f5;
      color: #222222;
      padding: 0 0.8rem;
      margin-right: 0.5rem;
    }
  }
}
</style>
