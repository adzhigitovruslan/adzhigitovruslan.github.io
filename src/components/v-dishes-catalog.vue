<template>
  <div>
    <div class="dishes__actions actions">
      <div class="actions__price-tag" @click="showPopUp">
        <span>= {{ cartTotalCost }} ₴</span>
      </div>
      <div class="actions__cart" @click="showPopUp">
        <i class="_icon-shopping-bag"></i>
        <div class="actions__amount">
          <span class="actions__number">{{ this.CART.length }}</span>
        </div>
      </div>
    </div>
    <div class="dishes__header header-block">
      <h1 class="header-block__title">Popular dishes</h1>
    </div>
    <div class="dishes__menu menu">
      <nav class="menu__body">
        <ul class="menu__list">
          <li class="menu__item">
            <span
              id="pizza"
              href="#pizza"
              class="menu__link"
              @click="setActive('pizza'), (activeTab = 'pizza')"
              :class="{ _active: isActive('pizza') }"
              >Pizza</span
            >
          </li>
          <li class="menu__item">
            <span
              href="#sushi"
              class="menu__link"
              @click="setActive('sushi'), (activeTab = 'sushi')"
              :class="{ _active: isActive('sushi') }"
              >Sushi</span
            >
          </li>
          <li class="menu__item">
            <span
              href="#salad"
              class="menu__link"
              @click="setActive('salad'), (activeTab = 'salad')"
              :class="{ _active: isActive('salad') }"
              >Salad</span
            >
          </li>
          <li class="menu__item">
            <span
              href="#dessert"
              class="menu__link"
              @click="setActive('dessert'), (activeTab = 'dessert')"
              :class="{ _active: isActive('dessert') }"
              >Dessert</span
            >
          </li>
          <li class="menu__item">
            <span
              href="#drinks"
              class="menu__link"
              @click="setActive('drinks'), (activeTab = 'drinks')"
              :class="{ _active: isActive('drinks') }"
              >Drinks</span
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="dishes__body" id="products">
      <vDishesItem
        v-for="product in filteredProducts"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vDishesItem from "@/components/v-dishes-item.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-dishes-catalog",
  props: ["options", "result"],
  data() {
    return {
      activeItem: "pizza",
      activeTab: "pizza",
      dishes__body: "dishes__body",
    };
  },
  components: {
    vDishesItem,
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    cartTotalCost() {
      let result = [];

      if (this.CART.length) {
        for (let item of this.CART) {
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
    filteredProducts() {
      return this.PRODUCTS.filter((item) => {
        switch (this.activeTab) {
          case "pizza":
            return item.type === "pizza";
            break;
          case "sushi":
            return item.type === "sushi";
            break;
          case "salad":
            return item.type === "salad";
            break;
          case "dessert":
            return item.type === "dessert";
            break;
          case "drinks":
            return item.type === "drinks";
            break;
        }
      });
    },
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
    showPopUp() {
      this.$emit("showPopUp");
    },
  },
  async mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("data arrived");
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 600px) {
    margin-bottom: 30px;
    justify-content: center;
  }
  &__price-tag {
    white-space: nowrap;
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
  &__menu {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  &__header {
    margin-bottom: 49px;
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

  &__body.show {
    display: grid;
  }
  &__body.hide {
    display: none;
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
.dishes__menu {
  & .menu {
    &__body {
      margin-top: 0;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
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
      cursor: pointer;
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
