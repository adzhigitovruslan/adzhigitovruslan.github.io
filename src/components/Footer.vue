<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__body">
        <div class="footer__rights rights-footer">
          <div class="rights-footer__text">© Classic Family Restaurant</div>
        </div>
        <div class="footer__logo">
          <img src="@/assets/img/logo.png" alt="Logo" />
        </div>
        <div class="footer__info info-footer">
          <div class="info-footer__text">Made with delight by harmuder</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &__container {
    max-width: 1196 + px;
    padding: 0 15px;
    margin: 0 auto;
  }

  &__body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 33px 0;
    @media (max-width: 375px) {
      flex-direction: column;
      padding: 10px 0;
    }
  }

  &__rights {
    padding-top: 22px;
    @media (max-width: 405px) {
      padding-top: 0;
    }
    @media (max-width: 375px) {
      order: 2;
    }
  }

  &__logo {
    margin: 0 10px 0 10px;
    @media (max-width: 375px) {
      margin: 8px 0px 8px 0px;
    }
  }

  &__info {
    padding-top: 22px;
    text-align: right;
    @media (max-width: 405px) {
      padding-top: 0;
    }
    @media (max-width: 375px) {
      order: 3;
      margin: 15px 0 15px 15px;
    }
  }
}

.rights-footer {
  &__text {
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    line-height: 121%;
    @media (max-width: 375px) {
      font-size: 16px;
    }
  }
  .info-footer {
    &__text {
      color: #000000;
      font-size: 16px;
      font-weight: 400;
      line-height: 121%;
      @media (max-width: 375px) {
        font-size: 14px;
      }
    }
  }
}
</style>
