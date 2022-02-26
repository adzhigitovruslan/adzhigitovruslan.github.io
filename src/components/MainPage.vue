<template>
    <section class="page__main-header header-main">
      <div class="scene">
        <div data-depth="0.7" v-parallax="0.2">
          <img
            src="@/assets/img/vegetables.png"
            alt="vegetables"
            class="images-veg"
          />
        </div>
        <div class="header-main__container _container">
          <div class="header-main__content content-main">
            <div class="content-main__header header-block">
              <h1 class="header-block__title">Food delivery in Kovel</h1>
              <p class="header-block__subtitle">
                If you decide to relax or have unexpected guests, call us. We
                make <br />
                sure that your vacation is comfortable, enjoyable and delicious
              </p>
            </div>
            <div class="content-main__images">
              <img
                src="@/assets/img/pizza.png"
                alt="pizza"
                class="images-pizza"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
._container {
  max-width: 1196 + px;
  padding: 0 15px;
  margin: 0 auto;
}
.wrapper {
  min-height: 100%;
  overflow: hidden;
}
//Основная сетка

.page {
  &__main-header {
    background: #f0f5fb;
    position: relative;
    // overflow-y: hidden;
  }
}
.header-main {
  padding: 133px 0 0 0;
  @media (max-width: 700px) {
    padding: 200px 0 0 0;
  }
  &__content {
  }
}
.content-main {
  &__header {
  }
  &__header > *:first-child {
    margin-bottom: 18px;
  }

  &__images {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.header-block {
  text-align: center;
  &__title {
    font-size: 48px;
    font-weight: 700;
    line-height: 122%;
    @media (max-width: 375px) {
      font-size: 37px;
    }
  }

  &__subtitle {
    font-size: 18px;
    font-weight: 400;
    line-height: 138%;
  }
}
.images-veg {
  width: 100%;
  height: 550px;
  position: absolute;
  object-fit: cover;
}
.images-muka {
}
.images-pizza {
  height: 550px;
  margin: 0 0 -100px 150px;
  justify-content: right;
  @media (max-width: 590px) {
    height: 480px;
  }
  @media (max-width: 500px) {
    height: 400px;
    margin: 0 0 -100px 110px;
  }
  @media (max-width: 400px) {
    height: 350px;
  }
  @media (max-width: 375px) {
    height: 300px;
    margin: 0 0 -100px 100px;
  }
}
</style>
