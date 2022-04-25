<template>
  <div class="user-view">
    <div class="little-buttons">
      <div class="left">
        <span>
          <font-awesome-icon :icon="['fas', 'expand']"></font-awesome-icon>
        </span>
      </div>
      <div class="right">
        <span>
          <font-awesome-icon :icon="['far', 'envelope']"></font-awesome-icon>
        </span>
        <span @click="gotoEditInfo">
          <font-awesome-icon :icon="['fas', 'gear']"></font-awesome-icon>
        </span>
      </div>
    </div>
    <div class="user-info">
      <div class="left">
        <div class="avatar-container">
          <img :src="avatarUrl" />
        </div>
        <div class="username">{{ userName }}</div>
      </div>
      <div class="right">个人中心 ></div>
    </div>
    <div class="user-nums">
      <div class="user-nums-item">
        <div class="num">{{ postNum }}</div>
        <div class="title">头条</div>
      </div>
      <div class="user-nums-item">
        <div class="num">{{ likeNum }}</div>
        <div class="title">获赞</div>
      </div>
      <div class="user-nums-item">
        <div class="num">{{ followerNum }}</div>
        <div class="title">粉丝</div>
      </div>
      <div class="user-nums-item">
        <div class="num">{{ followingNum }}</div>
        <div class="title">关注</div>
      </div>
    </div>
    <div class="user-buttons">
      <div class="user-buttons-item">
        <div class="icon">
          <font-awesome-icon :icon="['far', 'bell']"></font-awesome-icon>
        </div>
        <div class="title">消息通知</div>
      </div>
      <div class="user-buttons-item" @click="gotoLikeList">
        <div class="icon">
          <font-awesome-icon :icon="['far', 'star']"></font-awesome-icon>
        </div>
        <div class="title">收藏</div>
      </div>
      <div class="user-buttons-item">
        <div class="icon">
          <font-awesome-icon :icon="['far', 'clock']"></font-awesome-icon>
        </div>
        <div class="title">浏览历史</div>
      </div>
      <div class="user-buttons-item">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'download']"></font-awesome-icon>
        </div>
        <div class="title">下载历史</div>
      </div>
    </div>
    <div class="cinema-history"></div>
    <div class="post">
      <span class="post-text">再小的想法，都值得被记录</span>
      <span class="post-button">
        <font-awesome-icon :icon="['fas', 'plus']"></font-awesome-icon>
        发布
      </span>
    </div>
    <div class="more-buttons">
      <div class="more-buttons-header">
        <span class="title">更多服务</span>
        <span class="all">全部 ></span>
      </div>
      <div class="more-buttons-box">
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon
              :icon="['fas', 'magnifying-glass-plus']"
            ></font-awesome-icon>
          </div>
          <div class="title">大字模式</div>
        </div>
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon
              :icon="['far', 'file-lines']"
            ></font-awesome-icon>
          </div>
          <div class="title">订单</div>
        </div>
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'pen-clip']"></font-awesome-icon>
          </div>
          <div class="title">用户反馈</div>
        </div>
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon
              :icon="['fas', 'sack-dollar']"
            ></font-awesome-icon>
          </div>
          <div class="title">钱包</div>
        </div>
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'coins']"></font-awesome-icon>
          </div>
          <div class="title">借钱</div>
        </div>
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon
              :icon="['fas', 'rectangle-ad']"
            ></font-awesome-icon>
          </div>
          <div class="title">广告推广</div>
        </div>
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'droplet']"></font-awesome-icon>
          </div>
          <div class="title">免流量服务</div>
        </div>
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon :icon="['far', 'message']"></font-awesome-icon>
          </div>
          <div class="title">评论</div>
        </div>
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon :icon="['far', 'thumbs-up']"></font-awesome-icon>
          </div>
          <div class="title">点赞</div>
        </div>
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'shield']"></font-awesome-icon>
          </div>
          <div class="title">安全中心</div>
        </div>
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon
              :icon="['fas', 'user-shield']"
            ></font-awesome-icon>
          </div>
          <div class="title">隐私设置</div>
        </div>
        <div class="more-buttons-item">
          <div class="icon">
            <font-awesome-icon
              :icon="['fas', 'hand-holding-heart']"
            ></font-awesome-icon>
          </div>
          <div class="title">头条公益</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "ABCD",
      avatarUrl:
        "https://images.unsplash.com/photo-1647966720854-c24a7a2ee263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      postNum: 10,
      likeNum: 10,
      followerNum: 1110,
      followingNum: 200,
    };
  },
  methods: {
    gotoEditInfo() {
      this.$router.push({ name: "user-edit-info" });
    },
    gotoLikeList() {
      this.$router.push({ name: "user-like-list" });
    },
  },
};
</script>
<style lang="scss" scoped>
.user-view {
  height: 100vh;
  padding: 0 1rem 4rem;
  background-color: #f8f8f8;
  .little-buttons {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    color: #222222;
    .right {
      width: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .user-info {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 1.25rem;
      font-weight: bold;
      color: #222222;
      .avatar-container {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 1.75rem;
        overflow: hidden;
        margin-right: 1rem;
        img {
          width: 100%;
        }
      }
    }
    .right {
      color: #999999;
      font-size: 1rem;
    }
  }
  .user-nums {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    .user-nums-item {
      .num {
        font-weight: bold;
        font-size: 1.25rem;
        color: #222222;
        height: 1.75rem;
        line-height: 1.75rem;
      }
      .title {
        color: #999999;
        height: 1.75rem;
        line-height: 1.75rem;
      }
    }
  }
  .user-buttons {
    width: 100%;
    height: 6rem;
    border-radius: 10px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0;
    .user-buttons-item {
      text-align: center;
      .icon {
        font-size: 1.75rem;
        color: #dd504a;
      }
      .title {
        color: #222222;
        padding: 0.5rem;
        font-size: 0.85rem;
      }
    }
  }
  .post {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    .post-text {
      padding: 0 1rem;
      font-size: 0.9rem;
    }
    .post-button {
      width: 4rem;
      height: 2rem;
      line-height: 2rem;
      border-radius: 1rem;
      border: 1px solid #dd504a;
      font-size: 0.85rem;
      color: #dd504a;
      text-align: center;
      margin-right: 1rem;
    }
  }
  .more-buttons {
    width: 100%;
    height: 19.5rem;
    border-radius: 10px;
    background-color: #ffffff;
    margin: 1rem 0;
    .more-buttons-header {
      height: 4rem;
      line-height: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        padding: 0 1rem;
        font-weight: bold;
        font-size: 1rem;
      }
      .all {
        font-size: 0.85rem;
        color: #999999;
        padding: 0 1rem;
      }
    }
    .more-buttons-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      .more-buttons-item {
        width: 5rem;
        height: 5rem;
        text-align: center;
        .icon {
          font-size: 1.5rem;
        }
        .title {
          font-size: 0.8rem;
          margin: 0.5rem 0;
        }
      }
    }
  }
}
</style>
