<template>
  <div class="card-list">
    <div v-if="list.length > 0">
      <div
        class="card"
        @click="toView(item)"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="card-name">
          {{ item.title }}
        </div>
        <div class="card-container">
          <div class="profile-opr">
            <div class="profile markdown-body" v-html="item.profile"></div>
            <div class="opr">
              <div class="like-hate">
                <div class="like" @click.stop="like(index)">
                  <i
                    :class="[
                      'iconfont',
                      'icon-dianzan',
                      item.isLike === 1 ? 'color' : '',
                    ]"
                  ></i>
                </div>
                <div class="hate">
                  <i class="iconfont icon-liuyan"></i>
                </div>
              </div>
            </div>
          </div>
          <img
            class="thumbnail"
            v-if="item.img"
            :src="item.img"
            :alt="item.title"
            srcset=""
          />
        </div>
      </div>
    </div>
    <Blank v-else />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Blank from "@/components/Home/Blank.vue";
export default defineComponent({
  name: "CardList",
  components: { Blank },
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  setup(props, context) {
    // 实例化 router
    const router = useRouter();
    const toView = (item) => {
      router.push({ name: "Article", query: { id: item.id } });
    };
    const like = (index) => {
      context.emit("like", index);
    };
    return {
      toView,
      like,
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
    border-bottom: 2px solid #DDDFE2;
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
        max-width: 80%;
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
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
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
                  color: #e9c440;
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