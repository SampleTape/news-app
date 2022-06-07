<template>
  <div class="hot-list-container">
    <header>
      <img src="@/assets/hot-list-logo.png" />
    </header>
    <div class="hot-list-nav-bar-container" :class="{ fix: isNavFixed }">
      <nav>
        <span
          class="hot-list-nav-items"
          :class="{ active: index === activeNav }"
          v-for="(nav, index) in navList"
          :key="index"
          @click="scrollTo(index)"
        >
          {{ nav }}
        </span>
      </nav>
    </div>
    <div class="hot-list-nav-content">
      <div class="list">
        <HotNewsList :topNews="topNews" :newsList="newsList"> </HotNewsList>
      </div>
      <div class="list">
        <div class="list-header">
          <span class="list-header-icon">
            <font-awesome-icon
              :icon="['fas', 'location-dot']"
            ></font-awesome-icon>
          </span>
          <span class="list-header-title">大连榜</span>
        </div>
        <HotNewsList :newsList="cityNewsList"></HotNewsList>
      </div>
      <div class="list">
        <div class="list-header">
          <span class="list-header-icon">
            <font-awesome-icon
              style="color: #fe34aa"
              :icon="['fas', 'money-bill']"
            ></font-awesome-icon>
          </span>
          <span class="list-header-title">股市榜</span>
        </div>
        <HotNewsList :newsList="stockNewsList"></HotNewsList>
      </div>
      <div class="list">
        <div class="list-header">
          <span class="list-header-icon">
            <font-awesome-icon
              style="color: #34edff"
              :icon="['fas', 'globe']"
            ></font-awesome-icon>
          </span>
          <span class="list-header-title">国际榜</span>
        </div>
        <HotNewsList :newsList="globalNewsList"></HotNewsList>
      </div>
    </div>
  </div>
</template>

