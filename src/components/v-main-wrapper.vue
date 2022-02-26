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
  methods: {},
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
