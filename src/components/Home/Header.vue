<template>
  <div class="header">
    <div class="header-left">
      <img class="logo" :src="logo" alt="" srcset="" />
      <span class="logo-name" v-if="false">{{ logoName }}</span>
    </div>
    <div class="classfication">
      <span
        class="classfiy"
        @click="routerTab(index)"
        v-for="(classfiy, index) in classfiyList"
        :key="index"
        >{{ classfiy.name }}</span
      >
    </div>
    <div class="person-opr">
      <button class="btn" @click="loginClick">
        {{ status === "0" ? "登录" : "退出" }}
      </button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "Header",
  props: {
    status: {
      type: String,
      default: "0",
    },
  },
  setup(props, context) {
      const router = useRouter();
    // data
    const logo = require("../../assets/img/logo.png");

    // method
    const loginClick = () => {
      console.log("点击登录", props.status);
      context.emit("changStatus");
    };

    const routerTab = (index) => {
        if (index === 0) {
            router.push({path: '/'})
        }
    };

    // export data and methods
    return {
      logo,
      logoName: "CSDN",
      classfiyList: [
        {
            name: 'Home',
        },
        {
          name: "Java",
        },
        {
          name: "Vue",
        },
        {
          name: "React",
        },
      ],
      loginClick,
      routerTab,
    };
  },
});
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: #f9f9f9;
  padding: 0 20px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;

  &-left {
    height: inherit;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .logo {
      width: 80px;
      height: 44px;
      margin-right: 40px;
    }
    .logo-name {
      font-size: 18px;
      line-height: 20px;
      font-weight: 550;
    }
  }

  .classfication {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    box-sizing: border-box;
    .classfiy {
      margin-right: 20px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .person-opr {
    .btn {
      width: 70px;
      height: 30px;
      border-radius: 5px;
      border: none;
      outline: none;
      background-color: #528bff;
      color: #f9f9f9;
      font-size: 14px;
      font-family: "微软雅黑";
      &:hover {
        background: linear-gradient(to left, #528bff, #52e5ff);
      }
    }
  }
}
</style>