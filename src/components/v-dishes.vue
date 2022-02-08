<template>
  <section class="page__dishes dishes">
    <div class="dishes__container _container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <div class="dishes__refresh">
        <button class="dishes__refresh-icon">
          <i class="_icon-stroke8"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "v-dishes",
  components: {},
  computed: {},
  props: [],
  data() {
    return {};
  },

  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>

<style lang="scss">
.page {
  &__dishes {
    padding: 140px 0 103px 0;
    background-image: url("~@/assets/img/dishes_background.png");
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
    & ._icon-stroke8 {
      font-size: 25px;
    }
  }

  &__refresh-icon:hover {
    & ._icon-stroke8 {
      animation: move_slide 1s ease forwards;
    }
  }
}

@keyframes move_slide {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
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

.item-dishes {
  padding: 36px 10px 36px 25px;
  border: 2px solid #eceef7;
  border-radius: 15px;
  position: relative;
  background: #ffffff;
  height: 395px;
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
</style>
