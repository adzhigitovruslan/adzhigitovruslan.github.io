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

<style lang="scss">
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

//SECTION_FORM===========================================
.page {
  &__form {
    padding: 82px 0 0 0;
    background: #f0f5fb;
    position: relative;
  }
}
.form {
  &__container {
  }

  &__content {
  }
}
._icon-call {
}

.content-form {
  position: relative;

  &__header {
    margin-bottom: 41px;
    & .header-block {
      &__title {
        @media (max-width: 435px) {
          font-size: 40px;
        }
        @media (max-width: 368px) {
          font-size: 30px;
        }
      }
    }
  }

  &__forms {
  }

  &__image {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.images__car {
  margin-bottom: -70px;
  height: 400px;
  @media (max-width: 590px) {
    height: 350px;
    margin-bottom: -60px;
    margin-left: 25px;
  }
  @media (max-width: 590px) {
    height: 300px;
    margin-bottom: -55px;
  }
  @media (max-width: 420px) {
    height: 230px;
    margin-bottom: -40px;
  }
  @media (max-width: 375px) {
    height: 210px;
    margin-bottom: -38px;
  }
}
.images__veg2 {
  width: 100%;
  position: absolute;
  height: 527px;
  object-fit: cover;
}

.forms {
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 675px) {
      flex-direction: column;
    }
  }

  &__input-tel {
    border-radius: 57px;
    border: 2px solid #eceef7;
    padding: 20px 30px;
    font-size: 14px;
    line-height: 140%;
    color: #222222;
    font-weight: 400;
    max-width: 260px;
    width: 100%;
    margin: 0 40px 0 40px;
    @media (max-width: 724px) {
      margin: 0 15px 0 15px;
    }
    @media (max-width: 724px) {
      margin: 0 10px 0 10px;
    }
    @media (max-width: 675px) {
      margin: 15px 0px 15px 0px;
    }
  }
  &__input-tel::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 140%;
    color: #222222;
    font-weight: 400;
  }
  &__input-tel::-webkit-outer-spin-button,
  &__input-tel::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &__input-name {
    border-radius: 57px;
    border: 2px solid #eceef7;
    padding: 20px 30px;
    font-size: 14px;
    line-height: 140%;
    color: #222222;
    font-weight: 400;
    max-width: 260px;
    width: 100%;
  }
  &__input-name::-webkit-input-placeholder {
    font-size: 14px;
    line-height: 140%;
    color: #222222;
    font-weight: 400;
  }

  &__btn {
    background: linear-gradient(180deg, #fe5626 0%, #f23f0e 100%), #59aaf1;
    box-shadow: 0px 4px 8px rgba(205, 169, 41, 0.26);
    border-radius: 59px;
    font-size: 18px;
    line-height: 138%;
    color: #ffffff;
    font-weight: 700;
    padding: 17px 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 260px;
    width: 100%;
    min-height: 60px;
    @media (max-width: 823px) {
      font-size: 15px;
      padding: 17px 25px;
    }
  }
}
.btn {
  &__search-form {
  }
}
._icon-call_back-Stroke {
  margin-left: 30px;
  font-size: 15px;
}

//SECTION_DISHES=========================================
.page {
  &__dishes {
    padding: 140px 0 103px 0;
    background-image: url("/src/assets/img/dishes_background.png");
    background-repeat: no-repeat;
    background-position-y: 130%;
    background-size: contain;
  }
}

