<template>
  <div class="dishes__actions actions">
    <router-link :to="{ name: 'catalog' }">
      <div class="actions__text">back to catalog</div>
    </router-link>
    <h1 class="header-block__title">Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart</p>
    <div class="dishes__body-cart">
    <vCartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    </div>
    <div class="actions__cart-total">
      <p>Total: {{ cartTotalCost }} UAH</p>
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
    ...mapActions(["DELETE_FROM_CART",'INCREMENT_CART', 'DECREMENT_CART']),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index){
      this.INCREMENT_CART(index)
    },
    decrement(index){
      this.DECREMENT_CART(index)
    }
  },
};
</script>

<style lang="scss" scoped>
.header-block__title {
  font-size: 48px;
  font-weight: 700;
  line-height: 122%;
  margin-bottom: 20px;
}
.router-link-active {
  display: block;
  margin-left: auto;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  color: #000000;
  font-size: 25px;
  margin-bottom: 30px;
}
.actions {
  flex-direction: column;
  &__cart-total {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    color: #000000;
    font-size: 25px;
  }
  &__v-cart {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 600px) {
      margin-bottom: 30px;
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
.dishes {
  &__body-cart{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media(max-width: 766px) {
      justify-content: center;
    }
  }
}
</style>
