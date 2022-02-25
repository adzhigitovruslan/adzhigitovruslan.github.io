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
            <a
              id="pizza"
              href="#pizza"
              class="menu__link"
              @click.prevent="setActive('pizza')"
              @click="activeTab = 'pizza'"
              :class="{ _active: isActive('pizza') }"
              >Pizza</a
            >
          </li>
          <li class="menu__item">
            <a
              href="#sushi"
              class="menu__link"
              @click.prevent="setActive('sushi')"
              @click="activeTab = 'sushi'"
              :class="{ _active: isActive('sushi') }"
              >Sushi</a
            >
          </li>
          <li class="menu__item">
            <a
              href="#salad"
              class="menu__link"
              @click.prevent="setActive('salad')"
              @click="activeTab = 'salad'"
              :class="{ _active: isActive('salad') }"
              >Salad</a
            >
          </li>
          <li class="menu__item">
            <a
              href="#dessert"
              class="menu__link"
              @click.prevent="setActive('dessert')"
              @click="activeTab = 'dessert'"
              :class="{ _active: isActive('dessert') }"
              >Dessert</a
            >
          </li>
          <li class="menu__item">
            <a
              href="#drinks"
              class="menu__link"
              @click.prevent="setActive('drinks')"
              @click="activeTab = 'drinks'"
              :class="{ _active: isActive('drinks') }"
              >Drinks</a
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
        if (this.activeTab === "pizza") {
          return item.type === "pizza";
        } else if (this.activeTab === "sushi") {
          return item.type === "sushi";
        } else if (this.activeTab === "salad") {
          return item.type === "salad";
        } else if (this.activeTab === "dessert") {
          return item.type === "dessert";
        } else if (this.activeTab === "drinks") {
          return item.type === "drinks";
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

<style lang="scss">
.actions {
  &__price-tag {
    white-space: nowrap;
  }
}
.dishes {
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
</style>
