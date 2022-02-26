<template>
  <section class="page__form form">
    <div class="scene">
      <div data-depth="0.4" v-parallax="0.2">
        <img
          src="@/assets/img/vegitable2.png"
          alt="vegetables"
          class="images__veg2"
        />
      </div>
    </div>
    <div class="form__container _container">
      <div class="form__content content-form">
        <div class="content-form__header header-block">
          <h1 class="header-block__title">
            Fill out the form <br />
            and we will call you
          </h1>
        </div>
        <div class="content-form__forms">
          <form action="#" name="main" class="forms__item">
            <input
              required
              class="forms__input-name"
              autocomplete="off"
              name="nameInput"
              type="text"
              placeholder="Your name"
            />
            <input
              required
              class="forms__input-tel"
              autocomplete="off"
              name="nameInput"
              type="number"
              placeholder="Phone number"
            />
            <button type="submit" class="forms__btn btn__search-form">
              Call back<i class="_icon-call_back-Stroke"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
    <div class="content-form__image">
      <img src="@/assets/img/car.png" alt="car" class="images__car" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.page {
  &__form {
    padding: 82px 0 0 0;
    background: #f0f5fb;
    position: relative;
  }
}
.form {
  &__container {
    max-width: 1196 + px;
    padding: 0 15px;
    margin: 0 auto;
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
</style>
