<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container _container">
        <div class="header__body">
          <div class="header__menu menu">
            <nav class="menu__body">
              <ul class="menu__list">
                <li class="menu__item">
                  <a
                    href="#payment"
                    class="menu__link"
                    @click="openSlide('payment')"
                    >Payment</a
                  >
                </li>
                <li class="menu__item">
                  <a
                    href="#aboutus"
                    class="menu__link"
                    @click="openSlide('about')"
                    >About us</a
                  >
                </li>
                <li class="menu__item">
                  <a
                    href="#contacts"
                    class="menu__link"
                    @click="openSlide('contacts')"
                    >Contacts</a
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div class="header__logo">
            <img src="@/assets/img/logo.png" alt="Logo" />
          </div>
          <div class="header__contact contact-header">
            <div class="contact-header__schedule">Daily 11am - 9pm</div>
            <div class="contact-header__number number-contact">
              <a href="tel:0800330898" class="number-contact__icon"
                ><i class="_icon-phone"></i
              ></a>
              <a href="tel:0800330898" class="number-contact__phone"
                >0 800 33 08 98</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="scss">
.header {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  &__wrapper {
  }

  &__container {
  }

  &__body {
    position: relative;
    display: flex !important;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
    z-index: 50;
    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
  .scene {
    pointer-events: all !important;
  }
  &__menu {
    & .menu__link {
      cursor: pointer;
    }
    & .menu__link::after {
      content: "";
      display: block;
      width: 0%;
      border-bottom: 1px solid #000;
      transition: 0.3s ease;
    }
    & .menu__link:hover::after {
      content: "";
      display: block;
      width: 100%;
      border-bottom: 1px solid #000;
    }
  }

  &__logo {
    margin: -25px 15px 0 15px;
    img {
      @media (max-width: 700px) {
        order: 1;
      }
    }
  }

  &__contact {
  }
}
.menu {
  flex: 33.333%;
  @media (max-width: 700px) {
    order: 3;
  }
  &__body {
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
  }

  &__item:not(:last-child) {
    margin-right: 40px;
    @media (max-width: 843px) {
      margin: 0 20px 5px 0;
    }
  }

  &__link {
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    line-height: 121%;
  }
}
.contact-header {
  display: flex !important;
  flex-wrap: wrap;
  flex: 33.333%;
  justify-content: flex-end;
  @media (max-width: 700px) {
    order: 2;
    flex-direction: row;
    margin: 15px 0;
  }
  @media (max-width: 920px) {
    align-content: flex-end;
  }
  &__schedule {
    margin-right: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 121%;
    align-items: center;
    display: flex;
    @media (max-width: 920px) {
      margin: 0 20px 5px 0;
    }
    @media (max-width: 742px) {
      margin: 0 10px 5px 0;
    }
    @media (max-width: 730px) {
      margin: 0 0px 5px 0;
    }
    @media (max-width: 447px) {
      font-size: 14px;
    }
  }
  &__schedule::before {
    content: "";
    display: flex;
    align-items: center;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin: 3px 9px 0 0;
    background: #46cb72;
  }

  &__number {
    @media (max-width: 700px) {
      margin-left: 15px;
    }
  }
}
.number-contact {
  display: flex;
  &__icon {
    margin-right: 16px;
    background: linear-gradient(287.74deg, #f58656 8.52%, #fe5626 92.72%);
    box-shadow: 0px 4px 8px rgba(205, 169, 41, 0.26);
    border-radius: 59px;
    width: 33px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 920px) {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
    @media (max-width: 591px) {
      width: 25px;
      height: 25px;
      margin-right: 5px;
    }
  }

  &__phone {
    color: #000000;
    font-size: 18px;
    font-weight: 700;
    line-height: 122%;
    align-items: center;
    display: flex;
    @media (max-width: 920px) {
      font-size: 15px;
    }
    @media (max-width: 447px) {
      font-size: 14px;
    }
  }
  ._icon-phone {
    align-items: center;
    display: flex;
    justify-content: center;
    color: #ffffff;
    @media (max-width: 920px) {
      font-size: 13px;
    }
    @media (max-width: 591px) {
      font-size: 15px;
    }
    @media (max-width: 447px) {
      font-size: 12px;
    }
  }
}
</style>
