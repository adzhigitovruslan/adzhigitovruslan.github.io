<template>
  <div class="dishes__wrapper cart">
    <div class="dishes__item item-dishes cart">
      <div class="item-dishes__img cart">
        <img :src="require('@/assets/img/' + cart_item_data.image)" alt="img" />
      </div>
      <div class="item-dishes__title_text cart">
        <div class="item-dishes__title cart">{{ cart_item_data.name }}</div>
      </div>

      <div class="item-dishes__quantity cart">
        <button class="item-dishes__button" @click="decrementItem">
          <div class="item-dishes__decrement">-</div>
        </button>
        {{ cart_item_data.quantity }}
        <button class="item-dishes__button" @click="incrementItem">
          <div class="item-dishes__increment">+</div>
        </button>
      </div>
      <div class="item-dishes__price cart">{{ cart_item_data.price }} UAH</div>

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

.dishes {
  &__item.cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__wrapper.cart {
    @media (min-width: 766px) {
      margin-right: 30px;
    }
  }
  &__wrapper.cart:not(:last-child) {
    margin-bottom: 30px;
  }
}
.item-dishes.cart {
  width: 100%;
  height: unset;
  position: relative;
  padding: 10px 15px;
  @media (max-width: 375px) {
    padding: 10px 10px;
  }
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
    border-radius: 50%;
    background: none;

    width: 16px;
    height: 16px;
    position: relative;
    @media (max-width: 414px) {
      width: 12px;
      height: 12px;
      font-size: 10px;
    }
  }
  &__decrement {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    line-height: 1;
  }
  &__increment {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-55%, -50%);
  }
  &__quantity {
    font-size: 13px;
    color: #000000;
    font-weight: 600;
    margin: unset;
    @media (max-width: 414px) {
      font-size: 10px;
    }
  }
  &__quantity.cart {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 0 0 25%;
  }
  &__img.cart {
    margin: unset;
    margin-right: 15px;
    @media (max-width: 375px) {
      margin-right: 10px;
    }
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 50%;
      @media (max-width: 414px) {
        width: 30px;
        height: 30px;
      }
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
      margin-bottom: unset;
      flex: 1;
      justify-content: flex-start;
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
  &__title.cart {
    @media (max-width: 500px) {
      font-size: 13px;
    }
    @media (max-width: 414px) {
      font-size: 10px;
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
    margin-top: unset;
    line-height: 1;
    flex: 0 0 25%;
    @media (max-width: 500px) {
      font-size: 13px;
    }
    @media (max-width: 414px) {
      font-size: 11px;
    }
    @media (max-width: 375px) {
      font-size: 10px;
    }
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
    @media (max-width: 375px) {
      width: 20px;
      height: 20px;
    }
  }
  &__icon:hover {
    color: #ffffff;
    background: linear-gradient(287.74deg, #f58656 8.52%, #fe5626 92.72%),
      linear-gradient(180deg, #fe5626 0%, #f23f0e 100%), #59aaf1;
    box-shadow: 0px 4px 8px rgba(205, 71, 41, 0.26);
    border: none;
  }
}
.fa-times {
  @media (max-width: 375px) {
    font-size: 10px;
  }
}
._icon-bag {
  position: absolute;
  top: 46%;
  left: 52%;
  transform: translate(-50%, -50%);
}
</style>
