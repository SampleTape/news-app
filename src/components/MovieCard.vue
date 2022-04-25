<template>
  <div class="movie-card-container">
    <div class="movie-info">
      <div class="left">
        <div>
          <span class="movie-title">{{ title }}</span>
          <span class="movie-tag" v-for="(tag, index) in tags" :key="index">
            {{ tag }}
          </span>
        </div>
        <div class="movie-desc">
          {{ desc }}
        </div>
      </div>
      <div class="right">
        <span v-if="isCollected" class="is-collect">
          <font-awesome-icon :icon="['fas', 'star']"></font-awesome-icon>
        </span>
        <span v-else>
          <font-awesome-icon :icon="['far', 'star']"></font-awesome-icon>
        </span>
        <span>
          <font-awesome-icon :icon="['fas', 'ellipsis']"></font-awesome-icon>
        </span>
      </div>
    </div>
    <div class="movie-cover">
      <img :src="imgUrl" />
      <span class="play-button">
        <font-awesome-icon :icon="['fas', 'play']"></font-awesome-icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: {
    id: String,
    title: String,
    desc: String,
    imgUrl: String,
    videoUrl: String,
    isCollected: Boolean,
    tags: Array,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.movie-card-container {
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f2f2f2;
  .movie-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem 0;
    .left {
      & > div:first-child {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
      .movie-title {
        font-size: 1rem;
        font-weight: bold;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 13rem;
        display: inline-block;
        height: 1.2rem;
        line-height: 1.2rem;
        color: #222222;
      }
      .movie-tag {
        background-color: #f2f2f2;
        color: #707070;
        font-size: 0.75rem;
        padding: 0.2rem 0.35rem;
        border-radius: 4px;
        margin: 0 0.2rem;
        text-align: center;
      }
      .movie-desc {
        font-size: 0.75rem;
        color: #999999;
      }
    }
    .right {
      color: #222222;
      span {
        padding: 0.2rem;
        &.is-collect {
          color: #fdf06f;
        }
      }
    }
  }
  .movie-cover {
    width: 100%;
    height: 12.5rem;
    overflow: hidden;
    border-radius: 6px;
    position: relative;
    img {
      width: 100%;
    }
    .play-button {
      position: absolute;
      top: 42%;
      left: 48%;
      font-size: 1.5rem;
      color: #e8e8e8;
    }
  }
}
</style>
