<template>
  <NewsList :newslist="newslist"></NewsList>
  <NewsCard
    v-for="newsCard in newsCardList"
    :key="newsCard.id"
    v-bind="newsCard"
  ></NewsCard>
</template>
<script>
import NewsList from "@/components/NewsList.vue";
import NewsCard from "@/components/NewsCard.vue";
export default {
  components: {
    NewsList,
    NewsCard,
  },
  data() {
    return {
      newslist: [
        {
          id: "010101",
          title: "创意微视频 | 江山",
          from: "新华社",
          commentNum: "3000",
        },
        {
          id: "010102",
          title: "为培养碳中和人才贡献一份力量",
          from: "新华网",
          commentNum: "300",
        },
        {
          id: "010103",
          title: "为培养碳中和人才贡献一份力量",
          from: "央视网",
          commentNum: "100",
        },
        {
          id: "010104",
          title: "为培养碳中和人才贡献一份力量",
          from: "新华社",
          commentNum: "10",
        },
        {
          id: "010105",
          title: "为培养碳中和人才贡献一份力量",
          from: "光明网",
          commentNum: "0",
        },
      ],
      newsCardList: [
        {
          id: "01010001",
          title:
            "俄乌之争给中国出难题？美国非唯一目标，乌东独立，中国有切肤之痛",
          imgUrl:
            "https://images.unsplash.com/photo-1648885533514-1ed16479bdd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
          from: "煮天下",
          commentNum: "2.3万",
          time: "4天前",
        },
        {
          id: "01010002",
          title:
            "俄乌之争给中国出难题？美国非唯一目标，乌东独立，中国有切肤之痛",
          imgUrl:
            "https://images.unsplash.com/photo-1648706903501-8b74096438df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          from: "煮天下",
          commentNum: "2.3万",
          time: "4天前",
        },
        {
          id: "01010003",
          title:
            "俄乌之争给中国出难题？美国非唯一目标，乌东独立，中国有切肤之痛",
          imgUrl:
            "https://images.unsplash.com/photo-1649161993391-69d19f599597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          from: "煮天下",
          commentNum: "2.3万",
          time: "4天前",
        },
      ],
    };
  },
};
</script>
