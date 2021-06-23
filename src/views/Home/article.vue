<template>
    <div class="article">
        <h2>{{article.title}}</h2>
        <div class="opr">

        </div>
        <div class="markdown-body " v-html="article.contents"></div>
    </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import marked from 'marked'
export default defineComponent({
    setup() {
        let article = ref({
                title: 'Vue3.0教程',
                content: '##功能测试 `code`五年计算机',
            contents: '',
        })
        const getArticle = () => {
            window.$axios.get('https://www.fastmock.site/mock/1231d8bdceb5a61e752ed5677e00fa17/blog/article').then(res => {
                console.log(res,res.data);
                if (res.data.code === 0) {
                    article.value = res.data.data;
                    console.log(article.value.content);
                    article.value.contents = marked( article.value.content, { sanitize: true })
                }
            })
        }
        onMounted(() => {
            getArticle();
        })
        return {
            article
        }
    },
})
</script>
