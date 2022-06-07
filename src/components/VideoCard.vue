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
        <span
          v-if="!isAuthorFollow"
          class="not-follow"
          @click.stop="handleFollowAuthor"
          >关注</span
        >
        <span v-else @click.stop="handleFollowAuthor" class="is-follow"
          >已关注</span
        >
        <span>
          <font-awesome-icon :icon="['fas', 'ellipsis']"></font-awesome-icon>
        </span>
      </div>
    </div>
    <div class="video-title">{{ title }}</div>
    <div class="video-box" @click="handleClickVideo">
      <div
        v-show="initPlaying || isPlaying"
        class="volume-botton"
        @click.stop="changeVolume"
      >
        <font-awesome-icon
          v-if="isMuted"
          :icon="['fas', 'volume-xmark']"
        ></font-awesome-icon>
        <font-awesome-icon
          v-else
          :icon="['fas', 'volume-high']"
        ></font-awesome-icon>
      </div>
      <div class="video-controller" v-show="showController">
        <div class="play-button" @click.stop="handlePlay">
          <font-awesome-icon
            v-if="isPlaying"
            :icon="['fas', 'pause']"
          ></font-awesome-icon>
          <font-awesome-icon v-else :icon="['fas', 'play']"></font-awesome-icon>
        </div>
        <div class="controller-bar">
          <div class="time">
            <span>{{ currentTimeFormat }}/</span>
            <span>{{ durationFormat }}</span>
          </div>
          <div class="process-bar"></div>
          <div class="zoom"></div>
        </div>
      </div>
      <video
        playsinline="true"
        x5-playsinline="true"
        webkit-playsinline="true"
        mediatype="video"
        muted="muted"
        preload="preload"
        ref="videoDom"
        class="video"
      >
        <source :src="videoUrl" type="video/mp4" />
      </video>
    </div>
    <div class="video-buttons">
      <span>
        <font-awesome-icon :icon="['fas', 'share']"></font-awesome-icon>
        分享
      </span>
      <span
        @click.stop="handleCollect"
        :class="{ 'is-collect': isVideoCollected }"
      >
        <font-awesome-icon
          v-if="isVideoCollected"
          :icon="['fas', 'star']"
        ></font-awesome-icon>
        <font-awesome-icon v-else :icon="['far', 'star']"></font-awesome-icon>
        {{ isVideoCollected ? "已收藏" : "收藏" }}
      </span>
      <span>
        <font-awesome-icon :icon="['far', 'comment']"></font-awesome-icon>
        {{ commentNum }}
      </span>
      <transition name="bounce">
        <span v-if="isVideoLiked" @click.stop="handleLike" class="is-like">
          <font-awesome-icon :icon="['fas', 'thumbs-up']"></font-awesome-icon>
          {{ videoLikeNum }}
        </span>
      </transition>
      <span v-if="!isVideoLiked" @click.stop="handleLike">
        <font-awesome-icon :icon="['far', 'thumbs-up']"></font-awesome-icon>
        {{ videoLikeNum }}
      </span>
    </div>
  </div>
</template>

