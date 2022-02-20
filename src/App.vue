<template>
  <div id="app">
    <vMainWrapper />
  </div>
</template>

<script>
import vMainWrapper from "@/components/v-main-wrapper";

export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: {
    vMainWrapper,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap");
@import "~font-awesome/css/font-awesome.min.css";
</style>
