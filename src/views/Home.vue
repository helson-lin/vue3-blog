<template>
  <div class="home" if="home">
    <Header @changStatus="changStatus" :status="status" />
    <div class="main" id="main">
      <router-view></router-view>
    </div>
   <ToUpper/>
  </div>
</template>

<script>
import ToUpper from '@/teleport/toUpper.vue';
import Header from '@/components/Home/Header.vue'
import { defineComponent, reactive, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    ToUpper,
  },
  setup() {
    // ref 将数据变成响应式数据  https://vue3js.cn/docs/zh/api/refs-api.html#ref
    // reactive 
    let status = ref('0');
    let name = reactive('helson');
    /**
     * @description: 改变用户登录的状态，如果不使用ref数据 则修改了status 页面上也无变化
     * @param {*} 
     * @return {*}
     */    
    const changStatus = () => {
      status.value = status.value === '1' ? '0' : '1';
    }

    onMounted(() => {
      console.log('onMounted');
    })

    onUnmounted(() => {
      console.log('onUnmounted');
    })


    return {
      name,
      status,
      changStatus,
    }
  },
})
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
    background: #fff;
    padding: 20px 40px;
    border-radius: 5px;
  }
}
</style>
