<template>
  <div class="footer-container">
    <router-link class="footer-item" to="/home">
      <img class="icon" src="@/assets/home.png" />
      <img class="icon" src="@/assets/home-line.png" />
      <span class="item-title">头条</span>
    </router-link>
    <router-link class="footer-item" to="/video">
      <img class="icon" src="@/assets/video.png" />
      <img class="icon" src="@/assets/video-line.png" />
      <span class="item-title">视频</span>
    </router-link>
    <router-link class="footer-item" to="/cinema">
      <img class="icon" src="@/assets/play.png" />
      <img class="icon" src="@/assets/play-line.png" />
      <span class="item-title">放映厅</span>
    </router-link>
    <router-link class="footer-item" to="/user">
      <img class="icon" src="@/assets/user.png" />
      <img class="icon" src="@/assets/user-line.png" />
      <span class="item-title">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.footer-container {
  width: 100%;
  height: 4rem;
  background-color: #fcfcfc;
  box-sizing: border-box;
  border-top: 1px solid #d4d4d4;
  position: fixed;
  z-index: 2000;
  bottom: 0;
  left: 0;
  font-size: 0.85rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .footer-item {
    width: 3.5rem;
    margin: 5px;
    color: #282828;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .item-title {
      display: block;
      width: 100%;
      height: 1.5rem;
      line-height: 1.5rem;
      text-align: center;
    }
    .icon {
      width: 1.65rem;
      height: 1.65rem;
    }
    .icon:nth-child(1) {
      display: none;
    }
    .icon:nth-child(2) {
      display: block;
    }
    &.router-link-active {
      .item-title {
        color: #dd504a;
      }
      .icon:nth-child(1) {
        display: block;
      }
      .icon:nth-child(2) {
        display: none;
      }
    }
  }
}
</style>
