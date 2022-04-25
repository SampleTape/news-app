<template>
  <div class="user-like-list">
    <div class="header">
      <div class="left">
        <div class="icon" @click="back">
          <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
        </div>
      </div>
      <div class="middle">
        <ul>
          <li :class="{ active: activeTab === 0 }">用户</li>
          <li :class="{ active: activeTab === 1 }">话题</li>
          <li :class="{ active: activeTab === 2 }">专题</li>
        </ul>
      </div>
      <div class="right">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'user-plus']"></font-awesome-icon>
        </div>
      </div>
    </div>
    <div class="search-bar">
      <span class="icon">
        <font-awesome-icon
          :icon="['fas', 'magnifying-glass']"
        ></font-awesome-icon>
      </span>
      <input type="text" placeholder="搜索你关注的人" />
    </div>
    <div class="sort-bar">
      <div>排序方式</div>
      <div>
        关注时间从新到旧
        <font-awesome-icon :icon="['fas', 'caret-down']"></font-awesome-icon>
      </div>
    </div>
    <ul class="list">
      <li v-for="(item, index) in items" :key="index">
        <div class="left">
          <div class="avatar">
            <img :src="item.imgUrl" />
          </div>
        </div>
        <div class="middle">
          <div>{{ item.name }}</div>
          <div>{{ item.followerNum }}粉丝 · {{ item.dec }}</div>
          <div v-if="item.isUpdate">最近7日有更新</div>
        </div>
        <div class="right">
          <span v-if="item.state">已关注</span>
          <span v-else>关注</span>
        </div>
      </li>
    </ul>
    <div class="show-all">已显示全部关注用户</div>
  </div>
</template>

<script>
export default {
  name: "UserLikeList",

  data() {
    return {
      items: [
        {
          id: "00010101",
          name: "前端周老师",
          followerNum: "200",
          dec: "优质科技领域创作者",
          imgUrl:
            "https://www.iconninja.com/files/262/537/114/snow-boy-icon.png",
          state: 1,
          isUpdate: 0,
        },
        {
          id: "00010102",
          name: "字节前端",
          followerNum: "2.5万",
          dec: "优质科技领域创作者",
          imgUrl:
            "https://www.iconninja.com/files/262/537/114/snow-boy-icon.png",
          state: 1,
          isUpdate: 0,
        },
        {
          id: "00010103",
          name: "前端周老师",
          followerNum: "200",
          dec: "优质科技领域创作者",
          imgUrl: "https://www.iconninja.com/files/52/84/997/boy-icon.png",
          state: 1,
          isUpdate: 1,
        },
        {
          id: "00010104",
          name: "前端周老师",
          followerNum: "200",
          dec: "优质科技领域创作者",
          imgUrl: "https://www.iconninja.com/files/52/84/997/boy-icon.png",
          state: 1,
          isUpdate: 0,
        },
      ],
      activeTab: 0,
    };
  },

  mounted() {},

  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-like-list {
  box-sizing: border-box;
  height: 100vh;
  padding: 3rem 1rem;
  color: #222222;
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .header {
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
    border-bottom: 1px solid #e8e8e8;
    padding: 0 1rem;
    .icon {
      font-size: 1.25rem;
      color: #222222;
    }
    .middle {
      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        li {
          height: 3rem;
          line-height: 3rem;
          margin: 0 1rem;
          &.active {
            border-bottom: 3px solid #e6645f;
          }
        }
      }
    }
  }
  .search-bar {
    height: 2.5rem;
    border-radius: 1.25rem;
    line-height: 2.5rem;
    background-color: #f2f2f2;
    color: #505050;
    font-size: 1rem;
    padding: 0 1rem;
    margin: 1rem 0;
    .icon {
      padding-right: 0.5rem;
    }
    input {
      font-size: 1rem;
    }
  }
  .sort-bar {
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div:last-child {
      font-size: 0.9rem;
    }
  }
  .list {
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 7rem;
      border-bottom: 1px solid #f2f2f2;
      .left {
        .avatar {
          width: 4rem;
          height: 4rem;
          border-radius: 2rem;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
      }
      .middle {
        font-size: 1rem;
        height: 7rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        & > div:nth-child(2) {
          font-size: 0.85rem;
          color: #999999;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          max-width: 13rem;
          padding: 0.45rem 0;
        }
        & > div:nth-child(3) {
          font-size: 0.75rem;
          color: #999999;
        }
      }
      .right {
        width: 4rem;
        height: 2rem;
        border: 1px solid #e8e8e8;
        color: #999999;
        font-size: 0.9rem;
        text-align: center;
        line-height: 2rem;
        border-radius: 4px;
        padding: 0 0.25rem;
      }
    }
  }
  .show-all {
    color: #999999;
    font-size: 0.9rem;
    padding: 2rem 0;
    text-align: center;
  }
}
</style>
