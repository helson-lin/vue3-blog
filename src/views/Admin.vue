<template>
    <div class="admin">
        <div class="admin-left">
            <Slider/>
        </div>
        <div class="admin-right">
            <Header></Header>
            <div class="container">
               <router-view class="view"/>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import Slider from '@/components/Admin/Slider';
import Header from '@/components/Admin/Header.vue';

export default defineComponent({
    components: { Slider, Header },
    setup() {
        return {
            
        }
    },
})
</script>
<style lang="scss" scoped>
.admin {
    width: 100%;
    height: 100%;
    display: flex;
    &-left {
        flex: left;
        width: vw(240);
        height: 100%;
        background: #2F313B;
    }
    &-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        .container {
            flex: 1;
            width: 100%;
            padding: vw(20) vw(20);
            // height: calc(100% - 60px);
            background: #e3e3e3;
            box-sizing: border-box;
            .view {
                width: 100%;
                height: 100%;
                 border-radius: vw(5);
                background: #fff;
                padding: vw(20);
                box-sizing: border-box;
            }
        }
    }
}
</style>
