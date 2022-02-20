<template>
  <main class="page">
    <Header />
    <MainPage />
    <vDishes />
    <Slider />
    <Form />
    <Footer />
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
    openSlide(refName) {
      // Получение ссылки на элемент
      let slide = this.$refs[`slide-${refName}`];
      // Определение расстояния от начала страницы до нужного элемента
      let top = window.scrollY + slide.getBoundingClientRect().y;
      // Перемотка
      window.scrollTo(0, top);
    },
  },
};
</script>

<style lang="scss">
body.hidden {
  overflow: hidden;
}
.page {
  overflow: hidden;
}
</style>
