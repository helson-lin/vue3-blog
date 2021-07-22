<template>
    <div class="operation-bar">
        <el-button type="primary" size="small">新增</el-button>
        <el-button type="danger" size="small">删除</el-button>
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'OperationBar',
    setup() {
        return {

        }
    },
})
</script>
<style lang="scss" scoped>
.operation-bar {
    width: 100%;
    height: vh(80);
    display: flex;
    align-items: center;
}
</style>
