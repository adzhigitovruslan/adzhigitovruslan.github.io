<template>
  <div class="main__home">
    <div class="main__content">
      <img
        class="main__content-img"
        :src="require('@/assets/bike.svg')"
        alt="bike"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.main {
  &__home {
    @media (max-width: 550px) {
      margin-top: 165px;
    }
  }
  &__content {
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
    padding: 0 0 58% 0;
  }

  &__content-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
