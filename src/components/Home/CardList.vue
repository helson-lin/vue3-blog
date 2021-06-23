<template>
  <div class="card-list">
    <div class="card" @click="toView(item)" v-for="(item, index) in list" :key="index">
      <div class="card-name">
        {{ item.title }}
      </div>
      <div class="card-container">
          <div class="profile-opr">
              <div class="profile">
                  {{item.profile}}
              </div>
              <div class="opr">
                  <div class="like-hate">
                      <div class="like" @click.stop="like(index)">
                          <i :class="['iconfont' , 'icon-dianzan', item.isLike === 1 ? 'color' : '']"></i>
                      </div>
                      <div class="hate">
                          <i class="iconfont icon-liuyan"></i>
                      </div>
                  </div>
              </div>
          </div>
          <img class="thumbnail" :src="item.img" :alt="item.title" srcset="">
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import {  useRouter } from 'vue-router'
export default defineComponent({
  name: "CardList",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props,context) {
    // 实例化 router 
    const router = useRouter()
    const toView = (item) => {
        router.push({path: 'article', query: {name: item.name}});
    }
    const like = (index) => {
        context.emit('like',index);
    }
    return {
        toView,
        like
    };
  },
});
</script>
<style lang="scss" scoped>
.card-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    //scroll-behavior: ;
    .card {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e3e3e3;
        &:hover {
            cursor: pointer;
        }
        &-name {
            font-size: 20px;
            color: #333;
            line-height: 38px;
        }
        &-container {
            display: flex;
            padding: 20px 0;
            .profile-opr {
                flex: 1;
                display: flex;
                flex-direction: column;
                .profile {
                    flex: 1;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 15px;
                    color: #666;
                    font-family: PingFang SC;
                }
                .opr {
                    width: 100%;
                    height: 40px;
                    .like-hate {
                        height: inherit;
                        display: flex;
                        align-items: flex-end;
                        .iconfont {
                            color: #000;
                            font-size: 18px !important;
                            margin-right: 20px;
                        }
                        .like {
                            .iconfont {
                                &.color {
                                    color: #E9C440;
                                }
                            }
                        }
                    }
                }
            }
            .thumbnail {
                margin-left: 20px;
                width: 160px;
                height: 95px;
            }
        }
    }
}
</style>