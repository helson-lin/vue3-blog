<template>
  <teleport to="#app">
      <div class="toUpper animated flash" v-if="show">
        <div class="ic" @click="toHome()">
          <i class="iconfont icon-shouye1"></i>
        </div>
        <div class="ic" @click="toUp()">
          <i class="iconfont icon-up"></i>
        </div>
      </div>
  </teleport>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
import useScrollToTop from "@/hooks/useScrollToTop";
export default defineComponent({
  name: "ToUpper",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const router = useRouter();
    const toUp = () => {
      useScrollToTop();
    };
    const toHome = () => {
        router.push({path: '/'});
    }
    return {
      toUp,
      toHome,
    };
  },
});
</script>

<style lang="scss" scoped>
.toUpper {
  position: fixed;
  top: 90%;
  left: 90%;
}
.ic {
  float: right;
  display: block;
  margin-right: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #528bff;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
      cursor: pointer;
  }
  .iconfont {
    color: #fff;
  }
}
</style>