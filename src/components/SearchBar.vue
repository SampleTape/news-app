<template>
  <div class="search-bar-container" id="search-bar-container">
    <div class="search-input">
      <img src="@/assets/search.png" />
      <input type="text" v-model="searchText" />
    </div>
    <div class="post-icon">
      <img src="@/assets/post-icon.png" />
      <span>发布</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",

  data() {
    return {
      searchText: "",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.search-bar-container {
  width: 100%;
  height: 4.25rem;
  background-color: #d4554b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4000;
  .search-input {
    width: 80%;
    height: 3rem;
    background-color: #ffffff;
    border-radius: 1.5rem;
    margin: 0 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      display: block;
      margin: 0 0 0 1.5rem;
      width: 1.5rem;
      height: 1.5rem;
    }
    input {
      display: block;
      width: 80%;
      border: none;
      height: 2rem;
      line-height: 2rem;
      font-size: 1rem;
      &:focus {
        border: none;
        outline: none;
      }
    }
  }
  .post-icon {
    width: 1.85rem;
    height: 3rem;
    color: #ffffff;
    font-size: 0.75rem;
    text-align: center;
    margin: 0 0.5rem;
    padding-top: 0.5rem;
    img {
      width: 1.55rem;
    }
  }
}
</style>
