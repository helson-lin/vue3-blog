<template>
  <div class="index">
      <CardList :list="cardList" @like="like" />
  </div>
</template>
<script>
import marked from 'marked';
import CardList from "@/components/Home/CardList.vue";
import { defineComponent, onMounted, ref } from "vue";
import { getArticle } from '@/common/api/article';
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
    const getList = () => {
      getArticle().then((res) => {
            if (res.code === 200) {
              cardList.value = res.data.map(item => {
                item.profile = marked(item.profile,{sanitize: true});
                return item;
              });
              console.log(cardList.value);
            }
          });
    };
    onMounted(() => {
      getList();
    });
    return {
      cardList,
      like,
    };
  },
});
</script>
<style lang="scss" scoped>
.index {
   background: #fff;
   padding: 20px 40px;
   border-radius: 5px;
}
</style>