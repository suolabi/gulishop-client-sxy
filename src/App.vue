<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    getCategoryList() {
      //   用户在触发响应的actions去发请求拿数据
      this.$store.dispatch("getCategoryList");
    },
  },
};
</script>

<style lang="less" scoped>
</style>

