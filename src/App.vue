<template>
  <div class="app" :class="mode">
    <vHeader @changeTheme='changeTheme' />
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
      mode: ''
    }
  },
  methods: {
    changeTheme() {
    const iconSun = document.querySelector('.switch__light-mode');
		const iconNight = document.querySelector('.switch__dark-mode');
		
		setTimeout(e=>{iconSun.classList.toggle("active")},1) ,
	  setTimeout(e=>{iconNight.classList.toggle("active")},1);

    if (iconSun.classList.contains('active')) {
      document.querySelector('.app').classList.add('dark')
     } else {
      document.querySelector('.app').classList.remove('dark')
     }
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;800&display=swap');
</style>
