<template>
  <CardList :list="cardList" @like="like" />
</template>
<script>
import CardList from "@/components/Home/CardList.vue";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    CardList,
  },
  setup() {
    let cardList = ref([]);
    /**
     * @description: 修改点赞状态
     * @param {*} index 序号
     * @return {*}
     */
    const like = (index) => {
      cardList.value[index].isLike = cardList.value[index].isLike === 0 ? 1 : 0;
    };
    const getArticle = () => {
      window.$axios
        .get(
          "https://www.fastmock.site/mock/1231d8bdceb5a61e752ed5677e00fa17/blog/home/list"
        )
        .then((res) => {
          if (res.data.code === 0) {
            cardList.value = res.data.data;
            console.log(cardList.value);
          }
        });
    };
    onMounted(() => {
      getArticle();
    });
    return {
      cardList,
      like,
    };
  },
});
</script>