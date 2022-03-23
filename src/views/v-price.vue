<template>
  <div class="wrapper-price">
    <main class="page">
      <section class="page__component component">
        <div class="page__container _container">
          <div class="component__pricing pricing">
            <div class="pricing__header">Our pricing</div>
            <div class="pricing__checkbox">
              <div class="pricing__choice">Annually</div>
              <label class="pricing__check">
                <input
                  checked
                  class="pricing__check-input"
                  type="checkbox"
                  name="check"
                  @click="isChecked = !isChecked"
                />
                <div class="pricing__toggle"></div>
              </label>
              <div class="pricing__choice">Monthly</div>
            </div>
          </div>
          <div class="component__content content">
            <div class="content__body">
              <div class="content__item item">
                <div class="item__text">Basic</div>
                <div class="item__price-content">
                  <div class="item__icon">$</div>
                  <div id="basic" class="item__price">{{ basicNew }}</div>
                </div>
                <div class="item__condition condition">
                  <div class="condition__item">500 GB Storage</div>
                  <div class="condition__item">2 Users Allowed</div>
                  <div class="condition__item">Send up to 3 GB</div>
                </div>
                <div class="item__button">
                  <button type="button" class="item__button-more">
                    LEARN MORE
                  </button>
                </div>
              </div>
              <div class="content__item item _active">
                <div class="item__text">Professional</div>
                <div class="item__price-content">
                  <div class="item__icon">$</div>
                  <div id="professional" class="item__price">
                    {{ profNew }}
                  </div>
                </div>
                <div class="item__condition condition">
                  <div class="condition__item">1 TB Storage</div>
                  <div class="condition__item">5 Users Allowed</div>
                  <div class="condition__item">Send up to 10 GB</div>
                </div>
                <div class="item__button">
                  <button type="button" class="item__button-more">
                    LEARN MORE
                  </button>
                </div>
              </div>
              <div class="content__item item">
                <div class="item__text">Basic</div>
                <div class="item__price-content">
                  <div class="item__icon">$</div>
                  <div id="basicXL" class="item__price">{{ xlNew }}</div>
                </div>
                <div class="item__condition condition">
                  <div class="condition__item">
                    <p class="condition__item-text">2 TB Storage</p>
                  </div>
                  <div class="condition__item">10 Users Allowed</div>
                  <div class="condition__item">Send up to 20 GB</div>
                </div>
                <div class="item__button">
                  <button type="button" class="item__button-more">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
  data() {
    return {
      percent: 20,
      basicPrice: "30",
      profPrice: "36",
      xlPrice: "45",
      isChecked: false,
    };
  },
  methods: {},
  computed: {
    basicNew() {
      let basicNew = "";
      basicNew = parseFloat(
        this.basicPrice * 12 - (this.basicPrice / 100) * this.percent
      ).toFixed();
      if (!this.isChecked) {
        return this.basicPrice;
      } else {
        return basicNew;
      }
    },
    profNew() {
      let profNew = "";
      profNew = parseFloat(
        this.profPrice * 12 - (this.profPrice / 100) * this.percent
      ).toFixed();
      if (!this.isChecked) {
        return this.profPrice;
      } else {
        return profNew;
      }
    },
    xlNew() {
      let xlNew = "";
      xlNew = parseFloat(
        this.xlPrice * 12 - (this.xlPrice / 100) * this.percent
      ).toFixed();
      if (!this.isChecked) {
        return this.xlPrice;
      } else {
        return xlNew;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 71px 0 103px 0;
  @media (max-width: 550px) {
    padding: 110px 0 103px 0;
  }
}

.component {
  &__pricing {
  }
}
.pricing {
  max-width: 240px;
  width: 100%;
  margin: 0 auto;
  &__header {
    font-size: 32px;
    color: grey;
    text-align: center;
    margin-bottom: 40px;
  }

  &__checkbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__checkbox:hover {
    .pricing__choice {
      opacity: 0.5;
    }
    .pricing__toggle {
      opacity: 0.5;
    }
  }

  &__choice {
    color: rgba(110, 114, 142, 0.5);
    transition: ease-in-out 0.4s;
    font-size: 15px;
  }

  &__check {
  }

  &__toggle {
    position: relative;
    display: block;
    width: 56px;
    height: 32px;
    background: linear-gradient(135deg, #a2a7f0 0%, #696edd 100%);
    cursor: pointer;
    overflow: hidden;
    border-radius: 16px;
    transition: ease-in-out 0.4s;
  }

  &__toggle::before {
    content: "";
    position: absolute;
    width: 24px !important;
    height: 24px !important;
    left: 4px !important;
    bottom: 4px !important;
    background: #ffffff;
    border-radius: 50% !important;
    transition: ease-in-out 0.4s;
    border: unset;
  }

  &__check-input {
    display: none;
    visibility: hidden;
    appearance: none;
  }

  &__check-input:checked ~ &__toggle::before {
    transform: translateX(24px);
  }
}

// CONTENT

.component {
  &__content {
    margin-top: 4.2666666667rem;
  }
}
.content {
  &__body {
    display: grid;
    grid-template-rows: 550px;
    grid-template-columns: repeat(3, minmax(auto, 23.3333333333rem));
    justify-content: center;
    align-items: center;
    @media (max-width: 780px) {
      grid-template-columns: repeat(2, minmax(auto, 23.3333333333rem));
      grid-template-rows: 500px 500px;
      row-gap: 32px;
      column-gap: 15px;
    }
    @media (max-width: 550px) {
      grid-template-columns: repeat(1, minmax(auto, 23.3333333333rem));
      grid-template-rows: 1fr;
      row-gap: 32px;
    }
  }

  &__item {
  }
}
.item:last-child {
  border-radius: 0px 10px 10px 0px;
}
.item:last-child {
  @media (max-width: 780px) {
    border-radius: 10px;
  }
}
.item {
  background: #ffffff;
  width: 100%;
  text-align: center;
  padding: 2.0666666667rem;
  box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
  border-radius: 10px 0px 0px 10px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 780px) {
    height: 100%;
    border-radius: 10px;
  }
  &._active {
    background: linear-gradient(135deg, #a2a7f0 0.05%, #696edd 100.05%);
    box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
    border-radius: 10px;
    color: #ffffff;
    height: 100%;
    .item__price {
      color: #ffffff;
    }
    .item__button {
      background: #ffffff;
    }
    .item__button-more {
      color: #6d72de;
    }
    .condition__item {
      border-bottom: 1px solid rgba(255, 255, 255, 0.25);
      border-top: 1px solid rgba(255, 255, 255, 0.25);
    }
    .condition__item:not(:last-child) {
      border-bottom: none;
    }
    .item__icon {
      font-size: 40px;
      color: #ffffff;
    }
    .item__button:hover {
      border: 1px solid #ffffff;
      background: transparent;
      .item__button-more {
        color: #ffffff;
        transition: 0.4s ease-in-out;
      }
    }
  }
  &__text {
    font-size: 1.2rem;
    margin-bottom: 1.6rem;
  }

  &__price {
    font-size: 4.8rem;
    color: black;
    letter-spacing: -2.16px;
  }

  &__price-content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 197px;
    &._active {
      animation: show 2s 1;
      animation-fill-mode: forwards;
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  &__icon {
    font-size: 40px;
    color: black;
    margin-right: 0.5333333333rem;
  }

  &__condition {
    margin: 2.1333333333rem 0;
  }

  &__button {
    transition: 0.4s ease;
    background: rgba(109, 114, 222, 0.8);
    border-radius: 6px;
    height: 2.9333rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__button:hover {
    border: 1px solid #6d72de;
    background: #ffffff;
    transition: 0.4s ease;
    .item__button-more {
      color: #6d72de;
      transition: 0.4s ease-in-out;
    }
  }

  &__button-more {
    background: none;
    color: #ffffff;
    font-size: 0.8666666667rem;
    width: 100%;
    height: 100%;
    transition: 0.4s ease-in-out;
  }
}
.condition {
  &__item {
    border-bottom: 1px solid rgba(110, 114, 142, 0.25);
    border-top: 1px solid rgba(110, 114, 142, 0.25);
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item-text {
    line-height: 1.8666666667rem;
    height: 1.6rem;
  }

  &__item:not(:last-child) {
    border-bottom: none;
  }
}
</style>
