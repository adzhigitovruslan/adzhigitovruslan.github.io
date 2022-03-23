<template>
  <div class="wrapper-register">
    <div class="main__subtitle">
      <div class="main__subtitle-text">Fill out the form to sign up!</div>
    </div>
    <form class="main__form" @submit.prevent="submitHandler">
      <div class="main__page">
        <div class="main__input-block">
          <div class="main__login">
            <input
              v-model.trim="email"
              :class="{
                invalid:
                  ($v.email.$dirty && !$v.email.required) ||
                  ($v.email.$dirty && !$v.email.email),
              }"
              type="text"
            />
            <label>Email Address</label>
          </div>
          <div class="main__login">
            <input
              :class="{
                invalid:
                  ($v.password.$dirty && !$v.password.required) ||
                  ($v.password.$dirty && !$v.password.minLength),
              }"
              v-model.trim="password"
              type="password"
            />
            <label>Password</label>
          </div>
        </div>
        <div class="main__error-msg msg">
          <div class="msg__block">
            <div
              v-if="$v.email.$dirty && !$v.email.required"
              class="main__invalid-input"
            >
              Email can't be empty
            </div>
            <div
              v-else-if="$v.email.$dirty && !$v.email.email"
              class="main__invalid-input"
            >
              Enter valid email address
            </div>
          </div>
          <div class="msg__block">
            <div
              v-if="$v.password.$dirty && !$v.password.required"
              class="main__invalid-input"
            >
              Enter password
            </div>
            <div
              v-else-if="$v.password.$dirty && !$v.password.minLength"
              class="main__invalid-input"
            >
              Password must be at least
              {{ $v.password.$params.minLength.min }} characters. <br />
              It's {{ password.length }} now
            </div>
          </div>
        </div>
      </div>
      <div class="main__check">
        <input id="check" type="checkbox" v-model="agree" />
        <label for="check" class="main__check-text"
          >I agree to the terms and conditions</label
        >
      </div>
      <div class="main__buttons">
        <router-link :to="{ name: 'login' }">
          <button class="main__login-btn btn">Back</button>
        </router-link>
        <button type="submit" class="main__signup-btn btn">Sign me up!</button>
      </div>
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  name: "login",
  data: function () {
    return {
      email: "",
      password: "",
      agree: false,
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
    agree: { checked: (v) => v },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
      };
      try {
        await this.$store.dispatch("register", formData);
        this.$router.push({ name: "home" });
        // eslint-disable-next-line no-empty
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.$message("test");

    document.querySelectorAll("button").forEach((item) => {
      item.classList.remove("btn");
    });
    document.querySelectorAll("input").forEach((item) => {
      item.classList.remove("invalid");
    });
  },
};
</script>

<style lang="scss" scoped>
.main {
  &__check-text {
    font-size: 25px;
    margin-left: 20px;
  }
  &__check {
    margin-bottom: calc(20px + (60 - 20) * ((100vw - 320px) / (1200 - 320)));
    display: flex;
    align-items: center;
    > input {
      position: unset;
      opacity: 1;
      pointer-events: all;
      width: 20px;
      height: 20px;
    }
  }
  &__page {
    display: flex;
    margin-bottom: calc(20px + (40 - 20) * ((100vw - 320px) / (1200 - 320)));
    margin-top: calc(40px + (65 - 40) * ((100vw - 320px) / (1200 - 320)));
  }

  &__form {
  }

  &__invalid-input {
    color: rgb(228, 26, 26);
    font-size: 22px;
    white-space: nowrap;
  }

  &__input-block {
    width: 100%;
    max-width: 750px;
    margin-right: 25px;
  }

  &__login {
    & .invalid {
      border-left: 4px solid red;
    }
  }

  &__login {
    position: relative;
    border: 1px solid #c1bbbb !important;
    background: #ffffff;
    height: 74px;
    display: flex;
    align-items: center;
    > input {
      width: 100%;
      max-width: 750px;
      padding: 25px 25px 0 25px;
      height: 74px;
      border: none;
      background: none;
      outline: none;

      font-weight: 500;
      font-size: 18px;
      color: #3751fe;

      margin: unset;
      box-sizing: border-box;

      border-bottom: none !important;
      box-shadow: unset !important;
    }
    > label {
      position: absolute;
      top: 40%;
      color: rgba(0, 0, 0, 0.61) !important;
      transform: translateY(-50%);
      font-size: 18px;
      pointer-events: none;
      padding: 0 25px;
      transition: 0.5s;
    }
  }

  &__login:first-child {
    border-bottom: none;
  }

  &__login {
    > input:focus ~ label {
      top: 20px;
    }

    > input:focus {
      border-left: 4px solid #3751fe;
      border-bottom: 1px solid #c1bbbb !important;
      box-shadow: unset !important;
    }
  }
  &__login-btn {
    border: 1px solid #3751fe;
    color: #3751fe;
    margin-right: 30px;
    font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1200 - 320)));

    height: 52px;
    width: 100%;
    max-width: 129px;

    text-transform: uppercase;
  }

  &__signup-btn {
    border: 1px solid #3751fe;
    color: #3751fe;
    font-size: calc(12px + (18 - 12) * ((100vw - 320px) / (1200 - 320)));
    height: 52px;
    width: 100%;
    max-width: 129px;

    text-transform: uppercase;
  }

  &__buttons {
  }
}
.btn:hover {
  background: #3751fe;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
  color: #ffffff;
  transition: 0.2s all ease-in-out;
}
.msg {
  &__block {
    height: 74px;
    display: flex;
    align-items: center;
  }
}
</style>
