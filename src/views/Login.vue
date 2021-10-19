<template>
  <div id="login">
      <div class="login-box">
        <el-input v-model="user.username" placeholder="用户名">
          <template #prepend>
            <i class="el-icon-user-solid"></i>
          </template>
        </el-input>
        <el-input class="password" v-model="user.password" type="password" placeholder="密码">
          <template #prepend>
            <i class="el-icon-lock"></i>
          </template>
        </el-input>
        <div class="btn">
          <!-- <el-button type="default">忘记密码</el-button> -->
          <el-button type="primary" size="large" @click="submit">登录  </el-button>
        </div>
      </div>
  </div>
</template>

<script>
import {defineComponent, getCurrentInstance, ref} from "vue";
import { useRouter } from 'vue-router';
import { login } from '@/common/api/user';

export default defineComponent({
  setup () {
    const router = useRouter();
    const ctx= getCurrentInstance().appContext.config.globalProperties;
    const user = ref({
      username: null,
      password: null,
    })
    let commitNm = 0;
    const submit = async () => {
      if (commitNm >= 5) {
        ctx.$message.error('您已多次错误认证,请稍后再试!');
        return;
      }
      commitNm += 1;
      let res = await login(user.value.username, user.value.password);
      if (res.code === 200) {
        console.log(res.data);
        localStorage.setItem('token', res.data);
        ctx.$message.success('登录成功');
        router.push({path: '/admin'});
      } else {
        ctx.$message.info(res.msg);
      }
    }
    return {
      user,
      submit,
    }
  }
})
</script>

<style lang="scss" scoped>
#login {
    width: 100%;
    height: 100%;
    background-image: url("https://pic.kblue.site/20210706090256.jpg");
    .login-box {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        width: 480px;
        height: 300px;
        padding: 10px 20px;
        box-sizing: border-box;
        background: rgba($color: #ffffff, $alpha: 0.4);
        background-size: 100% 100%;
        border-radius: 5px;
      .el-input {
        margin-top: 40px;
      }
      >>> .password {
        margin-top: 20px;
      }
      .btn {
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .el-button {
          width: 100%;
        }
      }
    }
}
</style>