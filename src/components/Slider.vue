<template>
  <section class="page__slider slider">
    <div class="slider__body">
      <div class="slider__item">
        <img src="@/assets/img/slider1.png" alt="slider1" />
      </div>
      <div class="slider__item">
        <img src="@/assets/img/slider2.png" alt="slider2" />
      </div>
      <div class="slider__item">
        <img src="@/assets/img/slider3.png" alt="slider3" />
      </div>
      <div class="slider__item">
        <img src="@/assets/img/slider4.png" alt="slider4" />
      </div>
      <div class="slider__item">
        <img src="@/assets/img/slider5.png" alt="slider5" />
      </div>
      <div class="slider__item">
        <img src="@/assets/img/slider6.png" alt="slider6" />
      </div>
      <div class="slider__card card">
        <div class="card__inner">
          <div class="card__text">Instagram: <span>@classic_kovel</span></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.page {
  &__slider {
    padding: 0 0 127px 0;
  }
}
.slider {
  position: relative;

  &__body {
    display: flex;
    justify-content: space-between;
    > *:not(:last-child) {
      margin-right: 10px;
    }
  }

  &__item {
  }

  &__card {
    margin: 0 15px 0 15px;
    padding: 20px;
  }
}
.card {
  background: linear-gradient(45.04deg, #fd9924 -51.05%, #f65b16 134.89%);
  box-shadow: 0px 70px 90px rgba(253, 55, 36, 0.2),
    0px 35px 50px rgba(253, 55, 36, 0.2), 0px 20px 25px rgba(253, 55, 36, 0.2);
  border-radius: 15px;
  max-width: 480px;
  height: 180px;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 33%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 727px) {
    max-width: 400px;
  }
  @media (max-width: 550px) {
    max-width: 350px;
    left: 47%;
  }
  @media (max-width: 400px) {
    max-width: 300px;
    left: 45%;
  }
  &__inner {
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    max-width: 440px;
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text {
    font-weight: 400;
    font-size: 24px;
    line-height: 121%;
    color: #ffffff;
    text-align: center;
    > span {
      font-weight: 600;
    }
  }
}
</style>
