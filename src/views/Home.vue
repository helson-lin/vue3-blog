<template>
  <div class="home" if="home">
    <Header @changStatus="changStatus" :status="status" />
    <div class="main">
      <router-view></router-view>
      <div id="upper"></div>
    </div>
    <to-upper :show="scrollTop > 20" />
  </div>
</template>

<script>
import ToUpper from "@/teleport/toUpper.vue";
import Header from "@/components/Home/Header.vue";
import { defineComponent, reactive, ref, onMounted, onUnmounted, onUpdated, watch } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    ToUpper,
  },
  setup() {
    // ref 将数据变成响应式数据  https://vue3js.cn/docs/zh/api/refs-api.html#ref
    // reactive
    let status = ref("0");
    let scrollTop = ref(0);
    let token = localStorage.getItem('token');
    let name = reactive("helson");
    /**
     * @description: 改变用户登录的状态，如果不使用ref数据 则修改了status 页面上也无变化
     * @param {*}
     * @return {*}
     */
    const changStatus = () => {
      status.value = status.value === "1" ? "0" : "1";
    };
    watch(token, (old) => {
      console.log('token', old);
    });
    onMounted(() => {
      console.log("onMounted");
      window.addEventListener("scroll", () => {
        scrollTop.value =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
      });
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return {
      name,
      status,
      scrollTop,
      changStatus,
    };
  },
});
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .main {
    margin: 0 auto;
    margin-top: 80px;
    max-width: 998px;
    height: calc(100% - 80px);
    //@errorbackground: #fff;
    // padding: 20px 40px;
    // border-radius: 5px;
  }
}
</style>
