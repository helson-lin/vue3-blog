<template>
    <teleport to='main'>
        <div class="toUpper">
            sksdsds
        </div>
    </teleport>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ToUpper',
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
.toUpper {
    position: absolute;
    bottom: 60px;
    right: 40px;
    width: 60px;
    height: 60px;
    background: #2bb4b5;
}
</style>