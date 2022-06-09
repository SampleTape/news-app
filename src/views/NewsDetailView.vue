<template>
  <van-loading type="spinner" v-if="isLoading" class="loading-icon" />
  <div v-else class="news-detail-container">
    <div class="tool-bar-top">
      <div class="tool-bar-left">
        <div class="icon" @click="back">
          <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
        </div>
      </div>
      <div class="tool-bar-right">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'headphones']"></font-awesome-icon>
        </div>
        <div class="icon">
          <font-awesome-icon
            :icon="['fas', 'magnifying-glass']"
          ></font-awesome-icon>
        </div>
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'ellipsis']"></font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="news-content">
      <div class="news-title">{{ newsTitle }}</div>
      <div class="news-header">
        <div class="news-header-left">
          <img :src="avatarUrl" />
        </div>
        <div class="news-header-middle">
          <div>
            <span class="news-from">{{ from }}</span>
            <span class="news-tag">{{ tag }}</span>
          </div>
          <div>
            <span class="news-time">{{ time }}</span> &middot;
            <span class="news-from-info">{{ fromInfo }}</span>
          </div>
        </div>
        <div class="news-header-right">
          <button>关注</button>
        </div>
      </div>
      <div class="news-body" v-html="newsContent"></div>
    </div>
    <NewsCommentList
      :commentsNum="commentsNum"
      :likeNum="likeNum"
      :forwardNum="forwardNum"
      :commentsList="commentsList"
      :newsId="id"
    ></NewsCommentList>
    <div class="tool-bar-bottom">
      <div class="tool-bar-bottom-left" @click.stop="handlePostComment">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'pen']"></font-awesome-icon>
        </div>
        <span>写评论...</span>
      </div>
      <div class="tool-bar-bottom-right">
        <div class="icon">
          <font-awesome-icon
            :icon="['far', 'comment-dots']"
          ></font-awesome-icon>
        </div>
        <div class="icon">
          <font-awesome-icon :icon="['far', 'star']"></font-awesome-icon>
        </div>
        <div class="icon">
          <font-awesome-icon :icon="['far', 'thumbs-up']"></font-awesome-icon>
        </div>
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'share']"></font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="comment-input-modal" v-show="showCommentInput">
      <div class="edit-box">
        <textarea
          id="comment-input-box"
          autofocus="autofocus"
          placeholder="友善是交流的起点"
          v-model="newComment"
        ></textarea>
        <div class="post-button" @click="postComment">发布</div>
      </div>
      <div class="buttons-box">
        <div class="left">
          <input type="checkbox" />
          同时转发
        </div>
        <div class="right">
          <font-awesome-icon
            class="icon"
            :icon="['fas', 'at']"
          ></font-awesome-icon>
          <font-awesome-icon
            class="icon"
            :icon="['fas', 'hashtag']"
          ></font-awesome-icon>
          <font-awesome-icon
            class="icon"
            :icon="['far', 'face-smile']"
          ></font-awesome-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getApi, postApi } from "@/util/api.js";
