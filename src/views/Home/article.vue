<template>
  <div class="article">
    <h2 class="title">{{ article.title }}</h2>
    <div class="opr"></div>
    <div class="banner">
        <img :src="article.img" alt="" srcset="">
    </div>
    <div class="markdown-body" v-html="article.contents"></div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getArticleInfo } from "@/common/api/article";
import marked from "marked";
export default defineComponent({
  setup() {
    let article = ref({
      title: "Vue3.0教程",
      content: "##功能测试 `code`五年计算机",
      contents: "",
    });
    const route = useRoute();
    const getArticle = () => {
      const id = route.query.id;
      getArticleInfo(id).then((res) => {
        console.log(res.data);
        if (res.code === 200) {
          article.value = res.data;
          console.log(article.value.profile);
          article.value.contents = marked(article.value.profile, {
            sanitize: true,
          });
        }
      });
    };
    onMounted(() => {
      getArticle();
    });
    onMounted(() => {
      article.value = {};
    });
    return {
      article,
    };
  },
});
</script>
<style lang="scss" scoped>
.article {
  background: #fff;
  padding: 20px 40px;
  border-radius: 5px;
  .title {
      text-decoration: underline;
      background: #e2dede;
      display: inline-block;
  }
  .banner {
      width: 100%;
      margin-bottom: 20px;
      img {
          width: 100%;
          max-height: 300px;
      }
  }
}
</style>