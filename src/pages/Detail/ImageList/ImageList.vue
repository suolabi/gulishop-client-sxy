<template>
  <div class="swiper-container" ref="imgSwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(img, index) in skuImageList"
        :key="img.id"
      >
        <img
          :src="img.imgUrl"
          :class="{ active: index === defaultIndex }"
          @click="changeDefaultIndex(index)"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  name: "ImageList",
  props: ["skuImageList"],
  data() {
    return {
      defaultIndex: 0,
    };
  },
  methods: {
    changeDefaultIndex(index) {
      // 点击哪个把哪个的下标给defaultIndex
      // 让自己的边框颜色改变
      this.defaultIndex = index;
      //  兄弟组件通信，全局事件总线
      this.$bus.$emit("changeDefaultIndex", index);
    },
  },
  watch: {
    // 一般监视,只写了handler
    // 监视bannerList：bannerList的初始值为空，当有变化的时候，说明数据回来了，再执行new swiper
    // 但在这里不能保证结构完全形成，主要看v-for遍历执行的快，还是new swiper的快

    skuImageList: {
      immediate: true, // 这一步没意义，为了两边代码一致，抽取公共代码，形成公共组件
      handler() {
        // 配合$nextTick使用
        //这个回调是nextTick的回调，nextTick会等待页面dom最近一次循环更新结束之后才会执行它内部传递的回调
        // 也就是说，会等到页面的div创建完成之后，在执行new Swiper里的回调，创建轮播图
        //updated也可以实现，但是并不是最近一次更新，而是页面所有的更新都会执行这个钩子（updated），在这里没必要这样写
        this.$nextTick(() => {
          new Swiper(this.$refs.imgSwiper, {
            // loop: true, // 循环模式选项
            slidesPerView: 5, //每一屏显示的张数
            slidesPerGroup: 5, //每一组滑动的张数
            // // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }

      // &:hover {
      //   border: 2px solid #f60;
      //   padding: 1px;
      // }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>