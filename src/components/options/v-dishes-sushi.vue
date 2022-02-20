<template>
  <div class="dishes__wrapper">
    <div class="dishes__item item-dishes">
      <div class="item-dishes__img">
        <img :src="require('@/assets/img/' + product_data.image)" alt="img" />
      </div>
      <div class="item-dishes__title_text">
        <div class="item-dishes__title">{{ product_data.name }}</div>
        <div class="item-dishes__title_size">{{ product_data.size }}</div>
      </div>
      <div class="item-dishes__subtitle">
        {{ product_data.discriptions }}
      </div>
      <div class="item-dishes__price">{{ product_data.price }} UAH</div>
    </div>
    <button class="item-dishes__icon _active" @click="addToCart()">
      <i class="_icon-bag"></i>
    </button>
    <div class="triangle"></div>
  </div>
</template>

<script>
export default {
  name: "v-dishes-sushi",
  data: function () {
    return {};
  },
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.dishes {
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  &__img {
    margin: 0 auto 30px auto;
    img {
      width: 170px;
      height: 170px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  &__title {
    &_text {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
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
    flex: 1;
  }
  &__price {
    font-size: 24px;
    font-weight: 300;
    line-height: 140%;
    color: #121146;
    text-align: center;
    margin-top: 5px;
  }
  &__icon {
    width: 33px;
    height: 33px;
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
.triangle {
  width: 48px;
  height: 48px;
  border: 2px solid #eceef7;
  border-bottom-left-radius: 20px;
  border-top: 2px solid transparent;
  border-right: 2px solid transparent;
  transform: rotate(-45deg);
  background: white;
  margin-top: -39px;
}
</style>
