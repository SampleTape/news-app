<template>
  <div class="recommend-video-list">
    <van-loading type="spinner" v-if="isLoading" class="loading-icon" />
    <ul v-else>
      <li v-for="video in videoList" :key="video.id">
        <lazy-component>
          <videoCard v-bind="video"></videoCard>
        </lazy-component>
      </li>
    </ul>
  </div>
</template>
<script>
import VideoCard from "@/components/VideoCard.vue";
import { getApi } from "@/util/api.js";
export default {
  components: {
    VideoCard
  },
  data() {
    return {
      videoList: [],
      isLoading: true
    };
  },
  mounted() {
    getApi("/videolist").then((res) => {
      res.data.forEach((v) => {
        this.videoList.push({
          ...v,
          initPlaying: false
        });
      });

      this.isLoading = false;
    });

    // 监听滚动事件，视频位于视口上半部分自动播放
    window.addEventListener("scroll", this.onScroll);
  },

  beforeUnmount() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      let videos = document.getElementsByClassName("video");
      let threshold = this.getViewport().height / 2;
      for (let i = 0; i < videos.length; i++) {
        let offsetTop = this.getElementViewTop(videos[i]);
        if (offsetTop < threshold && offsetTop > 68) {
          videos[i].play();
          this.videoList[i].initPlaying = true;
        } else {
          videos[i].pause();
          this.videoList[i].initPlaying = false;
        }
      }
    },
    getViewport() {
      if (document.compatMode == "BackCompat") {
        return {
          width: document.body.clientWidth,
          height: document.body.clientHeight
        };
      } else {
        return {
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight
        };
      }
    },
    getElementViewTop(element) {
      var actualTop = element.offsetTop;
      var current = element.offsetParent;

      while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }

      let elementScrollTop;
      if (document.compatMode == "BackCompat") {
        elementScrollTop = document.body.scrollTop;
      } else {
        elementScrollTop = document.documentElement.scrollTop;
      }

      return actualTop - elementScrollTop;
    }
  }
};
</script>
<style lang="scss" scoped>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.loading-icon {
  text-align: center;
  margin: 20px auto;
}
</style>
