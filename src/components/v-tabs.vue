<template>
  <div class="wrapper-tabs" :class="{ mobile: showMobileMenu }">
    <div class="main__container _container">
      <div v-if="showMobileMenu" class="main__mobile">
        <transition name="fade" mode="out-in">
          <i
            class="fa fa-bars"
            aria-hidden="true"
            v-if="!isOpen"
            @click="isOpen = !isOpen"
            key="menu"
          ></i>
          <i
            class="fa fa-times"
            aria-hidden="true"
            v-else
            @click="isOpen = !isOpen"
            key="clear"
          ></i>
        </transition>
        <transition name="fade">
          <nav v-if="isOpen" class="main__navbar mobile">
            <ul class="main__navbar-list mobile">
              <router-link
                v-for="link in links"
                :key="link.url"
                active-class="active"
                :to="link.url"
              >
                <li class="main__navbar-item">
                  <a
                    @click="isOpen = !isOpen"
                    role="link"
                    href="#"
                    class="main__navbar-link mobile"
                    >{{ link.title }}</a
                  >
                </li>
              </router-link>
            </ul>
            <button @click.prevent="logout" class="main__logout-btn">
              <i class="fa fa-sign-out mobile" aria-hidden="true"></i>
            </button>
          </nav>
        </transition>
      </div>
      <nav v-else class="main__navbar">
        <ul class="main__navbar-list">
          <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            class="main__navbar-item"
          >
            <a href="#" class="main__navbar-link">{{ link.title }}</a>
          </router-link>
        </ul>
        <button @click.prevent="logout" class="main__logout-btn">
          <i class="fa fa-sign-out" aria-hidden="true"></i>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      links: [
        { title: "Home", url: "/home" },
        { title: "About us", url: "/about" },
        { title: "Blog", url: "/blog" },
        { title: "Pricing", url: "/price" },
      ],
      isOpen: false,
      showMobileMenu: false,
    };
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/?message=logout");
    },
    onResize() {
      this.showMobileMenu =
        document.documentElement.clientWidth > 550 ? false : true;
    },
  },
  watch: {
    isOpen: function () {
      document.body.style.overflow = this.isOpen ? "hidden" : "";
    },
  },
  created() {
    if (process.browser) {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss" scoped>
.wrapper-tabs {
  &.mobile {
    // padding: 30px 0;
    position: relative;
    z-index: 5;
  }
}
.main {
  &__container {
  }

  &__logout-btn {
    transition: 0.2s ease-in-out;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 10px;
    height: unset;
    position: relative;
  }

  &__logout-btn:hover {
    border: 1px solid rgba(0, 0, 0, 0.6);
  }

  &__mobile {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }

  &__navbar {
    display: flex;
    margin-bottom: 70px;
    background: transparent;
    box-shadow: unset;
  }

  &__navbar-list {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  &__navbar-link {
    display: block;
    background-color: unset;
    font-size: 24px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  &__navbar.mobile {
    flex-direction: column;
    margin: 0;
    background: #eee;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 0 15px;
  }
  &__navbar-list.mobile {
    flex-direction: column;
    align-items: flex-start;
    margin: unset;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  &__navbar-item.mobile {
    margin-bottom: 10px;
  }

  &__navbar-link:hover {
    box-shadow: inset 0 -3px 0 0 #3751fe;
  }

  &__navbar-link.mobile {
    font-size: 30px;
    line-height: 2;
  }

  &__navbar-item {
    background-color: unset;
    &.active {
      box-shadow: inset 0 -3px 0 0 #3751fe;
    }
  }

  &__navbar-item:not(:last-child) {
    margin-right: 40px;
  }
}
.fa-sign-out {
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.6);
}

.fa-sign-out:hover {
  // transform: scale(1.2);
}

.fa-sign-out.mobile {
  justify-content: flex-start;
  z-index: 5;
  font-size: 50px;
}

.fa-times {
  font-size: 35px;
  color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  position: fixed;
  top: 40px;
  right: 15px;
}

.fa-bars {
  font-size: 35px;
  color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  position: absolute;
  top: 40px;
  right: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
