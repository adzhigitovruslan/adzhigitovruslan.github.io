<template>
  <div class="wrapper">
    <div class="main__container _container">
      <div class="main__header-logo">
        <div class="main__logo">Digital</div>
      </div>
      <div class="main__header">
        <div class="main__header-text">
          Artificial Intelligence <br />
          Driving Results For The Travel Industry
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import messages from "@/utils/messages";

export default {
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(firebase_error) {
      console.log(firebase_error);
      this.$error(messages[firebase_error.code] || "Что-то пошло не так");
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  padding: 40px 0 40px 0;
  height: 100%;
  width: 100%;
  background: white;
}
.main {
  &__container {
  }

  &__header-logo {
    margin-bottom: 40px;
  }

  &__logo {
    font-size: calc(20px + (30 - 20) * ((100vw - 320px) / (1200 - 320)));
    font-weight: 700;
    color: #3751fe;
  }

  &__header {
  }

  &__header-text {
    font-size: calc(26px + (36 - 26) * ((100vw - 320px) / (1200 - 320)));
    font-weight: 700;
    font-family: "Open Sans";

    line-height: 1.5;
    color: #3751fe;

    margin-bottom: calc(20px + (28 - 20) * ((100vw - 320px) / (1200 - 320)));
  }

  &__subtitle {
  }

  &__subtitle-text {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>
