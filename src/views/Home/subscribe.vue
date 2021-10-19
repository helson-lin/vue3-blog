<template>
    <div class="subscribe">
        <textarea class="input" v-model="link">
        </textarea>
        <div class="opr">
            <el-button @click="submit" :loading="loading" type="primary">{{!loading ? 'Generate' : 'Generating'}}</el-button>
        </div>
    </div>
</template>
<script>
import { generate } from '../../common/api/subscribe';
export default {
    data() {
        return {
            loading: false,
            link: null,
            orderUrl: null,
        }
    },
    methods: {
        async submit() {
            let isSs = false;
            const ss = ['ss://','vmess://','ssr://','trojan://','v2ray://'];
            ss.forEach((item) => {
               if(this.link.indexOf(item) !== -1) {
                   isSs = true;
               }
            })
            if (this.link && isSs) {
                this.loading = true;
                let res = await generate(this.link);
                if (res.code === 200) {
                    this.link = res.data.subscribe;
                    this.loading = false;
                    this.$message.success('生成成功');
                }
            } else {
                this.$message.info('输入链接格式不正确');
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.subscribe {
    width: 900px;
    height: 100%;
    background: #fff;
    .input {
        margin-top: 40px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 200px;
    }
    .opr {
        width: 100%;
        padding: 0 10%;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        position: relative;
    }
}
</style>