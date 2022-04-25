<template>
  <div class="movie-filter-bar">
    <div class="filter-button" v-for="filter in filterList" :key="filter.id">
      {{ filter.text }}
    </div>
    <div class="filter-button">
      筛选
      <font-awesome-icon :icon="['fas', 'filter']"></font-awesome-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieFilterBar",

  data() {
    return {
      filterList: [
        { id: "f001", text: "爱情" },
        { id: "f002", text: "喜剧" },
        { id: "f003", text: "动作" },
        { id: "f004", text: "古装" },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.movie-filter-bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 1rem;
  .filter-button {
    height: 2.25rem;
    line-height: 2.25rem;
    padding: 0 0.75rem;
    font-size: 0.85rem;
    border-radius: 1.125rem;
    background-color: #f2f2f2;
    color: #222222;
    margin-right: 0.5rem;
    box-sizing: border-box;
  }
}
</style>
