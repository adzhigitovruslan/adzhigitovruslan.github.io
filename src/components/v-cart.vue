<template>
  <div class="dishes__popup-wrapper" ref="popup_wrapper">
    <div class="dishes__popup">
      <div class="dishes__actions actions cart">
        <div class="actions__text" @click="closePopupInfo">close</div>
        <h1 class="header-block__title">Cart</h1>
        <p v-if="!cart_data.length">There are no products in cart</p>
        <div class="dishes__body-cart">
          <slot>
            <vCartItem
              v-for="(item, index) in cart_data"
              :key="item.article"
              :cart_item_data="item"
              @deleteFromCart="deleteFromCart(index)"
              @increment="increment(index)"
              @decrement="decrement(index)"
            />
          </slot>
        </div>
        <div class="actions__cart-total">
          <p>Total: {{ cartTotalCost }} UAH</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vCartItem from "@/components/v-cart-item";
import { mapActions } from "vuex";

export default {
  name: "v-cart",
  data() {
    return {};
  },
  components: {
    vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    cartTotalCost() {
      let result = [];

      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART", "INCREMENT_CART", "DECREMENT_CART"]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART(index);
    },
    decrement(index) {
      this.DECREMENT_CART(index);
    },
    closePopupInfo() {
      this.$emit("closePopupInfo");
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener("click", function (item) {
      if (item.target === vm.$refs["popup_wrapper"]) {
        vm.closePopupInfo();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.header-block__title {
  font-size: 25px;
  font-weight: 700;
  line-height: 122%;
  margin-bottom: 25px;
}
.actions {
  flex-direction: column;
  &__cart-total {
    display: flex;
    justify-content: center;
    margin-top: 25px;
    color: #000000;
    font-size: 20px;
  }
  &__v-cart {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 600px) {
      justify-content: center;
    }
  }
  &__cart-items {
    display: flex;
    justify-content: center;
    align-items: center;
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
    white-space: nowrap;
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
  &__text {
    cursor: pointer;
    margin-left: auto;
    color: #be1b1b;
    border: 1px solid #be1b1b;
    border-radius: 15px;
    padding: 2px 15px;
    @media (max-width: 500px) {
      font-size: 12px;
      padding: 2px 10px;
    }
    @media (max-width: 375px) {
      font-size: 10px;
      padding: 2px 5px;
    }
  }
  &__text:hover {
    box-shadow: 0 0 5px #be1b1b;
  }
}
.actions.cart {
  @media (max-width: 600px) {
    margin-bottom: unset;
  }
}
.dishes {
  &__body-cart {
    width: 100%;
  }
  &__popup-wrapper {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(64, 64, 64, 0.4);
    z-index: 51;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 40px 15px;
  }
  &__popup {
    z-index: 1150;
    padding: 16px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 0 17px 0 #e7e7e7;
    background: #ffffff;
    border-radius: 15px;
    margin: 0 auto;
  }
}
</style>
