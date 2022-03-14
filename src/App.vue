<template>
  <div
  class="app"
  :class="{'dark': nightMode}"
  >
    <vHeader 
    @changeTheme='changeTheme'
    :nightMode="nightMode"
    />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import vHeader from './components/v-header.vue'

export default {
  name: 'App',
  components: {
    vHeader,
  },
  data() {
    return {
      nightMode: false
    }
  },
  watch: {
    nightMode: function() {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode))
    }
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"))
  },
  methods: {
    changeTheme() {
      this.nightMode = !this.nightMode
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;800&display=swap');

.app {
  height: 100%;
  width: 100%;
  background: #F2F2F2;
  &.dark {
    background: #202C36;
  }
}


</style>
