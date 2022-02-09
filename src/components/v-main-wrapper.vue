<template>
  <main class="page">
    <Header 
    @scrollMeTo="scrollMeTo(refName)"
    />
    <MainPage />
    <vDishes ref="payment"/>
    <Slider />
    <Form ref="contacts"/>
    <Footer ref="about"/>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import MainPage from "@/components/MainPage.vue";
import vDishes from "@/components/v-dishes";
import Slider from "@/components/Slider.vue";
import Form from "@/components/Form.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "v-main-wrapper",
  data() {
    return {};
  },
  components: {
    Header,
    MainPage,
    vDishes,
    Slider,
    Form,
    Footer,
  },
  methods: {
    scrollMeTo(refName) {
    var element = this.$refs[refName];
    var top = element.offsetTop;

    window.scrollTo(0, top);
  }
  }
};
</script>

<style lang="scss">
.page {
  overflow: hidden;
}
</style>
