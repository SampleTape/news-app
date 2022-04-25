<template>
  <div class="video-card-container">
    <div class="author-info">
      <div class="left">
        <div class="avatar-container">
          <img :src="avatarUrl" />
        </div>
        <div class="author">{{ author }}</div>
      </div>
      <div class="right">
        <span v-if="!isFollow" class="not-follow">关注</span>
        <span v-else class="is-follow">已关注</span>
        <span>
          <font-awesome-icon :icon="['fas', 'ellipsis']"></font-awesome-icon>
        </span>
      </div>
    </div>
    <div class="video-title">{{ title }}</div>
    <div class="video-box">
      <video
        class=""
        autoplay=""
        playsinline="true"
        x5-playsinline="true"
        webkit-playsinline="true"
        mediatype="video"
        :src="videoUrl"
      ></video>
    </div>
    <div class="video-buttons">
      <span>
        <font-awesome-icon :icon="['fas', 'share']"></font-awesome-icon>
        分享
      </span>
      <span v-if="isCollected" class="is-collect">
        <font-awesome-icon :icon="['fas', 'star']"></font-awesome-icon>
        已收藏
      </span>
      <span v-else>
        <font-awesome-icon :icon="['far', 'star']"></font-awesome-icon>
        收藏
      </span>
      <span>
        <font-awesome-icon :icon="['far', 'comment']"></font-awesome-icon>
        {{ commentNum }}
      </span>
      <span v-if="isLiked" class="is-like">
        <font-awesome-icon :icon="['fas', 'thumbs-up']"></font-awesome-icon>
        {{ likeNum }}
      </span>
      <span v-else>
        <font-awesome-icon :icon="['far', 'thumbs-up']"></font-awesome-icon>
        {{ likeNum }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoCard",
  props: {
    id: String,
    author: String,
    title: String,
    isFollow: Boolean,
    avatarUrl: String,
    imgUrl: String,
    videoUrl: String,
    isCollected: Boolean,
    isLiked: Boolean,
    commentNum: String,
    likeNum: String,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.video-card-container {
  display: block;
  margin: 0.75rem 0;
  .author-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    margin: 0 1rem;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      .avatar-container {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid #efefef;
        img {
          width: 100%;
        }
      }
      .author {
        height: 3.5rem;
        line-height: 3.5rem;
        text-align: center;
        padding: 0.5rem;
        font-size: 0.85rem;
      }
    }
    .right {
      span {
        display: inline-block;
        width: 3rem;
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: center;
        font-size: 0.85rem;
        &.not-follow {
          border-radius: 5px;
          border: 1px solid #e05b56;
          color: #e05b56;
        }
        &.is-follow {
          color: #8e8e8e;
        }
      }
    }
  }
  .video-title {
    height: 3rem;
    font-weight: bold;
    font-size: 1.15rem;
    margin: 0 1rem 0.45rem;
  }
  .video-box {
    width: 100%;
    video {
      width: 100%;
    }
  }
  .video-buttons {
    height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    padding: 0 0.5rem;
    border-bottom: 1px solid #f2f2f2;
    .is-collect {
      color: #fdf06f;
    }
    .is-like {
      color: #ef450e;
    }
  }
}
</style>
