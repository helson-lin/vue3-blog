<template>
    <div class="slider">
        <div class="logo" @click="toHome">
            <img :src="logo" alt="" srcset="">
        </div>
        <el-menu
            @select="select"
            :router="false"
            background-color="#2F313B"
            text-color="#fff"
            active-text-color="#ffffff"
            :default-active="active">
            <sub-menu
                v-for="menu in menuList"
                :key="menu.id"
                :menu="menu">
            </sub-menu>
        </el-menu>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import SubMenu from '@/components/Admin/SubMenu';
import { useRouter } from 'vue-router';
export default defineComponent({
    name: 'Slider',
    components: { SubMenu },
    setup() {
        const router = useRouter();
        const menuList = ref([{
            id: 1,
            meta: {
                icon: 'el-icon-user-solid',
                title: '用户管理',
            },
            children: [],
            path: '/user'
        },
        {
            id: 2,
            meta: {
                icon: 'el-icon-menu',
                title: '素材管理',
                children: [],
            },
            path: '/application'
        }]);
        const active = ref('/');
        const select = (index) => {
            console.log(index);
            active.value = index;
            router.push({path: `/admin${index}`});
        };
        return {
            logo: '',
            menuList,
            active,
            select,
        }
    },
})
</script>
