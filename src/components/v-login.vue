/* eslint-disable no-empty */
<template>
  <div class="wrapper-log">
    <div class="main__subtitle">
      <div class="main__subtitle-text">
        Welcome back! Please login to your account.
      </div>
    </div>
    <form @submit.prevent="submitHandler" class="main__form">
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
      <div class="main__buttons">
        <button type="submit" class="main__login-btn btn">Login</button>
        <router-link :to="{ name: 'sign' }">
          <button class="main__signup-btn btn">Sign Up</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import messages from "@/utils/messages.js";

export default {
  name: "login",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
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
        await this.$store.dispatch("login", formData);
        this.$router.push({ name: "home" });
        // eslint-disable-next-line no-empty
      } catch (error) {}
    },
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }

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
  &__page {
    display: flex;
    margin-bottom: calc(30px + (100 - 30) * ((100vw - 320px) / (1200 - 320)));
    margin-top: calc(40px + (65 - 40) * ((100vw - 320px) / (1200 - 320)));
    @media (max-width: 550px) {
      flex-direction: column;
    }
  }

  &__invalid-input {
    color: rgb(228, 26, 26);
    font-size: calc(16px + (22 - 16) * ((100vw - 320px) / (1200 - 320)));
    white-space: nowrap;
  }

  &__input-block {
    width: 100%;
    max-width: 750px;
    margin-right: 25px;
    @media (max-width: 550px) {
      margin-right: unset;
    }
  }

  &__input-block:not(:last-child) {
    @media (max-width: 550px) {
      margin-bottom: 15px;
    }
  }

  &__form {
  }

  &__login {
    position: relative;
    background: #ffffff;
    border: 1px solid #c1bbbb !important;
    height: 74px;
    display: flex;
    align-items: center;
    > input {
      width: 100%;
      max-width: 750px;
      padding: 25px 25px 0 25px;
      height: 74px;
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

  &__login {
    & .invalid {
      border-left: 4px solid red;
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
    @media (max-width: 550px) {
      height: unset;
      line-height: 1.5;
    }
  }
}
</style>
