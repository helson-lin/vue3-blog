<template>
    <div class="app">
        <operation-bar></operation-bar>
         <el-table
            class="table"
            :data="tableData"
            style="width: 100%">
            <el-table-column
                prop="name"
                align="center"
                label="名称"
                width="180">
            </el-table-column>
            <el-table-column 
                prop="img"
                align="center"
                label="图片">
                <template v-slot="scope">
                    <el-image
                        class="img"
                        :src="scope.row.img"
                        ></el-image>    
                </template>    
            </el-table-column>
            <el-table-column
                prop="content"
                label="描述"
                align="center"
                width="180">
                <template v-slot="scope">
                    <div v-html="scope.row.content"></div>
                </template>
            </el-table-column>
            <el-table-column
                prop="url"
                align="center"
                label="链接">
            </el-table-column>
        </el-table>
        <div class="pages">
            <el-pagination
                background
                layout="prev, pager, next"
                :current-page="page"
                :page-size="pageSize"
                :current-change="pageChange"
                :size-change="sizeChange"
                :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref, onMounted } from 'vue';
import OperationBar from '@/components/Admin/OperationBar';
import { getList } from '@/common/api/application';

export default defineComponent({
    components: { OperationBar },
    setup() {
        const pageSize = ref(1);
        const page = ref(1);
        const total = ref(20);
        const count = ref(8);
        const tableData = ref([{name: 'aa'}]);
        const getData = async () => {
            const res = await getList(page.value,count.value);
            if (res.code === 200) {
                tableData.value = res.data;
            } else {
                //
            }
        };
        const pageChange = (val) => {
            console.log(val, 'page change');
            page.value = val;
            getData();
        }
        const sizeChange = (val) => {
            console.log(val,'size change')
        }
        onMounted(() => {
            getData();
        });
        return {
            tableData,
            pageSize,
            total,
            page,
            pageChange,
            sizeChange,
        }
    },
})
</script>
<style lang="scss" scoped>
.app {
    .table {
        height: vh(800);
    }
    .pages {
        width: 100%;
        height: vh(80);
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}
.img {
    width: vw(40);
    height: vw(40);
}
</style>