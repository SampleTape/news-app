<template>
  <div class="news-detail-container">
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
    <div class="tool-bar-bottom">
      <div class="tool-bar-bottom-left">
        <div class="icon">
          <font-awesome-icon :icon="['fas', 'pen']"></font-awesome-icon>
        </div>
        <input type="text" placeholder="写评论..." />
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
  </div>
</template>

<script>
export default {
  name: "NewsDetailView",

  data() {
    return {
      newsTitle:
        "我国本土疫情防控形势如何？花粉过敏是否影响疫苗接种？官方最新解答",
      avatarUrl:
        "https://sf6-cdn-tos.toutiaostatic.com/img/user-avatar/9e74e54609204cb1eb0d69f0ab1de263~300x300.image",
      from: "央视新闻",
      time: "2022-04-07 12:34",
      fromInfo: "央视新闻官方账号",
      tag: "原创",
      newsContent: `<article class="syl-article-base tt-article-content syl-page-article syl-device-pc"><p>编者按：</p><p>每一个努力生活的中国人，都是最美的奋斗者。也正是因为亿万奋斗者，才有了今日之中国。十年，致敬每一个奋斗的你。让我们一起，踔厉奋发新时代，笃行不怠向未来。</p><p>中新网昭通4月7日电 题：一家两代三人：护鹤员30余年接力守护“高原精灵”</p><p>作者 罗婕 郑远见</p><p>4月初，春季的云南昭通大山包刚经历连续降雪，寒意料峭。</p><p>6日，大山包黑颈鹤国家级自然保护区内还有100余只黑颈鹤，因为寒潮没能跟上大部队正常北迁。上午11点刚过，护鹤员赵炳祥带着15公斤玉米来到保护区内的大海子湿地，给严寒天气下的“高原精灵”黑颈鹤投食。</p><img src="https://p3.toutiaoimg.com/origin/tos-cn-i-tjoges91tu/T2HCknR81gytc0?from=pc" width="100%"  alt="「十年@每一个奋斗的你」一家两代三人：护鹤员30余年接力守护“高原精灵”" inline="0" class="syl-page-img" style="height: auto;"><p>图为投食完毕，赵炳祥背着孩子回家。 郑远见 摄</p><p>有着“中国黑颈鹤之乡”的云南昭通大山包是世界濒危物种、国家一级重点保护野生动物黑颈鹤重要的越冬地之一。经过30多年的有效保护，到此越冬的黑颈鹤数量已由建立保护区之初的300多只增加到近2000只。</p><p>保护区工作人员吴太平介绍，在候鸟迁徙和越冬期间，工作人员要做好野生动物疫源疫病防控、受伤野生动物的救治等工作，此外，护鹤员也是黑颈鹤保护不可或缺的参与者。</p><p>赵炳祥一家两代三人都在保护区担任过护鹤员，每年11月到次年4月，他们协助保护区工作人员确认黑颈鹤数量，在极端天气的情况下给黑颈鹤投食。</p><p>“我们一家和黑颈鹤的缘分从我母亲董应兰那里开始。1990年保护区刚成立时，她成为当时唯一一个护鹤员。”赵炳祥回忆，童年时总在离家不远处听见黑颈鹤的叫声，当地人都叫它们“雁鹅”，他常跟随母亲一起护鹤，母亲在投食，他就在一旁数黑颈鹤。</p><img src="https://p3.toutiaoimg.com/origin/tos-cn-i-tjoges91tu/T2HCkoG1Q926y9?from=pc" width="100%"  alt="「十年@每一个奋斗的你」一家两代三人：护鹤员30余年接力守护“高原精灵”" inline="0" class="syl-page-img" style="height: auto;"><p>图为4月5日，雪中的黑颈鹤。 吴太平 摄</p><p>随着董应兰年事渐高，脚伤难以行走，逐渐负担不起护鹤员的工作，2003年，妻子陈光惠正式接下了守护黑颈鹤的接力棒。往后将近20年中，她用独特的口哨声与黑颈鹤交流，参与救助多只黑颈鹤，成了它们的好朋友。</p><p>“现在我也成了保护区的一名护鹤员。”赵炳祥告诉记者，当地的青壮年大多到外地务工，老一辈护鹤人退休后他毫不迟疑地顶上了这个位置，“主要还是喜欢这些高原精灵，在我有生之年想好好守护它们”。</p><p>今年2月下旬，陈光惠在大雪中为黑颈鹤投食时受伤住院，照管家中老人孩子和护鹤的工作全部落在赵炳祥的身上。恰逢黑颈鹤北迁，为了投食救助在大海子湿地停息中转的黑颈鹤，他每天6点半进入保护区确认黑颈鹤数量，再完成两次投食工作。</p><img src="https://p3.toutiaoimg.com/origin/tos-cn-i-tjoges91tu/T2HCkp07Xnpwhi?from=pc" width="100%" alt="「十年@每一个奋斗的你」一家两代三人：护鹤员30余年接力守护“高原精灵”" inline="0" class="syl-page-img" style="height: auto;"><p>图为赵炳祥、陈光惠夫妻。 郑远见 摄</p><p>为了兼顾护鹤工作和家庭，赵炳祥将两岁的小儿子放进装玉米的背篓，跟随他一起给黑颈鹤投食。“儿子每次看到鹤群都很开心，随着黑颈鹤展翅手舞足蹈。”</p><p>赵炳祥表示，“爱鹤护鹤已成为我们一家生活的一部分，我们和黑颈鹤也相互依存。希望小辈们能将接力棒传递下去，做黑颈鹤的守护者”。(完)</p><p>来源：中国新闻网</p></article>`,
    };
  },

  mounted() {
    console.log(this.$route.params.id);
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
  },
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
</style>
