<template>
  <div class="classify">
    <div class="classify-name">{{ classification }}</div>
    <div class="classify-list">
      <CardList :list="cardList" @like="like" />
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { getArticleByCate } from "@/common/api/article";
import marked from "marked";
import CardList from "@/components/Home/CardList.vue";
export default defineComponent({
  components: { CardList },
  setup() {
    let cardList = ref([]);
    let classification = ref("");
    /**
     * @description: 修改点赞状态
     * @param {*} index 序号
     * @return {*}
     */
    const like = (index) => {
      cardList.value[index].isLike = cardList.value[index].isLike === 0 ? 1 : 0;
    };
    const route = useRoute();

    const getArticle = () => {
      getArticleByCate(classification.value).then((res) => {
        if (res.code === 200) {
          cardList.value = res.data.map((item) => {
            item.profile = marked(item.profile, { sanitize: true });
            return item;
          });
        } else {
          cardList.value = [];
        }
      });
    };
    /**
     * @description: 页面加载的时候请求接口数据
     * @param {*}
     * @return {*}
     */
    onMounted(() => {
      classification.value = route.params.classification;
      getArticle();
    });
    /**
     * @description: 监听路由实例
     * @param {*}
     * @return {*}
     */
    watch(route, () => {
      classification.value = route.params.classification;
      getArticle();
    });
    return {
      classification,
      cardList,
      like,
    };
  },
});
</script>

<style lang="scss" scoped>
.classify {
  width: 100%;
  &-name {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    &::before {
      width: 6px;
      height: inherit;
      background: #528bff;
      content: "";
      display: block;
      position: relative;
      left: -20px;
      border-radius: 5px 0 0 5px;
      z-index: 1;
    }
  }
  &-list {
    background: #fff;
    padding: 0 20px;
    border-radius: 5px;
  }
}
</style>