<script>
import HotNewsList from "@/components/HotNewsList.vue";
import { getApi } from "@/util/api.js";
export default {
  name: "HotListView",
  components: {
    HotNewsList,
  },
  data() {
    return {
      activeNav: 0,
      isNavFixed: false,
      navList: [
        "热榜",
        "本地榜",
        "股市榜",
        "国际榜",
        "财经榜",
        "文化榜",
        "军事榜",
        "娱乐榜",
      ],
      topNews: {
        id: "",
        title: "",
        tag: 0,
      },
      newsList: [],
      cityNewsList: [],
      stockNewsList: [],
      globalNewsList: [],
    };
  },

  mounted() {
    // 监听滚动事件
    window.addEventListener("scroll", this.onScroll);

    //导航栏变色
    document.querySelectorAll(".nav-bar")[0].classList.add("red");

    getApi("/hotnewslist")
      .then((res) => {
        let { topNews, newsList, cityNewsList, stockNewsList, globalNewsList } =
          res.data;
        this.topNews = topNews;
        this.newsList = newsList;
        this.cityNewsList = cityNewsList;
        this.stockNewsList = stockNewsList;
        this.globalNewsList = globalNewsList;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  beforeUnmount() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);

    //导航栏变色
    document.querySelectorAll(".nav-bar")[0].classList.remove("red");
  },

  methods: {
    onScroll() {
      // 获得导航栏高度
      const tabH = document
        .querySelectorAll(".nav-bar")[0]
        .getBoundingClientRect().top;
      // 获取所有锚点元素
      const navContents = document.querySelectorAll(".list");
      // 所有锚点元素的 offsetTop
      const offsetTopArr = [];
      navContents.forEach((item) => {
        offsetTopArr.push(item.offsetTop - tabH);
      });
      // 获取当前文档流的 scrollTop
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollTop);
      if (scrollTop > 75) {
        this.isNavFixed = true;
      } else {
        this.isNavFixed = false;
      }
      // 定义当前点亮的导航下标
      let navIndex = 0;
      for (let i = 0; i < offsetTopArr.length; i++) {
        // 如果 scrollTop 大于等于第 n 个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
        // 那么此时导航索引就应该是 n 了
        if (scrollTop >= offsetTopArr[i]) {
          navIndex = i;
        }
      }
      // 把下标赋值给 vue 的 data
      this.activeNav = navIndex;
    },
    // 跳转到指定索引的元素
    scrollTo(index) {
      // 获得导航栏高度
      const tabH = document
        .querySelectorAll(".nav-bar")[0]
        .getBoundingClientRect().top;
      // 获取目标的 offsetTop
      // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
      const targetOffsetTop =
        document.querySelector(`.list:nth-child(${index + 1})`).offsetTop -
        tabH;
      // 获取当前 offsetTop
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
      const STEP = 50;
      // 判断是往下滑还是往上滑
      if (scrollTop > targetOffsetTop) {
        // 往上滑
        smoothUp();
      } else {
        // 往下滑
        smoothDown();
      }
      // 定义往下滑函数
      function smoothDown() {
        // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
        if (scrollTop < targetOffsetTop) {
          // 如果和目标相差距离大于等于 STEP 就跳 STEP
          // 否则直接跳到目标点，目标是为了防止跳过了。
          if (targetOffsetTop - scrollTop >= STEP) {
            scrollTop += STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop;
          // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
          requestAnimationFrame(smoothDown);
        }
      }
      // 定义往上滑函数
      function smoothUp() {
        if (scrollTop > targetOffsetTop) {
          if (scrollTop - targetOffsetTop >= STEP) {
            scrollTop -= STEP;
          } else {
            scrollTop = targetOffsetTop;
          }
          document.body.scrollTop = scrollTop;
          document.documentElement.scrollTop = scrollTop;
          requestAnimationFrame(smoothUp);
        }
      }
    },
  },
};
</script>

<style lang="scss">
.hot-list-container {
  background-color: #d2554c;
  position: relative;
  header {
    width: 100%;
    height: 4.5rem;
    background-color: #d2554c;
    line-height: 4.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 6.5rem;
    }
  }
  .hot-list-nav-bar-container {
    overflow-x: scroll;
    overflow-y: hidden;
    -weblit-overflow-scrolling: touch;
    scrollbar-color: transparent transparent;
    scrollbar-width: none;
    scrollbar-track-color: transparent;
    -ms-scrollbar-track-color: transparent;
    padding: 0.5rem;
    border-radius: 0.5rem 0.5rem 0 0;
    background-color: #ffffff;
    &.fix {
      position: fixed;
      top: 6.5rem;
      left: 0;
      z-index: 6000;
      border-radius: 0;
    }
    nav {
      height: 2.5rem;
      font-size: 0.85rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin-right: 4rem;
      .hot-list-nav-items {
        padding: 0 0.7rem;
        margin: 0 0.25rem;
        height: 1.75rem;
        line-height: 1.75rem;
        text-align: center;
        flex: 0 0 auto;
        border: 1px solid #e9e9e9;
        border-radius: 1rem;
        &.active {
          color: #cd564d;
          border: 1px solid #cd564d;
        }
      }
    }
  }
  .hot-list-nav-content {
    .list {
      background-color: #f8f8f8;
      padding-top: 0.25rem;
      border-top: 1px solid #f7f7f7;
      border-bottom: 1px solid #f7f7f7;
    }
    .list-header {
      height: 3rem;
      line-height: 3rem;
      border-bottom: 1px solid #fafafa;
      padding: 0 1rem;
      background-color: #ffffff;
      font-size: 1.15rem;
      .list-header-icon {
        font-size: 1.5rem;
        height: 3rem;
        line-height: 3rem;
        margin-right: 0.25rem;
        padding: 0 1rem;
        display: inline-block;
        color: #efc031;
      }
      .list-header-title {
        padding: 0 0.5rem;
        height: 3rem;
        line-height: 3rem;
        margin-right: 0.25rem;
        display: inline-block;
        font-weight: bold;
      }
    }
  }
}
.nav-bar.red {
  background-color: #d2554c !important;
  border-bottom: 1px solid #c94c43 !important;
  color: #fafafa !important;
  a {
    color: #ffffff !important;
  }
  a.router-link-active {
    color: #ffffff !important;
    border-bottom: 2px solid #ffffff !important;
  }
}
</style>