import { escape2Html } from "@/util/str.js";
import NewsCommentList from "@/components/NewsCommentList.vue";
import { mapState } from "vuex";
export default {
  name: "NewsDetailView",
  components: {
    NewsCommentList
  },
  data() {
    return {
      id: "",
      newsTitle: "",
      avatarUrl: "",
      from: "",
      time: "",
      fromInfo: "",
      tag: "",
      newsContent: "",
      commentsNum: 0,
      likeNum: 0,
      forwardNum: 0,
      commentsList: [],
      isLoading: false,
      showCommentInput: false,
      newComment: ""
    };
  },
  computed: {
    ...mapState({
      userId: (state) => state.userInfo.userId,
      userName: (state) => state.userInfo.userName,
      userAvatar: (state) => state.userInfo.userAvatar
    })
  },
  mounted() {
    this.id = this.$route.params.id;
    this.isLoading = true;
    // 新闻详情接口
    getApi("/newsdetail/" + this.id).then((res) => {
      this.newsTitle = res.data.newsTitle;
      this.avatarUrl = res.data.avatarUrl;
      this.from = res.data.from;
      this.time = res.data.time;
      this.fromInfo = res.data.fromInfo;
      this.tag = res.data.tag;
      // 新闻内容反转义
      this.newsContent = escape2Html(res.data.newsContent);
      this.commentsNum = res.data.commentsNum;
      this.likeNum = res.data.likeNum;
      this.forwardNum = res.data.forwardNum;

      this.isLoading = false;
    });

    // 新闻评论接口
    getApi("/newscommentslist/" + this.id).then((res) => {
      this.commentsList = res.data;
    });
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    handlePostComment() {
      this.showCommentInput = true;

      // 唤起手机键盘
      const commentInputBox = document.getElementById("comment-input-box");
      this.$nextTick(() => {
        commentInputBox.focus();
      });
    },
    postComment() {
      postApi("/newscomment", {
        newsId: this.id,
        userId: this.userId,
        content: this.newComment
      }).then(() => {
        this.commentsList.unshift({
          id: "cmt20000001",
          userId: this.userId,
          newsId: this.id,
          userName: this.userName,
          avatar: this.userAvatar,
          isLike: false,
          likeNum: 0,
          content: this.newComment,
          time: "10秒前",
          location: "辽宁"
        });
        this.showCommentInput = false;
        this.newComment = "";
      });
    }
  }
};
</script>

<style lang="scss" scoped>
article img {
  width: 100%;
}
.news-detail-container {
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4000;
  overflow-y: auto;
  overflow-x: hidden;
  .tool-bar-top {
    background-color: #ffffff;
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5000;
    padding: 0.5rem;
    .icon {
      font-size: 1.25rem;
      color: #222222;
      margin: 0.5rem;
    }
    .tool-bar-right {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .tool-bar-bottom {
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    background-color: #ffffff;
    border-top: 1px solid #e8e8e8;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 4000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    .tool-bar-bottom-left {
      width: 55%;
      height: 2rem;
      background-color: #f2f2f2;
      border-radius: 1rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.5rem 0.75rem;
      box-sizing: border-box;
      .icon {
        font-size: 0.9rem;
        margin-right: 0.2rem;
      }
    }
    .tool-bar-bottom-right {
      width: 40%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .news-content {
    margin-top: 3rem;
    padding: 0.5rem;
    .news-title {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    .news-header {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .news-header-left {
        box-sizing: border-box;
        width: 2.75rem;
        height: 2.75rem;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .news-header-middle {
        width: 60%;
        & > div:first-child {
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .news-from {
          font-size: 0.9rem;
          font-weight: bold;
          display: inline-block;
          min-width: 4rem;
          height: 1rem;
          line-height: 1rem;
        }
        .news-tag {
          display: inline-block;
          width: 2.25rem;
          height: 1rem;
          line-height: 1rem;
          background-color: #f2f2f2;
          color: #999999;
          font-size: 0.65rem;
          border-radius: 4px;
          margin-left: 5px;
          box-sizing: border-box;
          text-align: center;
        }
        & > div:last-child {
          margin-top: 0.2rem;
          color: #999999;
          font-size: 0.65rem;
        }
      }
      .news-header-right {
        button {
          width: 4.25rem;
          height: 2.25rem;
          color: #ffffff;
          background-color: #dd504a;
          border-radius: 5px;
          border: none;
        }
      }
    }
    .news-body {
      img {
        width: 100%;
      }
    }
  }
}
.loading-icon {
  text-align: center;
  margin: 20px auto;
}
.comment-input-modal {
  width: 100%;
  height: 10rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 9000;
  border-top: 1px solid #d6d6d6;
  .edit-box {
    display: flex;
    justify-content: center;
    align-items: center;
    textarea {
      display: inline-block;
      width: 16rem;
      height: 4rem;
      border: 1px solid #d6d6d6;
      margin: 1rem;
      padding: 0.5rem;
      border-radius: 5px;
      background-color: #f8f8f8;
      font-size: 1rem;
    }
    .post-button {
      color: #c7c7c7;
      font-size: 1.15rem;
      margin: 0.5rem;
      font-weight: bold;
    }
  }
  .buttons-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      margin: 0 1rem;
    }
    .right {
      margin: 0 1rem;
      .icon {
        margin: 0 0.5rem;
      }
    }
  }
}
</style>