.dishes {
  &__container {
  }

  &__header {
    margin-bottom: 49px;
  }

  &__menu {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  &__body {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    row-gap: 40px;
    column-gap: 40px;
    @media (max-width: 1035px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 785px) {
      margin-top: -50px;
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__refresh {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 55px;
  }

  &__refresh-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative;
    color: #ffffff;
    background: linear-gradient(287.74deg, #f58656 8.52%, #fe5626 92.72%),
      linear-gradient(180deg, #fe5626 0%, #f23f0e 100%), #59aaf1;
    box-shadow: 0px 4px 8px rgba(205, 71, 41, 0.26);
    display: flex;
    justify-content: center;
    align-items: center;
    > ._icon-stroke8 {
      font-size: 25px;
    }
  }
}

.header-block {
  &__title {
  }
}
.dishes__menu {
  & .menu {
    &__body {
      margin-top: 0;
    }

    &__list {
      justify-content: center;
      @media (max-width: 471px) {
        display: grid;

        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        column-gap: 10px;
        row-gap: 15px;
      }
    }

    &__item {
      text-align: center;

      @media (max-width: 785px) {
        margin-bottom: 50px !important;
      }
      @media (max-width: 471px) {
        margin: 0 0 50px 0;
      }
      @media (max-width: 400px) {
        margin: 0 0 50px 0;
      }

      &:not(:last-child) {
        @media (max-width: 910px) {
          margin-right: 10px;
        }
        @media (max-width: 585px) {
          margin: 0 10px 50px 0;
        }
        @media (max-width: 471px) {
          margin: 0 0 50px 0;
        }
      }
    }

    &__link {
      display: block;
      font-size: 16px;
      font-weight: 600;
      line-height: 140%;
      color: #151515;
      background: linear-gradient(0deg, #eceef6, #eceef6), #59aaf1;
      border-radius: 45px;
      padding: 17px 46px;
      @media (max-width: 400px) {
        padding: 17px 36px;
      }
      &._active {
        background: #59aaf1;
        color: #ffffff;
      }
    }
  }
}
.triangle {
  width: 48px;
  height: 51px;
  border: 2px solid #eceef7;
  border-bottom-left-radius: 20px;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  transform: rotate(-45deg);
  background: white;
  margin-top: -39px;
}

.item-dishes {
  padding: 36px 10px 36px 25px;
  border: 2px solid #eceef7;
  border-radius: 15px;
  position: relative;
  background: #ffffff;
  height: 100%;
  @media (max-width: 600px) {
    width: 70%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }

  &__hit {
    width: 60px;
    height: 25px;
    background: linear-gradient(116.88deg, #fe3326 -4.28%, #f26e0e 112.69%),
      #59aaf1;
    box-shadow: 0px 4px 8px rgba(205, 71, 41, 0.26);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    left: 20px;
  }

  &__hit-text {
    font-weight: 600;
    font-size: 12px;
    line-height: 141%;
    color: #ffffff;
  }
  &__img {
    margin: 0 auto 30px auto;
    img {
      width: 170px;
      height: 170px;
      object-fit: contain;
    }
  }

  &__title {
    &_text {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    &_size {
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      margin-left: 10px;
    }
  }

  &__subtitle {
    font-size: 12px;
    line-height: 140%;
    font-weight: 400;
    margin: 8px 0 19px 0;
  }

  &__price {
    font-size: 24px;
    font-weight: 300;
    line-height: 140%;
    color: #121146;
    text-align: center;
  }

  &__icon {
    width: 35px;
    height: 35px;
    border: 2px solid #eceef6;
    border-radius: 50%;
    position: relative;
    color: #fe5626;
    z-index: 50;
    position: relative;
    margin-top: -20px;
    outline: none;
    background: transparent;
    transition: 0.2s ease;
  }
  &__icon:hover {
    color: #ffffff;
    background: linear-gradient(287.74deg, #f58656 8.52%, #fe5626 92.72%),
      linear-gradient(180deg, #fe5626 0%, #f23f0e 100%), #59aaf1;
    box-shadow: 0px 4px 8px rgba(205, 71, 41, 0.26);
    border: none;
  }
}
._icon-bag {
  position: absolute;
  top: 46%;
  left: 52%;
  transform: translate(-50%, -50%);
}
.dishes__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dishes {
  &__actions {
  }
}
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 600px) {
    margin-bottom: 30px;
    justify-content: center;
  }
  &__price-tag {
    position: relative;
    z-index: 1;
    width: 60px;
    height: 30px;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    padding: 5px;
    border-radius: 3px;
    > span {
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
    }
  }
  &__price-tag::after {
    content: "";
    position: absolute;
    left: 60px;
    border: 6px solid transparent;
    border-left: 6px solid rgba(0, 0, 0, 0.8);
  }

  &__cart {
    background: #ffffff;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: -4px -6px 22px 10px rgba(206, 206, 206, 0.2);
    box-shadow: 4px 6px -22px -10px rgba(206, 206, 206, 0.2);
    border: 1px solid RGBA(0, 0, 0, 0.07);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  &__amount {
    background: #f58656;
    width: 15px;
    height: 15px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 32px;
    left: 28px;
  }
  &__number {
    color: #ffffff;
    font-weight: 600;
    font-size: 10px;
    margin-right: -1px;
  }
}
._icon-shopping-bag {
  color: #f58656;
  font-size: 25px;
}

//PAGE_SLIDER==========================
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
