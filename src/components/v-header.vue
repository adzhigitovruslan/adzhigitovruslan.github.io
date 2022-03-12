<template>
<div class="header__wrapper">
	<div class="header__container _container">
		<div class="header__body">
			<div class="header__main-text">Where in the world?</div>
			<div class="header__main-switch switch">
				<button 
				class="switch__icon"
				>
				<i 
				v-if="nightMode"
				@click="changeTheme()"
				class="_icon-fill-moon"
				>
				</i>
				<i 
				v-else
				@click="changeTheme()"
				class="_icon-empty-moon"
				>
				</i>
				</button>
				<div class="switch__mode">Dark Mode</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'v-header',
  data() {
	return {}
  },
  props: ["nightMode"],
  methods: {
	changeTheme() {
		this.$emit('changeTheme')
	}
  },
}
</script>

<style lang="scss" scoped>
.header {

		&__wrapper {
			background: #FFFFFF;
			box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
		}

		&__container {}

		&__body {
			height: 80px;

			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__main-text {
			font-weight: 800;
			font-size: calc(14px + (24 - 14) * ((100vw - 320px) / (1440 - 320)));
		}

		&__main-switch {}
}

.switch {
		display: flex;
		align-items: center;
		&__icon {
			margin-right: 12px;
		}

		&__mode {
			font-weight: 600;
			font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1440 - 320)));
		}
		&__light-mode {
			transition: all 0.4s ease;
			display: none;
			&.active {
				transform: translateY(2rem) rotateZ(180deg);
				animation: show 2s 1;
				animation-fill-mode: forwards;
				display: block;
			}
		}
		&__dark-mode {
			transition: all 0.4s ease;
			display: none;
			&.active {
				transform: translateY(2rem) rotateZ(180deg);
				animation: show 2s 1;
				animation-fill-mode: forwards;
				display: block;
			}
		}
}
@keyframes show{
		0%{
		transform: rotate(0deg);
		opacity: 0;
		}
		100% {
		transform: rotate(-360deg);
		opacity: 1;
		}
	}

._icon-empty-moon {
	font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1440 - 320)));
}
._icon-fill-moon {
	font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1440 - 320)));
}

.dark {

.header {
	&__wrapper {
		background: #2B3844;

	}
	&__main-text {
		color: #FFFFFF;
	}
}
.switch {
	&__mode {
		color: #FFFFFF;
	}
}
}
</style>