<script>
import { postApi } from "@/util/api.js";
export default {
  name: "VideoCard",
  props: {
    id: String,
    author: String,
    authorId: String,
    title: String,
    isFollow: Boolean,
    avatarUrl: String,
    imgUrl: String,
    videoUrl: String,
    isCollected: Boolean,
    isLiked: Boolean,
    commentNum: String,
    likeNum: String,
    initPlaying: Boolean,
  },
  data() {
    return {
      showController: false,
      isPlaying: this.initPlaying,
      video: {},
      videoControllerTimer: {},
      updateCurrentTimer: {},
      currentTime: 0,
      duration: 0,
      isMuted: true,
      isClickCollect: false,
      isClickFollow: false,
      isClickLike: false,
      isAuthorFollow: this.isFollow,
      isVideoCollected: this.isCollected,
      isVideoLiked: this.isLiked,
      videoLikeNum: this.likeNum,
    };
  },
  computed: {
    currentTimeFormat() {
      let tmp = parseInt(this.currentTime);
      if (tmp <= 60) {
        return "00:" + (tmp < 10 ? "0" + tmp : tmp);
      } else {
        let h = Math.floor(tmp / 3600);
        let m = Math.floor((tmp - h * 3600) / 60);
        let s = tmp - h * 3600 - m * 60;
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        return h + ":" + m + ":" + s;
      }
    },
    durationFormat() {
      let tmp = parseInt(this.duration);
      if (tmp <= 60) {
        return "00:" + (tmp < 10 ? "0" + tmp : tmp);
      } else {
        let h = Math.floor(tmp / 3600);
        let m = Math.floor((tmp - h * 3600) / 60);
        let s = tmp - h * 3600 - m * 60;
        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        return h + ":" + m + ":" + s;
      }
    },
  },

  mounted() {
    this.video = this.$refs.videoDom;
    this.updateCurrentTimer = setInterval(() => {
      this.currentTime = this.video.currentTime;
    }, 1000);
  },
  beforeUnmount() {
    clearTimeout(this.videoControllerTimer);
    clearInterval(this.updateCurrentTimer);
  },

  methods: {
    handleClickVideo() {
      this.isPlaying = !this.video.paused;
      this.showController = !this.showController;
      if (this.showController) {
        this.currentTime = this.video.currentTime;
        this.duration = this.video.duration;
        this.videoControllerTimer = setTimeout(() => {
          this.showController = false;
        }, 3000);
      }
    },
    handlePlay() {
      if (this.isPlaying) {
        this.video.pause();
        this.isPlaying = false;
        clearTimeout(this.videoControllerTimer);
      } else {
        this.video.play();
        this.isPlaying = true;
        this.videoControllerTimer = setTimeout(() => {
          this.showController = false;
        }, 2000);
      }
    },
    changeVolume() {
      this.isMuted = !this.isMuted;
      this.video.muted = this.isMuted;
    },
    handleCollect() {
      if (this.isClickCollect) {
        return;
      }
      this.isClickCollect = true;

      if (this.isVideoCollected) {
        // 取消收藏
        this.$toast.loading({
          forbidClick: true,
          loadingType: "spinner",
          duration: 2000,
        });

        postApi("/uncollectvideo", {
          id: this.id,
        }).then((res) => {
          this.$toast.success(res.data.message);
          this.isVideoCollected = false;

          this.isClickCollect = false;
        });
      } else {
        // 收藏
        this.$toast.loading({
          forbidClick: true,
          loadingType: "spinner",
          duration: 2000,
        });

        postApi("/collectvideo", {
          id: this.id,
        }).then((res) => {
          this.$toast.success(res.data.message);
          this.isVideoCollected = true;

          this.isClickCollect = false;
        });
      }
    },
    handleFollowAuthor() {
      if (this.isClickFollow) {
        return;
      }
      this.isClickFollow = true;

      if (this.isAuthorFollow) {
        // 取消关注
        this.$toast.loading({
          forbidClick: true,
          loadingType: "spinner",
          duration: 2000,
        });

        postApi("/unfollowauthor", {
          authorId: this.authorId,
        }).then((res) => {
          this.$toast.success(res.data.message);
          this.isAuthorFollow = false;

          this.isClickFollow = false;
        });
      } else {
        // 关注
        this.$toast.loading({
          forbidClick: true,
          loadingType: "spinner",
          duration: 2000,
        });

        postApi("/followauthor", {
          authorId: this.authorId,
        }).then((res) => {
          this.$toast.success(res.data.message);
          this.isAuthorFollow = true;

          this.isClickFollow = false;
        });
      }
    },
    handleLike() {
      if (this.isClickLike) {
        return;
      }
      this.isClickLike = true;

      if (this.isVideoLiked) {
        // 取消点赞
        this.isVideoLiked = false;
        this.videoLikeNum = parseInt(this.videoLikeNum) - 1;
        postApi("/unlikevideo", {
          id: this.id,
        }).then(() => {
          this.isClickLike = false;
        });
      } else {
        // 点赞
        this.isVideoLiked = true;
        this.videoLikeNum = parseInt(this.videoLikeNum) + 1;

        postApi("/likevideo", {
          id: this.id,
        }).then(() => {
          this.isClickLike = false;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/*点赞过渡*/
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
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
    height: 13rem;
    position: relative;
    overflow: hidden;
    video {
      width: 100%;
    }
    .volume-botton {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      width: 2rem;
      height: 2rem;
      text-align: center;
      line-height: 2rem;
      font-size: 1rem;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: #ffffff;
    }
    .video-controller {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 200;
      background-color: rgba(0, 0, 0, 0.5);
      .play-button {
        font-size: 1.5rem;
        color: #fff;
        text-align: center;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .controller-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        color: #ffffff;
        .time {
          font-size: 0.65rem;
        }
      }
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
