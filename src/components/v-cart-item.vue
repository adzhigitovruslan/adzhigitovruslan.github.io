<template>
  <div class="dishes__wrapper cart">
    <div class="dishes__item item-dishes cart">
      <div class="cart__left-block">
        <div class="item-dishes__img cart">
          <img
            :src="require('@/assets/img/' + cart_item_data.image)"
            alt="img"
          />
        </div>
        <div class="item-dishes__title_text cart">
          <div class="item-dishes__title">{{ cart_item_data.name }}</div>
        </div>
      </div>
      <div class="cart__right-block">
        <div class="item-dishes__quantity cart">
          <button class="item-dishes__button" @click="decrementItem">-</button>
          {{ cart_item_data.quantity }}
          <button class="item-dishes__button" @click="incrementItem">+</button>
        </div>
        <div class="item-dishes__price cart">
          {{ cart_item_data.price }} UAH
        </div>
      </div>
      <button class="item-dishes__icon cart _active" @click="deleteFromCart()">
        <i class="fa fa-times"></i>
      </button>
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

<style lang="scss">
@import "~font-awesome/css/font-awesome.min.css";

.cart {
  &__right-block {
    display: flex;
    flex: 0 0 50%;
    padding-left: 10px;
    align-items: center;
  }
  &__left-block {
    display: flex;
    flex: 0 0 50%;
    padding-right: 10px;
    align-items: center;
  }
}
.dishes {
  &__item.cart {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: unset;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__wrapper.cart {
    margin-bottom: 30px;
    @media (min-width: 766px) {
      margin-right: 30px;
    }
  }
}
.item-dishes.cart {
  width: 100%;
  height: unset;
  position: relative;
  padding: 10px 15px;
}
.item-dishes {
  border: 2px solid #eceef7;
  border-radius: 15px;
  position: relative;
  background: #ffffff;
  width: 100%;
  @media (max-width: 400px) {
    width: 90%;
  }
  &__button {
    font-size: 12px;
    font-weight: 600;
    color: #000000;
    margin: 0 10px 0 10px;
    border: 1px solid black;
    padding: 0px 4px;
    border-radius: 50%;
    background: none;
  }
  &__quantity {
    font-size: 13px;
    color: #000000;
    font-weight: 600;
    margin: unset;
  }
  &__quantity.cart {
    flex: 0 0 50%;
  }
  &__img.cart {
    margin: unset;
    flex: 0 0 50%;
    img {
      width: 40px;
      height: 40px;
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
    &_text.cart {
      flex: 0 0 50%;
      margin-bottom: unset;
    }
    font-size: 15px;
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
    font-size: 15px;
    font-weight: 600;
    line-height: 140%;
    color: #121146;
    text-align: center;
    margin-top: 5px;
  }
  &__price.cart {
    flex: 0 0 50%;
  }
  &__icon.cart {
    width: 23px;
    height: 23px;
    border: 2px solid #eceef6;
    border-radius: 50%;
    position: relative;
    color: #fe5626;
    z-index: 50;
    position: absolute;
    top: 19px;
    right: -1px;

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
</style>
