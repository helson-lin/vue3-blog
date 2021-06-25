<template>
    <div class="blank">
        <img :src="blankImg" alt="" srcset="">
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Blank',
    setup() {
        const blankImg = require('../../assets/img/blank.png');
        return {
            blankImg,
        }
    },
})
</script>
<style lang="scss" scoped>
.blank {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 148px;
        height: 132px;
    }
}
</style>
