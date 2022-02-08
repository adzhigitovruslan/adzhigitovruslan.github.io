<template>
  <div class="dishes__wrapper cart">
    <div class="dishes__item item-dishes cart">
      <div class="item-dishes__img">
        <img :src="require('@/assets/img/' + cart_item_data.image)" alt="img" />
      </div>
      <div class="item-dishes__title_text">
        <div class="item-dishes__title">{{ cart_item_data.name }}</div>
        <div class="item-dishes__title_size">{{ cart_item_data.size }}</div>
      </div>
      <div class="item-dishes__subtitle">
        {{ cart_item_data.discriptions }}
      </div>
      <div class="item-dishes__price">{{ cart_item_data.price }} UAH</div>
    </div>
    <button class="item-dishes__icon _active" @click="deleteFromCart()">
      <i class="fa fa-times"></i>
    </button>
    <div class="triangle"></div>
    <div class="item-dishes__quantity">
      <button class="item-dishes__button" @click="decrementItem">-</button>
      Quantity: {{ cart_item_data.quantity
      }}<button class="item-dishes__button" @click="incrementItem">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>

<style lang="scss" >
@import "~font-awesome/css/font-awesome.min.css";

.dishes {
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__wrapper.cart {
      margin-bottom: 30px;
    @media(min-width: 766px) {
      margin-right: 30px;
    }
  }
}
.item-dishes.cart {
  width: 339px;
  @media(max-width: 420px) {
    width: 280px;
    }
}
.item-dishes {
  padding: 36px 10px 36px 25px;
  border: 2px solid #eceef7;
  border-radius: 15px;
  position: relative;
  background: #ffffff;
  height: 395px;
  width: 100%;
  @media (max-width: 400px) {
    width: 90%;
  }
  &__button {
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    margin: 0 10px 0 10px;
    border: 1px solid black;
    padding: 5px 10px;
    border-radius: 8px;
    background: none;
  }
  &__quantity {
    font-size: 20px;
    color: #000000;
    font-weight: 500;
    margin: 20px 0px 0 0px;
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
