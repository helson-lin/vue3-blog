<template>
    <div class="header">
        <div class="header-right">
            <div class="avatar">
                <el-popover
                    placement="bottom"
                    title="欢迎"
                    :width="200"
                    trigger="hover"
                    content="有一条最新消息！"
                >
                    <template #reference>
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    </template>
                </el-popover>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.header {
    width: 100%;
    height: vh(60);
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    &-right {
        float: right;
        height: inherit;
        .avatar {
            width: vw(60);
            height: vw(60);
            .el-avatr {
                width: vw(40);
            }
        }
    }
}
</style>