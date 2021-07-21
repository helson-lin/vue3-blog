<template>
    <el-submenu
        v-if="menu.children && menu.children.length >= 1"
        :index="menu.path">
        <template>
            <i :class="[menu.meta.icon  || 'icon-wode','iconfont']"></i>
            <span>{{ menu.meta.title }}</span>
        </template>
        <sub-menu
            v-for="item in menu.children"
            :key="item.id"
            :menu="item"
        >
        </sub-menu>
    </el-submenu>
    <el-menu-item  v-else :index="menu.path">
        <i :class="[menu.meta.icon  || 'icon-wode','iconfont']"></i>
        <span>{{ menu.meta.title }}</span>
    </el-menu-item>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        menu: {
            type: Object,
            required: true,
        }
    },
    setup() {
        return {
        }
    },
})
</script>
