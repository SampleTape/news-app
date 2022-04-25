<template>
  <div class="nav-bar" id="nav-bar">
    <div class="nav-bar-container">
      <div class="nav-content">
        <span class="nav-items" v-for="(item, index) in items" :key="index">
          <span v-if="index < 3">
            <router-link
              :to="{
                name: item.name,
              }"
              >{{ item.text }}</router-link
            ></span
          >
          <span v-else>{{ item.text }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    items: Array,
    showMore: Boolean,
  },

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
  color: #2e2e2e;
}
.nav-bar {
  width: 100%;
  height: 2.25rem;
  background-color: #ffffff;
  border-bottom: 1px solid #f3f3f3;
  position: fixed;
  top: 4.25rem;
  left: 0;
  z-index: 3000;
}
.nav-bar-container {
  box-sizing: border-box;
  width: 100%;
  height: 2.25rem;
  overflow-x: scroll;
  overflow-y: hidden;
  -weblit-overflow-scrolling: touch;
  scrollbar-color: transparent transparent;
  scrollbar-width: none;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
  .nav-content {
    height: 2.25rem;
    font-size: 0.85rem;
    box-sizing: border-box;
    display: flex;
    margin-right: 4rem;
    .nav-items {
      box-sizing: border-box;
      padding: 0 0.5rem;
      height: 2.25rem;
      line-height: 2.25rem;
      min-width: 3.75rem;
      text-align: center;
      flex: 0 0 3.75rem;
      a {
        height: 2.25rem;
        box-sizing: border-box;
        display: inline-block;
      }
      a.router-link-active {
        color: #e26e69;
        border-bottom: 2px solid #dd504a;
      }
    }
  }
}
.nav-bar-container::-webkit-scrollbar {
  display: none;
}
</style>
