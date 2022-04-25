<template>
  <div class="edit-info-view">
    <div class="header">
      <div class="left">
        <div class="icon" @click="back">
          <font-awesome-icon :icon="['fas', 'angle-left']"></font-awesome-icon>
        </div>
      </div>
      <div class="right">
        <div>编辑资料</div>
        <div>
          <span>资料完成度</span>
          <span>50%</span>
        </div>
      </div>
    </div>
    <div class="avatar-box">
      <div class="avatar">
        <img :src="avatarUrl" />
      </div>
      <div class="text">点击更换头像</div>
    </div>
    <div class="info-items">
      <span class="title">用户名</span>
      <span class="text" :class="{ filled: userName }">
        {{ userName }}
        <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
      </span>
    </div>
    <div class="info-items">
      <span class="title">简介</span>
      <span class="text" :class="{ filled: userDec }">
        {{ userDec ? userDec : "待完善" }}
        <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
      </span>
    </div>
    <div class="info-items">
      <span class="title">背景图</span>
      <span class="text" :class="{ filled: backgroundImgUrl }">
        {{ backgroundImgUrl ? backgroundImgUrl : "去更换" }}
        <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
      </span>
    </div>
    <div class="info-items">
      <span class="title">性别</span>
      <span class="text" :class="{ filled: userSex }">
        {{ userSex }}
        <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
      </span>
    </div>
    <div class="info-items">
      <span class="title">生日</span>
      <span class="text" :class="{ filled: userBirthday }">
        {{ userBirthday ? userBirthday : "待完善" }}
        <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
      </span>
    </div>
    <div class="info-items">
      <span class="title">地区</span>
      <span class="text" :class="{ filled: userArea }">
        {{ userArea ? userArea : "待完善" }}
        <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "ABCD",
      userDec: "",
      backgroundImgUrl: "",
      userSex: "女",
      userBirthday: "",
      userArea: "",
      avatarUrl:
        "https://images.unsplash.com/photo-1647966720854-c24a7a2ee263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss" scoped>
.edit-info-view {
  box-sizing: border-box;
  height: 100vh;
  padding: 4rem 1rem;
  color: #222222;
  .header {
    background-color: #ffffff;
    box-sizing: border-box;
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5000;
    border-bottom: 1px solid #e8e8e8;
    .icon {
      font-size: 1.25rem;
      color: #222222;
    }
    .left {
      position: absolute;
      left: 1rem;
      top: 0;
      height: 3rem;
      line-height: 3rem;
    }
    .right {
      & > div:first-child {
        padding-top: 0.2rem;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
      }
      & > div:last-child {
        font-size: 0.75rem;
        padding: 0.1rem;
        text-align: center;
        & > span:first-child {
          color: #999999;
        }
        & > span:last-child {
          color: #dd504a;
        }
      }
    }
  }
  .avatar-box {
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .avatar {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
    .text {
      padding: 1rem;
      font-size: 1rem;
    }
  }
  .info-items {
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    border-bottom: 1px solid #e8e8e8;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      color: #999999;
      &.filled {
        color: #222222;
      }
      .icon {
        color: #999999;
      }
    }
  }
}
</style>
